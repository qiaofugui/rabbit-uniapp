<script setup lang="ts">
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

const activeIndex = ref(0)

// 当swiper下标发送变化时触发
const onChange: UniHelper.SwiperOnChange = (e) => {
  // 非空断言，主观上排除掉空值的可能性
  activeIndex.value = e.detail!.current
}

// 定义 props
defineProps<{
  list: BannerItem[]
}>()
</script>

<template>
  <view class="carousel">
    <swiper
      :circular="true"
      :autoplay="false"
      :interval="3000"
      @change="onChange"
      :acceleration="false"
    >
      <swiper-item v-for="item in list" :key="item.id">
        <navigator :url="item.hrefUrl" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
@import './styles/XtxSwiper.scss';
</style>
