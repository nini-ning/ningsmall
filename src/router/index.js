/*
 * @Author: your name
 * @Date: 2021-06-03 12:19:12
 * @LastEditTime: 2021-06-03 13:46:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \day9\supermall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
