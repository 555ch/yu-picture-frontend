import axios from 'axios';
import { message } from 'ant-design-vue';

// 创建Axios实例
const myAxios = axios.create({
  baseURL: 'http://localhost:8086',
  timeout: 60000,
  withCredentials: true,
});

// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
myAxios.interceptors.response.use(
    function (response) {
        const { data } = response;
        // 未登录
        if (data.code === 40168) {
            // 不是重放用户信息的请求，并且用户目前不是已经在用户的某页面，则随机加登录页面
            if (
                !response.request.responseURL.includes('user/get/login') &&
                !window.location.pathname.includes('/user/login')
            ) {
                message.warning('请先登录!');
                window.location.href = '/user/login?redirect=${window.location.href}' ;
            }
        }
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default myAxios;