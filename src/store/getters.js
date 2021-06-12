/*
 * @Author: your name
 * @Date: 2021-06-10 19:53:44
 * @LastEditTime: 2021-06-10 22:28:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12\supermall\src\store\getters.js
 */
export default{
    cartLength(state){
        return state.cartList.length;
      },
      cartList(state){
        return state.cartList;
      }
}