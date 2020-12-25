import Vue from 'vue'
import App from '@/App'
import router from 'router/router'
import index from '@/store'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  store: index,
  render: h => h(App)
})//.$mount('#app')
