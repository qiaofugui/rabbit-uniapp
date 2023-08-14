"use strict";
const common_vendor = require("../common/vendor.js");
const services_home = require("../services/home.js");
require("../utils/http.js");
require("../stores/index.js");
require("../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "XtxGuess",
  setup(__props, { expose }) {
    const guessList = common_vendor.ref([]);
    const pageParams = common_vendor.ref({
      page: 1,
      pageSize: 10
    });
    const finish = common_vendor.ref(false);
    const getGuessYouLikeData = async () => {
      if (finish.value) {
        return common_vendor.index.showToast({
          icon: "none",
          title: "没有更多数据了"
        });
      }
      const res = await services_home.getGuessYouLikeAPI(pageParams.value);
      guessList.value.push(...res.result.items);
      if (pageParams.value.page < res.result.pages) {
        pageParams.value.page++;
      } else {
        finish.value = true;
      }
    };
    common_vendor.onMounted(() => {
      getGuessYouLikeData();
    });
    const resetDate = () => {
      pageParams.value.page = 1;
      guessList.value = [];
      finish.value = false;
    };
    expose({
      getGuessYouLikeData,
      resetDate
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(guessList.value, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id,
            e: `/pages/goods/goods?id=${item.id}`
          };
        }),
        b: common_vendor.t(finish.value ? "没有更多数据了~" : "正在加载...")
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Temp/uniapp/rabbit-uniapp/src/components/XtxGuess.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=XtxGuess.js.map
