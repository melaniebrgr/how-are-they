import { call, cancelled, select, put } from 'redux-saga/effects';

import { createAsyncActionTypes } from '@App/store/actions/actions.utils.js';

export const createService = (loader, transform = x => x, validator = x => true) => 
  (...args) => 
    loader(...args)
      .catch(() => {
        Promise.reject('ERROR: NETWORK')
      })
      .then((data) => 
        validator(data)
          ? Promise.resolve(transform(data))
          : Promise.reject('ERROR: INVALID DATA')
      );

export const createAsyncSequence = (service) => (function*(request, ...args) {
  const { pending, success, error, cancel } = createAsyncActionTypes(request.type);
  yield put({ type: pending });
  try {
    const payload = yield call(service, ...args);
    return yield put({ type: success, request, payload });
  } catch (error) {
    return yield put({ type: error, request, error });
  } finally {
    if (yield cancelled()) {
      return yield put({ type: cancel, request });
    }
  }
});
