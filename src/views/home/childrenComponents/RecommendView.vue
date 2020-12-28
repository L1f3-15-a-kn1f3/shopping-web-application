<template>
  <div class="recommends">
    <div v-for="(item,index) in commends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" class="recommend-img">
        <div v-text="item.title" class="recommend-text"></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    commends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommends{
  display: flex;
  width: 100%;
  text-align: center;
  padding: 10px 0 20px;
  font-size: 13px;
  border-bottom: 8px solid #eeeeee;
}

.recommend-text{
  margin-top: 6px;
}
.recommend-item{
  flex: 1;
}
.recommend-img{
  width:65px;
}
</style>