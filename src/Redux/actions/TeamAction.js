import axios from '../helpers/axios';
import { Team } from '../constant';

const teamRequest = () => {
  return {
    type: Team.TEAM_FETCH,
  };
};

const teamSuccess = (payload) => {
  return {
    type: Team.TEAM_SUCCESS,
    payload,
  };
};

const teamFailed = (payload) => {
  return {
    type: Team.TEAM_FAILED,
    payload,
  };
};

export const TeamAction = (form) => {
  return async (dispatch) => {
    dispatch(teamRequest());
    try {
      const res = await axios.post('teams', form);
      if (res.status === 200) {
        //console.log(res.data);
        const report = {
          type: 'message',
          message: res.data.message,
        };
        dispatch(teamSuccess(res.data));
        return report;
      }
    } catch (error) {
      if (error.response) {
        const report = {
          type: 'error',
          errorMessage: Object.values(
            typeof error.response.data.message === 'string'
              ? error.response.data.message
              : Object.values(error.response.data.message)[0][0]
          ),
        };
        dispatch(teamFailed());
        return report;
      }
    }
  };
};
