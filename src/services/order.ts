import type { OrderCreateParams, OrderCreateResult, OrderPreResult } from '@/types/order'
import { http } from '@/utils/http'

enum API {
  // 预支付订单
  PREORDER_URL = '/member/order/pre',
  // 立即购买
  BUY_URL = '/member/order/pre/now',
  // 提交订单
  SUBMIT_URL = '/member/order',
}

// 预支付订单
export function getMemberOrderPreAPI() {
  return http<OrderPreResult>({
    url: API.PREORDER_URL,
    method: 'GET',
  })
}

// 立即购买
export function postMemberOrderPreNowAPI(data: {
  skuId: string
  count: string
  addressId?: string
}) {
  return http<OrderPreResult>({
    url: API.BUY_URL,
    method: 'GET',
    data,
  })
}

// 提交订单
export function postMemberOrderAPI(data: OrderCreateParams) {
  return http<OrderCreateResult>({
    url: API.SUBMIT_URL,
    method: 'POST',
    data,
  })
}