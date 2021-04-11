import axios from 'axios';
import { api } from '../../urlconfig';

export const axiosInstance = axios.create({
  baseURL: api,
});

export default axiosInstance;
