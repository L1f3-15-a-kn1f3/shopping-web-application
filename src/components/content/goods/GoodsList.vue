<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item" :key="item.title"/>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
  margin-top: 5px;
  padding-bottom: 70px;
}
</style>