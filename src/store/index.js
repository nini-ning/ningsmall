/*
 * @Author: your name
 * @Date: 2021-06-10 17:05:09
 * @LastEditTime: 2021-06-10 19:58:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12\supermall\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//1.安装插件
Vue.use(Vuex)
//2.创建Store对象
const state={cartList:[]};
const store=new Vuex.Store({
    state,
    mutations,
    actions,
    getters
        // addCart(state,payload){
        //     //payload新添加的商品
        //     //let oldProduct=null;
        //     // for(let item of state.cartList){
        //     //     if(item.iid===payload.iid){
        //     //         oldProduct=item;
        //     //     }
        //     // }
        //     //查找之前数据中是否有该商品
        //     let oldProduct=state.cartList.find(item=>item.iid===payload.iid);
        //     console.log(payload.iid)
        //     //2.判断oldProduct
        //     if(oldProduct){
        //         oldProduct.count+=1;
        //     }else{
        //         payload.count=1;
        //         state.cartList.push(payload);
        //     }
            
        // }
    
})
//3.挂载Vue实例上
export default store
