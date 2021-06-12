/*
 * @Author: your name
 * @Date: 2021-06-03 10:08:25
 * @LastEditTime: 2021-06-12 09:27:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day9\supermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
//事件总线
Vue.prototype.$bus=new Vue();
//安装toast插件
Vue.use(toast)
Vue.use(VueLazyLoad)
FastClick.attach(document.body);
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
