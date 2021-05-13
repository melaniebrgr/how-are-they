import { createService, createAsyncSequence } from '@App/store/sagas/sagas.utils.js';

const getMedication = () => Promise.resolve('medication test');
const medicationService = createService(getMedication);
export const medicationLoader = createAsyncSequence(medicationService);