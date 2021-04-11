import axios from 'axios';
import { api } from '../../urlconfig';

//const token = window.localStorage.getItem('token');
const axiosInstance = axios.create({
  baseURL: api,
});
export default axiosInstance;
