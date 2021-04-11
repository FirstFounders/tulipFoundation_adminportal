import { Blog } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case Blog.BLOG_FETCH:
      return {
        ...state,
        loading: true,
      };
    case Blog.BLOG_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case Blog.BLOG_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default BlogReducer;
