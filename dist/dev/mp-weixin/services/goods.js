"use strict";
const utils_http = require("../utils/http.js");
function getGoodsDetailAPI(id) {
  return utils_http.http({
    url: "/goods",
    method: "GET",
    data: {
      id
    }
  });
}
exports.getGoodsDetailAPI = getGoodsDetailAPI;
//# sourceMappingURL=goods.js.map
