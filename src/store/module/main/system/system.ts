import IRootState from '@/store/type'
import { Module } from 'vuex'
import { ISystemType } from './type'
import {
  deletePageDataById,
  getPageListDate
} from '@/service/main/system/system'
import { ElMessage } from 'element-plus'

const mainSystemModule: Module<ISystemType, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      userList: [],
      userListCount: 0,
      roleList: [],
      roleListCount: 0,
      goodsList: [],
      goodsListCount: 0,
      menuList: [],
      menuListCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any) {
      state.userList = userList
    },

    changeUserListCount(state, userListCount: number) {
      state.userListCount = userListCount
    },

    changeRoleList(state, roleList: any) {
      state.roleList = roleList
    },

    changeRoleListCount(state, roleListCount: number) {
      state.roleListCount = roleListCount
    },
    changeGoodsList(state, goodsList: any) {
      state.goodsList = goodsList
    },

    changeGoodsListCount(state, goodsListCount: number) {
      state.goodsListCount = goodsListCount
    },
    changeMenuList(state, menuList: any) {
      state.menuList = menuList
    },

    changeMenuListCount(state, menuListCount: number) {
      state.menuListCount = menuListCount
    }
  },
  actions: {
    async getPageInfoList({ commit }, payload: any) {
      const pageName = payload.pageName
      let pageUrl = ''
      switch (pageName) {
        case 'users':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
        case 'goods':
          pageUrl = '/goods/list'
          break
        case 'menu':
          pageUrl = '/menu/list'
          break
      }
      const res = await getPageListDate(pageUrl, payload.pageInfo)

      const { list, totalCount } = res.data

      switch (pageName) {
        case 'users':
          commit('changeUserList', list)
          commit('changeUserListCount', totalCount)
          break
        case 'role':
          commit('changeRoleList', list)
          commit('changeRoleListCount', totalCount)
          break
        case 'goods':
          commit('changeGoodsList', list)
          commit('changeGoodsListCount', totalCount)
          break
        case 'menu':
          commit('changeMenuList', list)
          commit('changeMenuListCount', totalCount)
          break
      }
    },

    async deletePageDataById({ dispatch }, payload: any) {
      let { pageName } = payload
      const id = payload.id
      if (pageName === 'user') pageName = 'users'
      const url = `${pageName}/${id}`
      await deletePageDataById(url)

      ElMessage({
        type: 'success',
        message: '删除成功'
      })

      await dispatch('getPageInfoList', {
        pageName,
        pageInfo: {
          size: 5,
          offset: 0
        }
      })
    }
  },
  getters: {
    pageData(state) {
      return (value: string) => {
        if (value === 'users') value = 'user'
        return (state as any)[`${value}List`]
      }
    },
    pageDataCount(state) {
      return (value: string) => {
        if (value === 'users') value = 'user'
        return (state as any)[`${value}ListCount`]
      }
    }
  }
}

export default mainSystemModule
