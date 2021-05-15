import { SagaIterator } from '@redux-saga/types';
import { call, takeLatest } from 'redux-saga/effects';
import { MEDICATION, MedicationRequestedAction } from '@App/domains/medication/medication.actions';
import { medicationLoader } from '@App/domains/medication/medication.services';

function* handleMedicationRequested(action: MedicationRequestedAction): SagaIterator {
  yield call(medicationLoader, action);
}

export function* watchMedicationRequested(): SagaIterator {
  yield takeLatest(MEDICATION.REQUESTED, handleMedicationRequested);
}