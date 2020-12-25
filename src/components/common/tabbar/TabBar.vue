<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
}
</script>

<style scoped>
#tab-bar{
  width: 100vw;
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  bottom: 0;
  text-align: center;
  /*      x  Right +     y  Down +     */
  box-shadow: 0px -2px 2px rgba(100,100,100,.1);
}
</style>
