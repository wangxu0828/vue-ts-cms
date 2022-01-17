import { IDataType } from './../../types'
import wxRequest from '@/service'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export const getCategoryGoodsCount = async (): Promise<IDataType> => {
  return await wxRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}

export const getCategoryGoodsSale = async (): Promise<IDataType> => {
  return await wxRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export const getCategoryGoodsFavor = async (): Promise<IDataType> => {
  return await wxRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export const getAddressGoodsSale = async (): Promise<IDataType> => {
  return await wxRequest.get({
    url: DashboardAPI.addressGoodsSale
  })
}
