import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://asset-backend-production-00f6.up.railway.app/api', 
 
  headers: {
    Accept: 'application/json',
    // ❌ DO NOT set 'Content-Type' here
  },
});

export default instance;
