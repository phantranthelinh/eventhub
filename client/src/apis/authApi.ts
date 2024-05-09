import axiosClient from './axiosClient';

const AuthAPI = {
  login: async (
    url: string,
    data?: any,
    method?: 'get' | 'post' | 'delete' | 'put' | 'patch',
  ) => {
    return await axiosClient(`${url}`, {
      method: method ?? 'get',
      data,
    });
  },
};

export default AuthAPI;
