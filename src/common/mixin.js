/*
 * @Author: your name
 * @Date: 2021-06-08 19:42:32
 * @LastEditTime: 2021-06-10 15:52:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12\supermall\src\common\mixin.js
 */
import {debounce} from 'common/utils'
export const itemListenerMixin={
    data(){
        return{
            itemImgListener:null,
            newRefresh:null
        }
    },
    mounted(){
       this.newRefresh=debounce(this.$refs.scroll.refresh,100)
         //监听item中图片加载完成
         //对监听的事件进行保存
         this.itemImgListener=()=>{
             this.newRefresh()
         }
        this.$bus.$on("itemImgLoad",this.itemImgListener);
    }
}
import BackTop from 'components/content/backTop/BackTop'
export const backTopMixin={
    components: {
        BackTop
    },
    data(){
        return{
            isShowBackTop:false
        }
    },
    methods: {
        backClick(){
            this.$refs.scroll.scrollTo(0,0)
        },
    }
}