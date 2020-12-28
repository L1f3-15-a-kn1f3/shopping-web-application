<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">蘑菇GAI</div>
    </nav-bar>
    <home-swiper :banners = banners></home-swiper>
    <recommend-view :commends = recommends></recommend-view>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childrenComponents/HomeSwiper";
import RecommendView from "@/views/home/childrenComponents/RecommendView";
import {getHomeMultiData} from "@/network/home";

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  data(){
    return {
      banners:[],
      recommends:[]
    }
  },
  created() {
    getHomeMultiData()
        .then(res => {
          console.log(res.data)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
          console.log(this.banners);
        })
  }

}
</script>
<style scoped>

.home-nav{
  background-color:#ff8198;
  color: #f6f6f6;
}
</style>