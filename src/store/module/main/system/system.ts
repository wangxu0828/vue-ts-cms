import IRootState from '@/store/type'
import { Module } from 'vuex'
import { ISystemType } from './type'
import { getPageListDate } from '@/service/main/system/system'

const mainSystemModule: Module<ISystemType, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      userList: [],
      userListCount: 0,
      roleList: [],
      roleListCount: 0
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
    }
  },
  actions: {
    async getPageInfoList({ commit }, payload: any) {
      const pageName = payload.pageName
      let pageUrl = ''
      switch (pageName) {
        case 'user':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
      }
      const res = await getPageListDate(pageUrl, payload.pageInfo)
      const { list, totalCount } = res.data

      switch (pageName) {
        case 'user':
          commit('changeUserList', list)
          commit('changeUserListCount', totalCount)
          break
        case 'role':
          commit('changeRoleList', list)
          commit('changeRoleListCount', totalCount)
          break
      }
    }
  },
  getters: {
    pageData(state) {
      return (value: string) => {
        return (state as any)[`${value}List`]
      }
    },
    pageDataCount(state) {
      return (value: string) => {
        return (state as any)[`${value}ListCount`]
      }
    }
  }
}

export default mainSystemModule
