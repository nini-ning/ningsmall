/*
 * @Author: your name
 * @Date: 2021-06-10 18:45:21
 * @LastEditTime: 2021-06-11 16:14:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12\supermall\src\store\action.js
 */
import{
    ADD_COUNTER,
    ADD_TO_CART
} from './mutations-type'
export default{
    addCart(context,payload){
        return new Promise((resolve,reject)=>{
            //查找之前数据中是否有该商品
        let oldProduct=context.state.cartList.find(item=>item.iid===payload.iid);
        //2.判断oldProduct
        if(oldProduct){
            context.commit('addCounter',oldProduct);
            resolve('当前的数量+1')
        }else{
            payload.count=1;
          context.commit('addToCart',payload);
          resolve('添加了新商品')
        }
        })
        
   }
}