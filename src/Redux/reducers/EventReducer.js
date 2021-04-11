import { Event } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    case Event.EVENT_FETCH:
      return {
        ...state,
        loading: true,
      };
    case Event.EVENT_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case Event.EVENT_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default EventReducer;
