import { Summit } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const summitReducer = (state = initialState, action) => {
  switch (action.type) {
    case Summit.SUMMIT_FETCH:
      return {
        ...state,
        loading: true,
      };
    case Summit.SUMMIT_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case Summit.SUMMIT_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default summitReducer;
