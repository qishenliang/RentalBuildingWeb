import axios from "axios";
import { message } from "antd";

declare module "axios" {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
  }
}

export const defHttp = axios.create({
  baseURL: "/api",
  timeout: 6000,
  headers: { "Content-Type": "application/json" },
});

// 添加请求拦截器
defHttp.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
defHttp.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return Promise.resolve(response.data);
  },
  function (error) {
    // 对响应错误做点什么
    message.error("请求发生错误！");
    return Promise.reject(error);
  }
);
