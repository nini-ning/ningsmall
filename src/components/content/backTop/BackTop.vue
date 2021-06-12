<!--
 * @Author: your name
 * @Date: 2021-06-06 11:07:14
 * @LastEditTime: 2021-06-06 11:15:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day10\supermall\src\components\content\backTop\BackTop.vue
-->
<template>
  <div class="back-top">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
name:'BackTop',

}
</script>

<style scoped>
    .back-top{
        position:fixed;
        right:8px;
        bottom: 55px;
    }
    .back-top img{
        width: 43px;
        height: 43px;
    }
</style>