import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
// import { Swipe, SwipeItem } from 'vant';

createApp(App).use(store).use(router).use(Vant).mount('#app')

// 引入css初始化文件
require('./assets/css/base.css')
// 引入vant样式文件
import 'vant/lib/index.css'