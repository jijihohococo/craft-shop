(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_user_views_WishList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemPrice.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemPrice.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/general.js */ "./resources/js/user/helpers/general.js");
/* harmony import */ var _common___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/ */ "./resources/js/common/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['normal_price', 'sale_price'],
  mixins: [_common___WEBPACK_IMPORTED_MODULE_1__.common_mixin],
  methods: {
    showItemPromotionPercentage: function showItemPromotionPercentage(normalPrice, salePrice) {
      return (0,_helpers_general_js__WEBPACK_IMPORTED_MODULE_0__.showPromotionPercentage)(normalPrice, salePrice);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/PageTitle.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/PageTitle.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    title: {
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/WishList.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/WishList.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PageTitle */ "./resources/js/user/components/PageTitle.vue");
/* harmony import */ var _components_ItemPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ItemPrice */ "./resources/js/user/components/ItemPrice.vue");
/* harmony import */ var _store___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/ */ "./resources/js/user/store/index.js");
/* harmony import */ var _common___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ */ "./resources/js/user/common/index.js");
/* harmony import */ var _common_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/ui */ "./resources/js/user/common/ui.js");
/* harmony import */ var v_lazy_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! v-lazy-image */ "./node_modules/v-lazy-image/dist/v-lazy-image.mjs");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PageTitle: _components_PageTitle__WEBPACK_IMPORTED_MODULE_0__["default"],
    ItemPrice: _components_ItemPrice__WEBPACK_IMPORTED_MODULE_1__["default"],
    VLazyImage: v_lazy_image__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mixins: [_common___WEBPACK_IMPORTED_MODULE_3__.mixin, _common_ui__WEBPACK_IMPORTED_MODULE_4__.mix]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemPrice.vue?vue&type=template&id=64381cd3":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemPrice.vue?vue&type=template&id=64381cd3 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "product_price"
};
var _hoisted_2 = {
  "class": "price"
};
var _hoisted_3 = {
  "class": "on_sale"
};
var _hoisted_4 = {
  key: 1,
  "class": "product_price"
};
var _hoisted_5 = {
  "class": "price"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.normal_price !== $props.sale_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.thousandSeprator(_ctx.showItemPrice($props.sale_price))) + " MMK ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("del", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.thousandSeprator(_ctx.showItemPrice($props.normal_price))) + " MMK", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.showItemPrice($options.showItemPromotionPercentage($props.normal_price, $props.sale_price))) + "% Off", 1
  /* TEXT */
  )])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.thousandSeprator(_ctx.showItemPrice($props.sale_price))) + " MMK ", 1
  /* TEXT */
  )]));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/PageTitle.vue?vue&type=template&id=42f99b34":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/PageTitle.vue?vue&type=template&id=42f99b34 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "breadcrumb_section bg_gray page-title-mini"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "row align-items-center"
};
var _hoisted_4 = {
  "class": "col-md-6"
};
var _hoisted_5 = {
  "class": "page-title"
};
var _hoisted_6 = {
  "class": "col-md-6"
};
var _hoisted_7 = {
  "class": "breadcrumb justify-content-md-end"
};
var _hoisted_8 = {
  "class": "breadcrumb-item"
};
var _hoisted_9 = {
  "class": "breadcrumb-item active"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START SECTION BREADCRUMB "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" STRART CONTAINER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'home'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Home ")];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END CONTAINER")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END SECTION BREADCRUMB ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/WishList.vue?vue&type=template&id=36ebfd88":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/WishList.vue?vue&type=template&id=36ebfd88 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "main_content"
};
var _hoisted_2 = {
  "class": "section"
};
var _hoisted_3 = {
  "class": "container"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-12"
};
var _hoisted_6 = {
  "class": "table-responsive wishlist_table"
};
var _hoisted_7 = {
  "class": "table"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "product-thumbnail"
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "product-name"
}, "Product"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "product-price"
}, "Price"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "product-add-to-cart"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "product-remove"
}, "Remove")])], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "product-thumbnail"
};
var _hoisted_10 = {
  "class": "product-name",
  "data-title": "Product"
};
var _hoisted_11 = {
  "class": "product-price",
  "data-title": "Price"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "product-add-to-cart"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "btn btn-fill-out"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icon-basket-loaded"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add to Cart")])], -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "product-remove",
  "data-title": "Remove"
};
var _hoisted_14 = ["onClick"];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "hand_cursor ti-close"
}, null, -1
/* HOISTED */
);

