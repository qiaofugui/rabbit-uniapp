import{d as a,l as s,o as e,c as l,w as t,b as o,a as u,e as n,s as c,z as d,P as i,i as p,h as r,O as m,B as f,f as _}from"./index-92dffa4f.js";import{h}from"./http.819f3c8a.js";import{_ as v}from"./_plugin-vue_export-helper.1b428a4d.js";const g=v(a({__name:"login",setup(a){const v=async()=>{const a=await(s="13123456789",h({method:"POST",url:"/login/wxMin/simple",data:{phoneNumber:s}}));var s;g(a.result)},g=a=>{c().setProfile(a),d({icon:"success",title:"登录成功"}),setTimeout((()=>{i()}),500)},w=s({account:"13123456789",password:""}),x=async()=>{const a=await(s=w.value,h({method:"POST",url:"/login",data:s}));var s;g(a.result)};return(a,s)=>{const c=p,d=r,i=m,h=f,g=_;return e(),l(d,{class:"viewport"},{default:t((()=>[o(d,{class:"logo"},{default:t((()=>[o(c,{src:"https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/logo_icon.png"})])),_:1}),o(d,{class:"login"},{default:t((()=>[u(" 网页端表单登录 "),o(i,{modelValue:w.value.account,"onUpdate:modelValue":s[0]||(s[0]=a=>w.value.account=a),class:"input",type:"text",placeholder:"请输入用户名/手机号码"},null,8,["modelValue"]),o(i,{modelValue:w.value.password,"onUpdate:modelValue":s[1]||(s[1]=a=>w.value.password=a),class:"input",type:"text",password:"",placeholder:"请输入密码"},null,8,["modelValue"]),o(h,{onClick:x,class:"button phone"},{default:t((()=>[n("登录")])),_:1}),u(" 小程序端授权登录 "),o(d,{class:"extra"},{default:t((()=>[o(d,{class:"caption"},{default:t((()=>[o(g,null,{default:t((()=>[n("其他登录方式")])),_:1})])),_:1}),o(d,{class:"options"},{default:t((()=>[u(" 通用模拟登录 "),o(h,{onClick:v},{default:t((()=>[o(g,{class:"icon icon-phone"},{default:t((()=>[n("模拟快捷登录")])),_:1})])),_:1})])),_:1})])),_:1}),o(d,{class:"tips"},{default:t((()=>[n("登录/注册即视为你同意《服务条款》和《小兔鲜儿隐私协议》")])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-f0d41dfc"]]);export{g as default};
