"use strict";
var OrderState = /* @__PURE__ */ ((OrderState2) => {
  OrderState2[OrderState2["DaiFuKuan"] = 1] = "DaiFuKuan";
  OrderState2[OrderState2["DaiFaHuo"] = 2] = "DaiFaHuo";
  OrderState2[OrderState2["DaiShouHuo"] = 3] = "DaiShouHuo";
  OrderState2[OrderState2["DaiPingJia"] = 4] = "DaiPingJia";
  OrderState2[OrderState2["YiWanCheng"] = 5] = "YiWanCheng";
  OrderState2[OrderState2["YiQuXiao"] = 6] = "YiQuXiao";
  return OrderState2;
})(OrderState || {});
const orderStateList = [
  { id: 0, text: "" },
  { id: 1, text: "待付款" },
  { id: 2, text: "待发货" },
  { id: 3, text: "待收货" },
  { id: 4, text: "待评价" },
  { id: 5, text: "已完成" },
  { id: 6, text: "已取消" }
];
exports.OrderState = OrderState;
exports.orderStateList = orderStateList;
//# sourceMappingURL=constants.js.map
