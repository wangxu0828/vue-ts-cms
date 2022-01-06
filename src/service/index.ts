import cache from '@/utils/cache'
// service同意出口
import WXRequest from './request'
// import store from '@/store'

const wxRequest = new WXRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: process.env.VUE_APP_TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = cache.getCache('token')
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (error) => {
      return error
    }
  },
  showLoading: true
})

export default wxRequest
