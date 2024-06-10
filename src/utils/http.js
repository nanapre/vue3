import axios from 'axios'
import { ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/el-message.css'
import { userInfoStore } from '@/stores/user';
import router from '@/router';
// 创建axios实例
const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// axios请求拦截器
// 添加请求拦截器
http.interceptors.request.use(config => {
    //从pinia获取token数据
    const useUserInfoStore = userInfoStore()
    const token = useUserInfoStore.userInfo.token
    //按照后端的要求拼接token数据
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e));
// 添加响应拦截器
http.interceptors.response.use(res => res, e => {
    const useUserInfoStore = userInfoStore()
    ElMessage({
        type: 'warning',
        message: e.response.data.message
    })

    if (e.response.status === 401) {
        useUserInfoStore.clearUserInfo()
        router.push('/login')
    }
});

export default http