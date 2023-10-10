// config/axiosInstance.js
import axios from 'axios';

export const paymentsGatewayAxiosInstance = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_PAYMENT_GATEWAY_URL}:${process.env.NEXT_PUBLIC_PAYMENT_GATEWAY_PORT}`, // Substitua pela URL da sua API
});

// Interceptor de Request
paymentsGatewayAxiosInstance.interceptors.request.use(
  (config) => {

    return config;
  },
  (error) => {
    // Trate erros de solicitação
    return Promise.reject(error);
  }
);

// Interceptor de Response
paymentsGatewayAxiosInstance.interceptors.response.use(
  (response) => {

    return response;
  },
  (error) => {
    // Trate erros de resposta
    return Promise.reject(error);
  }
);

