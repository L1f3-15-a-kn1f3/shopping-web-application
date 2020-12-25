<template>
  <div class="tab-bar-item" @click="linkTo()">
<!--!Active Icon-->
    <div v-show='!isActive' class="icon-outer">
      <slot name="item-icon"></slot>
    </div>
<!--Active Icon-->
    <div v-show="isActive" class="icon-outer">
      <slot name="item-icon-active"></slot>
    </div>
<!--TEXT-->
    <div class="text-outer" :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
name: "TabBarItem",
  data(){
    return{
    }
  },
  props:{
    path:{
      type:String,
    },
    activeColor: {
      type:String,
      default:'#d81e06'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.includes(this.path)
    },
    activeStyle(){
      return this.isActive?{color: this.activeColor}:{}
    }
  },
  methods:{
    linkTo(){
      this.$router.push(this.path).catch(err=>{})
    }
  },
}
</script>
<style scoped>
.tab-bar-item{
  flex: 1;
  height: 49px;
  font-size: 14px;
  margin-top: 3px;
}
.icon-outer>img{
  margin-top: 3px;
  height: 24px;
  width: 24px;
  vertical-align: middle;
}
</style>
