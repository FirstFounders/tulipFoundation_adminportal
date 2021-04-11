import { LoginAuth } from '../constant';

const initialState = {
  token: null,
  user: {
    _id: '',
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    picture: '',
    contactNumber: '',
  },
  authenticate: false,
  authenticating: false,
  message: '',
  loading: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginAuth.LOGIN_REQUEST:
      return {
        ...state,
        authenticating: true,
      };
    case LoginAuth.LOGIN_REQUEST_SUCCESSFUL:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        authenticate: true,
        authenticating: false,
        error: '',
      };
    case LoginAuth.LOGIN_REQUEST_FAILED:
      return {
        ...state,
        authenticate: false,
        authenticating: false,
        error: action.payload,
      };
    case LoginAuth.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LoginAuth.LOGOUT_REQUEST_SUCCESS:
      // console.log(action.payload)
      return {
        ...initialState,
        loading: false,
        message: action.payload,
      };

    case LoginAuth.LOGOUT_REQUEST_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
