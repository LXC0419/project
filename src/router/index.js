import { createRouter, createWebHistory } from 'vue-router'

const routes = [
{
  path: '',
  redirect:'home'
},
{
  path:'/home',
  name: 'home',
  component: ()=>import('../views/home/Home.vue')
},
{
  path:'/clsif',
  name: 'Classification',
  component: ()=>import('../views/clsif/Classification.vue')
},
{
  path:'/commodity',
  name: 'commodity',
  component: ()=>import('../views/commodity/Commodity.vue')
},
{
  path:'/myinfor',
  name: 'myinfor',
  component: ()=>import('../views/myinfor/Myinfor.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
