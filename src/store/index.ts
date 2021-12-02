import { createStore, Store, useStore as useVuexStore } from 'vuex'

import loginModule from './login/login'

import { IRootState, IStoreType } from './type'

// 最好对类型进行限制
const store = createStore<IRootState>({
  state: () => {
    return {
      name: '小明',
      age: 18,
      height: '123'
    }
  },
  mutations: {
    changeName(state) {
      console.log(state)
    }
  },
  actions: {},
  modules: {
    // 模块导入
    loginModule
  }
})

// 页面刷新vuex缓存数据不清空
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}

// 对vuex和ts的类型整合
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
