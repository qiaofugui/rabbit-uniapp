"use strict";const e=require("../../common/vendor.js"),s=require("../../composables/index.js");if(!Array){e.resolveComponent("XtxGuess")()}Math;const r=e.defineComponent({__name:"payment",props:{id:null},setup(r){const o=r,{guessRef:n,onScrolltolower:t}=s.useGuessList();return(s,r)=>({a:`/pagesOrder/detail/detail?id=${o.id}`,b:e.sr(n,"fc8585a6-0",{k:"guessRef"}),c:e.o(((...s)=>e.unref(t)&&e.unref(t)(...s)))})}});wx.createPage(r);