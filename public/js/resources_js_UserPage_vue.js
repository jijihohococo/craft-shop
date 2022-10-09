(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_UserPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/UserPage.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/UserPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _user_components_PromotionBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/components/PromotionBox */ "./resources/js/user/components/PromotionBox.vue");
/* harmony import */ var _user_components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/components/Header */ "./resources/js/user/components/Header.vue");
/* harmony import */ var _user_components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/components/Footer */ "./resources/js/user/components/Footer.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PromotionBox: _user_components_PromotionBox__WEBPACK_IMPORTED_MODULE_0__["default"],
    Header: _user_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _user_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"]
  } // mounted() {
  // 	const plugin = document.createElement("script");
  // 	plugin.setAttribute(
  // 		"src",
  // 		"/user/js/scripts.js"
  // 		);
  // 	plugin.async = true;
  // 	document.head.appendChild(plugin);
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Footer.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Footer.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShopImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopImage */ "./resources/js/user/components/ShopImage.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./resources/js/store.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ShopImage: _ShopImage__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      shop: _store__WEBPACK_IMPORTED_MODULE_1__.shop,
      currentYear: _store__WEBPACK_IMPORTED_MODULE_1__.currentYear
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Header.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Header.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search */ "./resources/js/user/components/Search.vue");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ "./resources/js/user/components/Menu.vue");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Language */ "./resources/js/user/components/Language.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Search: _Search__WEBPACK_IMPORTED_MODULE_0__["default"],
    Menu: _Menu__WEBPACK_IMPORTED_MODULE_1__["default"],
    Language: _Language__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      categories: {},
      number_of_wish: 0,
      shopping_cart_items: {}
    };
  },
  methods: {
    getCategories: function getCategories() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                window.axios.get('categories').then(function (response) {
                  _this.categories = response.data.categories;
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getShoppingCart: function getShoppingCart() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                window.axios.get('shopping_cart').then(function (response) {
                  _this2.shopping_cart_items = response.data.shopping_cart_items;
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getNumberOfWish: function getNumberOfWish() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                window.axios.get('get_wish_number').then(function (response) {
                  _this3.number_of_wish = response.data.number_of_wish;
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4.getCategories();

            case 2:
              _context4.next = 4;
              return _this4.getShoppingCart();

            case 4:
              _context4.next = 6;
              return _this4.getNumberOfWish();

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Language.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Language.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ "./resources/js/store.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      userLang: _store__WEBPACK_IMPORTED_MODULE_0__.userLang,
      langs: [{
        'val': 'en',
        'title': "English"
      }, {
        'val': 'fn',
        'title': "France"
      }, {
        'val': 'jp',
        'title': "Japanese"
      }, {
        'val': 'mm',
        'title': "Myanmar"
      }]
    };
  },
  methods: {
    onChange: function onChange(event) {
      if (event.target.value !== null) {
        this.userLang.changeData(event.target.value);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Menu.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Menu.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/general.js */ "./resources/js/helpers/general.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    categories: {
      type: Object,
      "default": {}
    }
  },
  data: function data() {
    return {
      show: true,
      mobile: false
    };
  },
  created: function created() {
    // we will use hide and show category menu UI feature if it is not mobile screen
    this.mobile = this.checkMobile() ? false : true;
    this.show = this.$route.name == 'home' || this.$route.name !== 'home' && this.mobile == true ? true : false;
  },
  methods: {
    checkMobile: function checkMobile() {
      return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 991;
    },
    translateLang: function translateLang(data) {
      return (0,_helpers_general_js__WEBPACK_IMPORTED_MODULE_0__.translate)(data);
    },
    changeShow: function changeShow() {
      this.show = !this.show;
    },
    goToContent: function goToContent(content, contentId) {
      //this.changeShow()
      if (this.checkMobile() && this.$route.name == 'home') {
        this.show = false;
      }

      this.$router.push({
        path: '/shop/' + content + '/' + contentId
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/PromotionBox.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/PromotionBox.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Search.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Search.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShopImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopImage */ "./resources/js/user/components/ShopImage.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./resources/js/store.js");
/* harmony import */ var _helpers_general_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/general.js */ "./resources/js/helpers/general.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ShopImage: _ShopImage__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      shop: _store__WEBPACK_IMPORTED_MODULE_1__.shop
    };
  },
  methods: {
    translateLang: function translateLang(data) {
      return (0,_helpers_general_js__WEBPACK_IMPORTED_MODULE_2__.translate)(data);
    }
  },
  props: {
    categories: {
      type: Object,
      "default": {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ShopImage.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ShopImage.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['pic']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/UserPage.vue?vue&type=template&id=6dafe698":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/UserPage.vue?vue&type=template&id=6dafe698 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PromotionBox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PromotionBox");

  var _component_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Header");

  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  var _component_Footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Footer");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PromotionBox), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Footer)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Footer.vue?vue&type=template&id=778a558e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Footer.vue?vue&type=template&id=778a558e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg_gray"
};
var _hoisted_2 = {
  "class": "footer_top small_pt pb_20"
};
var _hoisted_3 = {
  "class": "container"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-lg-4 col-md-12 col-sm-12"
};
var _hoisted_6 = {
  "class": "widget"
};
var _hoisted_7 = {
  "class": "footer_logo"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-3"
}, "If you are going to use of Lorem Ipsum need to be sure there isn't anything hidden of text", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "contact_info"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ti-location-pin"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ti-email"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = ["href"];

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ti-mobile"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "col-lg-2 col-md-4 col-sm-6"
};
var _hoisted_15 = {
  "class": "widget"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "widget_title"
}, "Useful Links", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "widget_links"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("About Us");

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("FAQ");

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Location")], -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Affiliates")], -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Contact")], -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-2 col-md-4 col-sm-6\"><div class=\"widget\"><h6 class=\"widget_title\">My Account</h6><ul class=\"widget_links\"><li><a href=\"#\">My Account</a></li><li><a href=\"#\">Discount</a></li><li><a href=\"#\">Returns</a></li><li><a href=\"#\">Orders History</a></li><li><a href=\"#\">Order Tracking</a></li></ul></div></div><div class=\"col-lg-4 col-md-4 col-sm-12\"><div class=\"widget\"><h6 class=\"widget_title\">Instagram</h6><ul class=\"widget_instafeed instafeed_col4\"><li><a href=\"#\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/insta_img1.jpg\" alt=\"insta_img\"><span class=\"insta_icon\"><i class=\"ti-instagram\"></i></span></a></li><li><a href=\"#\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/insta_img2.jpg\" alt=\"insta_img\"><span class=\"insta_icon\"><i class=\"ti-instagram\"></i></span></a></li><li><a href=\"#\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/insta_img3.jpg\" alt=\"insta_img\"><span class=\"insta_icon\"><i class=\"ti-instagram\"></i></span></a></li><li><a href=\"#\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/insta_img4.jpg\" alt=\"insta_img\"><span class=\"insta_icon\"><i class=\"ti-instagram\"></i></span></a></li><li><a href=\"#\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/insta_img5.jpg\" alt=\"insta_img\"><span class=\"insta_icon\"><i class=\"ti-instagram\"></i></span></a></li><li><a href=\"#\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/insta_img6.jpg\" alt=\"insta_img\"><span class=\"insta_icon\"><i class=\"ti-instagram\"></i></span></a></li><li><a href=\"#\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/insta_img7.jpg\" alt=\"insta_img\"><span class=\"insta_icon\"><i class=\"ti-instagram\"></i></span></a></li><li><a href=\"#\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/insta_img8.jpg\" alt=\"insta_img\"><span class=\"insta_icon\"><i class=\"ti-instagram\"></i></span></a></li></ul></div></div>", 2);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"middle_footer\"><div class=\"container\"><div class=\"row\"><div class=\"col-12\"><div class=\"shopping_info\"><div class=\"row justify-content-center\"><div class=\"col-md-4\"><div class=\"icon_box icon_box_style2\"><div class=\"icon\"><i class=\"flaticon-shipped\"></i></div><div class=\"icon_box_content\"><h5>Free Delivery</h5><p>Phasellus blandit massa enim elit of passage varius nunc.</p></div></div></div><div class=\"col-md-4\"><div class=\"icon_box icon_box_style2\"><div class=\"icon\"><i class=\"flaticon-money-back\"></i></div><div class=\"icon_box_content\"><h5>30 Day Returns Guarantee</h5><p>Phasellus blandit massa enim elit of passage varius nunc.</p></div></div></div><div class=\"col-md-4\"><div class=\"icon_box icon_box_style2\"><div class=\"icon\"><i class=\"flaticon-support\"></i></div><div class=\"icon_box_content\"><h5>27/4 Online Support</h5><p>Phasellus blandit massa enim elit of passage varius nunc.</p></div></div></div></div></div></div></div></div></div>", 1);

var _hoisted_26 = {
  "class": "bottom_footer border-top-tran"
};
var _hoisted_27 = {
  "class": "container"
};
var _hoisted_28 = {
  "class": "row align-items-center"
};
var _hoisted_29 = {
  "class": "col-lg-4"
};
var _hoisted_30 = {
  "class": "mb-lg-0 text-center"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-4 order-lg-first\"><div class=\"widget mb-lg-0\"><ul class=\"social_icons text-center text-lg-left\"><li><a href=\"#\" class=\"sc_facebook\"><i class=\"ion-social-facebook\"></i></a></li><li><a href=\"#\" class=\"sc_twitter\"><i class=\"ion-social-twitter\"></i></a></li><li><a href=\"#\" class=\"sc_google\"><i class=\"ion-social-googleplus\"></i></a></li><li><a href=\"#\" class=\"sc_youtube\"><i class=\"ion-social-youtube-outline\"></i></a></li><li><a href=\"#\" class=\"sc_instagram\"><i class=\"ion-social-instagram-outline\"></i></a></li></ul></div></div><div class=\"col-lg-4\"><ul class=\"footer_payment text-center text-lg-right\"><li><a href=\"#\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/visa.png\" alt=\"visa\"></a></li><li><a href=\"#\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/discover.png\" alt=\"discover\"></a></li><li><a href=\"#\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/master_card.png\" alt=\"master_card\"></a></li><li><a href=\"#\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/paypal.png\" alt=\"paypal\"></a></li><li><a href=\"#\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/amarican_express.png\" alt=\"amarican_express\"></a></li></ul></div>", 2);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ShopImage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ShopImage");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START FOOTER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("footer", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ShopImage, {
    pic: $data.shop.data.pic
  }, null, 8
  /* PROPS */
  , ["pic"])]), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.shop.data.address), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $data.shop.data.email
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.shop.data.email), 9
  /* TEXT, PROPS */
  , _hoisted_12)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.shop.data.phone), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/about_us"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_18];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/faq"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_19];
    }),
    _: 1
    /* STABLE */

  })]), _hoisted_20, _hoisted_21, _hoisted_22])])]), _hoisted_23])])]), _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_30, "© " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.currentYear) + " All Rights Reserved by " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.shop.data.name), 1
  /* TEXT */
  )]), _hoisted_31])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END FOOTER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <component is=\"script\" src=\"user/js/scripts.js\" /> ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Header.vue?vue&type=template&id=ce868d00":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Header.vue?vue&type=template&id=ce868d00 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "header_wrap"
};
var _hoisted_2 = {
  "class": "top-header d-none d-md-block"
};
var _hoisted_3 = {
  "class": "container"
};
var _hoisted_4 = {
  "class": "row align-items-center"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-6 col-md-8\"><div class=\"header_topbar_info\"><div class=\"header_offer\"><span>Free Ground Shipping Over $250</span></div><div class=\"download_wrap\"><span class=\"mr-3\">Download App</span><ul class=\"icon_list text-center text-lg-left\"><li><a href=\"#\"><i class=\"fab fa-apple\"></i></a></li><li><a href=\"#\"><i class=\"fab fa-android\"></i></a></li><li><a href=\"#\"><i class=\"fab fa-windows\"></i></a></li></ul></div></div></div>", 1);

