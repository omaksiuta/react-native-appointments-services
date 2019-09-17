import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  // no android emulator 10.0.2.2:3333
  // no android genymotion 10.0.3.2:3333
});

export default api;
