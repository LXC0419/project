<template>
  <div>
    <Navbar class="nav_bar">
        <template v-slot:center >
          <div class="nav_bar_center">购物街</div>
        </template>
    </Navbar>
    <!-- 轮播图 -->
    <vant class="vant"></vant>
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar/Navbar.vue'
// 调用后台数据
import {getHomedata} from '../../network/nethome'
// 调用轮播
import vant from '../../components/common/rotation/Vant.vue'
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
    vant
  },
    created() {
      getHomedata().then(res =>{
      // console.log(res.data.data.recommend.list)
      this.banners=res.data.data.banner.list
      this.recommends=res.data.data.recommend.list
    }) 
  }, 
}
</script>

<style scoped>
  .nav_bar {
    background-color:pink;
  }
  .nav_bar_center {
    text-align: center;
      color: #fff;
      font-weight: 700;
      font-size: 20px;
  }
  /* 轮播图 */
  .vant {
    width: 100%;
    height: 300px;
  }
</style>