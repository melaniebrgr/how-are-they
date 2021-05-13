import { all, fork } from 'redux-saga/effects';

import { watchMedicationRequested } from '@App/domains/medication/medication.sagas';

function* initSaga() {
  yield all([
    fork(watchMedicationRequested),
  ]);
}

export default initSaga;