/*
 * @Author: your name
 * @Date: 2020-11-25 10:11:34
 * @LastEditTime: 2020-11-25 15:44:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /YasmingMeng-DailyStudy/my-vue-project/src/utils/axios.js
 */
import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'
import { API_ROOT } from '../../config/prod.env';


axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '//47.99.134.126:28019/api/v1' : '//47.99.134.126:28019/api/v1'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.resultCode != 200) {
    if (res.data.message) Toast.fail(res.data.message)
    if (res.data.resultCode == 416) {
      router.push({ path: '/login' })
    }
    return Promise.reject(res.data)
  }

  return res.data
})

const service = axios.create({
  baseURL: process.env.API_ROOT, // api的base_url
  timeout: 5000 // 请求超时时间
})
export default axios