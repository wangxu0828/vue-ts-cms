import { RouteRecordRaw } from 'vue-router'

const mapMenusToRoutes = async (
  userMenus: any[]
): Promise<RouteRecordRaw[]> => {
  const routes: RouteRecordRaw[] = []

  // 先去加载所有的routes
  const allRoutes: RouteRecordRaw[] = []

  const routeFile = require.context('@/router/main', true, /\.ts$/)
  await routeFile.keys().forEach(async (item) => {
    const res = await require('@/router/main' + item.split('.')[1])
    allRoutes.push(res.default)
  })

  const _recuresGetRoute = (userMenus: any) => {
    for (const menu of userMenus) {
      if (menu.type === 2) {
        const route = allRoutes.find((routeItem) => routeItem.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _recuresGetRoute(menu.children)
      }
    }
  }

  _recuresGetRoute(userMenus)
  // 根据菜单获取需要加载的routes

  return routes
}

export default mapMenusToRoutes
