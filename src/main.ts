import { createApp } from 'vue'
// import { registerApp } from './global'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import router from './router'
import store from './store'
import { setupStore } from './store'

// import './service/axios_demo'

const app = createApp(App)
app.use(store)
// 页面刷新vuex缓存数据不清空,并且要放在路由注册之前
setupStore()
app.use(router)
app.use(ElementPlus)
app.mount('#app')

// zyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// // })
// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
// zyRequest
//   .get<DataType>({
//     url: '/home/multidata'
//   })
//   .then((res) => {
//     // console.log(res.data)
//     // console.log(res.returnCode)
//     // console.log(res.success)
//   })
