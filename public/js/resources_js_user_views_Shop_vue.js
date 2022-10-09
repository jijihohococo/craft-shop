"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_user_views_Shop_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/List.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/List.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      selected_list: []
    };
  },
  created: function created() {
    this.selected_list = this.$props.select_list;
  },
  props: {
    column: {
      type: String,
      "default": 'name'
    },
    select_list: {
      type: Array
    },
    title: {
      type: String
    },
    list: {
      type: Object
    },
    route_query: {
      type: String
    }
  },
  methods: {
    changeData: function changeData() {
      this.$emit('updatePage', this.$props.route_query, this.selected_list);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Shop.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Shop.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/List */ "./resources/js/user/components/List.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    List: _components_List__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  watch: {
    $route: {
      deep: true,
      handler: function handler() {
        this.main();
      }
    }
  },
  data: function data() {
    return {
      contentId: '',
      currentRoute: null,
      currentBrands: [],
      currentColors: [],
      currentSets: [],
      brands: {},
      colors: {},
      attributes: {},
      items: {},
      max_price: 0,
      min_price: 0
    };
  },
  created: function created() {
    this.main();
  },
  methods: {
    main: function main() {
      this.contentId = this.$route.params.content_id == undefined ? this.contentId : this.$router.params.content_id;
      this.currentRoute = this.getRouteName(this.$route.name);
      this.currentBrands = this.getCurrentBrands();
      this.currentColors = this.getCurrentFilters('colors');
      this.currentSets = this.getCurrentFilters('sets');
      this.getContent('brands');
      this.getContent('colors');
      this.getContent('attributes');
      this.getItems();
    },
    getCurrentBrands: function getCurrentBrands() {
      return this.currentRoute == 'brand' && this.contentId !== null ? [this.contentId] : this.getCurrentFilters('brands');
    },
    getCurrentFilters: function getCurrentFilters(data) {
      return this.$route.query.hasOwnProperty(data) ? this.$route.query[data].split(',') : [];
    },
    getRouteName: function getRouteName(name) {
      return name.replace('shop_', '');
    },
    getItems: function getItems() {
      var _this = this;

      window.axios.get('shop/' + this.currentRoute + '/' + this.contentId).then(function (response) {
        _this.items = response.data.items;
        _this.max_price = response.data.max_price;
        _this.min_price = response.data.min_price;
      });
    },
    getContent: function getContent(content) {
      var _this2 = this;

      window.axios.get('get_' + content + '_by_content' + '/' + this.currentRoute + '/' + this.contentId).then(function (response) {
        _this2[content] = response.data[content];
      });
    },
    updatePageData: function updatePageData(data, selectedList) {
      var brands = this.currentBrands.length === 0 ? '' : this.currentBrands.toString();
      var colors = this.currentColors.length === 0 ? '' : this.currentColors.toString();
      var sets = this.currentSets.length === 0 ? '' : this.currentSets.toString();
      var pathData = '/shop/' + this.currentRoute + '/' + this.contentId;

      switch (data) {
        case 'brands':
          brands = selectedList.toString();
          break;

        case 'colors':
          colors = selectedList.toString();
          break;

        case 'sets':
          sets = selectedList.toString();
          break;
      }

      this.$router.push({
        path: pathData,
        query: {
          'brands': brands,
          'colors': colors,
          'sets': sets
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/List.vue?vue&type=template&id=336811d1":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/List.vue?vue&type=template&id=336811d1 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "widget"
};
var _hoisted_2 = {
  "class": "widget_title"
};
var _hoisted_3 = {
  "class": "list_brand"
};
var _hoisted_4 = {
  "class": "custome-checkbox"
};
var _hoisted_5 = ["id", "value"];
var _hoisted_6 = ["for"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.list, function (data) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "form-check-input",
      type: "checkbox",
      id: data[$props.column],
      value: data.id,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return $data.selected_list = $event;
      }),
      onChange: _cache[1] || (_cache[1] = function ($event) {
        return $options.changeData();
      })
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_5), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.selected_list]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "form-check-label",
      "for": data[$props.column]
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data[$props.column]), 1
    /* TEXT */
    )], 8
    /* PROPS */
    , _hoisted_6)])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Shop.vue?vue&type=template&id=20b1394d":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Shop.vue?vue&type=template&id=20b1394d ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-9\"><div class=\"row align-items-center mb-4 pb-1\"><div class=\"col-12\"><div class=\"product_header\"><div class=\"product_header_left\"><div class=\"custom_select\"><select class=\"form-control form-control-sm\"><option value=\"order\">Default sorting</option><option value=\"popularity\">Sort by popularity</option><option value=\"date\">Sort by newness</option><option value=\"price\">Sort by price: low to high</option><option value=\"price-desc\">Sort by price: high to low</option></select></div></div><div class=\"product_header_right\"><div class=\"products_view\"><a href=\"javascript:Void(0);\" class=\"shorting_icon grid\"><i class=\"ti-view-grid\"></i></a><a href=\"javascript:Void(0);\" class=\"shorting_icon list active\"><i class=\"ti-layout-list-thumb\"></i></a></div><div class=\"custom_select\"><select class=\"form-control form-control-sm\"><option value=\"\">Showing</option><option value=\"9\">9</option><option value=\"12\">12</option><option value=\"18\">18</option></select></div></div></div></div></div><div class=\"row shop_container list\"><div class=\"col-md-4 col-6\"><div class=\"product\"><div class=\"product_img\"><a href=\"shop-product-detail.html\"><img src=\"assets/images/product_img1.jpg\" alt=\"product_img1\"></a><div class=\"product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div><div class=\"product_info\"><h6 class=\"product_title\"><a href=\"shop-product-detail.html\">Blue Dress For Woman</a></h6><div class=\"product_price\"><span class=\"price\">$45.00</span><del>$55.25</del><div class=\"on_sale\"><span>35% Off</span></div></div><div class=\"rating_wrap\"><div class=\"rating\"><div class=\"product_rate\" style=\"width:80%;\"></div></div><span class=\"rating_num\">(21)</span></div><div class=\"pr_desc\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p></div><div class=\"pr_switch_wrap\"><div class=\"product_color_switch\"><span class=\"active\" data-color=\"#87554B\"></span><span data-color=\"#333333\"></span><span data-color=\"#DA323F\"></span></div></div><div class=\"list_product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div></div></div><div class=\"col-md-4 col-6\"><div class=\"product\"><div class=\"product_img\"><a href=\"shop-product-detail.html\"><img src=\"assets/images/product_img2.jpg\" alt=\"product_img2\"></a><div class=\"product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div><div class=\"product_info\"><h6 class=\"product_title\"><a href=\"shop-product-detail.html\">Lether Gray Tuxedo</a></h6><div class=\"product_price\"><span class=\"price\">$55.00</span><del>$95.00</del><div class=\"on_sale\"><span>25% Off</span></div></div><div class=\"rating_wrap\"><div class=\"rating\"><div class=\"product_rate\" style=\"width:68%;\"></div></div><span class=\"rating_num\">(15)</span></div><div class=\"pr_desc\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p></div><div class=\"pr_switch_wrap\"><div class=\"product_color_switch\"><span class=\"active\" data-color=\"#847764\"></span><span data-color=\"#0393B5\"></span><span data-color=\"#DA323F\"></span></div></div><div class=\"list_product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div></div></div><div class=\"col-md-4 col-6\"><div class=\"product\"><span class=\"pr_flash\">New</span><div class=\"product_img\"><a href=\"shop-product-detail.html\"><img src=\"assets/images/product_img3.jpg\" alt=\"product_img3\"></a><div class=\"product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div><div class=\"product_info\"><h6 class=\"product_title\"><a href=\"shop-product-detail.html\">woman full sliv dress</a></h6><div class=\"product_price\"><span class=\"price\">$68.00</span><del>$99.00</del></div><div class=\"rating_wrap\"><div class=\"rating\"><div class=\"product_rate\" style=\"width:87%;\"></div></div><span class=\"rating_num\">(25)</span></div><div class=\"pr_desc\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p></div><div class=\"pr_switch_wrap\"><div class=\"product_color_switch\"><span class=\"active\" data-color=\"#333333\"></span><span data-color=\"#7C502F\"></span><span data-color=\"#2F366C\"></span><span data-color=\"#874A3D\"></span></div></div><div class=\"list_product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div></div></div><div class=\"col-md-4 col-6\"><div class=\"product\"><div class=\"product_img\"><a href=\"shop-product-detail.html\"><img src=\"assets/images/product_img4.jpg\" alt=\"product_img4\"></a><div class=\"product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div><div class=\"product_info\"><h6 class=\"product_title\"><a href=\"shop-product-detail.html\">light blue Shirt</a></h6><div class=\"product_price\"><span class=\"price\">$69.00</span><del>$89.00</del><div class=\"on_sale\"><span>20% Off</span></div></div><div class=\"rating_wrap\"><div class=\"rating\"><div class=\"product_rate\" style=\"width:70%;\"></div></div><span class=\"rating_num\">(22)</span></div><div class=\"pr_desc\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p></div><div class=\"pr_switch_wrap\"><div class=\"product_color_switch\"><span class=\"active\" data-color=\"#333333\"></span><span data-color=\"#A92534\"></span><span data-color=\"#B9C2DF\"></span></div></div><div class=\"list_product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div></div></div><div class=\"col-md-4 col-6\"><div class=\"product\"><div class=\"product_img\"><a href=\"shop-product-detail.html\"><img src=\"assets/images/product_img5.jpg\" alt=\"product_img5\"></a><div class=\"product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div><div class=\"product_info\"><h6 class=\"product_title\"><a href=\"shop-product-detail.html\">blue dress for woman</a></h6><div class=\"product_price\"><span class=\"price\">$45.00</span><del>$55.25</del><div class=\"on_sale\"><span>35% Off</span></div></div><div class=\"rating_wrap\"><div class=\"rating\"><div class=\"product_rate\" style=\"width:80%;\"></div></div><span class=\"rating_num\">(21)</span></div><div class=\"pr_desc\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p></div><div class=\"pr_switch_wrap\"><div class=\"product_color_switch\"><span class=\"active\" data-color=\"#87554B\"></span><span data-color=\"#333333\"></span><span data-color=\"#5FB7D4\"></span></div></div><div class=\"list_product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div></div></div><div class=\"col-md-4 col-6\"><div class=\"product\"><span class=\"pr_flash bg-danger\">Hot</span><div class=\"product_img\"><a href=\"shop-product-detail.html\"><img src=\"assets/images/product_img6.jpg\" alt=\"product_img6\"></a><div class=\"product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div><div class=\"product_info\"><h6 class=\"product_title\"><a href=\"shop-product-detail.html\">Blue casual check shirt</a></h6><div class=\"product_price\"><span class=\"price\">$55.00</span><del>$95.00</del><div class=\"on_sale\"><span>25% Off</span></div></div><div class=\"rating_wrap\"><div class=\"rating\"><div class=\"product_rate\" style=\"width:68%;\"></div></div><span class=\"rating_num\">(15)</span></div><div class=\"pr_desc\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p></div><div class=\"pr_switch_wrap\"><div class=\"product_color_switch\"><span class=\"active\" data-color=\"#87554B\"></span><span data-color=\"#333333\"></span></div></div><div class=\"list_product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div></div></div><div class=\"col-md-4 col-6\"><div class=\"product\"><span class=\"pr_flash bg-success\">Sale</span><div class=\"product_img\"><a href=\"shop-product-detail.html\"><img src=\"assets/images/product_img7.jpg\" alt=\"product_img7\"></a><div class=\"product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div><div class=\"product_info\"><h6 class=\"product_title\"><a href=\"shop-product-detail.html\">white black line dress</a></h6><div class=\"product_price\"><span class=\"price\">$68.00</span><del>$99.00</del><div class=\"on_sale\"><span>20% Off</span></div></div><div class=\"rating_wrap\"><div class=\"rating\"><div class=\"product_rate\" style=\"width:87%;\"></div></div><span class=\"rating_num\">(25)</span></div><div class=\"pr_desc\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p></div><div class=\"pr_switch_wrap\"><div class=\"product_color_switch\"><span class=\"active\" data-color=\"#333333\"></span><span data-color=\"#7C502F\"></span><span data-color=\"#2F366C\"></span></div></div><div class=\"list_product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div></div></div><div class=\"col-md-4 col-6\"><div class=\"product\"><div class=\"product_img\"><a href=\"shop-product-detail.html\"><img src=\"assets/images/product_img8.jpg\" alt=\"product_img8\"></a><div class=\"product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div><div class=\"product_info\"><h6 class=\"product_title\"><a href=\"shop-product-detail.html\">Men blue jins Shirt</a></h6><div class=\"product_price\"><span class=\"price\">$69.00</span><del>$89.00</del><div class=\"on_sale\"><span>20% Off</span></div></div><div class=\"rating_wrap\"><div class=\"rating\"><div class=\"product_rate\" style=\"width:70%;\"></div></div><span class=\"rating_num\">(22)</span></div><div class=\"pr_desc\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p></div><div class=\"pr_switch_wrap\"><div class=\"product_color_switch\"><span class=\"active\" data-color=\"#333333\"></span><span data-color=\"#444653\"></span><span data-color=\"#B9C2DF\"></span></div></div><div class=\"list_product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div></div></div><div class=\"col-md-4 col-6\"><div class=\"product\"><div class=\"product_img\"><a href=\"shop-product-detail.html\"><img src=\"assets/images/product_img9.jpg\" alt=\"product_img9\"></a><div class=\"product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div><div class=\"product_info\"><h6 class=\"product_title\"><a href=\"shop-product-detail.html\">T-Shirt Form Girls</a></h6><div class=\"product_price\"><span class=\"price\">$45.00</span><del>$55.25</del><div class=\"on_sale\"><span>35% Off</span></div></div><div class=\"rating_wrap\"><div class=\"rating\"><div class=\"product_rate\" style=\"width:80%;\"></div></div><span class=\"rating_num\">(21)</span></div><div class=\"pr_desc\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p></div><div class=\"pr_switch_wrap\"><div class=\"product_color_switch\"><span class=\"active\" data-color=\"#B5B6BB\"></span><span data-color=\"#333333\"></span><span data-color=\"#DA323F\"></span></div></div><div class=\"list_product_action_box\"><ul class=\"list_none pr_action_btn\"><li class=\"add-to-cart\"><a href=\"#\"><i class=\"icon-basket-loaded\"></i> Add To Cart</a></li><li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li></ul></div></div></div></div></div><div class=\"row\"><div class=\"col-12\"><nav aria-label=\"Page navigation\"><ul class=\"pagination mt-3 justify-content-center pagination_style1\"><li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\"><span aria-hidden=\"true\">»</span><span class=\"sr-only\">Next</span></a></li></ul></nav></div></div></div>", 1);

