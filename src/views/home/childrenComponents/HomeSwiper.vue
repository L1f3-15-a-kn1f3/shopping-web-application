<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href='item.link'>
        <img :src='item.image' alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'
import {getHomeMultiData} from "@/network/home";

export default {
  name: "MainBanner",
  components:{
    Swiper,
    SwiperItem
  },
  data() {
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

</style>