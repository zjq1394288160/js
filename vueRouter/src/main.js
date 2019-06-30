import Vue from 'vue'
import Router from './router'
import View from './components/router-view'
import Link from './components/router-link'
import index from './pages/index.vue'
import subpage from './pages/subpage.vue'

Vue.component('router-view', View);
Vue.component('router-link', Link);
const routes = [
    {
        path: '/index',
        component: index
    },
    {
        path: '/subpage',
        component: subpage
    }
]

new Vue({
  el: '#app',
  beforeCreate () {
    this.$routes = routes
  },
  render: h => h(Router)
})
