<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">Fucky Mall</div>
    </nav-bar>
    <home-swiper :banners = banners></home-swiper>
    <recommend-view :commends = recommends></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="titles" class="tab-ctrl" @tabClick = "tabClick"/>
    <better-scroll>
      <goods-list class="goods-list" :goods="goods[currentType].list"></goods-list>
    </better-scroll>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childrenComponents/HomeSwiper";
import RecommendView from "@/views/home/childrenComponents/RecommendView";
import FeatureView from "@/views/home/childrenComponents/FeatureView";
import TabControl from "@/components/content/tabcontrol/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import BetterScroll from "@/components/common/scroll/Scroll"

import {getHomeMultiData,getHomeGoods} from "@/network/home";

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    BetterScroll
  },
  data(){
    return {
      banners:[],
      recommends:[],
      titles:["流行","新品","热卖"],
      goods:{
        'pop':{page:0, list:[]},
        'new':{page:0, list:[]},
        'sell':{page:0, list:[]}
      },
      currentType:'pop'
    }
  },
  created() {
    //get home page main data
    this.getHomeMultiData()

    //get first page's goods data
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods:{

    /*
     *
     *网络请求相关
     *
     */
    getHomeMultiData(){
      getHomeMultiData()
      .then(res => {
        console.log(res.data)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        console.log(this.banners);
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page+1
      getHomeGoods(type,page)
      .then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].list.page += 1
        console.log(this.goods[type])
      })
    },
    /*
    *
    * 事件相关方法
    *
    * */
    tabClick( index ){
      if( index === 0 ){
        this.currentType = 'pop'
      }else if( index === 1 ){
        this.currentType = 'new'
      }else if( index === 2 ){
        this.currentType = 'sell'
      }else {
        this.currentType = 'pop'
      }
      // switch (index){
      //   case 1:
      //     this.currentType = 'pop'
      //     break
      //   case 2:
      //     this.currentType = 'new'
      //     break
      //   case 3:
      //     this.currentType = 'sell'
      // }
    }
  }

}
</script>
<style scoped>
.home{
  padding-top: 44px;
}

.home-nav{
  /*background-color:var(--color-tint);*/
  background-color: red;
  color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-ctrl{
  position: sticky;
  top: 44px;
}
.goods-list{
  z-index: 8;
}
</style>