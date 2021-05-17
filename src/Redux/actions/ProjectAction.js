import axios from '../helpers/axios';
import { Project } from '../constant';

const ProjectRequest = () => {
  return {
    type: Project.PROJECT_FETCH,
  };
};

const ProjectSuccess = (payload) => {
  return {
    type: Project.PROJECT_SUCCESS,
    payload,
  };
};

const ProjectFailed = (payload) => {
  return {
    type: Project.PROJECT_FAILED,
    payload,
  };
};

export const ProjectAction = (form) => {
  // console.log(form);
  return async (dispatch) => {
    dispatch(ProjectRequest());
    try {
      const res = await axios.post('projects', form);
      if (res.status === 200) {
        //console.log(res.data);
        const report = {
          type: 'message',
          message: res.data.message,
        };
        dispatch(ProjectSuccess(res.data));
        return report;
      }
    } catch (error) {
      // console.log(error.response);
      if (error.response) {
        const errorMessage = {
          type: 'error',
          errorMessage: Object.values(
            typeof error.response.data.message === 'string'
              ? error.response.data.message
              : Object.values(error.response.data.message)[0][0]
          ),
        };

        dispatch(ProjectFailed());
        return errorMessage;
      }
    }
  };
};
