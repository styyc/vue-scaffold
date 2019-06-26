import Vue from 'vue'
import App from './App.vue'
import {
  Container,
  Header,
  Aside,
  Main,
  Footer
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
