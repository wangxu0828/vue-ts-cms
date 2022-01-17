import IRootState from '@/store/type'
import { Module } from 'vuex'
import IDashboardState from './types/type'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, payload) {
      state.categoryGoodsCount = payload
    },
    changeCategoryGoodsSale(state, payload) {
      state.categoryGoodsSale = payload
    },
    changeCategoryGoodsFavor(state, payload) {
      state.categoryGoodsFavor = payload
    },
    changeAddressGoodsSale(state, payload) {
      state.addressGoodsSale = payload
    }
  },
  actions: {
    async getCategoryGoodsCount({ commit }) {
      const res = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', res.data)
    },
    async getCategoryGoodsSale({ commit }) {
      const res = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', res.data)
    },
    async getCategoryGoodsFavor({ commit }) {
      const res = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', res.data)
    },
    async geAddressGoodsSale({ commit }) {
      const res = await getAddressGoodsSale()
      commit('changeAddressGoodsSale', res.data)
    },
    getAllGoodsDate({ dispatch }) {
      dispatch('getCategoryGoodsCount')
      dispatch('getCategoryGoodsSale')
      dispatch('getCategoryGoodsFavor')
      dispatch('geAddressGoodsSale')
    }
  }
}

export default dashboardModule
