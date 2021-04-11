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
        console.log(res.data);
        const report = {
          type: 'message',
          message: res.data.message,
        };
        dispatch(ProjectSuccess(res.data));
        return report;
      }
    } catch (error) {
      if (error.response) {
        const errorMessage = {
          type: 'error',
          message: error.response.data.message,
        };
        console.log(error.response);
        dispatch(ProjectFailed());
        return errorMessage;
      }
    }
  };
};
