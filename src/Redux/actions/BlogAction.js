import axios from '../helpers/axios';
import { Blog } from '../constant';

const BlogRequest = () => {
  return {
    type: Blog.BLOG_FETCH,
  };
};

const BlogSuccess = (payload) => {
  return {
    type: Blog.BLOG_SUCCESS,
    payload,
  };
};

const BlogFailed = (payload) => {
  return {
    type: Blog.BLOG_FAILED,
    payload,
  };
};

export const BlogAction = (form) => {
  console.log(form);
  return async (dispatch) => {
    dispatch(BlogRequest());
    try {
      const res = await axios.post('blogs', form);
      if (res.status === 200) {
        console.log(res.data);
        const report = {
          type: 'message',
          message: res.data.message,
        };
        dispatch(BlogSuccess(res.data));
        return report;
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        const report = {
          type: 'error',
          message: error.response.message,
        };
        dispatch(BlogFailed());
        return report;
      }
    }
  };
};
