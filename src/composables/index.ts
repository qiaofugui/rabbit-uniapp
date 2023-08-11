import type { XtxGuessInstance } from '@/types/components';
import { ref } from 'vue';

// 猜你喜欢组合式函数
export const useGuessList = () => {
  // 猜你喜欢实例
  const guessRef = ref<XtxGuessInstance>()
  // 滚动触底事件
  const onScrolltolower = () => {
    guessRef.value?.getGuessYouLikeData()
  }

  // 返回
  return {
    guessRef,
    onScrolltolower
  }
}