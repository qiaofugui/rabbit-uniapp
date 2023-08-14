"use strict";const t=require("../utils/http.js");exports.getGoodsDetailAPI=function(e){return t.http({url:"/goods",method:"GET",data:{id:e}})};
