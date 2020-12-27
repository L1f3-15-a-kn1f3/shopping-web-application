<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">江淮直卖通</div>
    </nav-bar>
    <home-swiper></home-swiper>

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childrenComponents/HomeSwiper";

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
  },

}
</script>
<style scoped>
.home-nav{
  background-color: red;
  color: #f6f6f6;
}
</style>