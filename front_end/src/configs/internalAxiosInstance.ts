// config/axiosInstance.js
import axios from 'axios';

export const internalAxiosInstance = axios.create({
  baseURL: `/api`, // Substitua pela URL da sua API
});

// Interceptor de Request
internalAxiosInstance.interceptors.request.use(
  (config) => {

    return config;
  },
  (error) => {
    // Trate erros de solicitação
    return Promise.reject(error);
  }
);

// Interceptor de Response
internalAxiosInstance.interceptors.response.use(
  (response) => {

    return response;
  },
  (error) => {
    // Trate erros de resposta
    return Promise.reject(error);
  }
);

