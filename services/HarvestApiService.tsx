import axios from 'axios';
import qs from 'qs';
import ApiService from 'services/ApiService';
import { harvestHeaders } from 'public/defaultConstants';

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
            ...harvestHeaders.headers,
          },
        };
      },
      err => Promise.reject(err),
    );
  }
}
