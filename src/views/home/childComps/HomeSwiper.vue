<!--
 * @Author: your name
 * @Date: 2021-06-03 19:08:23
 * @LastEditTime: 2021-06-03 19:20:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \day9\supermall\src\views\home\childComps\HomeSwiper.vue
-->
<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
