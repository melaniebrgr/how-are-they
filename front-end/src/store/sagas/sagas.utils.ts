import { call, cancelled, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { createAsyncActionTypes } from '@App/store/actions/actions.utils';

export const createService = <Result, Data>(loader: (args?: any[]) => Promise<Result>, transform = (x: Result | Data): Result | Data => x, validator = (x: Result) => true) => 
    (...args: any[]) => 
      loader(...args)
        .catch(() => {
          Promise.reject('ERROR: NETWORK');
        })
        .then((result: Result) => 
          validator(result)
            ? Promise.resolve(transform(result))
            : Promise.reject('ERROR: INVALID DATA')
        );

export const createAsyncSequence = (service: (args?: any[]) => Promise<any>) =>
  (function*(action: any, ...args: any[]): SagaIterator {
    const { pending, success, error, cancel } = createAsyncActionTypes(action.type);
    yield put({ type: pending });
    try {
      const payload = yield call(service, ...args);
      return yield put({ type: success, request: action, payload });
    } catch (err) {
      return yield put({ type: error, request: action, error });
    } finally {
      if (yield cancelled()) {
        return yield put({ type: cancel, request: action });
      }
    }
  });