var _hoisted_6 = {
  "class": "col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0"
};
var _hoisted_7 = {
  "class": "sidebar"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget\"><h5 class=\"widget_title\">Categories</h5><ul class=\"widget_categories\"><li><a href=\"#\"><span class=\"categories_name\">Women</span><span class=\"categories_num\">(9)</span></a></li><li><a href=\"#\"><span class=\"categories_name\">Top</span><span class=\"categories_num\">(6)</span></a></li><li><a href=\"#\"><span class=\"categories_name\">T-Shirts</span><span class=\"categories_num\">(4)</span></a></li><li><a href=\"#\"><span class=\"categories_name\">Men</span><span class=\"categories_num\">(7)</span></a></li><li><a href=\"#\"><span class=\"categories_name\">Shoes</span><span class=\"categories_num\">(12)</span></a></li></ul></div><div class=\"widget\"><h5 class=\"widget_title\">Filter</h5><div class=\"filter_price\"><div id=\"price_filter\" data-min=\"0\" data-max=\"500\" data-min-value=\"50\" data-max-value=\"300\" data-price-sign=\"$\"></div><div class=\"price_range\"><span>Price: <span id=\"flt_price\"></span></span><input type=\"hidden\" id=\"price_first\"><input type=\"hidden\" id=\"price_second\"></div></div></div>", 2);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget\"><h5 class=\"widget_title\">Size</h5><div class=\"product_size_switch\"><span>xs</span><span>s</span><span>m</span><span>l</span><span>xl</span><span>2xl</span><span>3xl</span></div></div><div class=\"widget\"><h5 class=\"widget_title\">Color</h5><div class=\"product_color_switch\"><span data-color=\"#87554B\"></span><span data-color=\"#333333\"></span><span data-color=\"#DA323F\"></span><span data-color=\"#2F366C\"></span><span data-color=\"#B5B6BB\"></span><span data-color=\"#B9C2DF\"></span><span data-color=\"#5FB7D4\"></span><span data-color=\"#2F366C\"></span></div></div><div class=\"widget\"><div class=\"shop_banner\"><div class=\"banner_img overlay_bg_20\"><img src=\"assets/images/sidebar_banner_img.jpg\" alt=\"sidebar_banner_img\"></div><div class=\"shop_bn_content2 text_white\"><h5 class=\"text-uppercase shop_subtitle\">New Collection</h5><h3 class=\"text-uppercase shop_title\">Sale 30% Off</h3><a href=\"#\" class=\"btn btn-white rounded-0 btn-sm text-uppercase\">Shop Now</a></div></div></div>", 3);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_List = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("List");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_List, {
    title: "Brands",
    list: $data.brands,
    select_list: $data.currentBrands,
    route_query: "brands",
    onUpdatePage: $options.updatePageData
  }, null, 8
  /* PROPS */
  , ["list", "select_list", "onUpdatePage"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_List, {
    title: "Colors",
    list: $data.colors,
    select_list: $data.currentColors,
    route_query: "colors",
    onUpdatePage: $options.updatePageData
  }, null, 8
  /* PROPS */
  , ["list", "select_list", "onUpdatePage"]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.attributes, function (attribute) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_List, {
      title: attribute.name,
      list: attribute.sets,
      select_list: $data.currentSets,
      route_query: "sets",
      column: "set",
      onUpdatePage: $options.updatePageData
    }, null, 8
    /* PROPS */
    , ["title", "list", "select_list", "onUpdatePage"]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )), _hoisted_10])])])])])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)("script"), {
    src: "/user/js/scripts.js"
  }))], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/user/components/List.vue":
