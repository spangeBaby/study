import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Resource from 'vue-resource'
Vue.use(Resource)
Vue.http.options.root= 'https://locally.uieee.com'
Vue.http.options.emulateJSON = true
import Mui from 'mint-ui'
Vue.use(Mui)
import App from './App'
import './lib/mui/css/icons-extra.css'
import 'mint-ui/lib/style.css'
import router from './router/router'
import './lib/mui/css/mui.min.css'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: c => c(App),
  router
})
