import { SagaIterator } from '@redux-saga/types';
import { takeLatest } from 'redux-saga/effects';

import { MEDICATION } from '@App/domains/medication/medication.actions.js';

function* handleMedicationRequested(): SagaIterator {
  return;
}

export function* watchMedicationRequested(): SagaIterator {
  yield takeLatest(MEDICATION.REQUESTED, handleMedicationRequested);
}