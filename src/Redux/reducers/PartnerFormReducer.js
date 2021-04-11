import { PartnerForm } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  PartnerForm: [],
  message: '',
  error: null,
};

const PartnerFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case PartnerForm.PARTNERFORM_FETCH:
      return {
        ...state,
        loading: true,
      };
    case PartnerForm.PARTNERFORM_SUCCESS:
      return {
        ...state,
        message: action.payload,
        PartnerForm: action.payload.data,
        loading: false,
      };
    case PartnerForm.PARTNERFORM_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default PartnerFormReducer;
