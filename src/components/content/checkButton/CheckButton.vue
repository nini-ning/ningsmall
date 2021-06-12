<!--
 * @Author: your name
 * @Date: 2021-06-11 12:04:54
 * @LastEditTime: 2021-06-11 14:41:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12\supermall\src\components\content\checkButton\CheckButton.vue
-->
<template>
  <div class="check-button" :class="{check:isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
name:'CheckButton',
props:{
    isChecked:{
        type:Boolean,
        default:false
    }
}
}
</script>

<style scoped>
/* 默认情况下 */
 .check-button{
     border-radius:50%;
     border:2px solid #aaa;
 }
 /*选中时*/
 .check{
     border-color:red;
     background-color: red;
 }
</style>