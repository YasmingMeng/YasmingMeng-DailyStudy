/*
 * @Author: your name
 * @Date: 2020-11-24 16:55:22
 * @LastEditTime: 2020-11-24 17:05:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /YasmingMeng-DailyStudy/my-vue-project/src/service/home.js
 */
import axios from 'axios'

export function getHome(params) {
    return axios.get('/index-infos');
  }