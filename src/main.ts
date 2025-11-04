import { createApp } from 'vue'
import App from './App.vue'
import ErrorApp from './ErrorApp.vue'
import router from './router'
import { init } from '@tma.js/sdk-vue'
import './assets/css/main.css'

import './mock-data.ts'
import { createPinia } from 'pinia'

try {
  init()

  const pinia = createPinia()
  const app = createApp(App)

  app.use(pinia)
  app.use(router)

  app.mount('#app')
} catch (e) {
  console.error(e)
  createApp(ErrorApp).mount('#app')
}
