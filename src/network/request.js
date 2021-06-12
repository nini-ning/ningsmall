/*
 * @Author: your name
 * @Date: 2021-06-03 17:16:56
 * @LastEditTime: 2021-06-07 00:17:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day9\supermall\src\network\request.js
 */
import axios from 'axios'
export function request(config){
    //创建axios实例
    const instance=axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })
    //axios拦截器
    //请求拦截
    instance.interceptors.request.use(config=>{
        return config
    },err=>{
        //console.log(err)
    })
    instance.interceptors.response.use(res=>{
        //console.log(res);
        return res.data
    },err=>{
        console.log(err)
    })
    //发送真正的网络请求
    return instance(config)
}