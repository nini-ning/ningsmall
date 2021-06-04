<!--
 * @Author: your name
 * @Date: 2021-06-03 10:08:25
 * @LastEditTime: 2021-06-03 19:04:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day9\supermall\src\App.vue
-->
<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar,
   
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
