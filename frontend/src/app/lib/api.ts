import axios from 'axios';

const instance = axios.create({
  baseURL: 'asset-backend-production-acb2.up.railway.app', 
 
  headers: {
    Accept: 'application/json',
    // ❌ DO NOT set 'Content-Type' here
  },
});

export default instance;
