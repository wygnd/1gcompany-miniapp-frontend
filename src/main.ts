import { createApp } from 'vue'
import App from './App.vue'
import ErrorApp from './ErrorApp.vue'
import router from './router'
import { init } from '@tma.js/sdk-vue'
import eruda from 'eruda'
import './assets/css/main.css'

import './mock-data.ts'
eruda.init()

try {
  init()

  const app = createApp(App)

  app.use(router)

  app.mount('#app')
} catch (e) {
  console.error(e)
  createApp(ErrorApp).mount('#app')
}
