"use strict";const e=require("../../common/vendor.js"),r=e.defineStore("member",(()=>{const r=e.ref();return{profile:r,setProfile:e=>{r.value=e},clearProfile:()=>{r.value=void 0}}}),{persist:{storage:{getItem:r=>e.index.getStorageSync(r),setItem(r,t){e.index.setStorageSync(r,t)}}}});exports.useMemberStore=r;