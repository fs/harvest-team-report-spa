import Qs from 'qs';
import axios, { AxiosInstance } from 'axios';

export const paramsSerializer = (params: any) => Qs.stringify(params);

// todo need tests

export default class ApiService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.API_URL,
      headers: { 'Access-Control-Allow-Origin': '*' },
    });

    Object.assign(this, this.instance);
  }
}
