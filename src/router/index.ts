import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { firstMenu } from '@/utils/map-menus'

import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const istoken = localCache.getCache('token')
    if (!istoken) {
      return '/login'
    }
  }
  // 当为/main 时跳转到默认路径
  if (to.path === '/main') {
    return firstMenu.url
  }
  // const istoken = localCache.getCache('token')
  // if (to.path === '/login' && istoken) {
  //   return '/main'
  // }
})

export default router
