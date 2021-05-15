import { STATUS } from '@App/store/actions/actions.constants';
import { medicationStatus } from '@App/domains/medication/medication.actions';

const INITIAL_STATE = {
  requestStatus: STATUS.INITIAL,
  data: []
};

const medicationReducer = (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case medicationStatus.pending:
      return {
        ...state,
        requestStatus: STATUS.PENDING,
      };
    case medicationStatus.success:
      return {
        ...state,
        requestStatus: STATUS.SUCCESS,
        data: payload
      };
    case medicationStatus.error:
      return {
        ...state,
        requestStatus: STATUS.ERROR,
      };
    case medicationStatus.cancel:
      return {
        ...state,
        requestStatus: STATUS.CANCEL,
      };
    default:
      return state;
  }
};

export default medicationReducer;