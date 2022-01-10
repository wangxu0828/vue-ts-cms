import { createStore, Store, useStore as useVuexStore } from 'vuex'
import IRootState from './type'
import { IStoreType } from './type'
import login from './module/login/login'
import system from './module/main/system/system'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: '',
      password: ''
    }
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    login,
    system
  }
})

export const setupStore = (): void => {
  store.dispatch('login/loginSetupStore')
}

export const useStore = (): Store<IStoreType> => {
  return useVuexStore()
}

export default store
