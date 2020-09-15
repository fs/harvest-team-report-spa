import axios from 'axios';
import qs from 'qs';
import ApiService from './ApiService';

export const paramsSerializer = (params: any) => qs.stringify(params);

// todo need tests

export default class HarvestApiService extends ApiService {
  constructor() {
    super();

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
  }
}
