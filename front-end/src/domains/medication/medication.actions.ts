import { createAction, Action } from 'redux-actions';
import { createAsyncActionTypes } from '@App/store/actions/actions.utils';

export const MEDICATION = {
  REQUESTED: 'medication/requested'
};

export type MedicationRequestedAction = Action<undefined>;
export const medicationRequested = ()  => createAction(MEDICATION.REQUESTED);
export const medicationStatus = createAsyncActionTypes(MEDICATION.REQUESTED);