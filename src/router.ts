import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/router/Loading/Loading.vue'
import Button from '@/router/Button/Button.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/loading', 
      components: {
        'lb-loading': Loading
      }
    },
    {
      path: '/buttons',
      components: {
        'lb-buttons': Button
      }
    }
  ]
})
