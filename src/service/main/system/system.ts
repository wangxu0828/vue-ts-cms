import wxRequest from '@/service'
import { IDataType } from '../../types'

export const getPageListDate = async (
  url: string,
  queryInfo: any
): Promise<IDataType<any>> => {
  return await wxRequest.post({
    url,
    data: queryInfo
  })
}

export const deletePageDataById = async (
  url: string
): Promise<IDataType<any>> => {
  return await wxRequest.delete({
    url
  })
}

export const updatePageData = async (
  url: string,
  newInfo: any
): Promise<IDataType<any>> => {
  return await wxRequest.post({
    url,
    data: newInfo
  })
}

export const editPageData = async (
  url: string,
  editInfo: any
): Promise<IDataType<any>> => {
  return await wxRequest.patch({
    url,
    data: editInfo
  })
}
