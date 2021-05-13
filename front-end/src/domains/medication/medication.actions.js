import { createAction } from 'redux-actions';

export const MEDICATION = {
  REQUESTED: 'medication/requested'
};

export const medicationRequested = () => createAction(MEDICATION.REQUESTED);

