import ILoginState from './module/login/type'

export default interface IRootState {
  name: string
  password: string
}

export interface IMuduleType {
  login: ILoginState
}

export type IStoreType = IRootState & IMuduleType
