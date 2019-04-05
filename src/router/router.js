import Home from '../components/Home'
import Member from '../components/Member'
import Shopping from '../components/Shopping'
import Search from '../components/Search'
import foodList from  '../components/food/foodList'
import foodInfo from '../components/food/foodInfo'
import bathingList from '../components/Bathing/bathingList'
import bathingInfo from '../components/Bathing/bathingInfo'
import marryList from '../components/marry/marryList'
import marryInfo from '../components/marry/marryinfo'
import singerList from '../components/Sing/singerList'
import singinfo from '../components/Sing/singInfo'
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
    { path: '/Home/List/1',
      component: foodList},
    { path: '/Home/Info/1/:id',
      component: foodInfo},
    {path :'/Home/List/2',
      component: bathingList},
    {path :'/Home/List/3',
      component: marryList},
    {path :'/Home/List/4',
      component: singerList},
   { path: '/Home/Info/2/:id',
     component: bathingInfo},
    { path: '/Home/Info/3/:id',
      component: marryInfo},
    {path :'/Home/Info/4/:id',
      component: singinfo},
  ],
  linkActiveClass: 'mui-active'
})
