import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Workbench from '@/components/Workbench'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      component: Hello
    },
    {
      path: '/',
      component: Workbench
    }
  ]
})
