/*
 * @Author: your name
 * @Date: 2021-06-03 17:22:04
 * @LastEditTime: 2021-06-03 18:11:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day9\supermall\src\network\home.js
 */
import {request} from "../network/request";
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()
//
// test()