import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory();

export default createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: () => import('@/pages/Game'),
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('@/pages/GameHistory'),
    }
  ]
})
