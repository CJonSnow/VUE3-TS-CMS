import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface ZYRequestInterceptors {
  // interceptors 规定传入的value中的可用值
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface ZYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  // interceptors 规定传入的key
  interceptors?: ZYRequestInterceptors
  showLoading?: boolean
}
