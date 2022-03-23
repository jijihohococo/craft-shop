"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_views_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/admin/components/ContentHeader.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/admin/components/ContentHeader.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ContentHeader',
  props: {
    header: {
      type: String
    },
    back_link: {
      type: String,
      "default": null
    },
    back_title: {
      type: String,
      "default": null
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/admin/views/Dashboard.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/admin/views/Dashboard.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ContentHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ContentHeader */ "./resources/js/admin/components/ContentHeader.vue");
/* harmony import */ var _helpers_check_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/check.js */ "./resources/js/admin/helpers/check.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      content: 'Dashboard',
      totalUsers: 0
    };
  },
  components: {
    ContentHeader: _components_ContentHeader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    getTotalUsers: function getTotalUsers() {
      var _this = this;

      window.axios.get("total_users").then(function (response) {
        if (response.data.message == 'Loading') {
          (0,_helpers_check_js__WEBPACK_IMPORTED_MODULE_1__.showSwalLoading)(_this);
        } else {
          _this.totalUsers = response.data.total_users;
        }
      })["catch"](function (error) {
        (0,_helpers_check_js__WEBPACK_IMPORTED_MODULE_1__.errorResponse)(error, _this, 'read');
      });
    }
  },
  created: function created() {
    this.getTotalUsers();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/admin/components/ContentHeader.vue?vue&type=template&id=343b3f4b":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/admin/components/ContentHeader.vue?vue&type=template&id=343b3f4b ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content-header"
};
var _hoisted_2 = {
  "class": "container-fluid"
};
var _hoisted_3 = {
  "class": "row mb-2"
};
var _hoisted_4 = {
  "class": "col-sm-6"
};
var _hoisted_5 = {
  "class": "m-0"
};
var _hoisted_6 = {
  "class": "col-sm-6"
};
var _hoisted_7 = {
  "class": "breadcrumb float-sm-right"
};
var _hoisted_8 = {
  "class": "breadcrumb-item"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Home");

var _hoisted_10 = {
  key: 0,
  "class": "breadcrumb-item"
};
var _hoisted_11 = {
  key: 1,
  "class": "breadcrumb-item active"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Content Header (Page header) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.header), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.col "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/admin/dashboard"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    _: 1
    /* STABLE */

  })]), $props.back_link !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: $props.back_link
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.back_title), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.header !== 'Dashboard' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.header), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.col ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.row ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.container-fluid ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.content-header ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/admin/views/Dashboard.vue?vue&type=template&id=2991c845":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/admin/views/Dashboard.vue?vue&type=template&id=2991c845 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content"
};
var _hoisted_2 = {
  "class": "container-fluid"
};
var _hoisted_3 = {
  "class": "row"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-3 col-6\"><!-- small box --><div class=\"small-box bg-info\"><div class=\"inner\"><h3>150</h3><p>Today Orders</p></div><div class=\"icon\"><i class=\"ion ion-bag\"></i></div><a class=\"small-box-footer\">More info <i class=\"fas fa-arrow-circle-right\"></i></a></div></div>", 1);

