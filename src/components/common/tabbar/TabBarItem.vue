<!--
 * @Author: your name
 * @Date: 2021-05-31 12:50:51
 * @LastEditTime: 2021-06-03 15:37:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day7\tabbar\src\components\tabbar\tabbar.vue
-->
<template>
      <div class="tab-bar-item" @click="itemClick">
          <div v-if="!isActive"><slot name="item-icon"></slot></div>
          <div v-else><slot name="item-icon-active"></slot></div>
         <div :style="activeStyle"><slot name="item-text"></slot></div> 
      </div>
</template>
<script>
export default({
   name:"TabBarItem",
   data(){
     return{
       //isActive:true
     }
   },
   computed: {
     isActive(){
       return this.$route.path.indexOf(this.path)!==-1
     },
     activeStyle(){
       return this.isActive?{color:this.activeColor}:{}
     }
   },
   props:{
     path:String,
     activeColor:{
       type:String,
       default:'red'
     }
   },
   methods: {
     itemClick(){
       this.$router.push(this.path)
     }
   }
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
  font-size:14px;
}
.tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top:3px;
    vertical-align: middle;
    margin-bottom:2px;
}

</style>
