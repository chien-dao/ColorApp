import axios from 'axios';
import { AsyncStorage } from 'react-native';

const httpRequest = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json'
  }
});

httpRequest.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      config.headers['Access-Token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

export default httpRequest;