import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'


// import ElementUi from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './icons'
import './permission'
import router from './router/index'

Vue.use(Router)
// Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
