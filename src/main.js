/*
 * @Author: your name
 * @Date: 2021-06-03 10:08:25
 * @LastEditTime: 2021-06-03 13:57:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day9\supermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
