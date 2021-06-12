<!--
 * @Author: your name
 * @Date: 2021-06-07 11:40:09
 * @LastEditTime: 2021-06-07 12:24:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \day11\supermall\src\views\detail\childComps\DetailSwiper.vue
-->
<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>
