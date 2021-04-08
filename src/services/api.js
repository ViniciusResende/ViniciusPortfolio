import axios from 'axios';

const api = axios.create({
  baseURL: "https://desolate-garden-30570.herokuapp.com/"
});

export default api;