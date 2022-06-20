import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Engagement from '../views/Engagement.vue'
import Join from '../views/Join.vue'
import About from '../views/AboutView.vue'
import Home from '../views/Homepage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/engage',
    name: 'engage',
    component: Engagement
  },

  {
    path: '/join',
    name: 'join',
    component: Join
  },
  {
    path: '/home',
    name:'homepage',
    component: Home
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
