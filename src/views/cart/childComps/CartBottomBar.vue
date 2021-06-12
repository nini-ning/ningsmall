<!--
 * @Author: your name
 * @Date: 2021-06-11 14:09:42
 * @LastEditTime: 2021-06-11 15:48:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12\supermall\src\views\cart\childComps\CartBottemBar.vue
-->
<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="isSelectAll" @click.native='checkClick'></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计:({{totalPrice}})
    </div>
    <div class="calculate">
      结算:({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import {mapGetters} from 'vuex'
export default {
  components: { CheckButton },
  name:'CartBottomBar',
  computed: {
    ...mapGetters(['cartList']),
    totalPrice(){
      return '￥'+this.cartList.filter(item=>{
          return item.checked
        }).reduce((preValue,item)=>{
          return preValue+item.price*item.count
        },0)
    },
    checkLength(){
      return this.cartList.filter(item=>item.checked).length
    },
    //第一种方法
    // isSelectAll(){
    //   return !(this.cartList.filter(item=>!item.checked).length)
    // }
    //普通遍历
    isSelectAll(){
      if(this.cartList.length==0) return false
      for(let item of this.cartList){
        if(!item.checked){
          return false
        }
      }
          return true
    }
  },
  methods: {
      checkClick(){
        if(this.isSelectAll){
          this.cartList.forEach(item=>item.checked=false)
        }else{
          this.cartList.forEach(item=>item.checked=true)
        }
      }
    }
}
</script>

<style scoped>
  .bottom-bar{
    height: 40px;
    position: relative;
    line-height:40px ;
    background-color: #eee;
    display: flex;
  }
  .check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .check-button{
    width:20px ;
    height:20px;
    line-height: 20px;
    margin-right: 5px;
  }
  .price{
    margin-left: 20px;
    flex:1
  }
  .calculate{
    width: 80px;
    background-color: red;
    color: #eee;
    text-align: center;
  }
</style>