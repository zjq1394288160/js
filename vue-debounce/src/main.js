import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Debounce from './components/Debounce.vue'

Vue.config.productionTip = false
Vue.component('Debounce', Debounce)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
