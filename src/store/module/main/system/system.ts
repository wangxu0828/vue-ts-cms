import IRootState from '@/store/type'
import { Module } from 'vuex'
import { ISystemType } from './type'
import { getPageListDate } from '@/service/main/system/system'

const mainSystemModule: Module<ISystemType, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      userList: [],
      userListCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any) {
      state.userList = userList
    },

    changeUserListCount(state, userListCount: number) {
      state.userListCount = userListCount
    }
  },
  actions: {
    async getPageInfoList({ commit }, payload: any) {
      console.log(payload.pageUrl)
      console.log(payload.pageInfo)
      const res = await getPageListDate(payload.pageUrl, payload.pageInfo)
      const { list, totalCount } = res.data

      commit('changeUserList', list)
      commit('changeUserListCount', totalCount)
    }
  }
}

export default mainSystemModule
