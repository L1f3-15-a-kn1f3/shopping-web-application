import VueRouter from "vue-router";
import Vue from 'vue'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Classify = () => import('views/classify/Classify')
const Profile = () => import('views/profile/Profile')

const Router = new VueRouter({
  routes:[{
    path:'',
    redirect:'/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/cart',
    component: Cart
  }, {
    path: '/classify',
    component: Classify
  }, {
    path: '/profile',
    component: Profile
  }],
  mode:'history'
})

export default Router

