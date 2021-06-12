<!--
 * @Author: your name
 * @Date: 2021-06-07 18:05:24
 * @LastEditTime: 2021-06-11 14:34:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12\supermall\src\views\cart\Cart.vue
-->
<template>
  <div class="cart">

    <nav-bar class="nav-bar">
    <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>
  <cart-list/>
  <!-- 底部汇总 -->
  <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartBottomBar from './childComps/CartBottomBar.vue'
  import CartList from './childComps/CartList'
  import {mapGetters} from 'vuex'
  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
