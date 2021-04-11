import { Team } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case Team.TEAM_FETCH:
      return {
        ...state,
        loading: true,
      };
    case Team.TEAM_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case Team.TEAM_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default teamReducer;
