import { call, cancelled, select, put } from 'redux-saga/effects';

import { REQUEST } from '@App/store/sagas/sagas.constants';

export const createService = (loader, transform, validator = x => x) => 
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

export const createAsyncSequence = (action, service) => (function*(...args) {
  yield put({ type: REQUEST.START, action });
  try {
    const payload = yield call(service, ...args);
    return yield put({ type: REQUEST.SUCCESS, action, payload });
  } catch (error) {
    return yield put({ type: REQUEST.ERROR, action, error });
  } finally {
    if (yield cancelled()) {
      return yield put({ type: REQUEST.CANCEL, action });
    }
  }
});
