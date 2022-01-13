import { useStore } from 'vuex'

export const usePermission = (pageName: string, handleName: string) => {
  const store = useStore()
  const permissionList = store.state.login.permissionList
  const verifyPermission = `system:${pageName}:${handleName}`
  // console.log(store.state.login.permissionList)

  return permissionList.find((item: string) => item === verifyPermission)
}
