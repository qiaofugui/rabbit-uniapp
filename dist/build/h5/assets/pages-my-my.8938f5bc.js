import{d as s,g as e,s as a,o as l,c as t,w as o,a as r,b as c,u as n,e as i,t as p,j as u,F as f,n as d,r as _,i as g,k as m,h as v,f as y,p as x,q as h,S as k,v as b}from"./index-92dffa4f.js";import{u as j,_ as w}from"./index.98414691.js";import{_ as S}from"./_plugin-vue_export-helper.1b428a4d.js";import"./home.a3b9c939.js";import"./http.819f3c8a.js";const F=S(s({__name:"my",setup(s){const{safeAreaInsets:S}=e(),F=[{type:"1",text:"待付款",icon:"icon-currency"},{type:"2",text:"待发货",icon:"icon-gift"},{type:"3",text:"待收货",icon:"icon-check"},{type:"4",text:"待评价",icon:"icon-comment"}],M=a(),{guessRef:I,onScrolltolower:O}=j();return(s,e)=>{const a=g,j=m,R=v,q=y,A=x(h("XtxGuess"),w),G=k;return l(),t(G,{"enable-back-to-top":"",onScrolltolower:n(O),class:"viewport","scroll-y":""},{default:o((()=>[r(" 个人资料 "),c(R,{class:"profile",style:d({paddingTop:n(S).top+"px"})},{default:o((()=>[r(" 情况1：已登录 "),n(M).profile?(l(),t(R,{key:0,class:"overview"},{default:o((()=>[c(j,{url:"/pagesMember/profile/profile","hover-class":"none"},{default:o((()=>[c(a,{class:"avatar",src:n(M).profile.avatar,mode:"aspectFill"},null,8,["src"])])),_:1}),c(R,{class:"meta"},{default:o((()=>[c(R,{class:"nickname"},{default:o((()=>[i(p(n(M).profile.nickname||n(M).profile.account),1)])),_:1}),c(j,{class:"extra",url:"/pagesMember/profile/profile","hover-class":"none"},{default:o((()=>[c(q,{class:"update"},{default:o((()=>[i("更新头像昵称")])),_:1})])),_:1})])),_:1})])),_:1})):(l(),u(f,{key:1},[r(" 情况2：未登录 "),c(R,{class:"overview"},{default:o((()=>[c(j,{url:"/pages/login/login","hover-class":"none"},{default:o((()=>[c(a,{class:"avatar gray",mode:"aspectFill",src:"https://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-06/db628d42-88a7-46e7-abb8-659448c33081.png"})])),_:1}),c(R,{class:"meta"},{default:o((()=>[c(j,{url:"/pages/login/login","hover-class":"none",class:"nickname"},{default:o((()=>[i(" 未登录 ")])),_:1}),c(R,{class:"extra"},{default:o((()=>[c(q,{class:"tips"},{default:o((()=>[i("点击登录账号")])),_:1})])),_:1})])),_:1})])),_:1})],2112)),c(j,{class:"settings",url:"/pagesMember/settings/settings","hover-class":"none"},{default:o((()=>[i(" 设置 ")])),_:1})])),_:1},8,["style"]),r(" 我的订单 "),c(R,{class:"orders"},{default:o((()=>[c(R,{class:"title"},{default:o((()=>[i(" 我的订单 "),c(j,{class:"navigator",url:"/pagesOrder/list/list?type=0","hover-class":"none"},{default:o((()=>[i(" 查看全部订单"),c(q,{class:"icon-right"})])),_:1})])),_:1}),c(R,{class:"section"},{default:o((()=>[r(" 订单 "),(l(),u(f,null,_(F,(s=>c(j,{key:s.type,class:b([s.icon,"navigator"]),url:`/pagesOrder/list/list?type=${s.type}`,"hover-class":"none"},{default:o((()=>[i(p(s.text),1)])),_:2},1032,["class","url"]))),64)),r(" 客服 ")])),_:1})])),_:1}),r(" 猜你喜欢 "),c(R,{class:"guess"},{default:o((()=>[c(A,{ref_key:"guessRef",ref:I},null,512)])),_:1})])),_:1},8,["onScrolltolower"])}}}),[["__scopeId","data-v-d4caca5c"]]);export{F as default};