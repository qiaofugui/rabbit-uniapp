import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

enum API {
  // 获取一级分类
  CATEGORY_TOP_URL = '/category/top'
}

// 获取一级分类
export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    url: API.CATEGORY_TOP_URL,
    method: 'GET'
  })
}

