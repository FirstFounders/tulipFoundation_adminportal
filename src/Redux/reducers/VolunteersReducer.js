import { Volunteers } from '../constant';

const initialState = {
  loading: false,
  message: '',
  Volunteers: [],
  error: null,
};

const VolunteersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Volunteers.VOLUNTEERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Volunteers.VOLUNTEERS_SUCCESS:
      return {
        ...state,
        Volunteers: action.payload.data,
        // message: action.payload,
        loading: false,
      };
    case Volunteers.VOLUNTEERS_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default VolunteersReducer;
