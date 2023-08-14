"use strict";
const common_vendor = require("../../common/vendor.js");
const services_goods = require("../../services/goods.js");
const services_cart = require("../../services/cart.js");
const stores_modules_address = require("../../stores/modules/address.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_vk_data_goods_sku_popup2 = common_vendor.resolveComponent("vk-data-goods-sku-popup");
  (_easycom_uni_popup2 + _easycom_vk_data_goods_sku_popup2)();
}
const _easycom_uni_popup = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js";
const _easycom_vk_data_goods_sku_popup = () => "../../components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.js";
if (!Math) {
  (PageSkeleton + AddressPanel + ServicePanel + _easycom_uni_popup + _easycom_vk_data_goods_sku_popup)();
}
const PageSkeleton = () => "./components/PageSkeleton.js";
const AddressPanel = () => "./components/AddressPanel.js";
const ServicePanel = () => "./components/ServicePanel.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "goods",
  props: {
    id: null
  },
  setup(__props) {
    const query = __props;
    const addressStore = stores_modules_address.useAddressStore();
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const goods = common_vendor.ref();
    const getGoodsDetailData = async () => {
      const res = await services_goods.getGoodsDetailAPI(query.id);
      goods.value = res.result;
      localdata.value = {
        _id: res.result.id,
        name: res.result.name,
        goods_thumb: res.result.mainPictures[0],
        spec_list: res.result.specs.map((v) => ({
          name: v.name,
          list: v.values
        })),
        sku_list: res.result.skus.map((v) => ({
          _id: v.id,
          goods_id: res.result.id,
          goods_name: res.result.name,
          image: v.picture,
          price: v.price * 100,
          // sku 插件需要乘以100
          stock: v.inventory,
          sku_name_arr: v.specs.map((vv) => vv.valueName)
        }))
      };
    };
    const isLoading = common_vendor.ref(false);
    common_vendor.onLoad(async () => {
      isLoading.value = true;
      await getGoodsDetailData();
      isLoading.value = false;
    });
    const currentIndex = common_vendor.ref(0);
    const onChange = (e) => {
      currentIndex.value = e.detail.current;
    };
    const onTapImage = (url) => {
      common_vendor.index.previewImage({
        current: url,
        urls: goods.value.mainPictures
      });
    };
    const popup = common_vendor.ref();
    const popupName = common_vendor.ref();
    const openPopup = (name) => {
      popupName.value = name;
      popup.value.open();
    };
    const isShowSku = common_vendor.ref(false);
    const localdata = common_vendor.ref({});
    const mode = common_vendor.ref(
      1
      /* Both */
    );
    const openSkuPopup = (val) => {
      isShowSku.value = true;
      mode.value = val;
    };
    const skuPopupRef = common_vendor.ref();
    const selectArrText = common_vendor.computed(() => {
      var _a, _b;
      return ((_b = (_a = skuPopupRef.value) == null ? void 0 : _a.selectArr) == null ? void 0 : _b.join(" ").trim()) || "请选择商品规格";
    });
    const onAddCart = async (e) => {
      services_cart.postMemberCartAPI({ skuId: e._id, count: e.buy_num });
      common_vendor.index.showToast({ title: "添加成功" });
      isShowSku.value = false;
    };
    const onBuyNow = async (e) => {
      common_vendor.index.navigateTo({ url: `/pagesOrder/create/create?skuId=${e._id}&count=${e.buy_num}` });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      return common_vendor.e({
        a: isLoading.value
      }, isLoading.value ? {} : {
        b: common_vendor.f((_a = goods.value) == null ? void 0 : _a.mainPictures, (item, k0, i0) => {
          return {
            a: item,
            b: common_vendor.o(($event) => onTapImage(item), item),
            c: item
          };
        }),
        c: common_vendor.o(onChange),
        d: common_vendor.t(currentIndex.value + 1),
        e: common_vendor.t((_b = goods.value) == null ? void 0 : _b.mainPictures.length),
        f: common_vendor.t((_c = goods.value) == null ? void 0 : _c.price),
        g: common_vendor.t((_d = goods.value) == null ? void 0 : _d.name),
        h: common_vendor.t((_e = goods.value) == null ? void 0 : _e.desc),
        i: common_vendor.t(common_vendor.unref(selectArrText)),
        j: common_vendor.o(($event) => openSkuPopup(
          1
          /* Both */
        )),
        k: common_vendor.t(((_f = common_vendor.unref(addressStore).selectedAddress) == null ? void 0 : _f.fullLocation) + ((_g = common_vendor.unref(addressStore).selectedAddress) == null ? void 0 : _g.address) || "请选择收获地址"),
        l: common_vendor.o(($event) => openPopup("address")),
        m: common_vendor.o(($event) => openPopup("service")),
        n: common_vendor.f((_h = goods.value) == null ? void 0 : _h.details.properties, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.value),
            c: item.name
          };
        }),
        o: common_vendor.f((_i = goods.value) == null ? void 0 : _i.details.pictures, (item, k0, i0) => {
          return {
            a: item,
            b: item
          };
        }),
        p: common_vendor.f((_j = goods.value) == null ? void 0 : _j.similarProducts, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id,
            e: `/pages/goods/goods?id=${item.id}}}`
          };
        }),
        q: common_vendor.o(($event) => openSkuPopup(
          2
          /* Cart */
        )),
        r: common_vendor.o(($event) => openSkuPopup(
          3
          /* Buy */
        )),
        s: ((_k = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _k.bottom) + "px"
      }, {
        t: popupName.value === "address"
      }, popupName.value === "address" ? {
        v: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        })
      } : {}, {
        w: popupName.value === "service"
      }, popupName.value === "service" ? {
        x: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        })
      } : {}, {
        y: common_vendor.sr(popup, "6d389e66-1", {
          "k": "popup"
        }),
        z: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        }),
        A: common_vendor.sr(skuPopupRef, "6d389e66-4", {
          "k": "skuPopupRef"
        }),
        B: common_vendor.o(onAddCart),
        C: common_vendor.o(onBuyNow),
        D: common_vendor.o(($event) => isShowSku.value = $event),
        E: common_vendor.p({
          localdata: localdata.value,
          mode: mode.value,
          ["add-cart-background-color"]: "#FFA868",
          ["buy-cart-background-color"]: "#27BA9B",
          ["actived-style"]: {
            color: "#27BA9B",
            borderColor: "#27BA9B",
            backroundColor: "#27BA9B"
          },
          modelValue: isShowSku.value
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Temp/uniapp/rabbit-uniapp/src/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=goods.js.map
