import type { AddressParams } from '@/types/address'
import type { AddressItem } from '@/types/address'
import { http } from '@/utils/http'

enum API {
  // 添加收获地址
  ADDRESS_ADD_URL = '/member/address',
  // 获取收获地址列表
  ADDRESS_LIST_URL = '/member/address',
  // 获取收获地址详情
  ADDRESS_DETAIL_URL = '/member/address/',
  // 修改收获地址
  ADDRESS_UPDATE_URL = '/member/address/',
  // 删除收获地址
  ADDRESS_DELETE_URL = '/member/address/'
}

// 添加收获地址
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    url: API.ADDRESS_ADD_URL,
    method: 'POST',
    data
  })
}

// 获取收获地址列表
export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    url: API.ADDRESS_LIST_URL,
    method: 'GET'
  })
}

// 获取收获地址详情
export const getMemberAddressByIdAPI = (id: string) => {
  return http<AddressItem>({
    url: API.ADDRESS_DETAIL_URL + id,
    method: 'GET'
  })
}

// 修改收获地址
export const putMemberAddressByIdAPI = (id: string, data: AddressParams) => {
  return http({
    url: API.ADDRESS_UPDATE_URL + id,
    method: 'PUT',
    data
  })
}

// 删除收获地址
export const deleteMemberAddressByIdAPI = (id: string) => {
  return http({
    url: API.ADDRESS_DELETE_URL + id,
    method: 'DELETE'
  })
}
