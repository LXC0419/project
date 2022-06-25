<template>
  <div class="home">
    <Navbar class="nav_bar">
        <template v-slot:center >
          <div class="nav_bar_center">购物街</div>
        </template>
    </Navbar>
    <!-- 轮播图 -->
    <Homeswiper :banners="banners" class="swipemini" />
    <!-- 推荐 -->
    <Recommend :recommends="recommends" class="recommend" />
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar/Navbar.vue'
// 调用后台数据
import {getHomedata} from '../../network/nethome'
// 调用轮播
import Homeswiper from './childHome/HomeSwiper.vue'
// 调用推荐recommend 
import Recommend from './childHome/Recommend.vue'

export default {
  name:'home',
  data(){
    return {
      banners:[],
      recommends:[],
    }
  },
  components:{
    Navbar,
    Homeswiper,
    Recommend 
  },
    created() {
      getHomedata().then(res =>{
      this.banners=res.data.data.banner.list
      this.recommends=res.data.data.recommend.list
      console.log(res.data.data.recommend.list)
    }) 
  }, 
}
</script>

<style scoped>
  .nav_bar {
    background-color:rgb(200, 144, 153);
  }
  .nav_bar_center {
    text-align: center;
      color: #fff;
      font-weight: 700;
      font-size: 20px;
  }
  /* 轮播图 */
  .swipemini {
    width: 100%;
    height: 195px;
  }
  /* 推荐 */
  .recommend {
    height: 145px;
    padding-top:15px;
    box-sizing: border-box;
  }
</style>