/*
 * @Author: your name
 * @Date: 2021-06-10 18:44:59
 * @LastEditTime: 2021-06-11 13:21:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12\supermall\src\store\mutations.js
 */
import{
    ADD_COUNTER,
    ADD_TO_CART
} from './mutations-type'
export default{
    addCounter(state,payload){
        payload.count++;
    },
    addToCart(state,payload){
        payload.checked=true;
        state.cartList.push(payload);
    }
}