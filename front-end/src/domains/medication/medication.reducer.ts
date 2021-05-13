const INITIAL_STATE = {
  requestStatus: '',
  data: {}
};

const medicationReducer = (state = INITIAL_STATE, { type, payload, request }: any) => {
  console.log('state', state);
  if (type === 'request/start' && request.type === 'medication/requested' ) {
    return {
      ...state,
      requestStatus: 'pending'
    };
  }

  if (type === 'request/success' && request.type === 'medication/requested' ) {
    return {
      ...state,
      requestStatus: 'fulfilled',
      data: payload
    };
  }

  return state;
};

export default medicationReducer;