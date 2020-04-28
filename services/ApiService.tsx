import qs from 'qs';
import axios, { AxiosInstance } from 'axios';

export const paramsSerializer = (params: any) => qs.stringify(params);

// todo need tests

export default class ApiService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.API_URL,
      paramsSerializer,
    });

    Object.assign(this, this.instance);

    this.instance.interceptors.request.use(
      axiosConfig => {
        return {
          ...axiosConfig,
          headers: {
            ...axiosConfig.headers,
            'Harvest-Account-Id': process.env.HARVEST_ACCOUNT_ID,
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
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
