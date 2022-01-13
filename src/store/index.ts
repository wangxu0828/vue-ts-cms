import { createStore, Store, useStore as useVuexStore } from 'vuex'
import IRootState from './type'
import { IStoreType } from './type'
import login from './module/login/login'
import system from './module/main/system/system'
import { getPageListDate } from '@/service/main/system/system'
import cache from '@/utils/cache'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: '',
      password: '',
      departmentList: [],
      roleList: []
    }
  },
  mutations: {
    changeDepartmentList(state, paylolad: any[]) {
      state.departmentList = paylolad
    },
    changeroleList(state, paylolad: any[]) {
      state.roleList = paylolad
    }
  },
  actions: {
    async getEntireDepartmenList({ commit }) {
      const departmentListResult = await getPageListDate('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list } = departmentListResult.data
      commit('changeDepartmentList', list)
    },
    async getEntireRoleList({ commit }) {
      const roleListResult = await getPageListDate('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list } = roleListResult.data
      commit('changeroleList', list)
    }
  },
  getters: {},
  modules: {
    login,
    system
  }
})

export const useStore = (): Store<IStoreType> => {
  return useVuexStore()
}

export default store
export const setupStore = (): void => {
  store.dispatch('login/loginSetupStore')

  if (cache.getCache('token')) {
    store.dispatch('getEntireDepartmenList')
    store.dispatch('getEntireRoleList')
  }
}
