import { createStore } from 'vuex'
import IRootState from './type'
import login from './module/login/login'

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
    login
  }
})

export default store

export const setupStore = (): void => {
  store.dispatch('login/loginSetupStore')
}
