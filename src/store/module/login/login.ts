import { Module } from 'vuex'
import IloginState from './type'
import IRootState from '@/store/type'
import IAccount from '@/service/login/type'
import {
  accountLoginRequest,
  getUserInfo,
  getUserRoleMenu
} from '@/service/login/login'

import cache from '@/utils/cache'
import router from '@/router'

const loginModule: Module<IloginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      userRoleMenu: {}
    }
  },
  mutations: {
    changeToken(state, payload: string) {
      state.token = payload
      cache.setCache('token', payload)
    },

    changeUserInfo(state, payload: any) {
      state.userInfo = payload
      cache.setCache('userInfo', payload)
    },

    changeUserRoleMenu(state, payload: any) {
      state.userRoleMenu = payload
      cache.setCache('userRoleMenu', payload)
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginRes = await accountLoginRequest(payload)
      const { id, token } = loginRes.data
      commit('changeToken', token)

      const userInfoRes = await getUserInfo(id)
      commit('changeUserInfo', userInfoRes.data)

      const userRoleMenu = await getUserRoleMenu(id)
      commit('changeUserRoleMenu', userRoleMenu.data)

      router.push('/main')
    },

    loginSetupStore({ commit }) {
      const token = cache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }

      const userInfo = cache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }

      const userRoleMenu = cache.getCache('userRoleMenu')
      if (userRoleMenu) {
        commit('changeUserRoleMenu', userRoleMenu)
      }
    }
  },
  getters: {}
}

export default loginModule