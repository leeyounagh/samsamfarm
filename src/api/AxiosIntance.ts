import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://reactjs.wo.tc/api/v1",
});
const excludeIncludeTokenURL = ["/login", "/register"];

AxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("JWtToken");

  if (config?.url && !excludeIncludeTokenURL.includes(config.url) && token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default AxiosInstance;
