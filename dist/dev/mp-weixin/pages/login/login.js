"use strict";
const common_vendor = require("../../common/vendor.js");
const services_login = require("../../services/login.js");
require("../../stores/index.js");
const stores_modules_member = require("../../stores/modules/member.js");
require("../../utils/http.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    let code = "";
    common_vendor.onLoad(async () => {
      const res = await common_vendor.wx$1.login();
      code = res.code;
    });
    const onGetphonenumber = async (e) => {
      console.log(e);
      const { encryptedData, iv } = e.detail;
      const res = await services_login.postLoginWxMinAPI({ code, encryptedData, iv });
      loginSuccess(res.result);
    };
    const onGetphonenumberSimple = async () => {
      const res = await services_login.postLoginWxMinSimpleAPI("15555555555");
      loginSuccess(res.result);
    };
    const loginSuccess = (profile) => {
      const memberStore = stores_modules_member.useMemberStore();
      memberStore.setProfile(profile);
      common_vendor.index.showToast({ icon: "success", title: "登录成功" });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 500);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onGetphonenumber),
        b: common_vendor.o(onGetphonenumberSimple)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Temp/uniapp/rabbit-uniapp/src/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=login.js.map
