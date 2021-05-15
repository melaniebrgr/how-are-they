import { createService, createAsyncSequence } from '@App/store/sagas/sagas.utils';
import { RegularMedicationTakenAPI, Medication } from '@App/domains/medication/medication.types';

// To test with mock data:
// import mockUser from '@App/domains/medication/medication.mock.json';
// const getMedicationMock = () => Promise.resolve(mockUser);

// To test with real users:
const userIds = [
  'df50cac5-293c-490d-a06c-ee26796f850d',
  'e3e2bff8-d318-4760-beea-841a75f00227',
  'ad3512a6-91b1-4d7d-a005-6f8764dd0111'
];

const getMedication = () => fetch(`http://localhost:8000/medication/${userIds[1]}`) // disable CORS in your browser for development
  .then(data => data.json());

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