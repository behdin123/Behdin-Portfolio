import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '@/components/views/AppHome.vue';

const routes = [
  {
    path: '/',
    name: 'AppHome',
    component: AppHome
  },
  {
    path: '/projekter',
    name: 'Projekter',
    component: () => import('@/components/views/ProjectsView.vue')
  },
  {
    path: '/projekter/:slug',
    name: 'Case',
    component: () => import('@/components/views/CaseView.vue')
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
    path: '/galleri',
    name: 'Galleri',
    component: () => import('@/components/views/ART-WORKS.vue')
  },
  {
    path: '/ART-WORKS',
    redirect: '/galleri'
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
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 90, behavior: 'smooth' };
    }
    return { top: 0 };
  },
});

export default router;