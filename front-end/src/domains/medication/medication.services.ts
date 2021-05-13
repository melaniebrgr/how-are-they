import mockUser from '@App/domains/medication/medication.mock.json';
import { createService, createAsyncSequence } from '@App/store/sagas/sagas.utils.js';
import { RegularMedicationTakenAPI, Medication } from '@App/domains/medication/medication.types';

const getMedication = () => Promise.resolve(mockUser);

const transformMedication = (observations: RegularMedicationTakenAPI[]): Medication[] =>
  observations.map((data: RegularMedicationTakenAPI) => ({
    id: data.id,
    type: 'taken',
    timestamp: data.timestamp,
    caregiverId: data.caregiver_id,
    note: ''
  }));

const medicationService = createService(getMedication, transformMedication);

export const medicationLoader = createAsyncSequence(medicationService);