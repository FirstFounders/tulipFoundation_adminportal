import axios from '../helpers/axios';
import { Partnership } from '../constant';

const PartnershipRequest = () => {
  return {
    type: Partnership.PARTNERSHIP_FETCH,
  };
};

const PartnershipSuccess = (payload) => {
  return {
    type: Partnership.PARTNERSHIP_SUCCESS,
    payload,
  };
};

const PartnershipFailed = (payload) => {
  return {
    type: Partnership.PARTNERSHIP_FAILED,
    payload,
  };
};

export const PartnershipAction = (form) => {
  //console.log(form);
  return async (dispatch) => {
    dispatch(PartnershipRequest());
    try {
      const res = await axios.post('partnership', form);
      if (res.status === 200) {
        console.log(res.data);
        const report = {
          type: 'message',
          message: res.data.message,
        };
        dispatch(PartnershipSuccess(res.data));
        return report;
      }
    } catch (error) {
      if (error) {
        // const err = error.response.data.message;
        //const err = Object.values(error.response.data.message);
        // console.log(error.response.data.message);
        const errorMessage = {
          type: 'error',
          errorMessage: Object.values(
            typeof error.response.data.message === 'string'
              ? error.response.data.message
              : Object.values(error.response.data.message)[0][0]
          ),
        };
        dispatch(PartnershipFailed());
        return errorMessage;
      }
    }
  };
};

const GetPartnershipSuccess = (payload) => {
  return {
    type: Partnership.GET_PARTNERSHIP_SUCCESS,
    payload,
  };
};

export const GetPartnershipAction = () => {
  return async (dispatch) => {
    dispatch(PartnershipRequest());
    try {
      const res = await axios.get('partnership');
      if (res.status === 200) {
        // console.log(res.data);
        // const report = {
        //   type: 'message',
        //   message: res.data.message,
        // };
        dispatch(GetPartnershipSuccess(res.data.data));
        // setTimeout(() => {
        //   dispatch(GetPartnershipSuccess([]));
        // }, 7000);
        // return report;
      }
    } catch (error) {
      if (error.response) {
        // console.log(error.response);
        dispatch(PartnershipFailed());
      }
    }
  };
};
