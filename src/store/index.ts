import { createStore } from 'vuex'

interface IRootState {
  name: string
  age: number
}
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
  modules: {}
})

export default store