var _hoisted_16 = [_hoisted_15];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PageTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PageTitle");

  var _component_v_lazy_image = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-lazy-image");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_ItemPrice = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ItemPrice");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START SECTION SHOP "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PageTitle, {
    title: "Wishlist"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.wishlist_items.data, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'items.detail',
        params: {
          id: item.item_link
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_lazy_image, {
          src: _ctx.showImage(item.item_image),
          alt: item.item_name
        }, null, 8
        /* PROPS */
        , ["src", "alt"])];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.item_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ItemPrice, {
      normal_price: item.normal_price,
      sale_price: item.sale_price
    }, null, 8
    /* PROPS */
    , ["normal_price", "sale_price"])]), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: function onClick($event) {
        return _ctx.removeFromWishlist(item.id);
      }
    }, _hoisted_16, 8
    /* PROPS */
    , _hoisted_14)])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END SECTION SHOP ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <component is=\"script\" src=\"user/js/scripts.js\" /> ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/common/index.js":
/*!**************************************!*\
  !*** ./resources/js/common/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "common_mixin": () => (/* binding */ common_mixin)
/* harmony export */ });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store.js */ "./resources/js/store.js");
/* harmony import */ var _helpers_general_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/general.js */ "./resources/js/helpers/general.js");


var common_mixin = {
  data: function data() {
    return {
      userLang: _store_js__WEBPACK_IMPORTED_MODULE_0__.userLang
    };
  },
  methods: {
    translateLang: function translateLang(data) {
      var file = __webpack_require__("./resources/js/lang sync recursive ^\\.\\/.*\\/data\\.json$")("./" + this.userLang.data + "/data.json");

      return file[data];
    },
    thousandSeprator: function thousandSeprator(x) {
      return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    showItemPrice: function showItemPrice(price) {
      return (0,_helpers_general_js__WEBPACK_IMPORTED_MODULE_1__.showPrice)(price);
    }
  }
};

/***/ }),

/***/ "./resources/js/helpers/general.js":
/*!*****************************************!*\
  !*** ./resources/js/helpers/general.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showPrice": () => (/* binding */ showPrice),
/* harmony export */   "showSwalLoading": () => (/* binding */ showSwalLoading),
/* harmony export */   "thousandSeprator": () => (/* binding */ thousandSeprator)
/* harmony export */ });
function showPrice(price) {
  return parseInt(price).toString();
}
function thousandSeprator(x) {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function showSwalLoading(object) {
  object.$swal({
    title: 'Now loading',
    html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
    allowEscapeKey: false,
    allowOutsideClick: false,
    timer: 2000,
    onOpen: function onOpen() {
      swal.showLoading();
    }
  }).then(function () {}, function (dismiss) {
    if (dismiss === 'timer') {
      object.$swal.close;
    }
  });
}

/***/ }),

/***/ "./resources/js/store.js":
/*!*******************************!*\
  !*** ./resources/js/store.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "admin": () => (/* binding */ admin),
/* harmony export */   "currentYear": () => (/* binding */ currentYear),
/* harmony export */   "shop": () => (/* binding */ shop),
/* harmony export */   "user": () => (/* binding */ user),
/* harmony export */   "userId": () => (/* binding */ userId),
/* harmony export */   "userLang": () => (/* binding */ userLang),
/* harmony export */   "userLogin": () => (/* binding */ userLogin)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");



function getShop(shop) {
  window.axios.get('shop').then(function (response) {
    shop = response.data.shop;
  });
}

var userLogin = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  data: window.cookies.get('access_token') ? true : false
});
var userLang = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  data: window.cookies.get('lang') ? window.cookies.get('lang') : 'en',
  changeData: function changeData(data) {
    this.data = data;
    window.cookies.set("lang", data, "1D", null, null, null, "Lax");
  }
});
var shop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  data: window.shop,
  changeData: function changeData(data) {
    this.data = data;
  }
});
var admin = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  data: {},
  changeData: function changeData(data) {
    this.data = data;
  }
});
var user = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  data: {},
  changeData: function changeData(data) {
    this.data = data;
  }
});
var userId = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  data: {},
  changeData: function changeData(data) {
    this.data = data;
  }
});
var currentYear = new Date().getFullYear();

/***/ }),

