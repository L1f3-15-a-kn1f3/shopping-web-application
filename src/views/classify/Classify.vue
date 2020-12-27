<template>
  <div class="classify">
    <nav-bar class="classify-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "Classify",
  components:{
    NavBar
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .classify-nav{
    background-color: red;
    color: white;
  }
</style>