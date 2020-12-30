<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import betterScroll from 'better-scroll'

export default {
  name: "Scroll",
  data(){
    return {
      bs:undefined
    }
  },
  props:{

  },
  mounted() {
    this.bs = new betterScroll(document.querySelector('.wrapper'),{

    })
  }

}
</script>

<style scoped>
.wrapper{
  overflow: hidden;
}
</style>