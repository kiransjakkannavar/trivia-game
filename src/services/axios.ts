import axios from 'axios';
import { apiPath } from './api-constants';

const {BASE_URL } = apiPath;

export const BaseAxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    "Access-Control-Allow-Origin": "http://localhost:3000/",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
  },
});


BaseAxiosInstance.interceptors.request.use((config) => {
  config.params = config.params || {};
  return config;
});