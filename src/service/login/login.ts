import wxRequest from '@/service'
import IAccount from './type'
import { IDataType, ILoginResult } from './type'

enum loginApi {
  accountLogin = '/login',
  userInfo = '/users/',
  roleMenu = '/role/'
}

// 登录请求
export const accountLoginRequest = async (
  account: IAccount
): Promise<IDataType<ILoginResult>> => {
  return await wxRequest.post({
    url: loginApi.accountLogin,
    data: account
  })
}

// 查询用户信息请求
export const getUserInfo = async (id: number): Promise<IDataType<any>> => {
  return wxRequest.get({
    url: loginApi.userInfo + id,
    showLoading: false
  })
}

// 查询角色菜单树
export const getUserRoleMenu = async (id: number): Promise<IDataType<any>> => {
  return wxRequest.get({
    url: loginApi.roleMenu + id + '/menu',
    showLoading: false
  })
}
