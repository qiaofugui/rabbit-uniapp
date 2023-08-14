"use strict";const e=require("../../../common/vendor.js");require("../../../stores/index.js");const t=require("../../../services/cart.js"),o=require("../../../utils/index.js"),n=require("../../../composables/index.js"),s=require("../../../stores/modules/member.js");if(require("../../../utils/http.js"),!Array){(e.resolveComponent("vk-data-input-number-box")+e.resolveComponent("uni-swipe-action-item")+e.resolveComponent("uni-swipe-action")+e.resolveComponent("XtxGuess"))()}Math||((()=>"../../../components/vk-data-input-number-box/vk-data-input-number-box.js")+(()=>"../../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.js")+(()=>"../../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.js")+(()=>"../../../components/XtxGuess.js"))();const u=e.defineComponent({__name:"CartMain",setup(u){const{guessRef:r,onScrolltolower:i}=n.useGuessList(),a=s.useMemberStore(),c=e.ref([]),d=async()=>{const e=await t.getMemberCartAPI();c.value=e.result};e.onShow((()=>{a.profile&&d()}));const l=o.debounce((async e=>{await t.putMemberCartBySkuIdAPI(e.index,{count:e.value})}),500),m=e.computed((()=>c.value.length&&c.value.every((e=>e.selected)))),p=()=>{const e=!m.value;c.value.forEach((t=>{t.selected=e})),t.putMemberCartSelectedAPI({selected:e})},b=e.computed((()=>c.value.filter((e=>e.selected)))),v=e.computed((()=>b.value.reduce(((e,t)=>e+t.count),0))),f=e.computed((()=>b.value.reduce(((e,t)=>e+t.count*t.nowPrice),0).toFixed(2))),k=()=>{if(0===v.value)return e.index.showToast({icon:"none",title:"请选择商品"});e.index.navigateTo({url:"/pagesOrder/create/create"})};return(o,n)=>e.e({a:e.unref(a).profile},e.unref(a).profile?e.e({b:c.value.length},c.value.length?{c:e.f(c.value,((o,n,s)=>({a:o.selected?1:"",b:e.o((e=>(e=>{e.selected=!e.selected,t.putMemberCartBySkuIdAPI(e.skuId,{selected:e.selected})})(o)),o.skuId),c:o.picture,d:e.t(o.name),e:e.t(o.attrsText),f:e.t(o.nowPrice),g:`/pages/goods/goods?id=${o.id}`,h:e.o(e.unref(l),o.skuId),i:"2abb1543-2-"+s+",2abb1543-1-"+s,j:e.o((e=>o.count=e),o.skuId),k:e.p({min:1,max:o.stock,index:o.skuId,modelValue:o.count}),l:e.o((n=>{return s=o.skuId,void e.index.showModal({content:"确认删除吗",success:async e=>{e.confirm&&(await t.deleteMemberCartAPI({ids:[s]}),d())}});var s}),o.skuId),m:o.skuId,n:"2abb1543-1-"+s+",2abb1543-0"})))}:{},{d:e.unref(m)?1:"",e:e.o(p),f:e.t(e.unref(f)),g:e.t(e.unref(v)),h:0===e.unref(v)?1:"",i:e.o(k)}):{},{j:e.sr(r,"2abb1543-3",{k:"guessRef"}),k:e.o(((...t)=>e.unref(i)&&e.unref(i)(...t)))})}});wx.createComponent(u);
