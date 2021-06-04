<!--
 * @Author: your name
 * @Date: 2021-05-31 12:50:51
 * @LastEditTime: 2021-05-31 13:37:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day7\tabbar\src\components\tabbar\tabbar.vue
-->
<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>
<script>
export default({
   name:"TabBar"
})
</script>
<style scoped>
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100,100, .1);
}
.tab-bar-item{
  flex:1;
  text-align: center;
  height:49px;
}
.tab-bar-item img{
    width: 24px;
    height: 24px;
}
</style>
