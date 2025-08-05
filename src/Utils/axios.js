import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL,
  withCredentials: true, // if using cookies
});

export default API;