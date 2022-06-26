<template>
  <div>
    <router-view></router-view>
    <MinTabbar class="mintabbar" />
    <!-- 辅助底部盒子 -->
    <!-- <div class="kb"></div> -->
  </div>
</template>

<script>
import MinTabbar from "./components/content/tabber/MinTabbar.vue"
export default {
  name:'App',
  components:{
    MinTabbar,
  }
}
</script>

<style>
  /* @import './assets/css/base.css'; */
  .mintabbar {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f6f6f6;
    box-shadow: 0 -3px 5px rgba(168, 142, 142, 0.216);
  }
  /* .kb {
    height: 5000px;
  } */
</style>
