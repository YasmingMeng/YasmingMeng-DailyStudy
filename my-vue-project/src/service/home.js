/*
 * @Author: your name
 * @Date: 2020-11-24 16:55:22
 * @LastEditTime: 2020-11-25 15:44:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /YasmingMeng-DailyStudy/my-vue-project/src/service/home.js
 */
import axios from '../utils/axios'

export function getHome(params) {
    return axios.get(`/index-infos`);
  }