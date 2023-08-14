import { http } from '@/utils/http'

enum API {
  // 加入购物车
  ADDCART_URL = '/member/cart',
}

// 加入购物车
export const postMemberCartAPI = (data: { skuId: string, count: number }) => {
  return http({
    method: 'POST',
    url: API.ADDCART_URL,
    data
  })
}
