import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant';

createApp(App).use(store).use(router).use(Swipe).use(SwipeItem).mount('#app')

// 引入css初始化文件
require('./assets/css/base.css')