var _hoisted_6 = {
  "class": "col-lg-6 col-md-4"
};
var _hoisted_7 = {
  "class": "d-flex align-items-center justify-content-center justify-content-md-end"
};
var _hoisted_8 = {
  "class": "bottom_header light_skin main_menu_uppercase bg_dark mb-4"
};
var _hoisted_9 = {
  "class": "container"
};
var _hoisted_10 = {
  "class": "row"
};
var _hoisted_11 = {
  "class": "col-lg-9 col-md-8 col-sm-6 col-9"
};
var _hoisted_12 = {
  "class": "navbar navbar-expand-lg"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<button class=\"navbar-toggler side_navbar_toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSidetoggle\" aria-expanded=\"false\"><span class=\"ion-android-menu\"></span></button><div class=\"collapse navbar-collapse mobile_side_menu\" id=\"navbarSidetoggle\"><ul class=\"navbar-nav\"><li class=\"dropdown\"><a data-toggle=\"dropdown\" class=\"nav-link dropdown-toggle active\" href=\"#\">Home</a><div class=\"dropdown-menu\"><ul><li><a class=\"dropdown-item nav-link nav_item\" href=\"index.html\">Fashion 1</a></li><li><a class=\"dropdown-item nav-link nav_item active\" href=\"index-2.html\">Fashion 2</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"index-3.html\">Furniture 1</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"index-4.html\">Furniture 2</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"index-5.html\">Electronics 1</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"index-6.html\">Electronics 2</a></li></ul></div></li><li class=\"dropdown\"><a class=\"dropdown-toggle nav-link\" href=\"#\" data-toggle=\"dropdown\">Pages</a><div class=\"dropdown-menu\"><ul><li><a class=\"dropdown-item nav-link nav_item\" href=\"about.html\">About Us</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"contact.html\">Contact Us</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"faq.html\">Faq</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"404.html\">404 Error Page</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"login.html\">Login</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"signup.html\">Register</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"term-condition.html\">Terms and Conditions</a></li></ul></div></li><li class=\"dropdown dropdown-mega-menu\"><a class=\"dropdown-toggle nav-link\" href=\"#\" data-toggle=\"dropdown\">Products</a><div class=\"dropdown-menu\"><ul class=\"mega-menu d-lg-flex\"><li class=\"mega-menu-col col-lg-3\"><ul><li class=\"dropdown-header\">Woman&#39;s</li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-three-columns.html\">Vestibulum sed</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-four-columns.html\">Donec porttitor</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-grid-view.html\">Donec vitae facilisis</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-list-view.html\">Curabitur tempus</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-left-sidebar.html\">Vivamus in tortor</a></li></ul></li><li class=\"mega-menu-col col-lg-3\"><ul><li class=\"dropdown-header\">Men&#39;s</li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-cart.html\">Donec vitae ante ante</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"checkout.html\">Etiam ac rutrum</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"wishlist.html\">Quisque condimentum</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"compare.html\">Curabitur laoreet</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"order-completed.html\">Vivamus in tortor</a></li></ul></li><li class=\"mega-menu-col col-lg-3\"><ul><li class=\"dropdown-header\">Kid&#39;s</li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-product-detail.html\">Donec vitae facilisis</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-product-detail-left-sidebar.html\">Quisque condimentum</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-product-detail-right-sidebar.html\">Etiam ac rutrum</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-product-detail-thumbnails-left.html\">Donec vitae ante ante</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-product-detail-accordion-style.html\">Donec porttitor</a></li></ul></li><li class=\"mega-menu-col col-lg-3\"><ul><li class=\"dropdown-header\">Accessories</li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-product-detail.html\">Curabitur tempus</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-product-detail-left-sidebar.html\">Quisque condimentum</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-product-detail-right-sidebar.html\">Vivamus in tortor</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-product-detail-thumbnails-left.html\">Donec vitae facilisis</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-product-detail-accordion-style.html\">Donec porttitor</a></li></ul></li></ul><div class=\"d-lg-flex menu_banners\"><div class=\"col-lg-6\"><div class=\"header-banner\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/menu_banner1.jpg\" alt=\"menu_banner1\"><div class=\"banne_info\"><h6>10% Off</h6><h4>New Arrival</h4><a href=\"#\">Shop now</a></div></div></div><div class=\"col-lg-6\"><div class=\"header-banner\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/menu_banner2.jpg\" alt=\"menu_banner2\"><div class=\"banne_info\"><h6>15% Off</h6><h4>Men&#39;s Fashion</h4><a href=\"#\">Shop now</a></div></div></div></div></div></li><li class=\"dropdown\"><a class=\"dropdown-toggle nav-link\" href=\"#\" data-toggle=\"dropdown\">Blog</a><div class=\"dropdown-menu dropdown-reverse\"><ul><li><a class=\"dropdown-item menu-link dropdown-toggler\" href=\"#\">Grids</a><div class=\"dropdown-menu\"><ul><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-three-columns.html\">3 columns</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-four-columns.html\">4 columns</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-left-sidebar.html\">Left Sidebar</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-right-sidebar.html\">right Sidebar</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-standard-left-sidebar.html\">Standard Left Sidebar</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-standard-right-sidebar.html\">Standard right Sidebar</a></li></ul></div></li><li><a class=\"dropdown-item menu-link dropdown-toggler\" href=\"#\">Masonry</a><div class=\"dropdown-menu\"><ul><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-masonry-three-columns.html\">3 columns</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-masonry-four-columns.html\">4 columns</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-masonry-left-sidebar.html\">Left Sidebar</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-masonry-right-sidebar.html\">right Sidebar</a></li></ul></div></li><li><a class=\"dropdown-item menu-link dropdown-toggler\" href=\"#\">Single Post</a><div class=\"dropdown-menu\"><ul><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-single.html\">Default</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-single-left-sidebar.html\">left sidebar</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-single-slider.html\">slider post</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-single-video.html\">video post</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-single-audio.html\">audio post</a></li></ul></div></li><li><a class=\"dropdown-item menu-link dropdown-toggler\" href=\"#\">List</a><div class=\"dropdown-menu\"><ul><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-list-left-sidebar.html\">left sidebar</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"blog-list-right-sidebar.html\">right sidebar</a></li></ul></div></li></ul></div></li><li class=\"dropdown dropdown-mega-menu\"><a class=\"dropdown-toggle nav-link\" href=\"#\" data-toggle=\"dropdown\">Shop</a><div class=\"dropdown-menu\"><ul class=\"mega-menu d-lg-flex\"><li class=\"mega-menu-col col-lg-9\"><ul class=\"d-lg-flex\"><li class=\"mega-menu-col col-lg-4\"><ul><li class=\"dropdown-header\">Shop Page Layout</li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-list.html\">shop List view</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-list-left-sidebar.html\">shop List Left Sidebar</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-list-right-sidebar.html\">shop List Right Sidebar</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-left-sidebar.html\">Left Sidebar</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-right-sidebar.html\">Right Sidebar</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-load-more.html\">Shop Load More</a></li></ul></li><li class=\"mega-menu-col col-lg-4\"><ul><li class=\"dropdown-header\">Other Pages</li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-cart.html\">Cart</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"checkout.html\">Checkout</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"my-account.html\">My Account</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"wishlist.html\">Wishlist</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"compare.html\">compare</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"order-completed.html\">Order Completed</a></li></ul></li><li class=\"mega-menu-col col-lg-4\"><ul><li class=\"dropdown-header\">Product Pages</li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-product-detail.html\">Default</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-product-detail-left-sidebar.html\">Left Sidebar</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-product-detail-right-sidebar.html\">Right Sidebar</a></li><li><a class=\"dropdown-item nav-link nav_item\" href=\"shop-product-detail-thumbnails-left.html\">Thumbnails Left</a></li></ul></li></ul></li><li class=\"mega-menu-col col-lg-3\"><div class=\"header_banner\"><div class=\"header_banner_content\"><div class=\"shop_banner\"><div class=\"banner_img overlay_bg_40\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner2.jpg\" alt=\"shop_banner2\"></div><div class=\"shop_bn_content\"><h6 class=\"text-uppercase shop_subtitle\">New Collection</h6><h5 class=\"text-uppercase shop_title\">Sale 30% Off</h5><a href=\"#\" class=\"btn btn-white rounded-0 btn-xs text-uppercase\">Shop Now</a></div></div></div></div></li></ul></div></li><li><a class=\"nav-link nav_item\" href=\"contact.html\">Contact Us</a></li></ul></div>", 2);

