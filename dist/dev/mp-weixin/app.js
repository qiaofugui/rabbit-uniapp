"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const stores_index = require("./stores/index.js");
require("./stores/modules/member.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/my/my.js";
  "./pages/cart/cart.js";
  "./pages/cart/cart2.js";
  "./pages/category/category.js";
  "./pages/hot/hot.js";
  "./pages/goods/goods.js";
  "./pages/login/login.js";
  "./pagesMember/settings/settings.js";
  "./pagesMember/profile/profile.js";
  "./pagesMember/address/address.js";
  "./pagesMember/address-form/address-form.js";
  "./pagesOrder/create/create.js";
  "./pagesOrder/detail/detail.js";
  "./pagesOrder/payment/payment.js";
  "./pagesOrder/list/list.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(() => {
      console.log("App Launch");
    });
    common_vendor.onShow(() => {
      console.log("App Show");
    });
    common_vendor.onHide(() => {
      console.log("App Hide");
    });
    return () => {
    };
  }
});
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Temp/uniapp/rabbit-uniapp/src/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(stores_index.pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=app.js.map
