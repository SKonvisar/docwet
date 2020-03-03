import axios, { AxiosInstance, Method } from 'axios';

function getInstance() {
  const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
  });

  instance.interceptors.request.use((config) => {
    const token = 'mocked'; // add token service;
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  });

  return function<Res = any>(method: Method, url: string = '', data?: any) {
    const _url = url.length > 0 ? url : undefined;
    const dataKey = method === 'GET' ? 'params' : 'data';

    return instance.request<Res>({ method, url: _url, [dataKey]: data });
  };
}

export const request = getInstance();
