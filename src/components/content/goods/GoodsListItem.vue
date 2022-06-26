<template>
  <div class="goods_item">
    <a :href="goods_item.link">
      <img :src="goods_item.show.img" alt="">
      <div class="goods-info">
      <p>{{goods_item.title}}</p>
      <span class="price">{{goods_item.price}}</span>
      <span class="cfav">{{goods_item.cfav}}</span>
    </div>
    </a>
  </div>
</template>

<script>
export default {
  name:'goodslistitem',
  props:['goods_item']
}
</script>

<style scoped>
  .goods_item {
    /* padding-bottom: 40px; */
  }
  .goods_item img {
    width: 100%;
    border-radius:5px;
  }
  .goods-info {
    text-align: center;
    height: 40px;
    font-size: 12px;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin:3px 0;
  }
  .goods-info .price {
    margin-right: 20px;
    color: rgb(227, 99, 99);
  }
  .goods-info .cfav {
    position: relative;
    z-index: -1;

  }
  .goods-info .cfav::before {
    content: "";
    position: absolute;
    left: -14px;
    width: 14px;
    height: 14px;
    background:url(../../../assets/img/homeimg/xx.jpg) -2px -1px;
  }
</style>