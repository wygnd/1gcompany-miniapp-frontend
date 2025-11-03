import { createApp } from 'vue'
import App from './App.vue'
import ErrorApp from './ErrorApp.vue'
import router from './router'
import { init } from '@tma.js/sdk-vue'
import './assets/css/main.css'

import './mock-data.ts'

try {
  init()

  const app = createApp(App)

  app.use(router)

  app.mount('#app')
} catch (e) {
  console.error(e)
  createApp(ErrorApp).mount('#app')
}
