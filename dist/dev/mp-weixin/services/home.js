"use strict";
const utils_http = require("../utils/http.js");
const getHomeBannerAPI = (distributionSite = 1) => {
  return utils_http.http({
    method: "GET",
    url: "/home/banner",
    data: {
      distributionSite
    }
  });
};
const getHomeCategoryAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/home/category/mutli"
    /* CATEGORY_URL */
  });
};
const getHomeHotRecommendAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/home/hot/mutli"
    /* HOT_RECOMMEND_URL */
  });
};
const getGuessYouLikeAPI = (data) => {
  return utils_http.http({
    method: "GET",
    url: "/home/goods/guessLike",
    data
  });
};
exports.getGuessYouLikeAPI = getGuessYouLikeAPI;
exports.getHomeBannerAPI = getHomeBannerAPI;
exports.getHomeCategoryAPI = getHomeCategoryAPI;
exports.getHomeHotRecommendAPI = getHomeHotRecommendAPI;
//# sourceMappingURL=home.js.map
