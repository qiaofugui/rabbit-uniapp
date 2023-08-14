"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  CartMain();
}
const CartMain = () => "./components/CartMain.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cart2",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["safe-area-inset-bottom"]: true
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Temp/uniapp/rabbit-uniapp/src/pages/cart/cart2.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=cart2.js.map
