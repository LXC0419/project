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
    <!-- 特征 -->
    <Feature  />
    <!-- 选项卡 -->
    <Option :titles="['流行','新款','精选']" class="option" @tabClick="tabClick" />
    <!-- 选项卡的流行 -->
    <GoodsList :goods="goods[currentType].list" />

  </div>
</template>

<script>
// 引用导航
import Navbar from '../../components/common/navbar/Navbar.vue'
// 调用轮播
import Homeswiper from './childHome/HomeSwiper.vue'
// 调用推荐recommend 
import Recommend from './childHome/Recommend.vue'
// 调用特征feature
import Feature from './childHome/HomeFeature.vue'
// 引用选项卡
import Option from '../../components/common/option/Option.vue'
// 引用选项卡的流行
import GoodsList from '../../components/content/goods/GoodsList.vue'

// 调用后台数据
import {getHomedata,getHomeGood} from '../../network/nethome'


export default {
  name:'home',
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      currentType:'pop'
    }
  },
  components:{
    Navbar,
    Homeswiper,
    Recommend ,
    Feature,
    Option,
    GoodsList
  },
  methods:{
  tabClick(index){
    switch(index){
      case 0:
        this.currentType='pop'
        break
      case 1:
        this.currentType='new'
        break 
      case 2:
        this.currentType='sell'
        break
    }
  },

    getHomedatas(){
      getHomedata().then(res =>{
      this.banners=res.data.data.banner.list
      this.recommends=res.data.data.recommend.list
      // console.log(res.data.data.recommend.list)
      },err=>{
        console.log('接受不到数据',err)
      }) 
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      // this.goods[type].page=page
      getHomeGood(type,page).then(res=>{
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page+=1
      },err=>{
        console.log('选项卡数据出错啦',err)
      })
    }
  },
    created() {
      this.getHomedatas()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
  }, 
}
</script>

<style scoped>
  .nav_bar {
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
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
    margin-top: 44px;
    width: 100%;
  }
  /* 推荐 */

  /* 选项卡 */
  .option {
    position: sticky;
    top: 44px;
    /* bottom: 100px; */
    background-color: #eee;
  }
  
</style>