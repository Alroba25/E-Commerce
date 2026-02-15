import axios from "axios";

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE,
});

export default axiosConfig;
