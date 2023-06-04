import axios from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from '@/store/user'

let instance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    const userStore=useUserStore()
    const token=userStore.userInfo.token
    // console.log("token111",token);
    if(token){
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
  },
  (e) => Promise.reject(e)
);

//响应拦截器
instance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    //消息提示
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    return Promise.reject(e);
  }
);

export default instance;
