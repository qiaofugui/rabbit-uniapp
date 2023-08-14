"use strict";
const common_vendor = require("../../../common/vendor.js");
require("../../../stores/index.js");
const services_cart = require("../../../services/cart.js");
const utils_index = require("../../../utils/index.js");
const composables_index = require("../../../composables/index.js");
const stores_modules_member = require("../../../stores/modules/member.js");
require("../../../utils/http.js");
if (!Array) {
  const _easycom_vk_data_input_number_box2 = common_vendor.resolveComponent("vk-data-input-number-box");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _easycom_XtxGuess2 = common_vendor.resolveComponent("XtxGuess");
  (_easycom_vk_data_input_number_box2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_XtxGuess2)();
}
const _easycom_vk_data_input_number_box = () => "../../../components/vk-data-input-number-box/vk-data-input-number-box.js";
const _easycom_uni_swipe_action_item = () => "../../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.js";
const _easycom_XtxGuess = () => "../../../components/XtxGuess.js";
if (!Math) {
  (_easycom_vk_data_input_number_box + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_XtxGuess)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "CartMain",
  setup(__props) {
    const { guessRef, onScrolltolower } = composables_index.useGuessList();
    const memberStore = stores_modules_member.useMemberStore();
    const cartList = common_vendor.ref([]);
    const getMemberCartData = async () => {
      const res = await services_cart.getMemberCartAPI();
      cartList.value = res.result;
    };
    common_vendor.onShow(() => {
      if (!memberStore.profile)
        return;
      getMemberCartData();
    });
    const onDeleteCart = (skuId) => {
      common_vendor.index.showModal({
        content: "确认删除吗",
        success: async (res) => {
          if (res.confirm) {
            await services_cart.deleteMemberCartAPI({ ids: [skuId] });
            getMemberCartData();
          }
        }
      });
    };
    const onChangeCount = utils_index.debounce(async (e) => {
      await services_cart.putMemberCartBySkuIdAPI(e.index, { count: e.value });
    }, 500);
    const onChangeSelected = (item) => {
      item.selected = !item.selected;
      services_cart.putMemberCartBySkuIdAPI(item.skuId, { selected: item.selected });
    };
    const isSelectedAll = common_vendor.computed(() => {
      return cartList.value.length && cartList.value.every((v) => v.selected);
    });
    const onChangeSelectedAll = () => {
      const _isSelectedAll = !isSelectedAll.value;
      cartList.value.forEach((item) => {
        item.selected = _isSelectedAll;
      });
      services_cart.putMemberCartSelectedAPI({ selected: _isSelectedAll });
    };
    const selectedCartList = common_vendor.computed(() => {
      return cartList.value.filter((v) => v.selected);
    });
    const selectedCartListCount = common_vendor.computed(() => {
      return selectedCartList.value.reduce((sum, item) => sum + item.count, 0);
    });
    const selectedCartListMoney = common_vendor.computed(() => {
      return selectedCartList.value.reduce((sum, item) => sum + item.count * item.nowPrice, 0).toFixed(2);
    });
    const gotoPayment = () => {
      if (selectedCartListCount.value === 0) {
        return common_vendor.index.showToast({
          icon: "none",
          title: "请选择商品"
        });
      }
      common_vendor.index.navigateTo({ url: "/pagesOrder/create/create" });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(memberStore).profile
      }, common_vendor.unref(memberStore).profile ? common_vendor.e({
        b: cartList.value.length
      }, cartList.value.length ? {
        c: common_vendor.f(cartList.value, (item, k0, i0) => {
          return {
            a: item.selected ? 1 : "",
            b: common_vendor.o(($event) => onChangeSelected(item), item.skuId),
            c: item.picture,
            d: common_vendor.t(item.name),
            e: common_vendor.t(item.attrsText),
            f: common_vendor.t(item.nowPrice),
            g: `/pages/goods/goods?id=${item.id}`,
            h: common_vendor.o(common_vendor.unref(onChangeCount), item.skuId),
            i: "2abb1543-2-" + i0 + "," + ("2abb1543-1-" + i0),
            j: common_vendor.o(($event) => item.count = $event, item.skuId),
            k: common_vendor.p({
              min: 1,
              max: item.stock,
              index: item.skuId,
              modelValue: item.count
            }),
            l: common_vendor.o(($event) => onDeleteCart(item.skuId), item.skuId),
            m: item.skuId,
            n: "2abb1543-1-" + i0 + ",2abb1543-0"
          };
        })
      } : {}, {
        d: common_vendor.unref(isSelectedAll) ? 1 : "",
        e: common_vendor.o(onChangeSelectedAll),
        f: common_vendor.t(common_vendor.unref(selectedCartListMoney)),
        g: common_vendor.t(common_vendor.unref(selectedCartListCount)),
        h: common_vendor.unref(selectedCartListCount) === 0 ? 1 : "",
        i: common_vendor.o(gotoPayment)
      }) : {}, {
        j: common_vendor.sr(guessRef, "2abb1543-3", {
          "k": "guessRef"
        }),
        k: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrolltolower) && common_vendor.unref(onScrolltolower)(...args)
        )
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Temp/uniapp/rabbit-uniapp/src/pages/cart/components/CartMain.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=CartMain.js.map
