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

  app.use(router)
  app.use(pinia)

  app.mount('#app')
} catch (e) {
  console.error('Error init app' ,e)
  createApp(ErrorApp).mount('#app')
}
