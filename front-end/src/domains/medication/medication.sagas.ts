import { SagaIterator } from '@redux-saga/types';
import { call, takeLatest } from 'redux-saga/effects';

import { MEDICATION } from '@App/domains/medication/medication.actions.js';
import { medicationLoader } from '@App/domains/medication/medication.services';

function* handleMedicationRequested(action: {}): SagaIterator {
  yield call(medicationLoader, action);
}

export function* watchMedicationRequested(): SagaIterator {
  yield takeLatest(MEDICATION.REQUESTED, handleMedicationRequested);
}