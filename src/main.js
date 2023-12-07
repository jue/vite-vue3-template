import { createApp } from 'vue'
import './assets/css/main.scss'
import router from './router/index.js'
import pinia from './store'

import App from './App.vue'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
