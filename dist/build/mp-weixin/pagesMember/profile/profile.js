"use strict";const e=require("../../common/vendor.js"),a=require("../../services/profile.js");require("../../stores/index.js");const l=require("../../utils/index.js"),i=require("../../stores/modules/member.js");require("../../utils/http.js");const t=e.defineComponent({__name:"profile",setup(t){const{safeAreaInsets:o}=e.index.getSystemInfoSync(),n=e.ref({});e.onLoad((()=>{(async()=>{const e=await a.getMemberProFileAPI();n.value=e.result,u.profile.avatar=e.result.avatar,u.profile.nickname=e.result.nickname})()}));const u=i.useMemberStore(),r=()=>{e.index.chooseMedia({count:1,mediaType:["image"],success:e=>{const{tempFilePath:a}=e.tempFiles[0];s(a)}})},s=a=>{e.index.uploadFile({url:"/member/profile/avatar",name:"file",filePath:a,success:a=>{if(200===a.statusCode){const l=JSON.parse(a.data).result.avatar;n.value.avatar=l,u.profile.avatar=l,e.index.showToast({icon:"success",title:"更新成功"})}else e.index.showToast({icon:"error",title:"更新失败"})}})},d=e=>{n.value.gender=e.detail.value},c=e=>{n.value.birthday=e.detail.value};let v=["","",""];const m=e=>{n.value.fullLocation=e.detail.value.join(" "),v=e.detail.code},f=async()=>{const{nickname:l,gender:i,birthday:t}=n.value,o=await a.putMemberProFileAPI({nickname:l,gender:i,birthday:t,provinceCode:v[0],cityCode:v[1],countyCode:v[2]});u.profile.nickname=o.result.nickname,e.index.showToast({icon:"success",title:"保存成功"}),setTimeout((()=>{e.index.navigateBack()}),500)};return(a,i)=>{var t,u,s,v,p,h,y,b,g,x,k,j,q,w;return e.e({a:(null==(t=e.unref(o))?void 0:t.top)+"px",b:null==(u=n.value)?void 0:u.avatar,c:e.o(r),d:e.t(null==(s=n.value)?void 0:s.account),e:n.value.nickname,f:e.o((e=>n.value.nickname=e.detail.value)),g:"男"===(null==(v=n.value)?void 0:v.gender),h:"女"===(null==(p=n.value)?void 0:p.gender),i:e.o(d),j:null==(h=n.value)?void 0:h.birthday},(null==(y=n.value)?void 0:y.birthday)?{k:e.t(null==(b=n.value)?void 0:b.birthday)}:{},{l:e.o(c),m:null==(g=n.value)?void 0:g.birthday,n:e.unref(l.formatDate)(new Date),o:null==(x=n.value)?void 0:x.fullLocation},(null==(k=n.value)?void 0:k.fullLocation)?{p:e.t(n.value.fullLocation)}:{},{q:e.o(m),r:null==(q=null==(j=n.value)?void 0:j.fullLocation)?void 0:q.split(" "),s:null==(w=n.value)?void 0:w.profession,t:e.o(f)})}}});wx.createPage(t);
