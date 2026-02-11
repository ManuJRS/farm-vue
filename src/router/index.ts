import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: ROUTES.Home,
      component: () => import('@/views/HomeView.vue'),
    },
    { path: ROUTES.About, component: () => import('@/views/AboutView.vue') },
    { path: ROUTES.Services, component: () => import('@/views/ServicesView.vue') },
    { path: ROUTES.Contact, component: () => import('@/views/ContactView.vue') },
    { path: ROUTES.Privacy, component: () => import('@/views/PrivacyView.vue') },
    { path: ROUTES.Terms, component: () => import('@/views/TermsView.vue') },
    { path: ROUTES.ServiceIntern, component: () => import('@/views/ServiceView.vue') },
  ],
})

export default router
