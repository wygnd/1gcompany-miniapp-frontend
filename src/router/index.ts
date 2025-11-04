import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import MainView from '@/views/MainView.vue'
import AboutView from '@/views/AboutView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import RefundView from '@/views/RefundView.vue'
import { useUserStore } from '@/stores/user.ts'
import InfoView from '@/views/InfoView.vue'

const userStore = useUserStore()

const { isAdmin } = userStore

const defaultRoutes: RouteRecordRaw[] = [
  { path: '/', component: MainView, name: 'Главная' },
  { path: '/about', component: AboutView, name: 'О компании' },
  { path: '/privacy', component: PrivacyView, name: 'Политика конфиденциальности' },
  { path: '/refunds', component: RefundView, name: 'Список заявок на возврат' },
]

const adminRoutes: RouteRecordRaw[] = [{ path: '/info', component: InfoView, name: 'Информация' }]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: isAdmin ? [...defaultRoutes, ...adminRoutes] : defaultRoutes,
})

export default router
