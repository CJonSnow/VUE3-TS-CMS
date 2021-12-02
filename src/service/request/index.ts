import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ZYRequestInterceptors, ZYRequestConfig } from './type'

import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

const DEFAULT_LOADING = true
class ZYRequest {
  instance: AxiosInstance
  interceptors?: ZYRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance

  constructor(config: ZYRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors
    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 添加所有的实例都有的拦截器（会先执行）
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有的实例都有的拦截器：请求拦截成功')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        // console.log('所有的实例都有的拦截器：请求拦截失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有的实例都有的拦截器：响应拦截成功')
        // 将loading移除
        this.loading?.close()
        const data = res.data
        // 根据后端所提供的状态码，显示不同信息
        if (data.returnCode === '-1001') {
          // console.log('请求失败，错误信息')
        } else {
          return res.data
        }
      },
      (err) => {
        // console.log('所有的实例都有的拦截器：响应拦截失败')
        // 将loading移除
        this.loading?.close()
        // 判断不同的HttpErrorCode 显示不同的错误信息
        if (err.response.status === 404) {
          // console.log('404错误~')
        }
        return err
      }
    )
  }

  request<T>(config: ZYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 为何在此判断，因为会在拦截器前执行
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // console.log(res)
          //  将showLoading设置成true，这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }
  get<T>(config: ZYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: ZYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: ZYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: ZYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default ZYRequest
