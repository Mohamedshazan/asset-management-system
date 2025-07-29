import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-shazan-91fdcb3a.koyeb.app', // already includes /api
 
  headers: {
    Accept: 'application/json',
    // ❌ DO NOT set 'Content-Type' here
  },
});

export default instance;