/***/ "./resources/js/user/common/index.js":
/*!*******************************************!*\
  !*** ./resources/js/user/common/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mixin": () => (/* binding */ mixin)
/* harmony export */ });
/* harmony import */ var _store___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/ */ "./resources/js/user/store/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var mixin = {
  data: function data() {
    return {
      shopping_cart_items: _store___WEBPACK_IMPORTED_MODULE_0__.shopping_cart_items,
      shopping_total_qty: _store___WEBPACK_IMPORTED_MODULE_0__.shopping_total_qty,
      shopping_total_price: _store___WEBPACK_IMPORTED_MODULE_0__.shopping_total_price,
      wishlist_items: _store___WEBPACK_IMPORTED_MODULE_0__.wishlist_items,
      wishlist_item_ids: _store___WEBPACK_IMPORTED_MODULE_0__.wishlist_item_ids
    };
  },
  methods: {
    removeFromWishlist: function removeFromWishlist(itemId) {
      var _this = this;

      window.axios.post('remove_item_from_wishlist?item_id=' + itemId).then(function (response) {
        _this.wishlist_items.changeData(response.data.wishlist_items);

        _this.wishlist_item_ids.changeData(response.data.wishlist_item_ids);
      });
    },
    showImage: function showImage(image) {
      return image == null ? '/images/logo_dark.png' : '/image/item_images/' + image;
    },
    changeShoppingCart: function changeShoppingCart(response) {
      var totalQty = 0;
      var totalPrice = 0;
      this.shopping_cart_items.changeData(response.data.shopping_cart_items);

      switch (this.shopping_cart_items.data.length) {
        case 0:
          this.shopping_total_qty.changeData(0);
          this.shopping_total_price.changeData(0);
          break;

        default:
          this.shopping_cart_items.data.forEach(function (item) {
            totalQty += item.qty;
            totalPrice += parseFloat(item.sale_price);
          });
          this.shopping_total_qty.changeData(totalQty);
          this.shopping_total_price.changeData(totalPrice);
          break;
      }
    },
    removeFromCart: function removeFromCart(id) {
      var _this2 = this;

      window.axios.post('remove_item_from_shopping_cart?id=' + id).then(function (response) {
        _this2.changeShoppingCart(response);
      });
    },
    getShoppingCartItems: function getShoppingCartItems() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                window.axios.get('shopping_cart').then(function (response) {
                  _this3.changeShoppingCart(response);
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getWishListItems: function getWishListItems() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                window.axios.get('wishlist').then(function (response) {
                  var responseData = response.data;

                  _this4.wishlist_items.changeData(responseData.wishlist_items);

                  _this4.wishlist_item_ids.changeData(responseData.wishlist_item_ids);
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addToWishlist: function addToWishlist(itemId) {
      var _this5 = this;

      window.axios.post('add_item_to_wishlist?item_id=' + itemId).then(function (response) {
        _this5.$swal('Success', response.data.message, 'success');

        _this5.wishlist_items.changeData(response.data.wishlist_items);

        _this5.wishlist_item_ids.changeData(response.data.wishlist_item_ids);
      });
    }
  }
};

/***/ }),

/***/ "./resources/js/user/common/ui.js":
/*!****************************************!*\
  !*** ./resources/js/user/common/ui.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mix": () => (/* binding */ mix)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./resources/js/user/store/index.js");

var mix = {
  data: function data() {
    return {
      menu_show: _store__WEBPACK_IMPORTED_MODULE_0__.menu_show,
      mobile: _store__WEBPACK_IMPORTED_MODULE_0__.mobile
    };
  },
  created: function created() {
    this.mobile.checkMobile();
    this.menu_show.changeData(this.$route.name, this.mobile.data);
    window.scrollTo(0, 0);
  }
};

/***/ }),

/***/ "./resources/js/user/helpers/general.js":
/*!**********************************************!*\
  !*** ./resources/js/user/helpers/general.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showAveragePercent": () => (/* binding */ showAveragePercent),
