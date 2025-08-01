import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://asset-backend-production-bb41.up.railway.app/', 
 
  headers: {
    Accept: 'application/json',
    // ❌ DO NOT set 'Content-Type' here
  },
});

export default instance;
