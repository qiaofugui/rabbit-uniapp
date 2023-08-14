"use strict";
const utils_http = require("../utils/http.js");
const getPayMockAPI = (data) => {
  return utils_http.http({
    method: "GET",
    url: "/pay/mock",
    data
  });
};
exports.getPayMockAPI = getPayMockAPI;
//# sourceMappingURL=pay.js.map