/* harmony export */   "showPromotionPercentage": () => (/* binding */ showPromotionPercentage)
/* harmony export */ });
function showAveragePercent(arr) {
  var oneStarCount = 0;
  var twoStarCount = 0;
  var threeStarCount = 0;
  var fourStarCount = 0;
  var fiveStarCount = 0;
  arr.map(function (a) {
    switch (a) {
      case "1":
        oneStarCount++;
        break;

      case "2":
        twoStarCount++;
        break;

      case "3":
        threeStarCount++;
        break;

      case "4":
        fourStarCount++;
        break;

      case "5":
        fiveStarCount++;
        break;
    }
  });
  var oneStarPercent = oneStarCount / arr.length * 100;
  var twoStarPercent = twoStarCount / arr.length * 100;
  var threeStarPercent = threeStarCount / arr.length * 100;
  var fourStarPercent = fourStarCount / arr.length * 100;
  var fiveStarPercent = fiveStarCount / arr.length * 100;
  var averageStarData = oneStarPercent > 0 || twoStarPercent > 0 || threeStarPercent > 0 || fourStarPercent > 0 || fiveStarPercent > 0 ? (5 * fiveStarCount + 4 * fourStarCount + 3 * threeStarCount + 2 * twoStarCount + 1 * oneStarCount) / (fiveStarCount + fourStarCount + threeStarCount + twoStarCount + oneStarCount) : 0;
  return averageStarData / 5 * 100;
}
function showPromotionPercentage(normalPrice, salePrice) {
  return (normalPrice - salePrice) * 100 / normalPrice;
}

/***/ }),

/***/ "./resources/js/user/store/index.js":
/*!******************************************!*\
  !*** ./resources/js/user/store/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "categories": () => (/* binding */ categories),
/* harmony export */   "menu_show": () => (/* binding */ menu_show),
/* harmony export */   "mobile": () => (/* binding */ mobile),
/* harmony export */   "shopping_cart_items": () => (/* binding */ shopping_cart_items),
/* harmony export */   "shopping_total_price": () => (/* binding */ shopping_total_price),
/* harmony export */   "shopping_total_qty": () => (/* binding */ shopping_total_qty),
/* harmony export */   "wishlist_item_ids": () => (/* binding */ wishlist_item_ids),
/* harmony export */   "wishlist_items": () => (/* binding */ wishlist_items)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var categories = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  data: [],
  changeData: function changeData(data) {
    this.data = data;
  }
});
var wishlist_items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  data: [],
  changeData: function changeData(data) {
    this.data = data;
  }
});
var wishlist_item_ids = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  data: [],
  changeData: function changeData(data) {
    this.data = data;
  }
});
var shopping_cart_items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  data: [],
  changeData: function changeData(data) {
    this.data = data;
  }
});
var shopping_total_qty = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  data: 0,
  changeData: function changeData(data) {
    this.data = data;
  }
});
var shopping_total_price = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  data: 0,
  changeData: function changeData(data) {
    this.data = data;
  }
});
var menu_show = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  data: true,
  changeData: function changeData(routeName, mobile) {
    this.data = routeName == 'home' || routeName !== 'home' && mobile == true ? true : false;
  },
  changeShow: function changeShow() {
    this.data = !this.data;
  }
});
var mobile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  data: false,
  checkMobile: function checkMobile() {
    this.data = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 991 ? false : true;
  }
});

/***/ }),

/***/ "./resources/js/user/components/ItemPrice.vue":
/*!****************************************************!*\
  !*** ./resources/js/user/components/ItemPrice.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ItemPrice_vue_vue_type_template_id_64381cd3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemPrice.vue?vue&type=template&id=64381cd3 */ "./resources/js/user/components/ItemPrice.vue?vue&type=template&id=64381cd3");
/* harmony import */ var _ItemPrice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemPrice.vue?vue&type=script&lang=js */ "./resources/js/user/components/ItemPrice.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ItemPrice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ItemPrice_vue_vue_type_template_id_64381cd3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/ItemPrice.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/PageTitle.vue":
/*!****************************************************!*\
  !*** ./resources/js/user/components/PageTitle.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageTitle_vue_vue_type_template_id_42f99b34__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=template&id=42f99b34 */ "./resources/js/user/components/PageTitle.vue?vue&type=template&id=42f99b34");
/* harmony import */ var _PageTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=script&lang=js */ "./resources/js/user/components/PageTitle.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PageTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PageTitle_vue_vue_type_template_id_42f99b34__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/PageTitle.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/views/WishList.vue":
/*!**********************************************!*\
  !*** ./resources/js/user/views/WishList.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WishList_vue_vue_type_template_id_36ebfd88__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WishList.vue?vue&type=template&id=36ebfd88 */ "./resources/js/user/views/WishList.vue?vue&type=template&id=36ebfd88");
