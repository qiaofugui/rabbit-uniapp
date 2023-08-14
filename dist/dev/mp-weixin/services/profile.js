"use strict";
const utils_http = require("../utils/http.js");
const getMemberProFileAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/member/profile"
  });
};
const putMemberProFileAPI = (data) => {
  return utils_http.http({
    method: "PUT",
    url: "/member/profile",
    data
  });
};
exports.getMemberProFileAPI = getMemberProFileAPI;
exports.putMemberProFileAPI = putMemberProFileAPI;
//# sourceMappingURL=profile.js.map
