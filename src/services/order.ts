import type { OrderPreResult } from '@/types/order'
import { http } from '@/utils/http'

enum API {
  // 预支付订单
  PREORDER_URL = '/member/order/pre',
}

// 预支付订单
export function getMemberOrderPreAPI() {
  return http<OrderPreResult>({
    url: API.PREORDER_URL,
    method: 'GET',
  })
}