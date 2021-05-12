import { createAction } from 'redux-actions';

import { MEDICATION } from '@App/store/actions/actions.constants';

export const medicationRequested = () => createAction(MEDICATION.REQUESTED);