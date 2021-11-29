import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZYRequestInterceptors {
  // interceptors 规定传入的value中的可用值
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface ZYRequestConfig extends AxiosRequestConfig {
  // interceptors 规定传入的key
  interceptors?: ZYRequestInterceptors
  showLoading?: boolean
}
