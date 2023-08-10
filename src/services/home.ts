import type { BannerItem } from '@/types/home'
import { http } from '@/utils/http.ts'

enum API {
  // 首页轮播图
  /**
   * Query 参数
   * distributionSite
   * integer
   * 可选
   * 广告区域展示位置
   * 1 为首页（默认值）
   * 2 为商品分类页
   */
  BANNER_URL = '/home/banner',
}

// 首页轮播图接口
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: API.BANNER_URL,
    data: {
      distributionSite,
    },
  })
}