var _hoisted_15 = {
  "class": "navbar-nav attr-nav align-items-center"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "nav-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "linearicons-user"
})])], -1
/* HOISTED */
);

var _hoisted_17 = {
  href: "#",
  "class": "nav-link"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "linearicons-heart"
}, null, -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "wishlist_count"
};
var _hoisted_20 = {
  "class": "dropdown cart_dropdown"
};
var _hoisted_21 = {
  "class": "nav-link cart_trigger",
  href: "#",
  "data-toggle": "dropdown"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "linearicons-cart"
}, null, -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "cart_count"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"cart_box dropdown-menu dropdown-menu-right\"><ul class=\"cart_list\"><li><a href=\"#\" class=\"item_remove\"><i class=\"ion-close\"></i></a><a href=\"#\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/cart_thamb1.jpg\" alt=\"cart_thumb1\">Variable product 001</a><span class=\"cart_quantity\"> 1 x <span class=\"cart_amount\"><span class=\"price_symbole\">$</span></span>78.00</span></li><li><a href=\"#\" class=\"item_remove\"><i class=\"ion-close\"></i></a><a href=\"#\"><img src=\"https://bestwebcreator.com/shopwise/demo/assets/images/cart_thamb2.jpg\" alt=\"cart_thumb2\">Ornare sed consequat</a><span class=\"cart_quantity\"> 1 x <span class=\"cart_amount\"><span class=\"price_symbole\">$</span></span>81.00</span></li></ul><div class=\"cart_footer\"><p class=\"cart_total\"><strong>Subtotal:</strong> <span class=\"cart_price\"><span class=\"price_symbole\">$</span></span>159.00</p><p class=\"cart_buttons\"><a href=\"#\" class=\"btn btn-fill-line view-cart\">View Cart</a><a href=\"#\" class=\"btn btn-fill-out checkout\">Checkout</a></p></div></div>", 1);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pr_search_icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);",
  "class": "nav-link pr_search_trigger"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "linearicons-magnifier"
})])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Language = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Language");

  var _component_Search = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Search");

  var _component_Menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Menu");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START HEADER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Language)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Search, {
    categories: $data.categories
  }, null, 8
  /* PROPS */
  , ["categories"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Menu, {
    categories: $data.categories
  }, null, 8
  /* PROPS */
  , ["categories"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.number_of_wish), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.shopping_cart_items.length), 1
  /* TEXT */
  )]), _hoisted_24])]), _hoisted_25])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END HEADER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <component is=\"script\" src=\"user/js/scripts.js\" /> ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Language.vue?vue&type=template&id=b1a47bea":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Language.vue?vue&type=template&id=b1a47bea ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "lng_dropdown"
};
var _hoisted_2 = ["value", "data-title"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.userLang.data = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $options.onChange($event);
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.langs, function (lang) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: lang.val,
      "data-title": lang.title
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(lang.title), 9
    /* TEXT, PROPS */
    , _hoisted_2);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.userLang.data]])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Menu.vue?vue&type=template&id=8193a3dc":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Menu.vue?vue&type=template&id=8193a3dc ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "col-lg-3 col-md-4 col-sm-6 col-3"
};
var _hoisted_2 = {
  "class": "categories_wrap"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "linearicons-menu"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = {
  key: 1,
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navCatContent",
  "aria-expanded": "false",
  "class": "categories_btn"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "linearicons-menu"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = {
  key: 2,
  id: "navCatContent",
  "class": "nav_cat navbar collapse"
};
var _hoisted_7 = {
  "class": "dropdown dropdown-mega-menu"
};
var _hoisted_8 = {
  "class": "dropdown-item nav-link dropdown-toggler",
  "data-toggle": "dropdown"
};
var _hoisted_9 = ["onClick"];
var _hoisted_10 = {
  "class": "dropdown-menu"
};
var _hoisted_11 = {
  "class": "mega-menu d-lg-flex"
};
var _hoisted_12 = {
  "class": "mega-menu-col col-lg-7"
};
var _hoisted_13 = {
  "class": "d-lg-flex"
};
var _hoisted_14 = {
  "class": "mega-menu-col col-lg-6"
};
var _hoisted_15 = {
  key: 0
};
var _hoisted_16 = ["onClick"];

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "mega-menu-col col-lg-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "header-banner2"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [$data.mobile == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navCatContent",
    "aria-expanded": "false",
    "class": "categories_btn",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.changeShow();
    })
  }, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.translateLang('Categories')), 1
  /* TEXT */
  )])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.translateLang('Categories')), 1
  /* TEXT */
  )])), $data.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      onClick: function onClick($event) {
        return $options.goToContent('category', category.id);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.name), 9
    /* TEXT, PROPS */
    , _hoisted_9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_14, [category.subcategories !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_15, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(category.subcategories.split(','), function (subcategory, key) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: function onClick($event) {
          return $options.goToContent('subcategory', category.subcategory_ids.split(',')[key]);
        },
        "class": "dropdown-item nav-link nav_item"
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subcategory), 9
      /* TEXT, PROPS */
      , _hoisted_16)]);
    }), 256
    /* UNKEYED_FRAGMENT */
    ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), _hoisted_17])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <component is=\"script\" src=\"user/js/scripts.js\" /> ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/PromotionBox.vue?vue&type=template&id=9f47394a":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/PromotionBox.vue?vue&type=template&id=9f47394a ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal fade subscribe_popup",
  id: "onload-popup",
  tabindex: "-1",
  role: "dialog",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog modal-lg modal-dialog-centered",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "close",
  "data-dismiss": "modal",
  "aria-label": "Close"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ion-ios-close-empty"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row no-gutters"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "background_bg h-100",
  style: {
    "background-image": "url('https://bestwebcreator.com/shopwise/demo/assets/images/popup_img.jpg')"
  }
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-7"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup_content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "popup-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "heading_s4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Subscribe and Get 25% Discount!")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Subscribe to the newsletter to receive updates about new products.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
  method: "post"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  name: "email",
  required: "",
  type: "email",
  "class": "form-control rounded-0",
  placeholder: "Enter Your Email"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-fill-line btn-block text-uppercase rounded-0",
  title: "Subscribe",
  type: "submit"
}, "Subscribe")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "chek-form"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "custome-checkbox"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "form-check-input",
  type: "checkbox",
  name: "checkbox",
  id: "exampleCheckbox3",
  value: ""
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "exampleCheckbox3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Don't show this popup again!")])])])])])])])])])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Home Popup Section "), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End Screen Load Popup Section "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <component is=\"script\" src=\"user/js/scripts.js\" /> ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Search.vue?vue&type=template&id=0ef591ca":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Search.vue?vue&type=template&id=0ef591ca ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "middle-header dark_skin"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "nav_block"
};
var _hoisted_4 = {
  "class": "contact_phone order-md-last"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "linearicons-phone-wave"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "product_search_form"
};
var _hoisted_7 = {
  "class": "input-group"
};
var _hoisted_8 = {
  "class": "input-group-prepend"
};
var _hoisted_9 = {
  "class": "custom_select"
};
var _hoisted_10 = {
  "class": "first_null"
};
var _hoisted_11 = {
  value: ""
};
var _hoisted_12 = ["value"];

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "form-control",
  placeholder: "Search Product...",
  required: "",
  type: "text"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "search_btn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "linearicons-magnifier"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ShopImage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ShopImage");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ShopImage, {
    pic: $data.shop.data.pic
  }, null, 8
  /* PROPS */
  , ["pic"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.shop.data.phone), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.translateLang("Categories")), 1
  /* TEXT */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: category.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.name), 9
    /* TEXT, PROPS */
    , _hoisted_12);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])]), _hoisted_13, _hoisted_14])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <component is=\"script\" src=\"user/js/scripts.js\" /> ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ShopImage.vue?vue&type=template&id=512a8b62":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ShopImage.vue?vue&type=template&id=512a8b62 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
    to: "/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: [$props.pic == 'logo_dark.png' ? '/images/logo_dark.png' : '/image/shop_images/' + $props.pic],
        alt: "logo"
      }, null, 8
      /* PROPS */
      , _hoisted_1)];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./resources/js/helpers/general.js":
