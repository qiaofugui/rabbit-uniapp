import type { AddressParams } from '@/types/address'
import { http } from '@/utils/http'

enum API {
  // 添加收获地址
  ADDRESS_ADD_URL = '/member/address',
}

// 添加收获地址
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    url: API.ADDRESS_ADD_URL,
    method: 'POST',
    data
  })
}

