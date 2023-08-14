"use strict";const e=require("../../common/vendor.js"),o=require("../../services/goods.js"),s=require("../../services/cart.js"),u=require("../../stores/modules/address.js");if(require("../../utils/http.js"),require("../../stores/index.js"),require("../../stores/modules/member.js"),!Array){(e.resolveComponent("uni-popup")+e.resolveComponent("vk-data-goods-sku-popup"))()}Math||(r+a+l+(()=>"../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js")+(()=>"../../components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.js"))();const r=()=>"./components/PageSkeleton.js",a=()=>"./components/AddressPanel.js",l=()=>"./components/ServicePanel.js",t=e.defineComponent({__name:"goods",props:{id:null},setup(r){const a=r,l=u.useAddressStore(),{safeAreaInsets:t}=e.index.getSystemInfoSync(),n=e.ref(),d=e.ref(!1);e.onLoad((async()=>{d.value=!0,await(async()=>{const e=await o.getGoodsDetailAPI(a.id);n.value=e.result,g.value={_id:e.result.id,name:e.result.name,goods_thumb:e.result.mainPictures[0],spec_list:e.result.specs.map((e=>({name:e.name,list:e.values}))),sku_list:e.result.skus.map((o=>({_id:o.id,goods_id:e.result.id,goods_name:e.result.name,image:o.picture,price:100*o.price,stock:o.inventory,sku_name_arr:o.specs.map((e=>e.valueName))})))}})(),d.value=!1}));const i=e.ref(0),v=e=>{i.value=e.detail.current},c=e.ref(),p=e.ref(),m=e=>{p.value=e,c.value.open()},f=e.ref(!1),g=e.ref({}),k=e.ref(1),b=e=>{f.value=!0,k.value=e},A=e.ref(),_=e.computed((()=>{var e,o;return(null==(o=null==(e=A.value)?void 0:e.selectArr)?void 0:o.join(" ").trim())||"请选择商品规格"})),j=async o=>{s.postMemberCartAPI({skuId:o._id,count:o.buy_num}),e.index.showToast({title:"添加成功"}),f.value=!1},y=async o=>{e.index.navigateTo({url:`/pagesOrder/create/create?skuId=${o._id}&count=${o.buy_num}`})};return(o,s)=>{var u,r,a,P,B,q,x,C,I,h,w;return e.e({a:d.value},d.value?{}:{b:e.f(null==(u=n.value)?void 0:u.mainPictures,((o,s,u)=>({a:o,b:e.o((s=>{return u=o,void e.index.previewImage({current:u,urls:n.value.mainPictures});var u}),o),c:o}))),c:e.o(v),d:e.t(i.value+1),e:e.t(null==(r=n.value)?void 0:r.mainPictures.length),f:e.t(null==(a=n.value)?void 0:a.price),g:e.t(null==(P=n.value)?void 0:P.name),h:e.t(null==(B=n.value)?void 0:B.desc),i:e.t(e.unref(_)),j:e.o((e=>b(1))),k:e.t((null==(q=e.unref(l).selectedAddress)?void 0:q.fullLocation)+(null==(x=e.unref(l).selectedAddress)?void 0:x.address)||"请选择收获地址"),l:e.o((e=>m("address"))),m:e.o((e=>m("service"))),n:e.f(null==(C=n.value)?void 0:C.details.properties,((o,s,u)=>({a:e.t(o.name),b:e.t(o.value),c:o.name}))),o:e.f(null==(I=n.value)?void 0:I.details.pictures,((e,o,s)=>({a:e,b:e}))),p:e.f(null==(h=n.value)?void 0:h.similarProducts,((o,s,u)=>({a:o.picture,b:e.t(o.name),c:e.t(o.price),d:o.id,e:`/pages/goods/goods?id=${o.id}}}`}))),q:e.o((e=>b(2))),r:e.o((e=>b(3))),s:(null==(w=e.unref(t))?void 0:w.bottom)+"px"},{t:"address"===p.value},"address"===p.value?{v:e.o((e=>{var o;return null==(o=c.value)?void 0:o.close()}))}:{},{w:"service"===p.value},"service"===p.value?{x:e.o((e=>{var o;return null==(o=c.value)?void 0:o.close()}))}:{},{y:e.sr(c,"6d389e66-1",{k:"popup"}),z:e.p({type:"bottom","background-color":"#fff"}),A:e.sr(A,"6d389e66-4",{k:"skuPopupRef"}),B:e.o(j),C:e.o(y),D:e.o((e=>f.value=e)),E:e.p({localdata:g.value,mode:k.value,"add-cart-background-color":"#FFA868","buy-cart-background-color":"#27BA9B","actived-style":{color:"#27BA9B",borderColor:"#27BA9B",backroundColor:"#27BA9B"},modelValue:f.value})})}}});wx.createPage(t);