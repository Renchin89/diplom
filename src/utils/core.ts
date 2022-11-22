import axios from 'axios';

export async function sendRequest (
  url: string,
  method: string,
  data?: any,
  params?: any
) {
  let axiosConfig: any = {
    baseURL: 'http://localhost:3100/api',
    url: url,
    method: method
  }

  let token = localStorage.getItem('auth-token');

  if (data) axiosConfig.data = data;
  if (params) axiosConfig.params = params;
  if (token) axiosConfig.headers = {
    'Authorization': token
  }

  return await axios(axiosConfig)
}