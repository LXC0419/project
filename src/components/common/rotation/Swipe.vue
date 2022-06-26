<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#fff" lazy-render>
    <slot>
      <!-- <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>   -->
    </slot>
  </van-swipe> 
</template>

<script>
export default {

}
</script>

<style scoped>
.my-swipe .van-swipe-item{
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

</style>