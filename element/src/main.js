// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'
import 'common/stylus/index.styl'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false
var router = new VueRouter({
    linkActiveClass: 'active',
    routes: [{
        path: '/goods',
        component: goods
    }, {
        path: '/ratings',
        component: ratings
    }, {
        path: '/seller',
        component: seller
    }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
router.push('/goods')
