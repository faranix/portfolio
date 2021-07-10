import { createRouter, createWebHashHistory } from 'vue-router';
import Accueil from '../views/Accueil.vue';

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/projets',
    name: 'Projets',
    component: () => import('../views/Projets.vue')
  },
  {
    path: '/formation',
    name: 'Formation',
    component: () => import('../views/Formation.vue')
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../views/Experience.vue')
  },
  {
    path: '/propos',
    name: 'Propos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Propos.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
