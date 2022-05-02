import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return err;
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = "出现400错误";
          break;
        case 401:
          err.messae = "未授权访问";
          break;
      }
      return err;
    }
  }
);

export default instance;
