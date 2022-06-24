<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style soped>
#tab-bar {
    position: absolute;
    display: flex;
    bottom: 0;
    width: 100%;
    height: 49px;
    background-color: #f6f6f6;
    box-shadow: 0 -3px 5px rgba(168, 142, 142, 0.216);

  }
</style>