/*!*****************************************!*\
  !*** ./resources/js/helpers/general.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translate": () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store.js */ "./resources/js/store.js");

function translate(data) {
  var file = __webpack_require__("./resources/js/lang sync recursive ^\\.\\/.*\\/data\\.json$")("./" + _store_js__WEBPACK_IMPORTED_MODULE_0__.userLang.data + "/data.json");

  return file[data];
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
/* harmony export */   "userLang": () => (/* binding */ userLang)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");



function getShop(shop) {
  window.axios.get('shop').then(function (response) {
    shop = response.data.shop;
  });
}

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
var currentYear = new Date().getFullYear();

/***/ }),

/***/ "./resources/js/UserPage.vue":
/*!***********************************!*\
  !*** ./resources/js/UserPage.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserPage_vue_vue_type_template_id_6dafe698__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserPage.vue?vue&type=template&id=6dafe698 */ "./resources/js/UserPage.vue?vue&type=template&id=6dafe698");
/* harmony import */ var _UserPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPage.vue?vue&type=script&lang=js */ "./resources/js/UserPage.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UserPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UserPage_vue_vue_type_template_id_6dafe698__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/UserPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/Footer.vue":
/*!*************************************************!*\
  !*** ./resources/js/user/components/Footer.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_778a558e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=778a558e */ "./resources/js/user/components/Footer.vue?vue&type=template&id=778a558e");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js */ "./resources/js/user/components/Footer.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Footer_vue_vue_type_template_id_778a558e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/Footer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/Header.vue":
