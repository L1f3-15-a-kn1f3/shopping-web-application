<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-item"
         :class="{active:index === currentIndex}"
         @click="onClicked(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0,
    }
  },
  methods:{
    onClicked(index){
      this.currentIndex = index
    }
  }

}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  line-height: 40px;
  height: 40px;
  background-color: #f6f6f6;
  z-index: 9;
}

.tab-item{
  flex: 1;

}

.active {
  padding-bottom: 3px;
  width: 25vw;
  color:red;
  background-color: #ccc9c9;
  border-bottom: 3px red solid;
}
</style>