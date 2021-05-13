import { createAction } from 'redux-actions';

import { createAsyncActionTypes } from '@App/store/actions/actions.utils.js';

export const MEDICATION = {
  REQUESTED: 'medication/requested'
};

export const medicationRequested = () => createAction(MEDICATION.REQUESTED);
export const medicationStatus = createAsyncActionTypes(MEDICATION.REQUESTED);