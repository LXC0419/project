import axios from 'axios'

1 // 主页轮播图以及推荐图
export function requestA(config){
  // 创建axios实例
  const axiosA = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    // timeout: 5000
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
2 // 主页选项卡
export function requestB(config) {
  const axiosB = axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000
  })

  // 网络请求
  return axiosB(config)
}