/*!*************************************************!*\
  !*** ./resources/js/user/components/Header.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_ce868d00__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=ce868d00 */ "./resources/js/user/components/Header.vue?vue&type=template&id=ce868d00");
/* harmony import */ var _Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js */ "./resources/js/user/components/Header.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Header_vue_vue_type_template_id_ce868d00__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/Language.vue":
/*!***************************************************!*\
  !*** ./resources/js/user/components/Language.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Language_vue_vue_type_template_id_b1a47bea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Language.vue?vue&type=template&id=b1a47bea */ "./resources/js/user/components/Language.vue?vue&type=template&id=b1a47bea");
/* harmony import */ var _Language_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Language.vue?vue&type=script&lang=js */ "./resources/js/user/components/Language.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Language_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Language_vue_vue_type_template_id_b1a47bea__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/Language.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/Menu.vue":
/*!***********************************************!*\
  !*** ./resources/js/user/components/Menu.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menu_vue_vue_type_template_id_8193a3dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=8193a3dc */ "./resources/js/user/components/Menu.vue?vue&type=template&id=8193a3dc");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js */ "./resources/js/user/components/Menu.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Menu_vue_vue_type_template_id_8193a3dc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/Menu.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/PromotionBox.vue":
/*!*******************************************************!*\
  !*** ./resources/js/user/components/PromotionBox.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PromotionBox_vue_vue_type_template_id_9f47394a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PromotionBox.vue?vue&type=template&id=9f47394a */ "./resources/js/user/components/PromotionBox.vue?vue&type=template&id=9f47394a");
