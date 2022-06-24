import axios from 'axios'

export function requestA(config){
  // 创建axios实例
  const axiosA = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  }) 
  // http://123.207.32.32:8000/home/multidata
// 拦截器 请求拦截
/* axiosA.interceptors.request.use(
  config=>{
    // console.log('我是请求拦截器', config)
    return config
  },err => {
    // console.log(err)
  }
) */
// 拦截器 响应拦截

/* axiosA.interceptors.response.use(
  res => {
    // console.log('我是响应拦截',res)
    return res
  },err => {
    // console.log(err)
  }
) */

  // 网络请求
  return axiosA(config)
}