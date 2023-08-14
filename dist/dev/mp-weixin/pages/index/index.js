"use strict";
const common_vendor = require("../../common/vendor.js");
const services_home = require("../../services/home.js");
const composables_index = require("../../composables/index.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_XtxSwiper2 = common_vendor.resolveComponent("XtxSwiper");
  const _easycom_XtxGuess2 = common_vendor.resolveComponent("XtxGuess");
  (_easycom_XtxSwiper2 + _easycom_XtxGuess2)();
}
const _easycom_XtxSwiper = () => "../../components/XtxSwiper.js";
const _easycom_XtxGuess = () => "../../components/XtxGuess.js";
if (!Math) {
  (CustomNavbar + PageSkeleton + _easycom_XtxSwiper + CategoryPanel + HotPanel + _easycom_XtxGuess)();
}
const CustomNavbar = () => "./components/CustomNavbar.js";
const CategoryPanel = () => "./components/CategoryPanel.js";
const HotPanel = () => "./components/HotPanel.js";
const PageSkeleton = () => "./components/PageSkeleton.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const isLoading = common_vendor.ref(false);
    const bannerList = common_vendor.ref([]);
    const getHomeBannerData = async () => {
      const res = await services_home.getHomeBannerAPI();
      bannerList.value = res.result;
    };
    const categoryList = common_vendor.ref([]);
    const getHomeCategoryData = async () => {
      const res = await services_home.getHomeCategoryAPI();
      categoryList.value = res.result;
    };
    const hotRecommendList = common_vendor.ref([]);
    const getHomeHotRecommendData = async () => {
      const res = await services_home.getHomeHotRecommendAPI();
      hotRecommendList.value = res.result;
    };
    common_vendor.onLoad(async () => {
      isLoading.value = true;
      await Promise.all([
        getHomeBannerData(),
        getHomeCategoryData(),
        getHomeHotRecommendData()
      ]);
      isLoading.value = false;
    });
    const { guessRef, onScrolltolower } = composables_index.useGuessList();
    const isTriggered = common_vendor.ref(false);
    const onRefresherrefresh = async () => {
      var _a, _b;
      isTriggered.value = true;
      isLoading.value = true;
      (_a = guessRef.value) == null ? void 0 : _a.resetDate;
      await Promise.all([
        getHomeBannerData(),
        getHomeCategoryData(),
        getHomeHotRecommendData(),
        (_b = guessRef.value) == null ? void 0 : _b.getGuessYouLikeData()
      ]);
      isTriggered.value = false;
      isLoading.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isLoading.value
      }, isLoading.value ? {} : {
        b: common_vendor.p({
          list: bannerList.value
        }),
        c: common_vendor.p({
          list: categoryList.value
        }),
        d: common_vendor.p({
          list: hotRecommendList.value
        }),
        e: common_vendor.sr(guessRef, "6ef9ea76-5", {
          "k": "guessRef"
        })
      }, {
        f: isTriggered.value,
        g: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrolltolower) && common_vendor.unref(onScrolltolower)(...args)
        ),
        h: common_vendor.o(onRefresherrefresh)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Temp/uniapp/rabbit-uniapp/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
