import type { IBreadcrumb } from '@/base-ui/breadcrumb/types/type'
import { RouteRecordRaw } from 'vue-router'

const mapMenusToRoutes = (userMenus: any[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []

  // 先去加载所有的routes
  const allRoutes: RouteRecordRaw[] = []

  const routeFile = require.context('@/router/main', true, /\.ts$/)
  routeFile.keys().forEach((item) => {
    const res = require('@/router/main' + item.split('.')[1])
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

export const pathMapToMenu = (
  userRoleMenu: any[],
  currentPath: string,
  breadcrumbList?: IBreadcrumb[]
): any => {
  for (const menu of userRoleMenu) {
    if (menu.type === 1) {
      const currentMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (currentMenu) {
        breadcrumbList?.push({ name: menu.name })
        breadcrumbList?.push({ name: currentMenu.name })
        return currentMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export const pathMapToBreadcrumb = (
  userRoleMenu: any[],
  currentPath: string
): IBreadcrumb[] => {
  const breadcrumbList: IBreadcrumb[] = []
  pathMapToMenu(userRoleMenu, currentPath, breadcrumbList)
  return breadcrumbList
}

export const menuMapToPermission = (userMenus: any[]) => {
  const permissionList: string[] = []

  const _getPermission = (menus: any) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _getPermission(menu.children ?? [])
      } else {
        permissionList.push(menu.permission)
      }
    }
  }

  _getPermission(userMenus)

  return permissionList
}

export default mapMenusToRoutes
