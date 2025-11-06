import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import AboutView from '@/views/AboutView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import RefundView from '@/views/RefundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: MainView, name: 'Главная' },
    { path: '/about', component: AboutView, name: 'О компании' },
    { path: '/privacy', component: PrivacyView, name: 'Политика конфиденциальности' },
    { path: '/refunds', component: RefundView, name: 'Список заявок на возврат' },
  ],
})

export default router
