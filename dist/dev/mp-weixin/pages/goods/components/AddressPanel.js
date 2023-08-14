"use strict";
const common_vendor = require("../../../common/vendor.js");
const services_address = require("../../../services/address.js");
const stores_modules_address = require("../../../stores/modules/address.js");
require("../../../utils/http.js");
require("../../../stores/index.js");
require("../../../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "AddressPanel",
  emits: ["close"],
  setup(__props, { emit }) {
    const addressList = common_vendor.ref([]);
    const getMemberAddressData = async () => {
      const res = await services_address.getMemberAddressAPI();
      addressList.value = res.result;
    };
    common_vendor.onMounted(() => {
      getMemberAddressData();
    });
    const onChangeAddress = (item) => {
      const addressStore = stores_modules_address.useAddressStore();
      addressStore.changeSelectedAddress(item);
      emit("close");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => emit("close")),
        b: common_vendor.f(addressList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.receiver),
            b: common_vendor.t(item.contact),
            c: common_vendor.t(item.fullLocation),
            d: common_vendor.t(item.address),
            e: common_vendor.n(item.isDefault ? "icon-checked" : "icon-ring"),
            f: item.id,
            g: common_vendor.o(($event) => onChangeAddress(item), item.id)
          };
        }),
        c: `/pagesMember/address-form/address-form`
      }, {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Temp/uniapp/rabbit-uniapp/src/pages/goods/components/AddressPanel.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=AddressPanel.js.map
