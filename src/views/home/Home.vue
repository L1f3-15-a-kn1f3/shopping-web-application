<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">江淮直卖通</div>
    </nav-bar>
    <img alt="Vue logo" src="../../assets/img/logo.png">

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultiData} from "@/network/home";

export default {
  name: 'Home',
  components: {
    NavBar
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
      console.log(this.$data);
    })
  }
}
</script>
<style scoped>
.home-nav{
  background-color: red;
  color: #f6f6f6;
}
</style>