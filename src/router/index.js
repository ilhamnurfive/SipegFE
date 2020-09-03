import Vue from 'vue'
import Router from 'vue-router'
import Sipeg from './sipeg'

Vue.use(Router)

const baseRoutes = [

];

const routes = baseRoutes.concat(Sipeg);

let router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes
})



export default router