/* harmony import */ var _WishList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WishList.vue?vue&type=script&lang=js */ "./resources/js/user/views/WishList.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_WishList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_WishList_vue_vue_type_template_id_36ebfd88__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/views/WishList.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/ItemPrice.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/user/components/ItemPrice.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemPrice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemPrice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ItemPrice.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemPrice.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/PageTitle.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/user/components/PageTitle.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageTitle.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/PageTitle.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/views/WishList.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/user/views/WishList.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WishList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WishList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WishList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/WishList.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/ItemPrice.vue?vue&type=template&id=64381cd3":
/*!**********************************************************************************!*\
  !*** ./resources/js/user/components/ItemPrice.vue?vue&type=template&id=64381cd3 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemPrice_vue_vue_type_template_id_64381cd3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemPrice_vue_vue_type_template_id_64381cd3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ItemPrice.vue?vue&type=template&id=64381cd3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemPrice.vue?vue&type=template&id=64381cd3");


/***/ }),

/***/ "./resources/js/user/components/PageTitle.vue?vue&type=template&id=42f99b34":
/*!**********************************************************************************!*\
  !*** ./resources/js/user/components/PageTitle.vue?vue&type=template&id=42f99b34 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageTitle_vue_vue_type_template_id_42f99b34__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageTitle_vue_vue_type_template_id_42f99b34__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageTitle.vue?vue&type=template&id=42f99b34 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/PageTitle.vue?vue&type=template&id=42f99b34");


/***/ }),

/***/ "./resources/js/user/views/WishList.vue?vue&type=template&id=36ebfd88":
/*!****************************************************************************!*\
  !*** ./resources/js/user/views/WishList.vue?vue&type=template&id=36ebfd88 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WishList_vue_vue_type_template_id_36ebfd88__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WishList_vue_vue_type_template_id_36ebfd88__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WishList.vue?vue&type=template&id=36ebfd88 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/WishList.vue?vue&type=template&id=36ebfd88");


/***/ }),

/***/ "./resources/js/lang sync recursive ^\\.\\/.*\\/data\\.json$":
/*!******************************************************!*\
  !*** ./resources/js/lang/ sync ^\.\/.*\/data\.json$ ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/data.json": "./resources/js/lang/en/data.json",
	"./fn/data.json": "./resources/js/lang/fn/data.json",
	"./jp/data.json": "./resources/js/lang/jp/data.json",
	"./mm/data.json": "./resources/js/lang/mm/data.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/lang sync recursive ^\\.\\/.*\\/data\\.json$";

/***/ }),

/***/ "./node_modules/v-lazy-image/dist/v-lazy-image.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/v-lazy-image/dist/v-lazy-image.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

var index = {
  props: {
    src: {
      type: String,
      required: true
    },
    srcPlaceholder: {
      type: String,
      default: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    },
    srcset: {
      type: String
    },
    intersectionOptions: {
      type: Object,
      default: () => ({})
    },
    usePicture: {
      type: Boolean,
      default: false
    }
  },
  inheritAttrs: false,
  setup(props, { attrs, slots, emit }) {
    const root = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      observer: null,
      intersected: false,
      loaded: false
    });
    const srcImage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => state.intersected && props.src ? props.src : props.srcPlaceholder);
    const srcsetImage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => state.intersected && props.srcset ? props.srcset : false);
    const load = () => {
      if (root.value && root.value.getAttribute("src") !== props.srcPlaceholder) {
        state.loaded = true;
        emit("load", root.value);
      }
    };
    const error = () => emit("error", root.value);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      if ("IntersectionObserver" in window) {
        state.observer = new IntersectionObserver((entries) => {
          const image = entries[0];
          if (image.isIntersecting) {
            state.intersected = true;
            state.observer.disconnect();
            emit("intersect");
          }
        }, props.intersectionOptions);
        state.observer.observe(root.value);
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
      if ("IntersectionObserver" in window && state.observer) {
        state.observer.disconnect();
      }
    });
    return () => {
      const img = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("img", __spreadProps(__spreadValues({
        ref: root,
        src: srcImage.value,
        srcset: srcsetImage.value || null
      }, attrs), {
        class: [
          attrs.class,
          "v-lazy-image",
          { "v-lazy-image-loaded": state.loaded }
        ],
        onLoad: load,
        onError: error
      }));
      return props.usePicture ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("picture", { ref: root, onLoad: load }, state.intersected ? [slots.default, img] : [img]) : img;
    };
  }
};



