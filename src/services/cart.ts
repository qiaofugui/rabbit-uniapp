import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

enum API {
  // 加入购物车
  ADDCART_URL = '/member/cart',
  // 获取购物车列表
  CARTLIST_URL = '/member/cart',
  // 删除购物车
  DELETECART_URL = '/member/cart',
  // 选中/不选中/修改数量购物车商品
  UPDATECART_URL = '/member/cart/',
}

// 加入购物车
export const postMemberCartAPI = (data: { skuId: string, count: number }) => {
  return http({
    method: 'POST',
    url: API.ADDCART_URL,
    data
  })
}

// 获取购物车列表
export const getMemberCartAPI = () => {
  return http<CartItem>({
    method: 'GET',
    url: API.CARTLIST_URL
  })
}

// 删除购物车
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: `${API.DELETECART_URL}`,
    data
  })
}

// 选中/不选中/修改数量购物车商品
export const putMemberCartBySkuIdAPI = (skuId: string, data: { selected?: boolean, count?: number }) => {
  return http({
    method: 'PUT',
    url: `${API.UPDATECART_URL}${skuId}`,
    data,
  })
}