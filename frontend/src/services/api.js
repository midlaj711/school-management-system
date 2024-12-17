/*import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

export default api;*/
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Adjust to your backend URL
});

export default API;