var _hoisted_5 = {
  "class": "col-lg-3 col-6"
};
var _hoisted_6 = {
  "class": "small-box bg-warning"
};
var _hoisted_7 = {
  "class": "inner"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "User Registrations", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ion ion-person-add"
})], -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "small-box-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("More info "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-arrow-circle-right"
})], -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><!-- Left col --><section class=\"col-lg-7 connectedSortable\"><!-- TO DO List --><div class=\"card\"><div class=\"card-header\"><h3 class=\"card-title\"><i class=\"ion ion-clipboard mr-1\"></i> Target </h3><div class=\"card-tools\"><ul class=\"pagination pagination-sm\"><li class=\"page-item\"><a href=\"#\" class=\"page-link\">«</a></li><li class=\"page-item\"><a href=\"#\" class=\"page-link\">1</a></li><li class=\"page-item\"><a href=\"#\" class=\"page-link\">2</a></li><li class=\"page-item\"><a href=\"#\" class=\"page-link\">3</a></li><li class=\"page-item\"><a href=\"#\" class=\"page-link\">»</a></li></ul></div></div><!-- /.card-header --><div class=\"card-body\"><ul class=\"todo-list\" data-widget=\"todo-list\"><li><!-- drag handle --><span class=\"handle\"><i class=\"fas fa-ellipsis-v\"></i><i class=\"fas fa-ellipsis-v\"></i></span><!-- checkbox --><div class=\"icheck-primary d-inline ml-2\"><input type=\"checkbox\" value=\"\" name=\"todo1\" id=\"todoCheck1\"><label for=\"todoCheck1\"></label></div><!-- todo text --><span class=\"text\">Design a nice theme</span><!-- Emphasis label --><small class=\"badge badge-danger\"><i class=\"far fa-clock\"></i> 2 mins</small><!-- General tools such as edit or delete--><div class=\"tools\"><i class=\"fas fa-edit\"></i><i class=\"fas fa-trash-o\"></i></div></li><li><span class=\"handle\"><i class=\"fas fa-ellipsis-v\"></i><i class=\"fas fa-ellipsis-v\"></i></span><div class=\"icheck-primary d-inline ml-2\"><input type=\"checkbox\" value=\"\" name=\"todo2\" id=\"todoCheck2\" checked><label for=\"todoCheck2\"></label></div><span class=\"text\">Make the theme responsive</span><small class=\"badge badge-info\"><i class=\"far fa-clock\"></i> 4 hours</small><div class=\"tools\"><i class=\"fas fa-edit\"></i><i class=\"fas fa-trash-o\"></i></div></li><li><span class=\"handle\"><i class=\"fas fa-ellipsis-v\"></i><i class=\"fas fa-ellipsis-v\"></i></span><div class=\"icheck-primary d-inline ml-2\"><input type=\"checkbox\" value=\"\" name=\"todo3\" id=\"todoCheck3\"><label for=\"todoCheck3\"></label></div><span class=\"text\">Let theme shine like a star</span><small class=\"badge badge-warning\"><i class=\"far fa-clock\"></i> 1 day</small><div class=\"tools\"><i class=\"fas fa-edit\"></i><i class=\"fas fa-trash-o\"></i></div></li><li><span class=\"handle\"><i class=\"fas fa-ellipsis-v\"></i><i class=\"fas fa-ellipsis-v\"></i></span><div class=\"icheck-primary d-inline ml-2\"><input type=\"checkbox\" value=\"\" name=\"todo4\" id=\"todoCheck4\"><label for=\"todoCheck4\"></label></div><span class=\"text\">Let theme shine like a star</span><small class=\"badge badge-success\"><i class=\"far fa-clock\"></i> 3 days</small><div class=\"tools\"><i class=\"fas fa-edit\"></i><i class=\"fas fa-trash-o\"></i></div></li><li><span class=\"handle\"><i class=\"fas fa-ellipsis-v\"></i><i class=\"fas fa-ellipsis-v\"></i></span><div class=\"icheck-primary d-inline ml-2\"><input type=\"checkbox\" value=\"\" name=\"todo5\" id=\"todoCheck5\"><label for=\"todoCheck5\"></label></div><span class=\"text\">Check your messages and notifications</span><small class=\"badge badge-primary\"><i class=\"far fa-clock\"></i> 1 week</small><div class=\"tools\"><i class=\"fas fa-edit\"></i><i class=\"fas fa-trash-o\"></i></div></li><li><span class=\"handle\"><i class=\"fas fa-ellipsis-v\"></i><i class=\"fas fa-ellipsis-v\"></i></span><div class=\"icheck-primary d-inline ml-2\"><input type=\"checkbox\" value=\"\" name=\"todo6\" id=\"todoCheck6\"><label for=\"todoCheck6\"></label></div><span class=\"text\">Let theme shine like a star</span><small class=\"badge badge-secondary\"><i class=\"far fa-clock\"></i> 1 month</small><div class=\"tools\"><i class=\"fas fa-edit\"></i><i class=\"fas fa-trash-o\"></i></div></li></ul></div><!-- /.card-body --><div class=\"card-footer clearfix\"><button type=\"button\" class=\"btn btn-primary float-right\"><i class=\"fas fa-plus\"></i> Add item</button></div></div><!-- /.card --></section><!-- /.Left col --><!-- right col (We are only adding the ID to make the widgets sortable)--><section class=\"col-lg-5 connectedSortable\"><!-- Map card --><div class=\"card bg-gradient-primary\" style=\"display:none;\"><div class=\"card-header border-0\"><h3 class=\"card-title\"><i class=\"fas fa-map-marker-alt mr-1\"></i> Visitors </h3><!-- card tools --><div class=\"card-tools\"><button type=\"button\" class=\"btn btn-primary btn-sm daterange\" title=\"Date range\"><i class=\"far fa-calendar-alt\"></i></button><button type=\"button\" class=\"btn btn-primary btn-sm\" data-card-widget=\"collapse\" title=\"Collapse\"><i class=\"fas fa-minus\"></i></button></div><!-- /.card-tools --></div><div class=\"card-body\"><div id=\"world-map\" style=\"height:250px;width:100%;\"></div></div><!-- /.card-body--><div class=\"card-footer bg-transparent\"><div class=\"row\"><div class=\"col-4 text-center\"><div id=\"sparkline-1\"></div><div class=\"text-white\">Visitors</div></div><!-- ./col --><div class=\"col-4 text-center\"><div id=\"sparkline-2\"></div><div class=\"text-white\">Online</div></div><!-- ./col --><div class=\"col-4 text-center\"><div id=\"sparkline-3\"></div><div class=\"text-white\">Sales</div></div><!-- ./col --></div><!-- /.row --></div></div><!-- /.card --><!-- Calendar --><div class=\"card bg-gradient-success\"><div class=\"card-header border-0\"><h3 class=\"card-title\"><i class=\"far fa-calendar-alt\"></i> Calendar </h3><!-- tools card --><div class=\"card-tools\"><!-- button with a dropdown --><button type=\"button\" class=\"btn btn-success btn-sm\" data-card-widget=\"collapse\"><i class=\"fas fa-minus\"></i></button><button type=\"button\" class=\"btn btn-success btn-sm\" data-card-widget=\"remove\"><i class=\"fas fa-times\"></i></button></div><!-- /. tools --></div><!-- /.card-header --><div class=\"card-body pt-0\"><!--The calendar --><div id=\"calendar\" style=\"width:100%;\"></div></div><!-- /.card-body --></div><!-- /.card --></section><!-- right col --></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ContentHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ContentHeader");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ContentHeader, {
    header: 'Dashboard'
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Main content "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Small boxes (Stat box) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ./col "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ./col "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" small box "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.totalUsers), 1
  /* TEXT */
  ), _hoisted_8]), _hoisted_9, _hoisted_10])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ./col ")]), _hoisted_11])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/admin/helpers/check.js":
