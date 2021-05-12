import { call, cancelled, select, put } from 'redux-saga/effects';

import { REQUEST } from '@App/store/actions/actions.constants';

function* createAsyncSequence(action, service, ...args) {
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
}
