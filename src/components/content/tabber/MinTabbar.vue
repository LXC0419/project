<template>
  <div>
    <Tabbar>
      <!-- 1 -->
      <Tabbar_btn paths="/home" btncolor="red">
        <template v-slot:Tab-img1>
          <img src="../../../assets/img/tabberimg/1.jpg" alt="">
        </template>
        <template v-slot:Tab-img2>
          <img src="../../../assets/img/tabberimg/2.jpg" alt="">
        </template>
        <template v-slot:Tab-txt>
          <div>首页</div>
        </template>
      </Tabbar_btn>
      <!-- 2 -->
      <Tabbar_btn paths="/clsif" btncolor="red">
        <template v-slot:Tab-img1>
          <img src="../../../assets/img/tabberimg/3.jpg" alt="">
        </template>
        <template v-slot:Tab-img2>
          <img src="../../../assets/img/tabberimg/4.jpg" alt="">
        </template>
        <template v-slot:Tab-txt>
          <div>分类</div>
        </template>
      </Tabbar_btn>
      <!-- 3 -->
      <Tabbar_btn paths="/commodity" btncolor="red">
        <template v-slot:Tab-img1>
          <img src="../../../assets/img/tabberimg/5.jpg" alt="">
        </template>
        <template v-slot:Tab-img2>
          <img src="../../../assets/img/tabberimg/6.jpg" alt="">
        </template>
        <template v-slot:Tab-txt>
          <div>商品</div>
        </template>
      </Tabbar_btn>
      <!-- 4 -->
      <Tabbar_btn paths="/myinfor" btncolor="red">
        <template v-slot:Tab-img1>
          <img src="../../../assets/img/tabberimg/7.jpg" alt="">
        </template>
        <template v-slot:Tab-img2>
          <img src="../../../assets/img/tabberimg/8.jpg" alt="">
        </template>
        <template v-slot:Tab-txt>
          <div>我的</div>
        </template>
      </Tabbar_btn>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "../../common/tabbercom/Tabbar.vue"
import Tabbar_btn from "../../common/tabbercom/Tabber-btn.vue"
export default {
  name:'MinTabbar',
  components:{
    Tabbar,
    Tabbar_btn
  }
}
</script>

<style>

</style>