import { ISystemType } from './module/main/system/type'
import ILoginState from './module/login/type'
import IDashboardState from './module/main/analysis/types/type'
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
  dashboard: IDashboardState
}

export type IStoreType = IRootState & IMuduleType
