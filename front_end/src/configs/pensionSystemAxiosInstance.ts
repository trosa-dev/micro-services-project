// config/axiosInstance.js
import axios from 'axios';

export const pensionSystemAxiosInstance = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_PENSION_SYSTEM_URL}:${process.env.NEXT_PUBLIC_PENSION_SYSTEM_PORT}`, // Substitua pela URL da sua API
});

// Interceptor de Request
pensionSystemAxiosInstance.interceptors.request.use(
  (config) => {

    return config;
  },
  (error) => {
    // Trate erros de solicitação
    return Promise.reject(error);
  }
);

// Interceptor de Response
pensionSystemAxiosInstance.interceptors.response.use(
  (response) => {

    return response;
  },
  (error) => {
    // Trate erros de resposta
    return Promise.reject(error);
  }
);

