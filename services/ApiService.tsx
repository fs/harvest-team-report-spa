import axios, { AxiosInstance } from 'axios';

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
