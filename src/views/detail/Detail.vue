<!--
 * @Author: your name
 * @Date: 2021-06-07 18:05:24
 * @LastEditTime: 2021-06-11 22:26:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12\supermall\src\views\detail\Detail.vue
-->
<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="goodsList">
      </goods-list>
       <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    </scroll>
    <detail-bottom-bar @addCart="addToCart">
      
    </detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import{itemListenerMixin,backTopMixin} from 'common/mixin'
  import{debounce} from 'common/utils'
  import {getDetail, Goods, Shop, GoodsParam,getRecommend} from "network/detail";
  import {mapActions} from 'vuex'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      GoodsList,
      Scroll
    },
    mixins:[itemListenerMixin,backTopMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo:{},
        goodsList:[],
        themeTopYs:[],
        getThemeTopY:null,
        currentIndex:0,
        message:'',
        show:false
       
      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid

      // 2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        // 1.获取顶部的图片轮播数据
        //console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages

        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //6取出评论信息
        if(data.rate.cRate!==0){
          this.commentInfo=data.rate.list[0]
        }
      })
          //3.请求推荐数据
        getRecommend().then(res=>{
              //console.log(res);
              this.goodsList=res.data.list;
        })
        //给getThemeTopy赋值
        this.getThemeTopY=debounce(()=>{
          this.themeTopYs=[]
              this.themeTopYs.push(0);
              this.themeTopYs.push(this.$refs.params.$el.offsetTop);
              this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
              this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
              this.themeTopYs.push(Number.MAX_VALUE);
              //console.log(this.themeTopYs);
        },100)
      },
       mounted () {
        //console.log(this.$refs.tabControl.$el);
        //console.log(this.$refs.tabControl.$el.offsetTop);
      },
        destroyed () {
            this.$bus.$off('itemImgLoad',this.itemImgListener);
        },
        activated () {
            //console.log(' dactivated');
            this.$refs.scroll.scrollTo(0,this.saveY,0)
        },
        deactivated () {
            //console.log('d deactivated');
            //保存y值
            this.saveY=this.$refs.scroll.getScroll();
        },
    methods: {
      ...mapActions(['addCart']),
      detailImageLoad() {
        this.newRefresh();
        this.getThemeTopY()
      },
      addToCart(){
        //console.log("加入购物车")
        //获取购物车需要展示的信息
        const product={};
        product.image=this.topImages[0];
        product.title=this.goods.title;
        product.desc=this.goods.desc;
        product.price=this.goods.realPrice;
        product.iid=this.iid;
        //console.log(product);
        //将商品添加到购物车里
        //this.$store.commit('addCart',product);
        //this.$store.dispatch('addCart',product)
        //显示商品添加成功
        // this.$store.dispatch('addCart',product).then(res=>{
        //   console.log(res)
        // })
        this.addCart(product).then(res=>{
          //console.log(res)
        this.$toast.show(res,2000)
        //console.log(this.$toast)
        })
      },
      titleClick(index){
        console.log(index);
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100);
      },
      contentScroll(position){
        //获取y的值
        const positionY=-position.y
        this.isShowBackTop = (-position.y) > 1000
            //决定tabControl是否吸顶(position:fixed)
        this.isTabFixed=(-position.y)>this.tabOffsetTop
        //console.log(positionY)
        //2.positionY和主题中值进行对比
        //[0,7938,9120,9452]
        //positionY 0~7938 index=0;
        //positionY 7938~9120 index=1;
        //positionY 9120~9452 index=2;
        //positionY >9452 index=3;
        // for(let i=0;i<this.themeTopYs.length;i++){
        //   //console.log(i)
        //   //console.log(this.themeTopYs[i])
        //   if(positionY>this.themeTopYs[parseInt(i)]&&positionY<this.themeTopYs[parseInt(i+1)])
        //   console.log(i)
        // }
        // let length=this.themeTopYs.length;
        // for(let i=0;i<length;i++){
        //    if(this.currentIndex!==i&&((i<length-1&&positionY>=this.themeTopYs[parseInt(i)]&&positionY<this.themeTopYs[parseInt(i+1)])||(i==length-1&&positionY>=this.themeTopYs[i]))){
        //      //console.log(i);
        //      this.currentIndex=i;
        //      this.$refs.nav.currentIndex=this.currentIndex;
        //    }
        //   //       if((i<length-1&&positionY>this.themeTopYs[parseInt(i)]&&positionY<this.themeTopYs[parseInt(i+1)])||(i==length-1&&positionY>this.themeTopYs[i])){
        //   //    //console.log(i);
        //   //    this.currentIndex=i;
        //   //    console.log(this.currentIndex);
        //   //    this.$refs.nav.currentIndex=this.currentIndex;
        //   //  }
        // }
        //[0,7938,9120,9452,Number.MAX_VALUE]
        let length=this.themeTopYs.length;
        for(let i=0;i<length-1;i++){
          // console.log(this.currentIndex);
            //console.log(i);
           
          
          //console.log(positionY);
          // console.log(this.themeTopYs[parseInt(i)]);
           
            // console.log(this.themeTopYs[parseInt(i+1)]);
             //console.log(this.currentIndex);
            //console.log(this.currentIndex!==i);
            // console.log(positionY>this.themeTopYs[parseInt(i)]&&positionY<this.themeTopYs[parseInt(i+1)]);
              //console.log(this.currentIndex!==i&&(positionY>this.themeTopYs[parseInt(i)]&&positionY<this.themeTopYs[parseInt(i+1)]));
           if(this.currentIndex!==i&&(positionY>this.themeTopYs[parseInt(i)]&&positionY<this.themeTopYs[parseInt(i+1)])){
             //console.log(i);
             this.currentIndex=i;
            //console.log(this.currentIndex);
             this.$refs.nav.currentIndex=this.currentIndex;
           }
      }
    }
  }
  }
</script>

<style scoped>
#detail {
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 58px;
    left: 0;
    right: 0;
  }
</style>
