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
