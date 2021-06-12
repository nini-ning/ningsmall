<!--
 * @Author: your name
 * @Date: 2021-06-05 19:22:12
 * @LastEditTime: 2021-06-11 11:26:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day10\supermall\src\components\common\scroll\Scroll.vue
-->
<template>
  <div ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
 name:'Scroll',
 data(){
     return{
         scroll:null,
         message:"哈哈"
     }
 },
 props:{
     probeType:{
         type:Number,
         default:0
     },
     pullUpLoad:{
         type:Boolean,
         default:false
     }
 },
 mounted () {
     //创建Scroll对象
     this.scroll=new BScroll(this.$refs.wrapper,{
         click:true,
         probeType:this.probeType,
          pullUpLoad:this.pullUpLoad
     })
     //监听滚动的位置
     if(this.probeType===2||this.probeType===3){
         this.scroll.on('scroll',(position)=>{
         this.$emit('scroll',position);
     })
     }
     if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
     })
     
     }
 },
 methods: {
     
    scrollTo(x,y,time=300){
        this.scroll&&this.scroll.scrollTo(x,y,time)
    },
    refresh(){
        //console.log("======")
        this.scroll&&this.scroll.refresh()
        
    },
     finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      getScroll(){
          return this.scroll?this.scroll.y:0;
      }
 }
}
</script>

<style>

</style>