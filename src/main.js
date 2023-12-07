import { createApp } from 'vue'
import './assets/css/main.scss'
import { Icon } from '@iconify/vue'
import router from './router/index.js'
import pinia from './store'

import App from './App.vue'

const app = createApp(App)
app.component('Icon', Icon)
app.use(pinia)
app.use(router)
app.mount('#app')
