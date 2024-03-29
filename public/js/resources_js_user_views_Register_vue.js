(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_user_views_Register_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Register.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Register.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PageTitle */ "./resources/js/user/components/PageTitle.vue");
/* harmony import */ var _common___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/ */ "./resources/js/common/index.js");
/* harmony import */ var _common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/ui */ "./resources/js/user/common/ui.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PageTitle: _components_PageTitle__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_common___WEBPACK_IMPORTED_MODULE_1__.common_mixin, _common_ui__WEBPACK_IMPORTED_MODULE_2__.mix],
  data: function data() {
    return {
      fields: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: {}
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      window.axios.post('register', this.fields).then(function (response) {
        window.location.href = '/';
      })["catch"](function (error) {
        if (error.response.status == 422 || error.response.status == 401) {
          _this.errors = error.response.data.errors;
        }
      });
    }
  }
});

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Register.vue?vue&type=template&id=e6f7120c":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Register.vue?vue&type=template&id=e6f7120c ***!
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
  "class": "login_register_wrap section"
};
var _hoisted_3 = {
  "class": "container"
};
var _hoisted_4 = {
  "class": "row justify-content-center"
};
var _hoisted_5 = {
  "class": "col-xl-6 col-md-10"
};
var _hoisted_6 = {
  "class": "login_wrap"
};
var _hoisted_7 = {
  "class": "padding_eight_all bg-white"
};
var _hoisted_8 = {
  "class": "heading_s1"
};
var _hoisted_9 = {
  "class": "form-group"
};
var _hoisted_10 = ["placeholder"];
var _hoisted_11 = {
  key: 0,
  style: {
    "display": "block"
  },
  "class": "invalid-feedback"
};
var _hoisted_12 = {
  "class": "form-group"
};
var _hoisted_13 = ["placeholder"];
var _hoisted_14 = {
  key: 0,
  style: {
    "display": "block"
  },
  "class": "invalid-feedback"
};
var _hoisted_15 = {
  "class": "form-group"
};
var _hoisted_16 = ["placeholder"];
var _hoisted_17 = {
  key: 0,
  style: {
    "display": "block"
  },
  "class": "invalid-feedback"
};
var _hoisted_18 = {
  key: 1,
  "class": "invalid-feedback"
};
var _hoisted_19 = {
  "class": "form-group"
};
var _hoisted_20 = ["placeholder"];
var _hoisted_21 = {
  "class": "login_footer form-group"
};
var _hoisted_22 = {
  "class": "chek-form"
};
var _hoisted_23 = {
  "class": "custome-checkbox"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "form-check-input",
  type: "checkbox",
  name: "checkbox",
  id: "exampleCheckbox2",
  value: ""
}, null, -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "form-check-label",
  "for": "exampleCheckbox2"
};
var _hoisted_26 = {
  "class": "form-group"
};
var _hoisted_27 = {
  type: "submit",
  "class": "btn btn-fill-out btn-block",
  name: "register"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"different_login\"><span> or</span></div><ul class=\"btn-login list_none text-center\"><li><a href=\"#\" class=\"btn btn-facebook\"><i class=\"ion-social-facebook\"></i>Facebook</a></li><li><a href=\"#\" class=\"btn btn-google\"><i class=\"ion-social-googleplus\"></i>Google</a></li></ul>", 2);

var _hoisted_30 = {
  "class": "form-note text-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PageTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PageTitle");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PageTitle, {
    title: _ctx.translateLang('Register')
  }, null, 8
  /* PROPS */
  , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START LOGIN SECTION "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.translateLang("Create Account")), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.register();
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.fields.name = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.errors && $data.errors.name ? 'form-control is-invalid' : 'form-control']),
    placeholder: _ctx.translateLang('Placeholder Name')
  }, null, 10
  /* CLASS, PROPS */
  , _hoisted_10), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.fields.name]]), $data.errors && $data.errors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("strong", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.errors.name[0]), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.fields.email = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.errors && $data.errors.email ? 'form-control is-invalid' : 'form-control']),
    placeholder: _ctx.translateLang('Placeholder Email')
  }, null, 10
  /* CLASS, PROPS */
  , _hoisted_13), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.fields.email]]), $data.errors && $data.errors.email ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("strong", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.errors.email[0]), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.fields.password = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.errors && $data.errors.password ? 'form-control is-invalid' : 'form-control']),
    placeholder: _ctx.translateLang('Placeholder Password')
  }, null, 10
  /* CLASS, PROPS */
  , _hoisted_16), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.fields.password]]), $data.errors && $data.errors.password ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("strong", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.errors.password[0]), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.errors && $data.errors.account ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("strong", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.errors.account[0]), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.errors && $data.errors.password ? 'form-control is-invalid' : 'form-control']),
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.fields.password_confirmation = $event;
    }),
    placeholder: _ctx.translateLang('Placeholder Confirm')
  }, null, 10
  /* CLASS, PROPS */
  , _hoisted_20), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.fields.password_confirmation]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.translateLang("Agree Policy")), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.translateLang('Register')), 1
  /* TEXT */
  )])], 32
  /* HYDRATE_EVENTS */
  ), _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.translateLang("Have Account")) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/login"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.translateLang("Login")), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END LOGIN SECTION ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <component is=\"script\" src=\"user/js/scripts.js\" /> ")], 2112
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

/***/ "./resources/js/user/views/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/user/views/Register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_e6f7120c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=e6f7120c */ "./resources/js/user/views/Register.vue?vue&type=template&id=e6f7120c");
/* harmony import */ var _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js */ "./resources/js/user/views/Register.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Register_vue_vue_type_template_id_e6f7120c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/views/Register.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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

/***/ "./resources/js/user/views/Register.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/user/views/Register.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Register.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/user/views/Register.vue?vue&type=template&id=e6f7120c":
/*!****************************************************************************!*\
  !*** ./resources/js/user/views/Register.vue?vue&type=template&id=e6f7120c ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_e6f7120c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_e6f7120c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=template&id=e6f7120c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Register.vue?vue&type=template&id=e6f7120c");


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