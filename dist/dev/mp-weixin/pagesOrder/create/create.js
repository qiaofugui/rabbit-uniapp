"use strict";
const common_vendor = require("../../common/vendor.js");
const services_order = require("../../services/order.js");
const stores_modules_address = require("../../stores/modules/address.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "create",
  props: {
    skuId: null,
    count: null,
    orderId: null
  },
  setup(__props) {
    const query = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const buyerMessage = common_vendor.ref("");
    const deliveryList = common_vendor.ref([
      { type: 1, text: "时间不限 (周一至周日)" },
      { type: 2, text: "工作日送 (周一至周五)" },
      { type: 3, text: "周末配送 (周六至周日)" }
    ]);
    const activeIndex = common_vendor.ref(0);
    const activeDelivery = common_vendor.computed(() => deliveryList.value[activeIndex.value]);
    const onChangeDelivery = (ev) => {
      activeIndex.value = ev.detail.value;
    };
    const orderPre = common_vendor.ref();
    const getMemberOrderPreData = async () => {
      if (query.count && query.skuId) {
        const res = await services_order.getMemberOrderPreNowAPI({
          count: query.count,
          skuId: query.skuId
        });
        orderPre.value = res.result;
      } else if (query.orderId) {
        const res = await services_order.getMemberOrderRepurchaseByIdAPI(query.orderId);
        orderPre.value = res.result;
      } else {
        const res = await services_order.getMemberOrderPreAPI();
        orderPre.value = res.result;
      }
    };
    common_vendor.onLoad(() => {
      getMemberOrderPreData();
    });
    const addressStore = stores_modules_address.useAddressStore();
    const selecteAddress = common_vendor.computed(() => {
      var _a;
      return addressStore.selectedAddress || ((_a = orderPre.value) == null ? void 0 : _a.userAddresses.find((v) => v.isDefault));
    });
    const onOrderSubmit = async () => {
      var _a, _b;
      if (!((_a = selecteAddress.value) == null ? void 0 : _a.id)) {
        return common_vendor.index.showToast({ icon: "none", title: "请选择收货地址" });
      }
      const res = await services_order.postMemberOrderAPI({
        addressId: (_b = selecteAddress.value) == null ? void 0 : _b.id,
        buyerMessage: buyerMessage.value,
        deliveryTimeType: activeDelivery.value.type,
        goods: orderPre.value.goods.map((v) => ({ count: v.count, skuId: v.skuId })),
        payChannel: 2,
        payType: 1
      });
      common_vendor.index.redirectTo({ url: `/pagesOrder/detail/detail?id=${res.result.id}` });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f;
      return common_vendor.e({
        a: common_vendor.unref(selecteAddress)
      }, common_vendor.unref(selecteAddress) ? {
        b: common_vendor.t(common_vendor.unref(selecteAddress).receiver),
        c: common_vendor.t(common_vendor.unref(selecteAddress).contact),
        d: common_vendor.t(common_vendor.unref(selecteAddress).fullLocation),
        e: common_vendor.t(common_vendor.unref(selecteAddress).address)
      } : {}, {
        f: common_vendor.f((_a = orderPre.value) == null ? void 0 : _a.goods, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.attrsText),
            d: common_vendor.t(item.payPrice),
            e: common_vendor.t(item.price),
            f: common_vendor.t(item.count),
            g: item.skuId,
            h: `/pages/goods/goods?id=${item.id}`
          };
        }),
        g: common_vendor.t(common_vendor.unref(activeDelivery).text),
        h: deliveryList.value,
        i: common_vendor.o(onChangeDelivery),
        j: buyerMessage.value,
        k: common_vendor.o(($event) => buyerMessage.value = $event.detail.value),
        l: common_vendor.t((_b = orderPre.value) == null ? void 0 : _b.summary.totalPrice.toFixed(2)),
        m: common_vendor.t((_c = orderPre.value) == null ? void 0 : _c.summary.postFee.toFixed(2)),
        n: common_vendor.t((_d = orderPre.value) == null ? void 0 : _d.summary.totalPayPrice.toFixed(2)),
        o: !((_e = common_vendor.unref(selecteAddress)) == null ? void 0 : _e.id) ? 1 : "",
        p: common_vendor.o(onOrderSubmit),
        q: ((_f = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _f.bottom) + "px"
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Temp/uniapp/rabbit-uniapp/src/pagesOrder/create/create.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=create.js.map
