import axios from '../helpers/axios';
import { Consultations } from '../constant';

const ConsultationsRequest = () => {
  return {
    type: Consultations.CONSULTATIONS_REQUEST,
  };
};

const ConsultationsSuccess = (payload) => {
  return {
    type: Consultations.CONSULTATIONS_SUCCESS,
    payload,
  };
};

const ConsultationsFailed = (payload) => {
  return {
    type: Consultations.CONSULTATIONS_FAILED,
    payload,
  };
};

export const ConsultationsAction = () => {
  //console.log(form);
  return async (dispatch) => {
    dispatch(ConsultationsRequest());
    try {
      const res = await axios.get('consultations');
      if (res.status === 200) {
        // console.log(res.data);
        // const report = {
        //   type: 'message',
        //   message: res.data.message,
        // };
        dispatch(ConsultationsSuccess(res.data));
        //return report;
      }
    } catch (error) {
      if (error.response) {
        // console.log(error.response);
        dispatch(ConsultationsFailed());
      }
    }
  };
};
