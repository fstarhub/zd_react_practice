import axios from 'axios'
import { message } from 'antd'

// Nprogress进度条
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 创建案axios实例
const service = axios.create({
  baseURL: process.env.REACT_APP_URL + '/api',
  timeout: 5000
})

// request拦截器
service.interceptors.request.use((config) => {
  Nprogress.start()
  const token = 'feng'
  config.headers['Token'] = token
  config.headers.Authorization = token
  return config
}, (error) => {
  console.log('请求发生错误', error)
  return Promise.reject(error)
})

// response拦截器
service.interceptors.response.use((response) => {
  Nprogress.done()
  return response.data
}, (error) => {
  console.log('响应发生错误', error )
  // 异常处理
  if (error.response.code) {
    // 响应错误
    const status = error.response.code
    // 根据不同的状态码，提示不同的信息
    switch (status) {
      case 404:
        message.error('你访问的网页不存在')
        break
      case 401:
        message.error('身份验证失败')
        break
      case 403:
        message.error('登录过期')
        break
      default:
        message.error(`连接错误，${status}`)
        console.log(error.response.data.msg) // 其他的错误，抛出错误提示
    }
  } else {
    // 超时处理
    if (JSON.stringify(error.include('timeout'))) {
      message.error('服务器响应超时，请重新刷新页面')
    }
  }
})

export default service