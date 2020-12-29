import axios from 'axios'

export function request(config){
  const instanceReq = axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:7000
  })

  // 预定义拦截器
  // 请求拦截器
  instanceReq.interceptors.request.use(config =>{
    return config
  }, err => {
    console.log(err)
  })

  // 响应拦截器
  instanceReq.interceptors.response.use( res => {
    return res.data
  }, err => {
    console.log(err)
  })

  // Promise实例返回
  return instanceReq(config)
}