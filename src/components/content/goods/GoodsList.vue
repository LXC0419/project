<template>
  <div class="goods">
    <GoodsListItem class="goods-item" v-for="val in goods" :goods_item="val" :key="val"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name:'goodslist',
  props: ['goods'],
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    width: 100%;
  }
  .goods-item {
    width: 48%;
    /* padding:2px; */
  }
</style>