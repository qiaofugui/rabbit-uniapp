"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  OrderList();
}
const OrderList = () => "./components/OrderList.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "list",
  props: {
    type: null
  },
  setup(__props) {
    const query = __props;
    const orderTabs = common_vendor.ref([
      { orderState: 0, title: "全部", isRender: false },
      { orderState: 1, title: "待付款", isRender: false },
      { orderState: 2, title: "待发货", isRender: false },
      { orderState: 3, title: "待收货", isRender: false },
      { orderState: 4, title: "待评价", isRender: false }
    ]);
    const activeIndex = common_vendor.ref(orderTabs.value.findIndex((v) => v.orderState === Number(query.type)));
    orderTabs.value[activeIndex.value].isRender = true;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(orderTabs.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.title,
            c: common_vendor.o(() => {
              activeIndex.value = index;
              item.isRender = true;
            }, item.title)
          };
        }),
        b: activeIndex.value * 20 + "%",
        c: common_vendor.f(orderTabs.value, (item, k0, i0) => {
          return common_vendor.e({
            a: item.isRender
          }, item.isRender ? {
            b: "53d9ee9f-0-" + i0,
            c: common_vendor.p({
              ["order-state"]: item.orderState
            })
          } : {}, {
            d: item.title
          });
        }),
        d: activeIndex.value,
        e: common_vendor.o(($event) => activeIndex.value = $event.detail.current)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Temp/uniapp/rabbit-uniapp/src/pagesOrder/list/list.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=list.js.map
