import axios from '../helpers/axios';
import { PartnerForm } from '../constant';

const PartnerFormRequest = () => {
  return {
    type: PartnerForm.PARTNERFORM_FETCH,
  };
};

const PartnerFormSuccess = (payload) => {
  return {
    type: PartnerForm.PARTNERFORM_SUCCESS,
    payload,
  };
};

const PartnerFormFailed = (payload) => {
  return {
    type: PartnerForm.PARTNERFORM_FAILED,
    payload,
  };
};

export const PartnerFormAction = () => {
  //console.log(form);
  return async (dispatch) => {
    dispatch(PartnerFormRequest());
    try {
      const res = await axios.get('partnerForm');
      if (res.status === 200) {
        // console.log(res.data);
        // const report = {
        //   type: 'message',
        //   message: res.data.message,
        // };
        dispatch(PartnerFormSuccess(res.data));
        //return report;
      }
    } catch (error) {
      if (error.response) {
        // console.log(error.response.message);
        dispatch(PartnerFormFailed());
      }
    }
  };
};
