import axios from '../helpers/axios';
import { Volunteers } from '../constant';

const VolunteersRequest = () => {
  return {
    type: Volunteers.VOLUNTEERS_REQUEST,
  };
};

const VolunteersSuccess = (payload) => {
  return {
    type: Volunteers.VOLUNTEERS_SUCCESS,
    payload,
  };
};

const VolunteersFailed = (payload) => {
  return {
    type: Volunteers.VOLUNTEERS_FAILED,
    payload,
  };
};

export const VolunteersAction = () => {
  //console.log(form);
  return async (dispatch) => {
    dispatch(VolunteersRequest());
    try {
      const res = await axios.get('volunteers');
      if (res.status === 200) {
        // console.log(res.data);
        const report = {
          type: 'message',
          message: res.data.message,
        };
        dispatch(VolunteersSuccess(res.data));
        return report;
      }
    } catch (error) {
      if (error.response) {
        // console.log(error.response);
        dispatch(VolunteersFailed());
      }
    }
  };
};
