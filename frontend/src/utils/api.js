import axios from 'axios';

const API = axios.create({
  baseURL: 'https://bookstoreapp-backendd.onrender.com',
});

export default API;
