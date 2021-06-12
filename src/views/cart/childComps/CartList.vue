<!--
 * @Author: your name
 * @Date: 2021-06-10 22:29:24
 * @LastEditTime: 2021-06-11 14:18:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12\supermall\src\views\cart\childComps\CartList.vue
-->
<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
        <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"></cart-list-item>
    </scroll>
    
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'
import Scroll from 'components/common/scroll/Scroll'
import {mapGetters}from 'vuex'
export default {
    name:'CartList',
    components: {
        CartListItem,
        Scroll
    },
    computed: {
        ...mapGetters(['cartList'])
    },
    activated () {
        this.$refs.scroll.refresh();
    }
}
</script>

<style scoped>
    /* .cart-list {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 93px;
  } */
  .cart-list{
      height: calc(100% - 44px - 49px - 40px);
  }
  .content{
      height: 100%;
      overflow: hidden;
  }
</style>