import { ILoginState } from './login/type'

export interface IRootState {
  name: string
  age: number
}

// 模块类型
export interface IRootWithModule {
  loginModule: ILoginState
}
// 对vuex和ts的类型整合
export type IStoreType = IRootState & IRootWithModule
