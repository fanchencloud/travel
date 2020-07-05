import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/City'
import Detail from '../components/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 解决第一个页面滚动进入第二个页面还停留在第一个页面的位置的方法
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
