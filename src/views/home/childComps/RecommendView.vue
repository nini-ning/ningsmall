<!--
 * @Author: your name
 * @Date: 2021-06-03 19:50:32
 * @LastEditTime: 2021-06-03 20:06:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day9\supermall\src\views\home\childComps\RecommendView.vue
-->
<template>
  <div class="recommend">
      <div v-for="item in recommends" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    .recommend{
        display: flex;
        width: 100%;
        padding: 10px 0 20px;
        text-align: center;
        font-size: 12px;
        border-bottom: 10px solid #eee;
    }
    .recommend-item{
        flex:1
    }
    .recommend-item img{
        width: 65px;
        height: 65px;
        margin-bottom: 10px;
    }
</style>