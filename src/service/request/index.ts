import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { WXRequestConfig, WXRequestInterceptors } from './type'

import { ElLoading } from 'element-plus'

import 'element-plus/theme-chalk/el-loading.css'

import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEFAULT_LOADING = true
// 对axios封装 new一次就是一个单独的实例
class WXRequest {
  // axios实例
  instance: AxiosInstance

  interceptors?: WXRequestInterceptors
  // 是否显示loading
  showLoading?: boolean
  // ElLoading.service返回值
  loading?: LoadingInstance
  constructor(config: WXRequestConfig) {
    this.instance = axios.create(config)
    // 当前实例请求拦截器
    this.showLoading = config?.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 当前实例响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加每个实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, .5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()

        const data = res.data

        if (data.returnCode === '-1001') {
          console.log('请求失败~,错误信息')
        } else {
          return data
        }
        return res.data
      },
      (err) => {
        this.loading?.close()
        // 例子: 判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404的错误~')
        }
        return err
      }
    )
  }
  request<T>(config: WXRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1. 单个请求对于config的处理
      // 因为该请求参数会被单个请求实例拦截器过滤一遍,所以也需要拦截之后的值
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 2.判断是否需要显示Loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          this.showLoading = DEFAULT_LOADING

          // 将结果放回回去
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  get<T>(config: WXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: WXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: WXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: WXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default WXRequest
