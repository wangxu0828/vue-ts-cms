import { ISystemType } from './module/main/system/type'
import ILoginState from './module/login/type'

export default interface IRootState {
  name: string
  password: string
  departmentList: any[]
  roleList: any[]
  menuList: any[]
}

export interface IMuduleType {
  login: ILoginState
  system: ISystemType
}

export type IStoreType = IRootState & IMuduleType
