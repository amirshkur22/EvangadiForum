import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:2024/api",
});

export default axiosInstance;
