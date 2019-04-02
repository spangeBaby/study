import Home from '../components/Home'
import Member from '../components/Member'
import Shopping from '../components/Shopping'
import Search from '../components/Search'
import news from '../components/List/news'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      redirect: '/Home'
    },
    { path: '/Home',
      component: Home},
    { path: '/Member',
      component: Member},
    { path: '/Shopping',
      component: Shopping},
    { path: '/Search',
      component: Search},
    { path: '/Home/news',
      component: news}
  ],
  linkActiveClass: 'mui-active'
})
