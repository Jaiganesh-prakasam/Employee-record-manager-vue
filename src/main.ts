import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { makeServer } from '@/mirage/server'

const app = createApp(App)

app.use(createPinia())
app.use(router)


makeServer();

app.mount('#app')
