import { createApp } from 'vue'
// import { registerApp } from './global'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import router from './router'
import store from './store'

import './service/axios_demo'

// const app = createApp(App)
// registerApp(app)
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
