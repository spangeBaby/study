
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/mui.min.css'
import 'mint-ui/lib/style.css'
import router from './router/router'
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
Vue.use(Router)
import Resource from 'vue-resource'
Vue.use(Resource)
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: c => c(App),
  router
})
