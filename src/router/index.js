import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=> import('../views/Home/Home')
const About=()=> import('../views/About/About')
const ShoppingCar=()=> import('../views/ShoppingCar/ShoppingCar')
const Profile=()=> import('../views/Profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/shoppingCar',
    component:ShoppingCar
  },
  {
    path:'/profile',
    component:Profile
  },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
