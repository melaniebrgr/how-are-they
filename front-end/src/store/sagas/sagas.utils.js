import { call, cancelled, select, put } from 'redux-saga/effects';

import { REQUEST } from '@App/store/sagas/sagas.constants';

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
  yield put({ type: REQUEST.START, request });
  try {
    const payload = yield call(service, ...args);
    return yield put({ type: REQUEST.SUCCESS, request, payload });
  } catch (error) {
    return yield put({ type: REQUEST.ERROR, request, error });
  } finally {
    if (yield cancelled()) {
      return yield put({ type: REQUEST.CANCEL, request });
    }
  }
});
