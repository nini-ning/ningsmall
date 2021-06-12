<!--
 * @Author: your name
 * @Date: 2021-06-11 16:51:13
 * @LastEditTime: 2021-06-11 21:56:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12\supermall\src\components\common\toast\Toast.vue
-->
<template>
  <div class="toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
name:"Toast",
// props:{
//     message:{
//         type:String,
//         default:''
//     },
//     show:{
//         type:Boolean,
//         default:false
//     }
// }
data(){
    return{
        message:'',
        isShow:false
    }
},
methods: {
    show(message,duration){
        this.isShow=true;
        this.message=message;
        setTimeout(()=>{
            this.isShow=false;
            this.message='';
        },duration)
    }
}
}
</script>

<style scoped>
    .toast{
       
        position:fixed;
        color: aliceblue;
        border-radius:5px;
        top:50%;
        left:50%;
        translate: (-50%,-50%);
        padding: 8px 10px;
        background-color: rgba(0, 0, 0, .3);
          z-index:999;
    }
</style>