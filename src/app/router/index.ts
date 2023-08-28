import { createRouter, createWebHistory } from 'vue-router'
import * as pages from '@/pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: pages.MainPage
    },
    {
      path: '/portfolio',
      component: pages.PortfolioPage
    }
  ]
})

export { router }
