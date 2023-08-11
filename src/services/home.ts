import type { PageResult } from '@/types/global'
import type {
  BannerItem,
  CategoryItem,
  HotRecommendItem,
  GuessYouLikeItem,
} from '@/types/home'
import type { PageParams } from '@/types/global'
import { http } from '@/utils/http'

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
  // 首页前台分类
  CATEGORY_URL = '/home/category/mutli',
  // 首页热门推荐
  HOT_RECOMMEND_URL = '/home/hot/mutli',
  // 猜你喜欢
  /**
   * Query 参数
   * page integer 页码默认值1 可选 示例值: 1
   * pageSize integer 页大小默认是10 可选
   */
  GUESS_YOU_LIKE_URL = '/home/goods/guessLike',
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

// 首页前台分类接口
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: API.CATEGORY_URL,
  })
}

// 首页热门推荐接口
export const getHomeHotRecommendAPI = () => {
  return http<HotRecommendItem[]>({
    method: 'GET',
    url: API.HOT_RECOMMEND_URL,
  })
}

// 猜你喜欢接口
export const getGuessYouLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessYouLikeItem>>({
    method: 'GET',
    url: API.GUESS_YOU_LIKE_URL,
    data,
  })
}
