import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
import { http } from '@/utils/http'

enum API {
  // 特惠推荐
  // 爆款推荐
  // 一战全迈
  // 新鲜好物
}

export const getHotRecommendAPI = (url: string, data?: PageParams & { subType?: string }) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data
  })
}