/* harmony import */ var _PromotionBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PromotionBox.vue?vue&type=script&lang=js */ "./resources/js/user/components/PromotionBox.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PromotionBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PromotionBox_vue_vue_type_template_id_9f47394a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/PromotionBox.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/Search.vue":
/*!*************************************************!*\
  !*** ./resources/js/user/components/Search.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Search_vue_vue_type_template_id_0ef591ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=0ef591ca */ "./resources/js/user/components/Search.vue?vue&type=template&id=0ef591ca");
/* harmony import */ var _Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js */ "./resources/js/user/components/Search.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Search_vue_vue_type_template_id_0ef591ca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/Search.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/ShopImage.vue":
/*!****************************************************!*\
  !*** ./resources/js/user/components/ShopImage.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShopImage_vue_vue_type_template_id_512a8b62__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopImage.vue?vue&type=template&id=512a8b62 */ "./resources/js/user/components/ShopImage.vue?vue&type=template&id=512a8b62");
/* harmony import */ var _ShopImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopImage.vue?vue&type=script&lang=js */ "./resources/js/user/components/ShopImage.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ShopImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ShopImage_vue_vue_type_template_id_512a8b62__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/ShopImage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/UserPage.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./resources/js/UserPage.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/UserPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/Footer.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/user/components/Footer.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Footer.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/Header.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/user/components/Header.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Header.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/Language.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/user/components/Language.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Language_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Language_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Language.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Language.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/Menu.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/user/components/Menu.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Menu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Menu.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/PromotionBox.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/user/components/PromotionBox.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PromotionBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PromotionBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PromotionBox.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/PromotionBox.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/Search.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/user/components/Search.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Search.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/ShopImage.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/user/components/ShopImage.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShopImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShopImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ShopImage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ShopImage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/UserPage.vue?vue&type=template&id=6dafe698":
/*!*****************************************************************!*\
  !*** ./resources/js/UserPage.vue?vue&type=template&id=6dafe698 ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserPage_vue_vue_type_template_id_6dafe698__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserPage_vue_vue_type_template_id_6dafe698__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserPage.vue?vue&type=template&id=6dafe698 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/UserPage.vue?vue&type=template&id=6dafe698");


/***/ }),

