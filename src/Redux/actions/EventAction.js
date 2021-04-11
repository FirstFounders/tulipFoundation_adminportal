import axios from '../helpers/axios';
import { Event } from '../constant';

const EventRequest = () => {
  return {
    type: Event.EVENT_FETCH,
  };
};

const EventSuccess = (payload) => {
  return {
    type: Event.EVENT_SUCCESS,
    payload,
  };
};

const EventFailed = (payload) => {
  return {
    type: Event.EVENT_FAILED,
    payload,
  };
};

export const EventAction = (form) => {
  // console.log(form);
  return async (dispatch) => {
    dispatch(EventRequest());
    try {
      const res = await axios.post('events', form);
      if (res.status === 200) {
        //console.log(res.data);
        const report = {
          type: 'message',
          message: res.data.message,
        };
        dispatch(EventSuccess(res.data));
        return report;
      }
    } catch (error) {
      if (error.response) {
        //console.log(error.response);
        const errorMessage = {
          type: 'error',
          message: error.response.data.message,
        };

        dispatch(EventFailed());
        return errorMessage;
      }
    }
  };
};
