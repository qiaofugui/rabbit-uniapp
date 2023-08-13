import type { AddressParams } from '@/types/address'
import type { AddressItem } from '@/types/address'
import { http } from '@/utils/http'

enum API {
  // 添加收获地址
  ADDRESS_ADD_URL = '/member/address',
  // 获取收获地址列表
  ADDRESS_LIST_URL = '/member/address',
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

