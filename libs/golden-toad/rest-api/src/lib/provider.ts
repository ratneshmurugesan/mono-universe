import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const getAll = async (resourcePath: string) =>
  await axiosInstance.get(`${resourcePath}`);

const getOne = async (resourcePath: string, userId: number) =>
  await axiosInstance.get(`${resourcePath}/${userId}`);

const getPostsByUserId = async (resourcePath: string, userId: number) =>
  await axiosInstance.get(`${resourcePath}?userId=${userId}`);

function requestInterceptor(config: AxiosRequestConfig) {
  return config;
}

function responseInterceptor(response: AxiosResponse) {
  if (response && response.data && response.status) {
    return {
      data: response.data,
      status: response.status,
    };
  } else {
    return {
      statusText: response.statusText,
      status: response.status,
    };
  }
}

axiosInstance.interceptors.request.use(requestInterceptor);
axiosInstance.interceptors.response.use(responseInterceptor);

export const apiProvider = {
  getAll,
  getOne,
  getPostsByUserId,
};
