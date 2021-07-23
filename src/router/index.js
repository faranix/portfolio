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
    path: '/a-propos',
    name: 'Propos',
    component: () => import( '../views/Propos.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/competence",
    name: "Competence",
    component: () => import("../views/Competence.vue")
  },

  // Les projets
  {
    path: "/projets/ohmyfood",
    name: "Ohmyfood",
    component: () => import("../views/projets/Ohmyfood.vue")
  },
  {
    path: "/projets/reservia",
    name: "Reservia",
    component: () => import("../views/projets/Reservia.vue")
  },
  {
    path: "/projets/orinoco",
    name: "Orinoco",
    component: () => import("../views/projets/Orinoco.vue")
  },
  {
    path: "/projets/so-pekocko",
    name: "Sopekocko",
    component: () => import("../views/projets/Sopekocko.vue")
  },
  {
    path: "/projets/groupamania",
    name: "Groupamania",
    component: () => import("../views/projets/Groupamania.vue")
  },
  {
    path: "/projets/my-beauty-break",
    name: "MyBeautyBreak",
    component: () => import("../views/projets/MyBeautyBreak.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
