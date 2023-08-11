import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'

enum API {
  // 商品详情
  GOODS_DETAIL_URL = '/goods',
}

// 商品详情
export function getGoodsDetailAPI(id: string) {
  return http<GoodsResult>({
    url: API.GOODS_DETAIL_URL,
    method: 'GET',
    data: {
      id
    }
  })
}