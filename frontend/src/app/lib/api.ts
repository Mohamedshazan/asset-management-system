import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://asset-backend-production-6e87.up.railway.app/', 
 
  headers: {
    Accept: 'application/json',
    // ❌ DO NOT set 'Content-Type' here
  },
});

export default instance;