/*!***********************************************!*\
  !*** ./resources/js/user/components/List.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_336811d1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=336811d1 */ "./resources/js/user/components/List.vue?vue&type=template&id=336811d1");
/* harmony import */ var _List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js */ "./resources/js/user/components/List.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_List_vue_vue_type_template_id_336811d1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/List.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/views/Shop.vue":
/*!******************************************!*\
  !*** ./resources/js/user/views/Shop.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shop_vue_vue_type_template_id_20b1394d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shop.vue?vue&type=template&id=20b1394d */ "./resources/js/user/views/Shop.vue?vue&type=template&id=20b1394d");
/* harmony import */ var _Shop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shop.vue?vue&type=script&lang=js */ "./resources/js/user/views/Shop.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Shop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Shop_vue_vue_type_template_id_20b1394d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/views/Shop.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/List.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/user/components/List.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./List.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/List.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/views/Shop.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/user/views/Shop.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Shop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Shop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Shop.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Shop.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/List.vue?vue&type=template&id=336811d1":
/*!*****************************************************************************!*\
  !*** ./resources/js/user/components/List.vue?vue&type=template&id=336811d1 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_List_vue_vue_type_template_id_336811d1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_List_vue_vue_type_template_id_336811d1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./List.vue?vue&type=template&id=336811d1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/List.vue?vue&type=template&id=336811d1");


/***/ }),

/***/ "./resources/js/user/views/Shop.vue?vue&type=template&id=20b1394d":
/*!************************************************************************!*\
  !*** ./resources/js/user/views/Shop.vue?vue&type=template&id=20b1394d ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Shop_vue_vue_type_template_id_20b1394d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Shop_vue_vue_type_template_id_20b1394d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Shop.vue?vue&type=template&id=20b1394d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Shop.vue?vue&type=template&id=20b1394d");


/***/ })

}]);