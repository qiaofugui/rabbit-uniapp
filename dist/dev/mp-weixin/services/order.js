"use strict";
const utils_http = require("../utils/http.js");
const getMemberOrderPreAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/member/order/pre"
  });
};
const getMemberOrderPreNowAPI = (data) => {
  return utils_http.http({
    method: "GET",
    url: "/member/order/pre/now",
    data
  });
};
const getMemberOrderRepurchaseByIdAPI = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/member/order/repurchase/${id}`
  });
};
const postMemberOrderAPI = (data) => {
  return utils_http.http({
    method: "POST",
    url: "/member/order",
    data
  });
};
const getMemberOrderByIdAPI = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/member/order/${id}`
  });
};
const getMemberOrderConsignmentByIdAPI = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/member/order/consignment/${id}`
  });
};
const putMemberOrderReceiptByIdAPI = (id) => {
  return utils_http.http({
    method: "PUT",
    url: `/member/order/${id}/receipt`
  });
};
const getMemberOrderLogisticsByIdAPI = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/member/order/${id}/logistics`
  });
};
const deleteMemberOrderAPI = (data) => {
  return utils_http.http({
    method: "DELETE",
    url: `/member/order`,
    data
  });
};
const getMemberOrderCancelByIdAPI = (id, data) => {
  return utils_http.http({
    method: "PUT",
    url: `/member/order/${id}/cancel`,
    data
  });
};
const getMemberOrderAPI = (data) => {
  return utils_http.http({
    method: "GET",
    url: `/member/order`,
    data
  });
};
exports.deleteMemberOrderAPI = deleteMemberOrderAPI;
exports.getMemberOrderAPI = getMemberOrderAPI;
exports.getMemberOrderByIdAPI = getMemberOrderByIdAPI;
exports.getMemberOrderCancelByIdAPI = getMemberOrderCancelByIdAPI;
exports.getMemberOrderConsignmentByIdAPI = getMemberOrderConsignmentByIdAPI;
exports.getMemberOrderLogisticsByIdAPI = getMemberOrderLogisticsByIdAPI;
exports.getMemberOrderPreAPI = getMemberOrderPreAPI;
exports.getMemberOrderPreNowAPI = getMemberOrderPreNowAPI;
exports.getMemberOrderRepurchaseByIdAPI = getMemberOrderRepurchaseByIdAPI;
exports.postMemberOrderAPI = postMemberOrderAPI;
exports.putMemberOrderReceiptByIdAPI = putMemberOrderReceiptByIdAPI;
//# sourceMappingURL=order.js.map
