<template>
  <div>
    <router-view></router-view>
    <MinTabbar />
  </div>
</template>

<script>
import MinTabbar from "./components/content/tabber/MinTabbar.vue"
export default {
  name:'App',
  components:{
    MinTabbar
  }
}
</script>

<style>
  /* @import './assets/css/base.css'; */

</style>
