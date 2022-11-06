import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Engagement from '../views/Engagement.vue'
import Join from '../views/Join.vue'
import About from '../views/AboutView.vue'
import Home from '../views/Homepage.vue'
import emp from '../views/Employer-based.vue'
import Lead from '../views/Leader.vue'
import Serve from '../views/Service.vue'
import Research from '../views/Research.vue'
import Int from '../views/InterCult.vue'
import Comp from '../views/Comp.vue'
import Syn from '../views/Syn.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/syn',
    name: 'syn',
    component: Syn
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
  {
    path: '/emp',
    name: 'employer',
    component: emp
  },
  {
    path: '/int',
    name: 'Intercultural',
    component: Int
  },
  {
    path: '/serve',
    name: 'service',
    component: Serve
  },
  {
    path: '/lead',
    name: 'leadership',
    component: Lead
  },
  {
    path: '/research',
    name: 'research',
    component: Research
  },
  {
    path: '/comp',
    name: 'competition',
    component: Comp
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