/***/ "./resources/js/user/components/Footer.vue?vue&type=template&id=778a558e":
/*!*******************************************************************************!*\
  !*** ./resources/js/user/components/Footer.vue?vue&type=template&id=778a558e ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_778a558e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_778a558e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=template&id=778a558e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Footer.vue?vue&type=template&id=778a558e");


/***/ }),

/***/ "./resources/js/user/components/Header.vue?vue&type=template&id=ce868d00":
/*!*******************************************************************************!*\
  !*** ./resources/js/user/components/Header.vue?vue&type=template&id=ce868d00 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_ce868d00__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_ce868d00__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=ce868d00 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Header.vue?vue&type=template&id=ce868d00");


/***/ }),

/***/ "./resources/js/user/components/Language.vue?vue&type=template&id=b1a47bea":
/*!*********************************************************************************!*\
  !*** ./resources/js/user/components/Language.vue?vue&type=template&id=b1a47bea ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Language_vue_vue_type_template_id_b1a47bea__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Language_vue_vue_type_template_id_b1a47bea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Language.vue?vue&type=template&id=b1a47bea */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Language.vue?vue&type=template&id=b1a47bea");


/***/ }),

/***/ "./resources/js/user/components/Menu.vue?vue&type=template&id=8193a3dc":
/*!*****************************************************************************!*\
  !*** ./resources/js/user/components/Menu.vue?vue&type=template&id=8193a3dc ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menu_vue_vue_type_template_id_8193a3dc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menu_vue_vue_type_template_id_8193a3dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Menu.vue?vue&type=template&id=8193a3dc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Menu.vue?vue&type=template&id=8193a3dc");


/***/ }),

