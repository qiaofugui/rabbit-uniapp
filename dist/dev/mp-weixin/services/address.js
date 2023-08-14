"use strict";
const utils_http = require("../utils/http.js");
const postMemberAddressAPI = (data) => {
  return utils_http.http({
    url: "/member/address",
    method: "POST",
    data
  });
};
const getMemberAddressAPI = () => {
  return utils_http.http({
    url: "/member/address",
    method: "GET"
  });
};
const getMemberAddressByIdAPI = (id) => {
  return utils_http.http({
    url: "/member/address/" + id,
    method: "GET"
  });
};
const putMemberAddressByIdAPI = (id, data) => {
  return utils_http.http({
    url: "/member/address/" + id,
    method: "PUT",
    data
  });
};
const deleteMemberAddressByIdAPI = (id) => {
  return utils_http.http({
    url: "/member/address/" + id,
    method: "DELETE"
  });
};
exports.deleteMemberAddressByIdAPI = deleteMemberAddressByIdAPI;
exports.getMemberAddressAPI = getMemberAddressAPI;
exports.getMemberAddressByIdAPI = getMemberAddressByIdAPI;
exports.postMemberAddressAPI = postMemberAddressAPI;
exports.putMemberAddressByIdAPI = putMemberAddressByIdAPI;
//# sourceMappingURL=address.js.map
