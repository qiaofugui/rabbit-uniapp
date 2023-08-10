// src/types/components.d.ts
import XtxSwiper from './XtxSwiper.vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}
