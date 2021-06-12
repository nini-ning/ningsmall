<!--
 * @Author: your name
 * @Date: 2021-06-07 10:07:52
 * @LastEditTime: 2021-06-09 19:56:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day11\supermall\src\views\detail\childComps\DetailNavBar.vue
-->
<template>
    <div>
        <nav-bar>
            <div slot="left" class="back" @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titles" class="title-item" :class="{active:index===currentIndex}" @click="titleClick(index)">
                   {{item}}
                </div>
                </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
name:'DetailNavBar',
components: {
    NavBar
},
data(){
    return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
    }
},
methods: {
    backClick(){
        this.$router.back()
    },
    titleClick(index){
        this.currentIndex=index;
       // console.log(index)
        this.$emit('titleClick',index);
    }
}
}
</script>

<style scoped>
    .title{
        display: flex;
        font-size: 13px;
    }
    .title-item{
        flex: 1;
    }
    .back img{
        margin-top: 12px;
    }
    .active {
    color: var(--color-high-text)
  }
</style>