/***/ "./resources/js/user/components/PromotionBox.vue?vue&type=template&id=9f47394a":
/*!*************************************************************************************!*\
  !*** ./resources/js/user/components/PromotionBox.vue?vue&type=template&id=9f47394a ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PromotionBox_vue_vue_type_template_id_9f47394a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PromotionBox_vue_vue_type_template_id_9f47394a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PromotionBox.vue?vue&type=template&id=9f47394a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/PromotionBox.vue?vue&type=template&id=9f47394a");


/***/ }),

/***/ "./resources/js/user/components/Search.vue?vue&type=template&id=0ef591ca":
/*!*******************************************************************************!*\
  !*** ./resources/js/user/components/Search.vue?vue&type=template&id=0ef591ca ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_template_id_0ef591ca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_template_id_0ef591ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=template&id=0ef591ca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Search.vue?vue&type=template&id=0ef591ca");


/***/ }),

/***/ "./resources/js/user/components/ShopImage.vue?vue&type=template&id=512a8b62":
/*!**********************************************************************************!*\
  !*** ./resources/js/user/components/ShopImage.vue?vue&type=template&id=512a8b62 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShopImage_vue_vue_type_template_id_512a8b62__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShopImage_vue_vue_type_template_id_512a8b62__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ShopImage.vue?vue&type=template&id=512a8b62 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ShopImage.vue?vue&type=template&id=512a8b62");


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
module.exports = JSON.parse('{"Categories":"All Categories","Feature":"Featured Products","Gaming":"Gaming Products","Best":"Best Seller Products","Brands":"Our Brands","Colors":"Colors","Subscribe":"Subscribe Our Newsletter","Register":"Register","Create Account":"Create Account","Placeholder Name":"Enter Your Name","Placeholder Email":"Enter Your Email","Placeholder Password":"Password","Placeholder Confirm":"Confirm Password","Agree Policy":"I agree to terms & Policy.","Have Account":"Already have an account?"}');

/***/ }),

/***/ "./resources/js/lang/fn/data.json":
/*!****************************************!*\
  !*** ./resources/js/lang/fn/data.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Categories":"Toutes Catégories","Feature":"Produits populaires","Gaming":"Produits de jeu","Best":"Produits les plus vendus","Brands":"Nos marques","Colors":"Couleurs","Subscribe":"Abonnez-vous à notre newsletter","Register":"S\'inscrire","Create Account":"Créer un compte","Placeholder Name":"Entrez votre nom","Placeholder Email":"Entrer votre Email","Placeholder Password":"Mot de passe","Placeholder Confirm":"Confirmez le mot de passe","Agree Policy":"J\'accepte les termes et la politique.","Have Account":"Vous avez déjà un compte?"}');

/***/ }),

/***/ "./resources/js/lang/jp/data.json":
/*!****************************************!*\
  !*** ./resources/js/lang/jp/data.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Categories":"すべてのカテゴリ","Feature":"おすすめ商品","Gaming":"ゲーム製品","Best":"ベストセラー商品","Brands":"我々のブランド","Colors":"色","Subscribe":"ニュースレターを購読する","Register":"登録","Create Account":"アカウントを作成する","Placeholder Name":"あなたの名前を入力してください","Placeholder Email":"メールアドレスを入力","Placeholder Password":"パスワード","Placeholder Confirm":"パスワードを認証する","Agree Policy":"規約とポリシーに同意します。","Have Account":"すでにアカウントをお持ちですか？"}');

/***/ }),

/***/ "./resources/js/lang/mm/data.json":
/*!****************************************!*\
  !*** ./resources/js/lang/mm/data.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Categories":"အမျိုးအစားအားလုံး","Feature":"အထူးအသားပေး ထုတ်ကုန်များ","Gaming":"ဂိမ်းထုတ်ကုန်များ","Best":"ရောင်းအားအကောင်းဆုံး ထုတ်ကုန်များ","Brands":"ကျွန်ုပ်တို့၏အမှတ်တံဆိပ်များ","Colors":"အရောင်များ","Subscribe":"ကျွန်ုပ်တို့၏သတင်းလွှာကို စာရင်းသွင်းပါ။","Register":"မှတ်ပုံတင်ပါ။","Create Account":"အကောင့်ပြုလုပ်ပါ","Placeholder Name":"သင့်အမည်ကို ထည့်သွင်းပါ","Placeholder Email":"သင့်၏အီးမေးလ်လိပ်စာထည့်ပါ","Placeholder Password":"စကားဝှက်","Placeholder Confirm":"စကားဝှက်အတည်ပြုပါ","Agree Policy":"စည်းမျဉ်းများနှင့် မူဝါဒကို သဘောတူပါသည်။","Have Account":"အကောင့်ရှိပြီးသားလား?"}');

/***/ })

}]);