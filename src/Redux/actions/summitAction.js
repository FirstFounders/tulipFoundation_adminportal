import axios from '../helpers/axios';
import { Summit } from '../constant';

const summitRequest = () => {
  return {
    type: Summit.SUMMIT_FETCH,
  };
};

const summitSuccess = (payload) => {
  return {
    type: Summit.SUMMIT_SUCCESS,
    payload,
  };
};

const summitFailed = (payload) => {
  return {
    type: Summit.SUMMIT_FAILED,
    payload,
  };
};

export const SummitAction = (form) => {
  console.log(form);
  return async (dispatch) => {
    dispatch(summitRequest());
    try {
      const res = await axios.post('summits', form);
      if (res.status === 200) {
        // console.log(res.data);
        const report = {
          type: 'message',
          message: res.data.message,
        };
        dispatch(summitSuccess(res.data));
        return report;
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        dispatch(summitFailed());
      }
    }
  };
};
