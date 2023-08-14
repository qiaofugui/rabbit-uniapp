"use strict";const e=require("../../common/vendor.js"),r=require("../../services/address.js");if(require("../../utils/http.js"),require("../../stores/index.js"),require("../../stores/modules/member.js"),!Array){(e.resolveComponent("uni-forms-item")+e.resolveComponent("uni-forms"))()}Math||((()=>"../../node-modules/@dcloudio/uni-ui/lib/uni-forms-item/uni-forms-item.js")+(()=>"../../node-modules/@dcloudio/uni-ui/lib/uni-forms/uni-forms.js"))();const o=e.defineComponent({__name:"address-form",props:{id:null},setup(o){const a=o;e.index.setNavigationBarTitle({title:a.id?"修改地址":"新建地址"});e.onLoad((()=>{(async()=>{if(!a.id)return;const e=await r.getMemberAddressByIdAPI(a.id);Object.assign(s.value,e.result)})()}));const s=e.ref({receiver:"",contact:"",fullLocation:"",provinceCode:"",cityCode:"",countyCode:"",address:"",isDefault:0}),i=e=>{s.value.fullLocation=e.detail.value.join(" ");const[r,o,a]=e.detail.code;Object.assign(s.value,{provinceCode:r,cityCode:o,countyCode:a})},t=e=>{s.value.isDefault=e.detail.value?1:0},l={receiver:{rules:[{required:!0,errorMessage:"请输入收货人姓名"}]},contact:{rules:[{required:!0,errorMessage:"请输入联系方式"},{pattern:/^1[3-9]\d{9}$/,errorMessage:"手机号格式不正确"}]},countyCode:{rules:[{required:!0,errorMessage:"请选择所在地区"}]},address:{rules:[{required:!0,errorMessage:"请选择详细地址"}]}},u=e.ref(),d=async()=>{var o,i;try{await(null==(i=null==(o=u.value)?void 0:o.validate)?void 0:i.call(o)),a.id?await r.putMemberAddressByIdAPI(a.id,s.value):await r.postMemberAddressAPI(s.value),e.index.showToast({icon:"success",title:"操作成功"}),setTimeout((()=>{e.index.navigateBack()}),500)}catch(t){e.index.showToast({icon:"error",title:"请填写完整信息"})}};return(r,o)=>e.e({a:s.value.receiver,b:e.o((e=>s.value.receiver=e.detail.value)),c:e.p({name:"receiver"}),d:s.value.contact,e:e.o((e=>s.value.contact=e.detail.value)),f:e.p({name:"contact"}),g:s.value.fullLocation},s.value.fullLocation?{h:e.t(s.value.fullLocation)}:{},{i:e.o(i),j:s.value.fullLocation.split(" "),k:e.p({name:"fullLocation"}),l:s.value.address,m:e.o((e=>s.value.address=e.detail.value)),n:e.p({name:"address"}),o:e.o(t),p:1===s.value.isDefault,q:e.sr("formRef","ca01798e-0"),r:e.p({rules:l,model:s.value}),s:e.o(d)})}});wx.createPage(o);