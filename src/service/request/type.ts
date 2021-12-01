import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface ZYRequestInterceptors<T = AxiosResponse> {
  // interceptors 规定传入的value中的可用值
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface ZYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  // interceptors 规定传入的key
  interceptors?: ZYRequestInterceptors<T>
  showLoading?: boolean
}
