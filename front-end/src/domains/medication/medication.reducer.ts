import { medicationStatus } from '@App/domains/medication/medication.actions.js';

const INITIAL_STATE = {
  requestStatus: '',
  data: []
};

const medicationReducer = (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case medicationStatus.pending:
      return {
        ...state,
        requestStatus: 'pending'
      };
  
    case medicationStatus.success:
      return {
        ...state,
        requestStatus: 'fulfilled',
        data: payload
      };

    default:
      return state;
  }
};

export default medicationReducer;