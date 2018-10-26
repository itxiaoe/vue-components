import axios from 'axios'
import qs from 'qs'
import CONFIG from '../config/index'
/**
 * application/json; charset=utf-8 :json
 * application/x-www-form-urlencoded :数据被编码为名称/值对。这是标准的编码格式
 * multipart/form-data :数据被编码为一条消息，页上的每个控件对应消息中的一个部分。
 */
const http = axios.create({
  timeout: 1000 * 10,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

if (process.env.NODE_ENV === 'production') {
  console.log('production')
  http.defaults.baseURL = CONFIG.HTTP.url
}
/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})
/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
http.adornUrl = (actionName) => {
  // 非生产环境 && 开启代理, 接口前缀统一使用[/api/]前缀做代理拦截!
  console.log('isProduction=', process.env.NODE_ENV === 'production')
  console.log('actionName=', actionName)
  console.log('adornUrl=', (process.env.NODE_ENV === 'production' ? CONFIG.HTTP.url : '/api') + actionName)
  return (process.env.NODE_ENV === 'production' ? CONFIG.HTTP.url : '/api') + actionName
}
/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, contentType = 'json') => {
  if (contentType === 'json') {
    return JSON.stringify(data)
  } else if (contentType === 'form') {
    console.log('json1')
    return qs.stringify(data)
  } else if (contentType === 'file') {
    console.log('file')
    return data
  } else {
    JSON.stringify(data)
    return JSON.stringify(data)
  }
}

export default http
