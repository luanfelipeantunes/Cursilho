import axios from 'axios';
import { Constants } from './Constants';

//Config global do Axios para enviar o token de autenticação
const axiosInstance = axios.create({
    baseURL: Constants.baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;
