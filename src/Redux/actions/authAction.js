import { LoginAuth } from '../constant';
//import axios from '../helpers/axios';

const userData = [
  {
    id: 1,
    email: 'admin@tulipfoundation.com',
    password: 'admin101',
    token: 'gshwyjkskjuhsheuejkjkj',
  },
];

const loginRequest = () => {
  return {
    type: LoginAuth.LOGIN_REQUEST,
  };
};
const loginRequestSuccess = (payload) => {
  return {
    type: LoginAuth.LOGIN_REQUEST_SUCCESSFUL,
    payload,
  };
};
const loginRequestFailed = (payload) => {
  return {
    type: LoginAuth.LOGIN_REQUEST_FAILED,
    payload,
  };
};

export const loginAction = (user) => {
  return async (dispatch) => {
    const { email, password } = user;

    try {
      if (email === userData[0].email && password === userData[0].password) {
        localStorage.setItem('token', userData[0].token);
        localStorage.setItem('user', JSON.stringify(userData[0]));
        dispatch(loginRequestSuccess(userData[0]));
      } else {
        const errorMessage = {
          type: 'error',
          message: 'Wrong Email/Username or Password',
        };
        console.log('Wrong Email/Username or Password');
        dispatch(loginRequestFailed('Wrong Email/Username or Password'));
        return errorMessage;
      }
    } catch (error) {
      console.log('Wrong Email/Username or Password');

      // console.log(errorMessage);

      dispatch(loginRequestFailed('Wrong Email/Username or Password'));
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    dispatch(loginRequest());
    const token = localStorage.getItem('token');
    if (token) {
      const user = JSON.parse(localStorage.getItem('user'));
      const data = {
        token,
        user,
      };
      dispatch(loginRequestSuccess(data));
    }
  };
};

export const LogoutAction = () => {
  // const token = localStorage.getItem('token');
  return async (dispatch) => {
    // if (res.status === 200) {
    // console.log(res.data);
    localStorage.clear();
    window.location.replace('/login');
    // dispatch(logoutRequestSuccess(res.data.message));
    // } else {
    //   dispatch(logoutRequestFailed(res.data.error));
    // }
  };
};