/*!*********************************************!*\
  !*** ./resources/js/admin/helpers/check.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkContentPermission": () => (/* binding */ checkContentPermission),
/* harmony export */   "errorResponse": () => (/* binding */ errorResponse),
/* harmony export */   "checkAuthorize": () => (/* binding */ checkAuthorize),
/* harmony export */   "checkCreateEditPermission": () => (/* binding */ checkCreateEditPermission),
/* harmony export */   "showSwalLoading": () => (/* binding */ showSwalLoading),
/* harmony export */   "getModel": () => (/* binding */ getModel)
/* harmony export */ });
function checkContentPermission(content, permission, object) {
  window.axios.get('check_permission/' + content + '/' + permission).then(function (response) {
    if (response.data.message == 'Loading') {
      showSwalLoading(object);
    } else {
      object.actions[permission] = true;
    }
  })["catch"](function (error) {
    errorResponse(error, object);
  });
}
function errorResponse(error, object) {
  var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (error.response) {
    switch (error.response.status) {
      case 401:
        object.$swal('Unauthenticated', "You are not login", 'error');
        setTimeout(function () {
          window.location.href = "/admin/login";
        }, 2000);
        break;

      case 403:
        object.actions[action] = false;

        if (object.errors) {
          object.errors.error_status = 403;
          object.errors.error_title = "Permission Denied";
          object.errors.error_description = "You are not allowed to " + action + " " + object.current;
        }

        break;

      case 404:
        object.actions[action] = false;
        object.errors.error_status = 404;
        object.errors.error_title = "Page Not Found";
        object.errors.error_description = "You are in the wrong page";
        break;
    }
  }
}
function checkAuthorize(object, method) {
  if (object.actions[object.current] == true && object.count == 0) {
    object.count = 1;

    if (!isNaN(object.$route.params.id)) {
      object[method](object.$route.params.id);
    }
  }
}
function checkCreateEditPermission(object) {
  var checkStage = isNaN(object.$route.params.id) ? 'create' : 'update';
  checkContentPermission(object.content, checkStage, object);
  object.current = checkStage;
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
  location.reload();
}
function getModel(model) {
  return model[0].toLowerCase() + model.substring(1);
}

/***/ }),

/***/ "./resources/js/admin/components/ContentHeader.vue":
/*!*********************************************************!*\
  !*** ./resources/js/admin/components/ContentHeader.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContentHeader_vue_vue_type_template_id_343b3f4b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentHeader.vue?vue&type=template&id=343b3f4b */ "./resources/js/admin/components/ContentHeader.vue?vue&type=template&id=343b3f4b");
/* harmony import */ var _ContentHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentHeader.vue?vue&type=script&lang=js */ "./resources/js/admin/components/ContentHeader.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ContentHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ContentHeader_vue_vue_type_template_id_343b3f4b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/admin/components/ContentHeader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/admin/views/Dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/admin/views/Dashboard.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_2991c845__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=2991c845 */ "./resources/js/admin/views/Dashboard.vue?vue&type=template&id=2991c845");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./resources/js/admin/views/Dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Dashboard_vue_vue_type_template_id_2991c845__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/admin/views/Dashboard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/admin/components/ContentHeader.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/admin/components/ContentHeader.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContentHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContentHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContentHeader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/admin/components/ContentHeader.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/admin/views/Dashboard.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/admin/views/Dashboard.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/admin/views/Dashboard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/admin/components/ContentHeader.vue?vue&type=template&id=343b3f4b":
/*!***************************************************************************************!*\
  !*** ./resources/js/admin/components/ContentHeader.vue?vue&type=template&id=343b3f4b ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContentHeader_vue_vue_type_template_id_343b3f4b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContentHeader_vue_vue_type_template_id_343b3f4b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContentHeader.vue?vue&type=template&id=343b3f4b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/admin/components/ContentHeader.vue?vue&type=template&id=343b3f4b");


/***/ }),

/***/ "./resources/js/admin/views/Dashboard.vue?vue&type=template&id=2991c845":
/*!******************************************************************************!*\
  !*** ./resources/js/admin/views/Dashboard.vue?vue&type=template&id=2991c845 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_2991c845__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_2991c845__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=template&id=2991c845 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/admin/views/Dashboard.vue?vue&type=template&id=2991c845");


/***/ })

}]);