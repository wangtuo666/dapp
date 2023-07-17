import axios, {AxiosInstance} from 'axios';

axios.defaults.baseURL = '/api' || '';
const service:AxiosInstance = axios.create({
    baseURL: "http://api.mmmbsc2025.com",
    timeout: 15000
});


service.interceptors.request.use(config => {
    return config;
  }, error => {
    Promise.reject(error);
  });
  


  service.interceptors.response.use(response => {
    //判断code码
    return response.data;
  },error => {
    return Promise.reject(error);
  });

export default service;
