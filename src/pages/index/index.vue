<script setup lang="ts">
import { ref } from 'vue'
import {
  getHomeBannerAPI,
  getHomeCategoryAPI,
  getHomeHotRecommendAPI,
} from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotRecommendItem } from '@/types/home'
import type { XtxGuessInstance } from '@/types/components'

import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'

// 是否加载中
const isLoading = ref(false)

// 轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 分类面板数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 热门推荐数据
const hotRecommendList = ref<HotRecommendItem[]>([])
const getHomeHotRecommendData = async () => {
  const res = await getHomeHotRecommendAPI()
  hotRecommendList.value = res.result
}

onLoad(async () => {
  isLoading.value = true
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotRecommendData()
  ])
  isLoading.value = false
})

// 滚动到底部加载更多
const guessRef = ref<XtxGuessInstance>()
const onScrolltolower = () => {
  guessRef.value?.getGuessYouLikeData()
}
// 自定义下拉刷新被触发
const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  isTriggered.value = true
  isLoading.value = true
  guessRef.value?.resetDate
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotRecommendData(),
    guessRef.value?.getGuessYouLikeData(),
  ])
  isTriggered.value = false
  isLoading.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />

  <!-- 滚动容器 -->
  <scroll-view refresher-enabled :refresher-triggered="isTriggered" class="scroll-view" scroll-y
    @scrolltolower="onScrolltolower" @refresherrefresh="onRefresherrefresh">

    <!-- 骨架屏幕 -->
    <PageSkeleton v-if="isLoading" />

    <template v-else>
      <!-- 轮播图 -->
      <XtxSwiper :list="bannerList" />

      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />

      <!-- 热门推荐 -->
      <HotPanel :list="hotRecommendList" />

      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f7f7f7;

  .scroll-view {
    flex: 1;
  }
}
</style>
