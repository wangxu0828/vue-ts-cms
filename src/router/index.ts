import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import cache from '@/utils/cache'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  // setupStore()

  if (to.path !== '/login') {
    const token = cache.getCache('token')
    if (!token) {
      console.log(13213)

      ElMessage({
        type: 'warning',
        message: '请登录'
      })

      return '/login'
    }
  }

  if (to.path === '/main') {
    return '/main/analysis/overview'
  }
})

export default router
