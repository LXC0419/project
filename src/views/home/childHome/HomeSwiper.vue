<template>
  <div>
    <Swipe>
      <!-- <van-swipe-item>1</van-swipe-item> -->
      <van-swipe-item v-for="val in banners" :key="val.sort">
        <a :href="val.link"><img :src="val.image" :title="val.title" /></a>
      </van-swipe-item>
    </Swipe>
  </div>
</template>

<script>
import Swipe from '../../../components/common/rotation/Swipe.vue'
export default {
  name:'HomeSwiper',
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swipe
  },
}
</script>

<style scpoed>

  .van-swipe-item img {
    width: 100%;
  }

</style>