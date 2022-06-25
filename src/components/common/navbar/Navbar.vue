<template>
  <div class="nav_bar">
    <div class="nav_bar_left"><slot name="left"></slot></div>
    <div class="nav_bar_center"><slot name="center"></slot></div>
    <div class="nav_bar_right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .nav_bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow: 0 -2px 3px rgba(255, 166, 166, 0.436) inset;
    /* padding-bottom: 5px; */
  }
  .nav_bar_left,
  .nav_bar_right{
    width: 80px;
  }
    .nav_bar_center{
      flex: 1;
    }
</style>