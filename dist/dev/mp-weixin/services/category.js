"use strict";
const utils_http = require("../utils/http.js");
const getCategoryTopAPI = () => {
  return utils_http.http({
    url: "/category/top",
    method: "GET"
  });
};
exports.getCategoryTopAPI = getCategoryTopAPI;
//# sourceMappingURL=category.js.map
