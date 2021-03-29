import axios from "axios";

const api = axios.create({
  baseURL: "http://13.245.36.195:3333"
});

export default api;