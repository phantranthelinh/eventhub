import axios from 'axios';
import queryString from 'query-string';
import {appInfo} from '../constants';

const axiosClient = axios.create({
  paramsSerializer: params => queryString.stringify(params),
  baseURL: appInfo.BASE_URL,
});

axiosClient.interceptors.request.use(async (config: any) => {
  config.headers = {
    Authorization: '',
    Accept: 'application/json',
    ...config.headers,
  };

  config.data;

  return config;
});

axiosClient.interceptors.response.use(
  response => {
    if (response.data && response.status === 200) {
      return response.data;
    }
    throw new Error('Error');
  },
  err => {
    console.log('Error API ', err.message);
  },
);

export default axiosClient;
