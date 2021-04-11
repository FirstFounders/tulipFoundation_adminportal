import { Consultations } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  Consultations: [],
  message: '',
  error: null,
};

const ConsultationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Consultations.CONSULTATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Consultations.CONSULTATIONS_SUCCESS:
      return {
        ...state,
        // message: action.payload,
        Consultations: action.payload.data,
        loading: false,
      };
    case Consultations.CONSULTATIONS_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default ConsultationsReducer;
