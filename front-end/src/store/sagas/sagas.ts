import { SagaIterator } from '@redux-saga/types';
import { all, fork, takeEvery } from 'redux-saga/effects';

import { MEDICATION } from '@App/store/actions/actions.constants';

function* handleMedicationRequested(): SagaIterator {
  return;
}

function* watchMedicationRequested(): SagaIterator {
  yield takeEvery(MEDICATION.REQUESTED, handleMedicationRequested);
}

function* initSaga() {
  yield all([
    fork(watchMedicationRequested),
  ]);
}

export default initSaga;