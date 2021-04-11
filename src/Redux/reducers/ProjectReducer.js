import { Project } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case Project.PROJECT_FETCH:
      return {
        ...state,
        loading: true,
      };
    case Project.PROJECT_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case Project.PROJECT_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default ProjectReducer;
