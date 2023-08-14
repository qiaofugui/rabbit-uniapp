"use strict";
const formatDate = (date, format = "YYYY-MM-DD HH:mm:ss") => {
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return format.replace("YYYY", year).replace("MM", month).replace("DD", day).replace("HH", hours).replace("mm", minutes).replace("ss", seconds);
};
const debounce = (func, wait, immediate) => {
  let timeout;
  return function(...args) {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
  };
};
exports.debounce = debounce;
exports.formatDate = formatDate;
//# sourceMappingURL=index.js.map
