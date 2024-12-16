import { createRouter, createWebHistory } from 'vue-router'

import NotFoundPage from '../views/NotFoundPage.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', redirect: '/main/home'},
    {path: '/main', component: () => import('../views/Main.vue'), children: [
        {path: 'home', name:'home' , meta: {title: '首页'},component:Home,},
      ]
    },

    {
      path: '/404',
      name: 'NotFoundPage',
      meta: {title: '404找不到页面'},
      component: NotFoundPage
    },
    {path: '/:pathMatch(.*)*', redirect: '/404'}
  ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Vue3'
    next()
})

export default router
