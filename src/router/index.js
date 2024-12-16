import { createRouter, createWebHistory } from 'vue-router'

import NotFoundPage from '../views/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'NotFoundPage',
      component: NotFoundPage
    },
  ]
})

export default router
