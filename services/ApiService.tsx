import qs from 'qs';
import axios, { AxiosInstance } from 'axios';
import { isClient } from '../utils';

export const paramsSerializer = (params: any) => qs.stringify(params);

// todo need tests

export default class ApiService {
  public instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: isClient ? `${window.location.origin}/api/v1` : process.env.OWN_API_URL,
      paramsSerializer,
    });

    Object.assign(this, this.instance);

    this.instance.interceptors.request.use(
      axiosConfig => {
        return {
          ...axiosConfig,
          headers: {
            ...axiosConfig.headers,
          },
        };
      },
      err => Promise.reject(err),
    );

    this.instance.interceptors.response.use(
      resp => resp,
      err => {
        console.error(err);
        return Promise.reject(err.response.data.errors);
      },
    );
  }
}
