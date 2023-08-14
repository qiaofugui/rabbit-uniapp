"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "CustomNavbar",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.unref(safeAreaInsets).top + 10 + "px"
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Temp/uniapp/rabbit-uniapp/src/pages/index/components/CustomNavbar.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=CustomNavbar.js.map
