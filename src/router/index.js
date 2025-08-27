import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '@/components/views/AppHome.vue';

const routes = [
  {
    path: '/',
    name: 'AppHome',
    component: AppHome
  },
  {
    path: '/Uddannelse',
    name: 'Uddannelse',
    component: () => import('@/components/views/AppUddannelse.vue')
  },
  {
    path: '/VIDEO',
    name: 'video',
    component: () => import('@/components/views/VIDEO.vue')
  },
  {
    path: '/ART-WORKS',
    name: 'ART-WORKS',
    component: () => import('@/components/views/ART-WORKS.vue')
  },
  {
    path: '/OM-MIG',
    name: 'OM-MIG',
    component: () => import('@/components/views/OM-MIG.vue')
  },
  {
    path: '/Web-Development',
    name: 'Web-Development',
    component: () => import('@/components/views/WebDevelopment.vue')
  },
  {
    path: '/Content-Creation',
    name: 'Content-Creation',
    component: () => import('@/components/views/ContentCreation.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(/*to, from, savedPosition*/) {
    return { top: 0 };
  },
});

export default router;