import { Partnership } from '../constant';

const initialState = {
  Partnership: [],
  loading: false,
  message: '',
  error: null,
};

const PartnershipReducer = (state = initialState, action) => {
  switch (action.type) {
    case Partnership.PARTNERSHIP_FETCH:
      return {
        ...state,
        loading: true,
      };
    case Partnership.PARTNERSHIP_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case Partnership.GET_PARTNERSHIP_SUCCESS:
      return {
        ...state,
        Partnership: action.payload,
        message: '',
        loading: false,
      };
    case Partnership.PARTNERSHIP_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default PartnershipReducer;
