"use strict";const e=require("../../common/vendor.js"),t=require("../../services/hot.js");require("../../utils/http.js"),require("../../stores/index.js"),require("../../stores/modules/member.js");const s=e.defineComponent({__name:"hot",props:{type:null},setup(s){const o=s,i=[{type:"1",title:"特惠推荐",url:"/hot/preference"},{type:"2",title:"爆款推荐",url:"/hot/inVogue"},{type:"3",title:"一站买全",url:"/hot/oneStop"},{type:"4",title:"新鲜好物",url:"/hot/new"}].find((e=>e.type===o.type));e.index.setNavigationBarTitle({title:i.title});const r=e.ref(""),a=e.ref([]),n=e.ref(0);e.onLoad((()=>{(async()=>{const e=await t.getHotRecommendAPI(i.url);r.value=e.result.bannerPicture,a.value=e.result.subTypes})()}));const u=async()=>{const s=a.value[n.value];if(!(s.goodsItems.page<s.goodsItems.pages))return s.finish=!0,e.index.showToast({icon:"none",title:"没有更多数据了"});s.goodsItems.page++;const o=(await t.getHotRecommendAPI(i.url,{subType:s.id,page:s.goodsItems.page,pageSize:s.goodsItems.pageSize})).result.subTypes[n.value];s.goodsItems.items.push(...o.goodsItems.items)};return(t,s)=>({a:r.value,b:e.f(a.value,((t,s,o)=>({a:e.t(t.title),b:t.id,c:s===n.value?1:"",d:e.o((e=>n.value=s),t.id)}))),c:e.f(a.value,((t,s,o)=>({a:e.f(t.goodsItems.items,((t,s,o)=>({a:t.picture,b:e.t(t.name),c:e.t(t.price),d:t.id,e:`/pages/goods/goods?id=${t.id}`}))),b:e.t(t.finish?"没有更多数据了~":"正在加载... "),c:t.id,d:n.value===s,e:e.o(u,t.id)})))})}});wx.createPage(s);
