import { createApp } from 'vue'

import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { globalRegister } from '@/global'

const app = createApp(App)
globalRegister(app)
app.use(router).use(store).mount('#app')
