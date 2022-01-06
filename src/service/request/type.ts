import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 拦截器的四个函数作为参数的接口类型
export interface WXRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// 类构造函数的参数类型,继承了axios里面原有的WXRequestConfig接口在加上自己定义的拦截函数的接口
export interface WXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: WXRequestInterceptors<T>
  showLoading?: boolean
}
