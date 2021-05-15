import { createService, createAsyncSequence } from '@App/store/sagas/sagas.utils';
import { RegularMedicationTakenAPI, Medication } from '@App/domains/medication/medication.types';

// To enable mock data:
// import mockUser from '@App/domains/medication/medication.mock.json';
// const getMedicationMock = () => Promise.resolve(mockUser);

const getMedication = () => fetch('http://localhost:8000/medication') // disable CORS in your browser
  .then(data => data.json())
  .then(data => data.data);

const transformMedication = (events: RegularMedicationTakenAPI[]): Medication[] =>
  events.map((data) => ({
    id: data.id,
    type: 'taken',
    timestamp: data.timestamp,
    caregiverId: data.caregiver_id,
    text: 'medication taken'
  }));

const medicationService = createService<RegularMedicationTakenAPI[], Medication[]>(getMedication, transformMedication);

export const medicationLoader = createAsyncSequence(medicationService);