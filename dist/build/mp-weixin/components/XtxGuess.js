"use strict";const e=require("../common/vendor.js"),s=require("../services/home.js");require("../utils/http.js"),require("../stores/index.js"),require("../stores/modules/member.js");const t=e.defineComponent({__name:"XtxGuess",setup(t,{expose:u}){const a=e.ref([]),r=e.ref({page:1,pageSize:10}),o=e.ref(!1),i=async()=>{if(o.value)return e.index.showToast({icon:"none",title:"没有更多数据了"});const t=await s.getGuessYouLikeAPI(r.value);a.value.push(...t.result.items),r.value.page<t.result.pages?r.value.page++:o.value=!0};e.onMounted((()=>{i()}));return u({getGuessYouLikeData:i,resetDate:()=>{r.value.page=1,a.value=[],o.value=!1}}),(s,t)=>({a:e.f(a.value,((s,t,u)=>({a:s.picture,b:e.t(s.name),c:e.t(s.price),d:s.id,e:`/pages/goods/goods?id=${s.id}`}))),b:e.t(o.value?"没有更多数据了~":"正在加载...")})}});wx.createComponent(t);