/***/ }),

/***/ "./resources/js/lang/en/data.json":
/*!****************************************!*\
  !*** ./resources/js/lang/en/data.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Categories":"All Categories","Feature":"Featured Products","Gaming":"Gaming Products","Best":"Best Seller Products","Brands":"Our Brands","Colors":"Colors","Subscribe":"Subscribe Our Newsletter","Register":"Register","Create Account":"Create Account","Placeholder Name":"Enter Your Name","Placeholder Email":"Enter Your Email","Placeholder Password":"Password","Placeholder Confirm":"Confirm Password","Agree Policy":"I agree to terms & Policy.","Have Account":"Already have an account?","No Account":"Don\'t have an account?","Login":"Login","Compare":"Compare","Filter":"Filter","About Us":"About Us"}');

/***/ }),

/***/ "./resources/js/lang/fn/data.json":
/*!****************************************!*\
  !*** ./resources/js/lang/fn/data.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Categories":"Toutes Catégories","Feature":"Produits populaires","Gaming":"Produits de jeu","Best":"Produits les plus vendus","Brands":"Nos marques","Colors":"Couleurs","Subscribe":"Abonnez-vous à notre newsletter","Register":"S\'inscrire","Create Account":"Créer un compte","Placeholder Name":"Entrez votre nom","Placeholder Email":"Entrer votre Email","Placeholder Password":"Mot de passe","Placeholder Confirm":"Confirmez le mot de passe","Agree Policy":"J\'accepte les termes et la politique.","Have Account":"Vous avez déjà un compte?","No Account":"Vous n\'avez pas de compte?","Login":"Connexion","Compare":"Comparer","Filter":"Filtre","About Us":"À propos de nous"}');

/***/ }),

/***/ "./resources/js/lang/jp/data.json":
/*!****************************************!*\
  !*** ./resources/js/lang/jp/data.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Categories":"すべてのカテゴリ","Feature":"おすすめ商品","Gaming":"ゲーム製品","Best":"ベストセラー商品","Brands":"我々のブランド","Colors":"色","Subscribe":"ニュースレターを購読する","Register":"登録","Create Account":"アカウントを作成する","Placeholder Name":"あなたの名前を入力してください","Placeholder Email":"メールアドレスを入力","Placeholder Password":"パスワード","Placeholder Confirm":"パスワードを認証する","Agree Policy":"規約とポリシーに同意します。","Have Account":"すでにアカウントをお持ちですか？","No Account":"アカウントをお持ちでない場合?","Login":"ログイン","Compare":"比較","Filter":"フィルター","About Us":"会社案内"}');

/***/ }),

/***/ "./resources/js/lang/mm/data.json":
/*!****************************************!*\
  !*** ./resources/js/lang/mm/data.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Categories":"အမျိုးအစားအားလုံး","Feature":"အထူးအသားပေး ထုတ်ကုန်များ","Gaming":"ဂိမ်းထုတ်ကုန်များ","Best":"ရောင်းအားအကောင်းဆုံး ထုတ်ကုန်များ","Brands":"ကျွန်ုပ်တို့၏အမှတ်တံဆိပ်များ","Colors":"အရောင်များ","Subscribe":"ကျွန်ုပ်တို့၏သတင်းလွှာကို စာရင်းသွင်းပါ။","Register":"မှတ်ပုံတင်ပါ။","Create Account":"အကောင့်ပြုလုပ်ပါ","Placeholder Name":"သင့်အမည်ကို ထည့်သွင်းပါ","Placeholder Email":"သင့်၏အီးမေးလ်လိပ်စာထည့်ပါ","Placeholder Password":"စကားဝှက်","Placeholder Confirm":"စကားဝှက်အတည်ပြုပါ","Agree Policy":"စည်းမျဉ်းများနှင့် မူဝါဒကို သဘောတူပါသည်။","Have Account":"အကောင့်ရှိပြီးသားလား?","No Account":"အကောင့်မရှိဘူးလား?","Login":"အကောင့်ဝင်ရန်","Compare":"နှိုင်းယှဉ်ပါ","Filter":"စီစစ်ပါ","About Us":"About Us"}');

/***/ })

}]);