import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.less'

import App from './App.vue'
import router from '@/router'

import store from '@/store'
import { setupStore } from '@/store'

// 全局注册
import { globalRegister } from '@/global'

const app = createApp(App)
globalRegister(app)
setupStore()

app.use(router).use(store).mount('#app')
