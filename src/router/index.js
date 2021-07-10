import { createRouter, createWebHashHistory } from 'vue-router';
import Acceuil from '../views/Accueil.vue';

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Acceuil
  },
  {
    path: '/propos',
    name: 'Propos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Propos.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
