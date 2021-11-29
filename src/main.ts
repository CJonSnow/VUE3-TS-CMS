import { createApp } from 'vue'
// import { registerApp } from './global'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import router from './router'
import store from './store'
import zyRequest from './service/index'

// import './service/axios_demo'

// const app = createApp(App)
// registerApp(app)
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

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
// })
zyRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
