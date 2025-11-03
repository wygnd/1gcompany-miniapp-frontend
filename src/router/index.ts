import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import AboutView from '@/views/AboutView.vue'
import PrivacyView from '@/views/PrivacyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: MainView },
    { path: '/about', component: AboutView },
    { path: '/privacy', component: PrivacyView },
  ],
})

export default router
