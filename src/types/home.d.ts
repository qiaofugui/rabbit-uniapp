import type { GoodsItem } from './global'

// 轮播图数据类型
export type BannerItem = {
  id: string
  imgUrl: string
  hrefUrl: string
  type: number
}

// 前台分类数据类型
export type CategoryItem = {
  id: string
  name: string
  icon: string
}

// 热门推荐数据类型
export type HotRecommendItem = {
  id: string
  alt: string
  pictures: string[]
  target: string
  title: string
  type: string
}

// 猜你喜欢数据类型
export type GuessYouLikeItem = GoodsItem
