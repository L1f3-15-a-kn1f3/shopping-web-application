<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="../../assets/img/tabbar/tab-bar-icon-home.svg" alt="" class="icon">
      <img slot="item-icon-active" src="../../assets/img/tabbar/tab-bar-icon-home-active.svg" alt="" class="icon">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/classify">
      <img slot="item-icon" src="../../assets/img/tabbar/tab-bar-icon-type.svg" alt="" class="icon">
      <img slot="item-icon-active" src="../../assets/img/tabbar/tab-bar-icon-type-active.svg" alt="" class="icon">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="../../assets/img/tabbar/tab-bar-icon-cart.svg" alt="" class="icon">
      <img slot="item-icon-active" src="../../assets/img/tabbar/tab-bar-icon-cart-active.svg" alt="" class="icon">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="../../assets/img/tabbar/tab-bar-icon-profile.svg" alt="" class="icon">
      <img slot="item-icon-active" src="../../assets/img/tabbar/tab-bar-icon-profile_active.svg" alt="" class="icon">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
