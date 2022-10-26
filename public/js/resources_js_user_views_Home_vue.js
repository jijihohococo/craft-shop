(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_user_views_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Image.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Image.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    path: {
      type: String
    },
    pic: {
      type: String
    },
    alt_name: {
      type: String
    },
    class_name: {
      type: String,
      "default": ''
    }
  },
  mounted: function mounted() {
    var imgOptions = {
      threshold: 0.2
    };
    var imgObserver = new IntersectionObserver(function (entries, imgObserver) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var img = entry.target;
        img.src = img.dataset.src;
        imgObserver.unobserve(entry.target);
      });
    }, imgOptions);
    imgObserver.observe(this.$el);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Banner.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Banner.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      banners: {}
    };
  },
  methods: {
    getBanners: function getBanners() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                window.axios.get('banners').then(function (response) {
                  _this.banners = response.data.banners;
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.getBanners();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Brand.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Brand.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/general.js */ "./resources/js/helpers/general.js");
/* harmony import */ var vue3_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-carousel */ "./node_modules/vue3-carousel/dist/carousel.es.js");
/* harmony import */ var v_lazy_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-lazy-image */ "./node_modules/v-lazy-image/dist/v-lazy-image.mjs");
/* harmony import */ var _common___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ */ "./resources/js/common/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Carousel: vue3_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel,
    Slide: vue3_carousel__WEBPACK_IMPORTED_MODULE_1__.Slide,
    VLazyImage: v_lazy_image__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      brands: {},
      breakpoints: {
        0: {
          itemsToShow: 2
        },
        480: {
          itemsToShow: 3
        },
        767: {
          itemsToShow: 4
        },
        991: {
          itemsToShow: 5
        }
      }
    };
  },
  mixins: [_common___WEBPACK_IMPORTED_MODULE_3__.common_mixin],
  methods: {
    getBrands: function getBrands() {
      var _this = this;

      window.axios.get('brands').then(function (response) {
        _this.brands = response.data.brands;
      });
    },
    showImage: function showImage(image) {
      return image == null ? '/images/logo_dark.png' : '/image/brand_images/' + image;
    }
  },
  created: function created() {
    this.getBrands();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Collections.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Collections.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Image */ "./resources/js/components/Image.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Image: _components_Image__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      collections: {}
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getCollections();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getCollections: function getCollections() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                window.axios.get('collections').then(function (response) {
                  _this2.collections = response.data.collections;
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/FeatureProduct.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/FeatureProduct.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ItemInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemInfo */ "./resources/js/user/components/ItemInfo.vue");
/* harmony import */ var v_lazy_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-lazy-image */ "./node_modules/v-lazy-image/dist/v-lazy-image.mjs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FeatureProduct',
  components: {
    ItemInfo: _ItemInfo__WEBPACK_IMPORTED_MODULE_0__["default"],
    VLazyImage: v_lazy_image__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    showImage: function showImage(image) {
      return image == null ? '/images/logo_dark.png' : '/image/item_images/' + image;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/FeatureProducts.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/FeatureProducts.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeatureProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeatureProduct */ "./resources/js/user/components/FeatureProduct.vue");
/* harmony import */ var _common___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/ */ "./resources/js/common/index.js");
/* harmony import */ var vue3_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue3-carousel */ "./node_modules/vue3-carousel/dist/carousel.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FeatureProduct: _FeatureProduct__WEBPACK_IMPORTED_MODULE_0__["default"],
    Carousel: vue3_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel,
    Slide: vue3_carousel__WEBPACK_IMPORTED_MODULE_2__.Slide
  },
  name: 'FeatureProducts',
  data: function data() {
    return {
      feature_products: {},
      one_feature_products: [],
      two_feature_products: [],
      three_feature_products: [],
      four_feature_products: [],
      five_feature_products: [],
      breakpoints: {
        0: {
          itemsToShow: 1
        },
        767: {
          itemsToShow: 2
        },
        991: {
          itemsToShow: 3
        },
        1199: {
          itemsToShow: 3
        }
      }
    };
  },
  mixins: [_common___WEBPACK_IMPORTED_MODULE_1__.common_mixin],
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getData();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    makeArray: function makeArray(arrayData, newArray) {
      var _this2 = this;

      arrayData.forEach(function (key) {
        if (Object.values(_this2.feature_products)[key] !== undefined) {
          newArray.push(Object.values(_this2.feature_products)[key]);
        }
      });
    },
    getData: function getData() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                window.axios.get('feature_products').then(function (response) {
                  _this3.feature_products = response.data.feature_products;
                  var oneArray = [0, 1, 2];
                  var twoArray = [3, 4, 5];
                  var threeArray = [6, 7, 8];
                  var fourArray = [9, 10, 11];
                  var fiveArray = [12, 13, 14];

                  _this3.makeArray(oneArray, _this3.one_feature_products);

                  _this3.makeArray(twoArray, _this3.two_feature_products);

                  _this3.makeArray(threeArray, _this3.three_feature_products);

                  _this3.makeArray(fourArray, _this3.four_feature_products);

                  _this3.makeArray(fiveArray, _this3.five_feature_products);
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemColor.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemColor.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      active: 0
    };
  },
  props: {
    colors: {
      type: Array
    }
  },
  methods: {
    changeColor: function changeColor(key) {
      this.active = key;
      this.$emit('getData', key);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemInfo.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemInfo.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ItemPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemPrice */ "./resources/js/user/components/ItemPrice.vue");
/* harmony import */ var _ItemColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemColor */ "./resources/js/user/components/ItemColor.vue");
/* harmony import */ var _helpers_general_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/general.js */ "./resources/js/user/helpers/general.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ItemPrice: _ItemPrice__WEBPACK_IMPORTED_MODULE_0__["default"],
    ItemColor: _ItemColor__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    getAveragePercent: function getAveragePercent(data) {
      var result = data !== null ? (0,_helpers_general_js__WEBPACK_IMPORTED_MODULE_2__.showAveragePercent)(data.split(',')) : 0;
      return result + '%';
    },
    getColor: function getColor(key) {
      this.$emit('getData', key);
    }
  }
});

/***/ }),

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
    showItemPrice: function showItemPrice(price) {
      return (0,_helpers_general_js__WEBPACK_IMPORTED_MODULE_0__.showPrice)(price);
    },
    showItemPromotionPercentage: function showItemPromotionPercentage(normalPrice, salePrice) {
      return (0,_helpers_general_js__WEBPACK_IMPORTED_MODULE_0__.showPromotionPercentage)(normalPrice, salePrice);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemSlider.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemSlider.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SliderDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SliderDetail */ "./resources/js/user/components/SliderDetail.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ItemSlider',
  components: {
    SliderDetail: _SliderDetail__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      items: {},
      loading: false
    };
  },
  props: {
    main_title: {
      type: String
    },
    titles: {
      type: Array
    },
    api: {
      type: String
    }
  },
  methods: {
    showFadeClass: function showFadeClass(key) {
      return key == 0 ? "tab-pane fade show active" : "tab-pane fade";
    },
    getItems: function getItems(items, key) {
      return Object.values(items)[key];
    },
    getData: function getData() {
      var _this = this;

      window.axios.get(this.$props.api).then(function (response) {
        _this.items = response.data;
      });
    }
  },
  mounted: function mounted() {
    this.getData(); //$('.carousel_slider').map( function(key,c) {
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/SliderDetail.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/SliderDetail.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SliderItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SliderItem */ "./resources/js/user/components/SliderItem.vue");
/* harmony import */ var vue3_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-carousel */ "./node_modules/vue3-carousel/dist/carousel.es.js");
/* harmony import */ var vue3_carousel_dist_carousel_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue3-carousel/dist/carousel.css */ "./node_modules/vue3-carousel/dist/carousel.css");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SliderDetail',
  components: {
    SliderItem: _SliderItem__WEBPACK_IMPORTED_MODULE_0__["default"],
    Carousel: vue3_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel,
    Slide: vue3_carousel__WEBPACK_IMPORTED_MODULE_1__.Slide
  },
  data: function data() {
    return {
      run: false,
      breakpoints: {
        0: {
          itemsToShow: 1
        },
        481: {
          itemsToShow: 2
        },
        768: {
          itemsToShow: 3
        },
        1199: {
          itemsToShow: 4
        }
      }
    };
  },
  props: {
    content: {
      type: String
    },
    tab_class: {
      type: String
    },
    items: {
      type: Array,
      "default": []
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/SliderItem.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/SliderItem.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ItemInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemInfo */ "./resources/js/user/components/ItemInfo.vue");
/* harmony import */ var v_lazy_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-lazy-image */ "./node_modules/v-lazy-image/dist/v-lazy-image.mjs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ItemInfo: _ItemInfo__WEBPACK_IMPORTED_MODULE_0__["default"],
    VLazyImage: v_lazy_image__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      currentItemVariant: 0
    };
  },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    showImage: function showImage(image) {
      return image == null ? '/images/logo_dark.png' : '/image/item_images/' + image;
    },
    getColorKey: function getColorKey(key) {
      this.currentItemVariant = key;
    },
    addToCart: function addToCart() {
      var variantId = this.$props.item.variants.split(',')[this.currentItemVariant];
      window.axios.post('add_item_to_shopping_cart/' + variantId).then(function (response) {
        console.log(response.data.message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Subscribe.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Subscribe.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/ */ "./resources/js/common/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_common___WEBPACK_IMPORTED_MODULE_0__.common_mixin]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Home.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Home.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Banner */ "./resources/js/user/components/Banner.vue");
/* harmony import */ var _components_Brand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Brand */ "./resources/js/user/components/Brand.vue");
/* harmony import */ var _components_ItemSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ItemSlider */ "./resources/js/user/components/ItemSlider.vue");
/* harmony import */ var _components_FeatureProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FeatureProducts */ "./resources/js/user/components/FeatureProducts.vue");
/* harmony import */ var _components_Subscribe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Subscribe */ "./resources/js/user/components/Subscribe.vue");
/* harmony import */ var _components_Collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Collections */ "./resources/js/user/components/Collections.vue");
/* harmony import */ var _common___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ */ "./resources/js/common/index.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Banner: _components_Banner__WEBPACK_IMPORTED_MODULE_0__["default"],
    Brand: _components_Brand__WEBPACK_IMPORTED_MODULE_1__["default"],
    ItemSlider: _components_ItemSlider__WEBPACK_IMPORTED_MODULE_2__["default"],
    FeatureProducts: _components_FeatureProducts__WEBPACK_IMPORTED_MODULE_3__["default"],
    Subscribe: _components_Subscribe__WEBPACK_IMPORTED_MODULE_4__["default"],
    Collections: _components_Collections__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mixins: [_common___WEBPACK_IMPORTED_MODULE_6__.common_mixin],
  created: function created() {
    window.scrollTo(0, 0);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Image.vue?vue&type=template&id=c4020700":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Image.vue?vue&type=template&id=c4020700 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["data-src", "alt"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    "data-src": [$props.pic == 'logo_dark.png' || $props.pic == null ? '/images/logo_dark.png' : $props.path + '/' + $props.pic],
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.class_name),
    loading: "lazy",
    alt: $props.alt_name
  }, null, 10
  /* CLASS, PROPS */
  , _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Banner.vue?vue&type=template&id=354022c2":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Banner.vue?vue&type=template&id=354022c2 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "banner_section slide_medium shop_banner_slider staggered-animation-wrap",
  style: {
    "margin-top": "-24px"
  }
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-lg-9 offset-lg-3"
};
var _hoisted_5 = {
  id: "carouselExampleControls",
  "class": "carousel slide light_arrow",
  "data-ride": "carousel"
};
var _hoisted_6 = {
  "class": "carousel-inner"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "banner_slide_content banner_content_inner"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-8 col-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "banner_content overflow-hidden"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "btn btn-fill-out rounded-0 staggered-animation text-uppercase",
  href: "shop-left-sidebar.html",
  "data-animation": "slideInLeft",
  "data-animation-delay": "1.5s"
}, "Shop Now")])])], -1
/* HOISTED */
);

var _hoisted_8 = [_hoisted_7];
var _hoisted_9 = {
  "class": "carousel-indicators indicators_style1"
};
var _hoisted_10 = ["data-slide-to"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.banners, function (banner, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(key == 0 ? 'carousel-item active background_bg' : 'carousel-item background_bg'),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        'background-image': 'url(/image/banner_images/' + banner.pic + ')'
      })
    }, _hoisted_8, 6
    /* CLASS, STYLE */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.banners, function (banner, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "data-target": "#carouselExampleControls",
      "data-slide-to": key,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(key == 0 ? 'active' : null)
    }, null, 10
    /* CLASS, PROPS */
    , _hoisted_10);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Brand.vue?vue&type=template&id=56436864":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Brand.vue?vue&type=template&id=56436864 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "section small_pt"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-md-12"
};
var _hoisted_5 = {
  "class": "heading_tab_header"
};
var _hoisted_6 = {
  "class": "heading_s2"
};
var _hoisted_7 = {
  "class": "row"
};
var _hoisted_8 = {
  "class": "col-12"
};
var _hoisted_9 = {
  "class": "client_logo carousel_slider nav_style3"
};
var _hoisted_10 = {
  "class": "cl_logo"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_lazy_image = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-lazy-image");

  var _component_Slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Slide");

  var _component_Carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Carousel");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.translateLang('Brands')), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [$data.brands !== {} ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Carousel, {
    key: 0,
    "items-to-show": 3,
    wrapAround: true,
    breakpoints: $data.breakpoints,
    "snap-align": "center"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.brands, function (brand) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Slide, {
          "class": "item",
          key: brand.id
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_lazy_image, {
              src: $options.showImage(brand.pic),
              alt: brand.name
            }, null, 8
            /* PROPS */
            , ["src", "alt"])])];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["breakpoints"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Collections.vue?vue&type=template&id=62a563b2":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Collections.vue?vue&type=template&id=62a563b2 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "section pb_20 small_pt"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-md-6"
};
var _hoisted_5 = {
  "class": "single_banner"
};
var _hoisted_6 = {
  "class": "single_banner_info"
};
var _hoisted_7 = {
  "class": "single_bn_title"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "shop-left-sidebar.html",
  "class": "single_bn_link"
}, "Shop Now", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Image = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Image");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START SECTION BANNER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.collections, function (collection) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Image, {
      path: "/image/collection_images",
      pic: collection.pic,
      alt_name: collection.name
    }, null, 8
    /* PROPS */
    , ["pic", "alt_name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(collection.name), 1
    /* TEXT */
    ), _hoisted_8])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END SECTION BANNER ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/FeatureProduct.vue?vue&type=template&id=5d8b21e8":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/FeatureProduct.vue?vue&type=template&id=5d8b21e8 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "product"
};
var _hoisted_2 = {
  "class": "product_img"
};
var _hoisted_3 = {
  href: "shop-product-detail.html"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_lazy_image = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-lazy-image");

  var _component_ItemInfo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ItemInfo");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_lazy_image, {
    src: $options.showImage($props.item.image),
    alt: $props.item.name
  }, null, 8
  /* PROPS */
  , ["src", "alt"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ItemInfo, {
    item: $props.item
  }, null, 8
  /* PROPS */
  , ["item"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/FeatureProducts.vue?vue&type=template&id=59bf1397":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/FeatureProducts.vue?vue&type=template&id=59bf1397 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "section small_pt pb_20"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-md-12"
};
var _hoisted_5 = {
  "class": "heading_tab_header"
};
var _hoisted_6 = {
  "class": "heading_s2"
};
var _hoisted_7 = {
  "class": "row"
};
var _hoisted_8 = {
  "class": "col-md-12"
};
var _hoisted_9 = {
  "class": "product_slider product_list carousel_slider nav_style3"
};
var _hoisted_10 = {
  "class": "item"
};
var _hoisted_11 = {
  "class": "item"
};
var _hoisted_12 = {
  "class": "item"
};
var _hoisted_13 = {
  "class": "item"
};
var _hoisted_14 = {
  "class": "item"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FeatureProduct = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FeatureProduct");

  var _component_Slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Slide");

  var _component_Carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Carousel");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START SECTION SHOP "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.translateLang('Feature')), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [$data.feature_products && $data.feature_products.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Carousel, {
    key: 0,
    "items-to-show": 3,
    wrapAround: true,
    breakpoints: $data.breakpoints,
    "snap-align": "center"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.one_feature_products, function (item) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Slide, {
          key: item.id
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FeatureProduct, {
              item: item
            }, null, 8
            /* PROPS */
            , ["item"])])];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      )), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.two_feature_products, function (item) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Slide, {
          key: item.id
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FeatureProduct, {
              item: item
            }, null, 8
            /* PROPS */
            , ["item"])])];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      )), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.three_feature_products, function (item) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Slide, {
          key: item.id
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FeatureProduct, {
              item: item
            }, null, 8
            /* PROPS */
            , ["item"])])];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      )), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.four_feature_products, function (item) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Slide, {
          key: item.id
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FeatureProduct, {
              item: item
            }, null, 8
            /* PROPS */
            , ["item"])])];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      )), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.five_feature_products, function (item) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Slide, {
          key: item.id
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FeatureProduct, {
              item: item
            }, null, 8
            /* PROPS */
            , ["item"])])];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["breakpoints"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END SECTION SHOP ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemColor.vue?vue&type=template&id=58fefded":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemColor.vue?vue&type=template&id=58fefded ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "pr_switch_wrap"
};
var _hoisted_2 = {
  "class": "product_color_switch"
};
var _hoisted_3 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.colors, function (color, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      onClick: function onClick($event) {
        return $options.changeColor(key, color);
      },
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([key == $data.active ? 'active' : '']),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(['background-color:' + color])
    }, null, 14
    /* CLASS, STYLE, PROPS */
    , _hoisted_3);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemInfo.vue?vue&type=template&id=53ed1494":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemInfo.vue?vue&type=template&id=53ed1494 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "product_info"
};
var _hoisted_2 = {
  "class": "product_title"
};
var _hoisted_3 = {
  href: "shop-product-detail.html"
};
var _hoisted_4 = {
  "class": "rating_wrap"
};
var _hoisted_5 = {
  "class": "rating"
};
var _hoisted_6 = {
  "class": "rating_num"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pr_desc"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ItemPrice = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ItemPrice");

  var _component_ItemColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ItemColor");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.item.name), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ItemPrice, {
    normal_price: $props.item.normal_price,
    sale_price: $props.item.sale_price
  }, null, 8
  /* PROPS */
  , ["normal_price", "sale_price"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "product_rate",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      'width': $options.getAveragePercent($props.item.reviews)
    })
  }, null, 4
  /* STYLE */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.item.review == null ? '0' : $props.item.reviews.split(',').length), 1
  /* TEXT */
  )]), _hoisted_7, $props.item.colorCodes !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ItemColor, {
    key: 0,
    colors: $props.item.colorCodes.split(','),
    onGetData: $options.getColor
  }, null, 8
  /* PROPS */
  , ["colors", "onGetData"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

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
  return $props.normal_price !== $props.sale_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.thousandSeprator($options.showItemPrice($props.sale_price))) + " MMK ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("del", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.thousandSeprator($options.showItemPrice($props.normal_price))) + " MMK", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.showItemPrice($options.showItemPromotionPercentage($props.normal_price, $props.sale_price))) + "% Off", 1
  /* TEXT */
  )])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.thousandSeprator($options.showItemPrice($props.sale_price))) + " MMK ", 1
  /* TEXT */
  )]));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemSlider.vue?vue&type=template&id=82de0872":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemSlider.vue?vue&type=template&id=82de0872 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  "class": "col-12"
};
var _hoisted_3 = {
  "class": "heading_tab_header"
};
var _hoisted_4 = {
  "class": "heading_s2"
};
var _hoisted_5 = {
  "class": "tab-style2"
};
var _hoisted_6 = ["data-target"];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "ion-android-menu"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = [_hoisted_7];
var _hoisted_9 = ["id"];
var _hoisted_10 = {
  "class": "nav-item"
};
var _hoisted_11 = ["id", "href", "aria-controls"];
var _hoisted_12 = {
  "class": "row"
};
var _hoisted_13 = {
  "class": "col-12"
};
var _hoisted_14 = {
  "class": "tab_slider"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SliderDetail = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SliderDetail");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.main_title), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": '#' + $props.api,
    "aria-expanded": "false"
  }, _hoisted_8, 8
  /* PROPS */
  , _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "nav nav-tabs justify-content-center justify-content-md-end",
    id: $props.api,
    role: "tablist"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.titles, function (title, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([key == 0 ? 'nav-link active' : 'nav-link']),
      id: title.link + '-tab',
      "data-toggle": "tab",
      href: '#' + title.link,
      role: "tab",
      "aria-controls": title.link,
      "aria-selected": "true"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(title.name), 11
    /* TEXT, CLASS, PROPS */
    , _hoisted_11)]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 8
  /* PROPS */
  , _hoisted_9)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.titles, function (title, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SliderDetail, {
      content: title.link,
      tab_class: $options.showFadeClass(key),
      items: $options.getItems($data.items, key)
    }, null, 8
    /* PROPS */
    , ["content", "tab_class", "items"]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <component is=\"script\" src=\"user/js/scripts.js\" /> ")], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/SliderDetail.vue?vue&type=template&id=6f43e676":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/SliderDetail.vue?vue&type=template&id=6f43e676 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["id", "aria-labelledby"];
var _hoisted_2 = {
  "class": "product_slider carousel_slider nav_style1"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" .carousel__item { min-height: 200px; width: 100%; background-color: var(--vc-clr-primary); color: var(--vc-clr-white); font-size: 20px; border-radius: 8px; display: flex; justify-content: center; align-items: center; } .carousel__slide { padding: 10px; } ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SliderItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SliderItem");

  var _component_Slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Slide");

  var _component_Carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Carousel");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.tab_class),
    id: $props.content,
    role: "tabpanel",
    "aria-labelledby": $props.content + '-tab'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [$props.items.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Carousel, {
    key: 0,
    "items-to-show": 3,
    wrapAround: true,
    breakpoints: $data.breakpoints,
    "snap-align": "center"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.items, function (item, key) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Slide, {
          key: item.id
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SliderItem, {
              item: item
            }, null, 8
            /* PROPS */
            , ["item"])];
          }),
          _: 2
          /* DYNAMIC */

        }, 1024
        /* DYNAMIC_SLOTS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["breakpoints"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 10
  /* CLASS, PROPS */
  , _hoisted_1), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)("style"), null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }))], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/SliderItem.vue?vue&type=template&id=0ec9b4f2":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/SliderItem.vue?vue&type=template&id=0ec9b4f2 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "product"
};
var _hoisted_2 = {
  "class": "product_img"
};
var _hoisted_3 = {
  href: "shop-product-detail.html"
};
var _hoisted_4 = {
  "class": "product_action_box"
};
var _hoisted_5 = {
  "class": "list_none pr_action_btn"
};
var _hoisted_6 = {
  "class": "add-to-cart"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icon-basket-loaded"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add To Cart");

var _hoisted_9 = [_hoisted_7, _hoisted_8];

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<li><a href=\"shop-compare.html\" class=\"popup-ajax\"><i class=\"icon-shuffle\"></i></a></li><li><a href=\"shop-quick-view.html\" class=\"popup-ajax\"><i class=\"icon-magnifier-add\"></i></a></li><li><a href=\"#\"><i class=\"icon-heart\"></i></a></li>", 3);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_lazy_image = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-lazy-image");

  var _component_ItemInfo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ItemInfo");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_lazy_image, {
    src: $options.showImage($props.item.image),
    alt: $props.item.name
  }, null, 8
  /* PROPS */
  , ["src", "alt"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.addToCart();
    })
  }, _hoisted_9)]), _hoisted_10])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ItemInfo, {
    item: $props.item,
    onGetData: $options.getColorKey
  }, null, 8
  /* PROPS */
  , ["item", "onGetData"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Subscribe.vue?vue&type=template&id=911c13b2":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Subscribe.vue?vue&type=template&id=911c13b2 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "section bg_dark small_pt small_pb"
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
  "class": "heading_s1 mb-md-0 heading_light"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "newsletter_form"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  required: "",
  "class": "form-control rounded-0",
  placeholder: "Enter Email Address"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-fill-out rounded-0",
  name: "submit",
  value: "Submit"
}, "Subscribe")])])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START SECTION SUBSCRIBE NEWSLETTER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.translateLang("Subscribe")), 1
  /* TEXT */
  )])]), _hoisted_6])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START SECTION SUBSCRIBE NEWSLETTER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <component is=\"script\" src=\"user/js/scripts.js\" /> ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Home.vue?vue&type=template&id=184b36b6":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Home.vue?vue&type=template&id=184b36b6 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "section small_pb"
};
var _hoisted_3 = {
  "class": "container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Banner = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Banner");

  var _component_ItemSlider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ItemSlider");

  var _component_Collections = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Collections");

  var _component_FeatureProducts = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FeatureProducts");

  var _component_Brand = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Brand");

  var _component_Subscribe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Subscribe");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"preloader\">\n    <div class=\"lds-ellipsis\">\n        <span></span>\n        <span></span>\n        <span></span>\n    </div>\n</div>  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START SECTION BANNER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Banner), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END SECTION BANNER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END MAIN CONTENT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START SECTION SHOP "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ItemSlider, {
    main_title: _ctx.translateLang('Best'),
    titles: [{
      name: "Laptop",
      link: "laptop"
    }, {
      name: "Desktop",
      link: "desktop"
    }, {
      name: "Accessory",
      link: "accessory"
    }, {
      name: "Desktop Component",
      link: "component"
    }],
    api: "best_sellers"
  }, null, 8
  /* PROPS */
  , ["main_title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ItemSlider, {
    main_title: _ctx.translateLang('Gaming'),
    titles: [{
      name: "Gaming Laptop",
      link: "gaming_laptop"
    }, {
      name: "Gaming Mouse",
      link: "gaming_mouse"
    }, {
      name: "Gaming Keyboard",
      link: "gaming_keyboard"
    }, {
      name: "Gaming Headphone",
      link: "gaming_headphone"
    }],
    api: "gamings"
  }, null, 8
  /* PROPS */
  , ["main_title"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END SECTION SHOP "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START SECTION BANNER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Collections), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END SECTION BANNER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FeatureProducts), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START SECTION CLIENT LOGO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Brand), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END SECTION CLIENT LOGO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Subscribe)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END MAIN CONTENT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <component is=\"script\" src=\"user/js/scripts.js\" /> ")], 64
  /* STABLE_FRAGMENT */
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
/* harmony export */   "showSwalLoading": () => (/* binding */ showSwalLoading),
/* harmony export */   "thousandSeprator": () => (/* binding */ thousandSeprator)
/* harmony export */ });
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
var currentYear = new Date().getFullYear();

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
/* harmony export */   "showPrice": () => (/* binding */ showPrice),
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
function showPrice(price) {
  return parseInt(price).toString();
}
function showPromotionPercentage(normalPrice, salePrice) {
  return (normalPrice - salePrice) * 100 / normalPrice;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue3-carousel/dist/carousel.css":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue3-carousel/dist/carousel.css ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".carousel {\n  position: relative;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.carousel * {\n  box-sizing: border-box;\n}\n\n.carousel__track {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\n.carousel__viewport {\n  overflow: hidden;\n}\n\n.carousel__sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.carousel__prev,\n.carousel__next {\n  box-sizing: content-box;\n  background: var(--vc-nav-background);\n  border-radius: var(--vc-nav-border-radius);\n  width: var(--vc-nav-width);\n  height: var(--vc-nav-height);\n  text-align: center;\n  font-size: var(--vc-nav-height);\n  padding: 0;\n  color: var(--vc-nav-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  border: 0;\n  cursor: pointer;\n  margin: 0 10px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.carousel__prev:hover,\n.carousel__next:hover {\n  color: var(--vc-nav-color-hover);\n}\n\n.carousel__next--disabled,\n.carousel__prev--disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.carousel__prev {\n  left: 0;\n}\n\n.carousel__next {\n  right: 0;\n}\n\n.carousel--rtl .carousel__prev {\n  left: auto;\n  right: 0;\n}\n\n.carousel--rtl .carousel__next {\n  right: auto;\n  left: 0;\n}\n.carousel__pagination {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  line-height: 0;\n  margin: 10px 0 0;\n}\n\n.carousel__pagination-button {\n  display: block;\n  border: 0;\n  margin: 0;\n  cursor: pointer;\n  padding: var(--vc-pgn-margin);\n  background: transparent;\n}\n\n.carousel__pagination-button::after {\n  display: block;\n  content: '';\n  width: var(--vc-pgn-width);\n  height: var(--vc-pgn-height);\n  border-radius: var(--vc-pgn-border-radius);\n  background-color: var(--vc-pgn-background-color);\n}\n\n.carousel__pagination-button:hover::after,\n.carousel__pagination-button--active::after {\n  background-color: var(--vc-pgn-active-color);\n}\n:root {\n  /* Color */\n  --vc-clr-primary: #000;\n  --vc-clr-secondary: #090f207f;\n  --vc-clr-white: #ffffff;\n\n  /* Icon */\n  --vc-icn-width: 1.2em;\n\n  /* Navigation */\n  --vc-nav-width: 30px;\n  --vc-nav-height: 30px;\n  --vc-nav-border-radius: 0;\n  --vc-nav-color: var(--vc-clr-primary);\n  --vc-nav-color-hover: var(--vc-clr-secondary);\n  --vc-nav-background: transparent;\n\n  /* Pagination */\n  --vc-pgn-width: 12px;\n  --vc-pgn-height: 4px;\n  --vc-pgn-margin: 4px;\n  --vc-pgn-border-radius: 0;\n  --vc-pgn-background-color: var(--vc-clr-secondary);\n  --vc-pgn-active-color: var(--vc-clr-primary);\n}\n.carousel__icon {\n  width: var(--vc-icn-width);\n  height: var(--vc-icn-width);\n  fill: currentColor;\n}\n.carousel__slide {\n  scroll-snap-stop: auto;\n  flex-shrink: 0;\n  margin: 0;\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/vue3-carousel/dist/carousel.css":
/*!******************************************************!*\
  !*** ./node_modules/vue3-carousel/dist/carousel.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_8_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./carousel.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue3-carousel/dist/carousel.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_carousel_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_carousel_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Image.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Image.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Image_vue_vue_type_template_id_c4020700__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image.vue?vue&type=template&id=c4020700 */ "./resources/js/components/Image.vue?vue&type=template&id=c4020700");
/* harmony import */ var _Image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.vue?vue&type=script&lang=js */ "./resources/js/components/Image.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Image_vue_vue_type_template_id_c4020700__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Image.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/Banner.vue":
/*!*************************************************!*\
  !*** ./resources/js/user/components/Banner.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Banner_vue_vue_type_template_id_354022c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Banner.vue?vue&type=template&id=354022c2 */ "./resources/js/user/components/Banner.vue?vue&type=template&id=354022c2");
/* harmony import */ var _Banner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banner.vue?vue&type=script&lang=js */ "./resources/js/user/components/Banner.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Banner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Banner_vue_vue_type_template_id_354022c2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/Banner.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/Brand.vue":
/*!************************************************!*\
  !*** ./resources/js/user/components/Brand.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Brand_vue_vue_type_template_id_56436864__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brand.vue?vue&type=template&id=56436864 */ "./resources/js/user/components/Brand.vue?vue&type=template&id=56436864");
/* harmony import */ var _Brand_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brand.vue?vue&type=script&lang=js */ "./resources/js/user/components/Brand.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Brand_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Brand_vue_vue_type_template_id_56436864__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/Brand.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/Collections.vue":
/*!******************************************************!*\
  !*** ./resources/js/user/components/Collections.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Collections_vue_vue_type_template_id_62a563b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collections.vue?vue&type=template&id=62a563b2 */ "./resources/js/user/components/Collections.vue?vue&type=template&id=62a563b2");
/* harmony import */ var _Collections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collections.vue?vue&type=script&lang=js */ "./resources/js/user/components/Collections.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Collections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Collections_vue_vue_type_template_id_62a563b2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/Collections.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/FeatureProduct.vue":
/*!*********************************************************!*\
  !*** ./resources/js/user/components/FeatureProduct.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeatureProduct_vue_vue_type_template_id_5d8b21e8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeatureProduct.vue?vue&type=template&id=5d8b21e8 */ "./resources/js/user/components/FeatureProduct.vue?vue&type=template&id=5d8b21e8");
/* harmony import */ var _FeatureProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureProduct.vue?vue&type=script&lang=js */ "./resources/js/user/components/FeatureProduct.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FeatureProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FeatureProduct_vue_vue_type_template_id_5d8b21e8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/FeatureProduct.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/FeatureProducts.vue":
/*!**********************************************************!*\
  !*** ./resources/js/user/components/FeatureProducts.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeatureProducts_vue_vue_type_template_id_59bf1397__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeatureProducts.vue?vue&type=template&id=59bf1397 */ "./resources/js/user/components/FeatureProducts.vue?vue&type=template&id=59bf1397");
/* harmony import */ var _FeatureProducts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureProducts.vue?vue&type=script&lang=js */ "./resources/js/user/components/FeatureProducts.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FeatureProducts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FeatureProducts_vue_vue_type_template_id_59bf1397__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/FeatureProducts.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/ItemColor.vue":
/*!****************************************************!*\
  !*** ./resources/js/user/components/ItemColor.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ItemColor_vue_vue_type_template_id_58fefded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemColor.vue?vue&type=template&id=58fefded */ "./resources/js/user/components/ItemColor.vue?vue&type=template&id=58fefded");
/* harmony import */ var _ItemColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemColor.vue?vue&type=script&lang=js */ "./resources/js/user/components/ItemColor.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ItemColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ItemColor_vue_vue_type_template_id_58fefded__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/ItemColor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/ItemInfo.vue":
/*!***************************************************!*\
  !*** ./resources/js/user/components/ItemInfo.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ItemInfo_vue_vue_type_template_id_53ed1494__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemInfo.vue?vue&type=template&id=53ed1494 */ "./resources/js/user/components/ItemInfo.vue?vue&type=template&id=53ed1494");
/* harmony import */ var _ItemInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemInfo.vue?vue&type=script&lang=js */ "./resources/js/user/components/ItemInfo.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ItemInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ItemInfo_vue_vue_type_template_id_53ed1494__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/ItemInfo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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

/***/ "./resources/js/user/components/ItemSlider.vue":
/*!*****************************************************!*\
  !*** ./resources/js/user/components/ItemSlider.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ItemSlider_vue_vue_type_template_id_82de0872__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemSlider.vue?vue&type=template&id=82de0872 */ "./resources/js/user/components/ItemSlider.vue?vue&type=template&id=82de0872");
/* harmony import */ var _ItemSlider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemSlider.vue?vue&type=script&lang=js */ "./resources/js/user/components/ItemSlider.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ItemSlider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ItemSlider_vue_vue_type_template_id_82de0872__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/ItemSlider.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/SliderDetail.vue":
/*!*******************************************************!*\
  !*** ./resources/js/user/components/SliderDetail.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SliderDetail_vue_vue_type_template_id_6f43e676__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SliderDetail.vue?vue&type=template&id=6f43e676 */ "./resources/js/user/components/SliderDetail.vue?vue&type=template&id=6f43e676");
/* harmony import */ var _SliderDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SliderDetail.vue?vue&type=script&lang=js */ "./resources/js/user/components/SliderDetail.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SliderDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SliderDetail_vue_vue_type_template_id_6f43e676__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/SliderDetail.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/SliderItem.vue":
/*!*****************************************************!*\
  !*** ./resources/js/user/components/SliderItem.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SliderItem_vue_vue_type_template_id_0ec9b4f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SliderItem.vue?vue&type=template&id=0ec9b4f2 */ "./resources/js/user/components/SliderItem.vue?vue&type=template&id=0ec9b4f2");
/* harmony import */ var _SliderItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SliderItem.vue?vue&type=script&lang=js */ "./resources/js/user/components/SliderItem.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SliderItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SliderItem_vue_vue_type_template_id_0ec9b4f2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/SliderItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/components/Subscribe.vue":
/*!****************************************************!*\
  !*** ./resources/js/user/components/Subscribe.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Subscribe_vue_vue_type_template_id_911c13b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscribe.vue?vue&type=template&id=911c13b2 */ "./resources/js/user/components/Subscribe.vue?vue&type=template&id=911c13b2");
/* harmony import */ var _Subscribe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscribe.vue?vue&type=script&lang=js */ "./resources/js/user/components/Subscribe.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Subscribe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Subscribe_vue_vue_type_template_id_911c13b2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/components/Subscribe.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/user/views/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/user/views/Home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_184b36b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=184b36b6 */ "./resources/js/user/views/Home.vue?vue&type=template&id=184b36b6");
/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ "./resources/js/user/views/Home.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_craft_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_184b36b6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/user/views/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Image.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Image.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Image.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Image.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/Banner.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/user/components/Banner.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Banner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Banner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Banner.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Banner.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/Brand.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/user/components/Brand.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Brand_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Brand_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Brand.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Brand.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/Collections.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/user/components/Collections.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Collections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Collections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Collections.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Collections.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/FeatureProduct.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/user/components/FeatureProduct.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeatureProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeatureProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FeatureProduct.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/FeatureProduct.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/FeatureProducts.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/user/components/FeatureProducts.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeatureProducts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeatureProducts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FeatureProducts.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/FeatureProducts.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/ItemColor.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/user/components/ItemColor.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ItemColor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemColor.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/ItemInfo.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/user/components/ItemInfo.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ItemInfo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemInfo.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/user/components/ItemSlider.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/user/components/ItemSlider.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemSlider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemSlider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ItemSlider.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemSlider.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/SliderDetail.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/user/components/SliderDetail.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SliderDetail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/SliderDetail.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/SliderItem.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/user/components/SliderItem.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SliderItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/SliderItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/Subscribe.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/user/components/Subscribe.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Subscribe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Subscribe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Subscribe.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Subscribe.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/views/Home.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/user/views/Home.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Home.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Image.vue?vue&type=template&id=c4020700":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Image.vue?vue&type=template&id=c4020700 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Image_vue_vue_type_template_id_c4020700__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Image_vue_vue_type_template_id_c4020700__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Image.vue?vue&type=template&id=c4020700 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Image.vue?vue&type=template&id=c4020700");


/***/ }),

/***/ "./resources/js/user/components/Banner.vue?vue&type=template&id=354022c2":
/*!*******************************************************************************!*\
  !*** ./resources/js/user/components/Banner.vue?vue&type=template&id=354022c2 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Banner_vue_vue_type_template_id_354022c2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Banner_vue_vue_type_template_id_354022c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Banner.vue?vue&type=template&id=354022c2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Banner.vue?vue&type=template&id=354022c2");


/***/ }),

/***/ "./resources/js/user/components/Brand.vue?vue&type=template&id=56436864":
/*!******************************************************************************!*\
  !*** ./resources/js/user/components/Brand.vue?vue&type=template&id=56436864 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Brand_vue_vue_type_template_id_56436864__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Brand_vue_vue_type_template_id_56436864__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Brand.vue?vue&type=template&id=56436864 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Brand.vue?vue&type=template&id=56436864");


/***/ }),

/***/ "./resources/js/user/components/Collections.vue?vue&type=template&id=62a563b2":
/*!************************************************************************************!*\
  !*** ./resources/js/user/components/Collections.vue?vue&type=template&id=62a563b2 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Collections_vue_vue_type_template_id_62a563b2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Collections_vue_vue_type_template_id_62a563b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Collections.vue?vue&type=template&id=62a563b2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Collections.vue?vue&type=template&id=62a563b2");


/***/ }),

/***/ "./resources/js/user/components/FeatureProduct.vue?vue&type=template&id=5d8b21e8":
/*!***************************************************************************************!*\
  !*** ./resources/js/user/components/FeatureProduct.vue?vue&type=template&id=5d8b21e8 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeatureProduct_vue_vue_type_template_id_5d8b21e8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeatureProduct_vue_vue_type_template_id_5d8b21e8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FeatureProduct.vue?vue&type=template&id=5d8b21e8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/FeatureProduct.vue?vue&type=template&id=5d8b21e8");


/***/ }),

/***/ "./resources/js/user/components/FeatureProducts.vue?vue&type=template&id=59bf1397":
/*!****************************************************************************************!*\
  !*** ./resources/js/user/components/FeatureProducts.vue?vue&type=template&id=59bf1397 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeatureProducts_vue_vue_type_template_id_59bf1397__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeatureProducts_vue_vue_type_template_id_59bf1397__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FeatureProducts.vue?vue&type=template&id=59bf1397 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/FeatureProducts.vue?vue&type=template&id=59bf1397");


/***/ }),

/***/ "./resources/js/user/components/ItemColor.vue?vue&type=template&id=58fefded":
/*!**********************************************************************************!*\
  !*** ./resources/js/user/components/ItemColor.vue?vue&type=template&id=58fefded ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemColor_vue_vue_type_template_id_58fefded__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemColor_vue_vue_type_template_id_58fefded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ItemColor.vue?vue&type=template&id=58fefded */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemColor.vue?vue&type=template&id=58fefded");


/***/ }),

/***/ "./resources/js/user/components/ItemInfo.vue?vue&type=template&id=53ed1494":
/*!*********************************************************************************!*\
  !*** ./resources/js/user/components/ItemInfo.vue?vue&type=template&id=53ed1494 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemInfo_vue_vue_type_template_id_53ed1494__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemInfo_vue_vue_type_template_id_53ed1494__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ItemInfo.vue?vue&type=template&id=53ed1494 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemInfo.vue?vue&type=template&id=53ed1494");


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

/***/ "./resources/js/user/components/ItemSlider.vue?vue&type=template&id=82de0872":
/*!***********************************************************************************!*\
  !*** ./resources/js/user/components/ItemSlider.vue?vue&type=template&id=82de0872 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemSlider_vue_vue_type_template_id_82de0872__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ItemSlider_vue_vue_type_template_id_82de0872__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ItemSlider.vue?vue&type=template&id=82de0872 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/ItemSlider.vue?vue&type=template&id=82de0872");


/***/ }),

/***/ "./resources/js/user/components/SliderDetail.vue?vue&type=template&id=6f43e676":
/*!*************************************************************************************!*\
  !*** ./resources/js/user/components/SliderDetail.vue?vue&type=template&id=6f43e676 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderDetail_vue_vue_type_template_id_6f43e676__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderDetail_vue_vue_type_template_id_6f43e676__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SliderDetail.vue?vue&type=template&id=6f43e676 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/SliderDetail.vue?vue&type=template&id=6f43e676");


/***/ }),

/***/ "./resources/js/user/components/SliderItem.vue?vue&type=template&id=0ec9b4f2":
/*!***********************************************************************************!*\
  !*** ./resources/js/user/components/SliderItem.vue?vue&type=template&id=0ec9b4f2 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderItem_vue_vue_type_template_id_0ec9b4f2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderItem_vue_vue_type_template_id_0ec9b4f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SliderItem.vue?vue&type=template&id=0ec9b4f2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/SliderItem.vue?vue&type=template&id=0ec9b4f2");


/***/ }),

/***/ "./resources/js/user/components/Subscribe.vue?vue&type=template&id=911c13b2":
/*!**********************************************************************************!*\
  !*** ./resources/js/user/components/Subscribe.vue?vue&type=template&id=911c13b2 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Subscribe_vue_vue_type_template_id_911c13b2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Subscribe_vue_vue_type_template_id_911c13b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Subscribe.vue?vue&type=template&id=911c13b2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/Subscribe.vue?vue&type=template&id=911c13b2");


/***/ }),

/***/ "./resources/js/user/views/Home.vue?vue&type=template&id=184b36b6":
/*!************************************************************************!*\
  !*** ./resources/js/user/views/Home.vue?vue&type=template&id=184b36b6 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_184b36b6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_184b36b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=184b36b6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/views/Home.vue?vue&type=template&id=184b36b6");


/***/ }),

/***/ "./node_modules/vue3-carousel/dist/carousel.es.js":
/*!********************************************************!*\
  !*** ./node_modules/vue3-carousel/dist/carousel.es.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carousel": () => (/* binding */ Carousel),
/* harmony export */   "Icon": () => (/* binding */ Icon),
/* harmony export */   "Navigation": () => (/* binding */ Navigation),
/* harmony export */   "Pagination": () => (/* binding */ Pagination),
/* harmony export */   "Slide": () => (/* binding */ Slide)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/**
 * Vue 3 Carousel 0.2.0
 * (c) 2022
 * @license MIT
 */


const defaultConfigs = {
    itemsToShow: 1,
    itemsToScroll: 1,
    modelValue: 0,
    transition: 300,
    autoplay: 0,
    snapAlign: 'center',
    wrapAround: false,
    pauseAutoplayOnHover: false,
    mouseDrag: true,
    touchDrag: true,
    dir: 'ltr',
    breakpoints: undefined,
};

const carouselProps = {
    // count of items to showed per view
    itemsToShow: {
        default: defaultConfigs.itemsToShow,
        type: Number,
    },
    // count of items to be scrolled
    itemsToScroll: {
        default: defaultConfigs.itemsToScroll,
        type: Number,
    },
    // control infinite scrolling mode
    wrapAround: {
        default: defaultConfigs.wrapAround,
        type: Boolean,
    },
    // control snap position alignment
    snapAlign: {
        default: defaultConfigs.snapAlign,
        validator(value) {
            // The value must match one of these strings
            return ['start', 'end', 'center', 'center-even', 'center-odd'].includes(value);
        },
    },
    // sliding transition time in ms
    transition: {
        default: defaultConfigs.transition,
        type: Number,
    },
    // an object to store breakpoints
    breakpoints: {
        default: defaultConfigs.breakpoints,
        type: Object,
    },
    // time to auto advance slides in ms
    autoplay: {
        default: defaultConfigs.autoplay,
        type: Number,
    },
    // pause autoplay when mouse hover over the carousel
    pauseAutoplayOnHover: {
        default: defaultConfigs.pauseAutoplayOnHover,
        type: Boolean,
    },
    // slide number number of initial slide
    modelValue: {
        default: undefined,
        type: Number,
    },
    // toggle mouse dragging.
    mouseDrag: {
        default: defaultConfigs.mouseDrag,
        type: Boolean,
    },
    // toggle mouse dragging.
    touchDrag: {
        default: defaultConfigs.touchDrag,
        type: Boolean,
    },
    // control snap position alignment
    dir: {
        default: defaultConfigs.dir,
        validator(value) {
            // The value must match one of these strings
            return ['rtl', 'ltr'].includes(value);
        },
    },
    // an object to pass all settings
    settings: {
        default() {
            return {};
        },
        type: Object,
    },
};

/**
 * return a debounced version of the function
 * @param fn
 * @param delay
 */
// eslint-disable-next-line no-unused-vars
function debounce(fn, delay) {
    let timerId;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    };
}
/**
 * return a throttle version of the function
 * Throttling
 *
 */
// eslint-disable-next-line no-unused-vars
function throttle(fn, limit) {
    let inThrottle;
    return function (...args) {
        const self = this;
        if (!inThrottle) {
            fn.apply(self, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}
function getSlidesVNodes(vNode) {
    var _a, _b, _c;
    // Return empty array if there's any node
    if (!vNode)
        return [];
    // Check if the Slides components are added directly without v-for (#72)
    if (((_b = (_a = vNode[0]) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.name) === 'CarouselSlide')
        return vNode;
    return ((_c = vNode[0]) === null || _c === void 0 ? void 0 : _c.children) || [];
}
function getMaxSlideIndex(config, slidesCount) {
    if (config.wrapAround) {
        return slidesCount - 1;
    }
    switch (config.snapAlign) {
        case 'start':
            return slidesCount - config.itemsToShow;
        case 'end':
            return slidesCount - 1;
        case 'center':
        case 'center-odd':
            return slidesCount - Math.ceil((config.itemsToShow - 0.5) / 2);
        case 'center-even':
            return slidesCount - Math.ceil(config.itemsToShow / 2);
        default:
            return 0;
    }
}
function getMinSlideIndex(config) {
    if (config.wrapAround) {
        return 0;
    }
    switch (config.snapAlign) {
        case 'start':
            return 0;
        case 'end':
            return config.itemsToShow - 1;
        case 'center':
        case 'center-odd':
            return Math.floor((config.itemsToShow - 1) / 2);
        case 'center-even':
            return Math.floor((config.itemsToShow - 2) / 2);
        default:
            return 0;
    }
}
function getCurrentSlideIndex(config, val, max, min) {
    if (config.wrapAround) {
        return val;
    }
    return Math.min(Math.max(val, min), max);
}
function getSlidesToScroll({ currentSlide, snapAlign, itemsToShow, wrapAround, slidesCount, }) {
    let output = currentSlide;
    if (snapAlign === 'center' || snapAlign === 'center-odd') {
        output -= (itemsToShow - 1) / 2;
    }
    else if (snapAlign === 'center-even') {
        output -= (itemsToShow - 2) / 2;
    }
    else if (snapAlign === 'end') {
        output -= itemsToShow - 1;
    }
    if (!wrapAround) {
        const max = slidesCount - itemsToShow;
        const min = 0;
        output = Math.max(Math.min(output, max), min);
    }
    return output;
}
function mapNumberToRange(current, max, min = 0) {
    if (current > max) {
        return mapNumberToRange(current - (max + 1), max, min);
    }
    if (current < min) {
        return mapNumberToRange(current + (max + 1), max, min);
    }
    return current;
}

var ARIAComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'ARIA',
    setup() {
        const currentSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('currentSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0));
        const slidesCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('slidesCount', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0));
        return () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', {
            class: ['carousel__liveregion', 'carousel__sr-only'],
            'aria-live': 'polite',
            'aria-atomic': 'true',
        }, `Item ${currentSlide.value + 1} of ${slidesCount.value}`);
    },
});

var Carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Carousel',
    props: carouselProps,
    setup(props, { slots, emit, expose }) {
        var _a;
        const root = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const slides = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const slideWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const slidesCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
        let breakpoints = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        // generate carousel configs
        let __defaultConfig = Object.assign({}, defaultConfigs);
        // current config
        const config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(Object.assign({}, __defaultConfig));
        // slides
        const currentSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((_a = config.modelValue) !== null && _a !== void 0 ? _a : 0);
        const prevSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const middleSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const maxSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const minSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        let autoplayTimer;
        let transitionTimer;
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('config', config);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('slidesCount', slidesCount);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('currentSlide', currentSlideIndex);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('maxSlide', maxSlideIndex);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('minSlide', minSlideIndex);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('slideWidth', slideWidth);
        /**
         * Configs
         */
        function initDefaultConfigs() {
            // generate carousel configs
            const mergedConfigs = Object.assign(Object.assign({}, props), props.settings);
            // Set breakpoints
            breakpoints = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(Object.assign({}, mergedConfigs.breakpoints));
            // remove extra values
            __defaultConfig = Object.assign(Object.assign({}, mergedConfigs), { settings: undefined, breakpoints: undefined });
            bindConfigs(__defaultConfig);
        }
        function updateBreakpointsConfigs() {
            const breakpointsArray = Object.keys(breakpoints.value)
                .map((key) => Number(key))
                .sort((a, b) => +b - +a);
            let newConfig = Object.assign({}, __defaultConfig);
            breakpointsArray.some((breakpoint) => {
                const isMatched = window.matchMedia(`(min-width: ${breakpoint}px)`).matches;
                if (isMatched) {
                    newConfig = Object.assign(Object.assign({}, newConfig), breakpoints.value[breakpoint]);
                    return true;
                }
                return false;
            });
            bindConfigs(newConfig);
        }
        function bindConfigs(newConfig) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            Object.entries(newConfig).forEach(([key, val]) => (config[key] = val));
        }
        const handleWindowResize = debounce(() => {
            if (breakpoints.value) {
                updateBreakpointsConfigs();
                updateSlidesData();
            }
            updateSlideWidth();
        }, 16);
        /**
         * Setup functions
         */
        function updateSlideWidth() {
            if (!root.value)
                return;
            const rect = root.value.getBoundingClientRect();
            slideWidth.value = rect.width / config.itemsToShow;
        }
        function updateSlidesData() {
            slidesCount.value = Math.max(slides.value.length, 1);
            if (slidesCount.value <= 0)
                return;
            middleSlideIndex.value = Math.ceil((slidesCount.value - 1) / 2);
            maxSlideIndex.value = getMaxSlideIndex(config, slidesCount.value);
            minSlideIndex.value = getMinSlideIndex(config);
            currentSlideIndex.value = getCurrentSlideIndex(config, currentSlideIndex.value, maxSlideIndex.value, minSlideIndex.value);
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            if (breakpoints.value) {
                updateBreakpointsConfigs();
                updateSlidesData();
            }
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => setTimeout(updateSlideWidth, 16));
            initAutoplay();
            window.addEventListener('resize', handleWindowResize, { passive: true });
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
            if (transitionTimer) {
                clearTimeout(transitionTimer);
            }
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
            }
        });
        /**
         * Carousel Event listeners
         */
        let isTouch = false;
        const startPosition = { x: 0, y: 0 };
        const endPosition = { x: 0, y: 0 };
        const dragged = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({ x: 0, y: 0 });
        const isHover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const handleMouseEnter = () => {
            isHover.value = true;
        };
        const handleMouseLeave = () => {
            isHover.value = false;
        };
        function handleDragStart(event) {
            isTouch = event.type === 'touchstart';
            if ((!isTouch && event.button !== 0) || isSliding.value) {
                return;
            }
            if (!isTouch) {
                event.preventDefault();
            }
            startPosition.x = isTouch ? event.touches[0].clientX : event.clientX;
            startPosition.y = isTouch ? event.touches[0].clientY : event.clientY;
            document.addEventListener(isTouch ? 'touchmove' : 'mousemove', handleDragging, true);
            document.addEventListener(isTouch ? 'touchend' : 'mouseup', handleDragEnd, true);
        }
        const handleDragging = throttle((event) => {
            endPosition.x = isTouch ? event.touches[0].clientX : event.clientX;
            endPosition.y = isTouch ? event.touches[0].clientY : event.clientY;
            const deltaX = endPosition.x - startPosition.x;
            const deltaY = endPosition.y - startPosition.y;
            dragged.y = deltaY;
            dragged.x = deltaX;
        }, 16);
        function handleDragEnd() {
            const direction = config.dir === 'rtl' ? -1 : 1;
            const tolerance = Math.sign(dragged.x) * 0.4;
            const draggedSlides = Math.round(dragged.x / slideWidth.value + tolerance) * direction;
            // Prevent clicking if there is clicked slides
            if (draggedSlides && !isTouch) {
                const captureClick = (e) => {
                    e.stopPropagation();
                    window.removeEventListener('click', captureClick, true);
                };
                window.addEventListener('click', captureClick, true);
            }
            slideTo(currentSlideIndex.value - draggedSlides);
            dragged.x = 0;
            dragged.y = 0;
            document.removeEventListener(isTouch ? 'touchmove' : 'mousemove', handleDragging, true);
            document.removeEventListener(isTouch ? 'touchend' : 'mouseup', handleDragEnd, true);
        }
        /**
         * Autoplay
         */
        function initAutoplay() {
            if (!config.autoplay || config.autoplay <= 0) {
                return;
            }
            autoplayTimer = setInterval(() => {
                if (config.pauseAutoplayOnHover && isHover.value) {
                    return;
                }
                next();
            }, config.autoplay);
        }
        function resetAutoplay() {
            if (!config.autoplay || config.autoplay <= 0) {
                return;
            }
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
                autoplayTimer = null;
            }
            initAutoplay();
        }
        /**
         * Navigation function
         */
        const isSliding = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        function slideTo(slideIndex) {
            if (currentSlideIndex.value === slideIndex || isSliding.value) {
                return;
            }
            isSliding.value = true;
            resetAutoplay();
            const currentVal = getCurrentSlideIndex(config, slideIndex, maxSlideIndex.value, minSlideIndex.value);
            prevSlideIndex.value = currentSlideIndex.value;
            currentSlideIndex.value = currentVal;
            transitionTimer = setTimeout(() => {
                const mappedNumber = mapNumberToRange(currentVal, maxSlideIndex.value);
                if (config.wrapAround) {
                    currentSlideIndex.value = mappedNumber;
                }
                emit('update:modelValue', mappedNumber);
                isSliding.value = false;
            }, config.transition);
        }
        function next() {
            slideTo(currentSlideIndex.value + config.itemsToScroll);
        }
        function prev() {
            slideTo(currentSlideIndex.value - config.itemsToScroll);
        }
        const nav = { slideTo, next, prev };
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('nav', nav);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('isSliding', isSliding);
        /**
         * Track style
         */
        const slidesToScroll = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => getSlidesToScroll({
            itemsToShow: config.itemsToShow,
            snapAlign: config.snapAlign,
            wrapAround: Boolean(config.wrapAround),
            currentSlide: currentSlideIndex.value,
            slidesCount: slidesCount.value,
        }));
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('slidesToScroll', slidesToScroll);
        const trackStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const direction = config.dir === 'rtl' ? -1 : 1;
            const xScroll = slidesToScroll.value * slideWidth.value * direction;
            return {
                transform: `translateX(${dragged.x - xScroll}px)`,
                transition: `${isSliding.value ? config.transition : 0}ms`,
                margin: config.wrapAround ? `0 -${slidesCount.value * slideWidth.value}px` : '',
                width: `100%`,
            };
        });
        function initCarousel() {
            initDefaultConfigs();
        }
        function restartCarousel() {
            initDefaultConfigs();
            updateBreakpointsConfigs();
            updateSlidesData();
            updateSlideWidth();
            resetAutoplay();
        }
        function updateCarousel() {
            updateSlidesData();
        }
        // Update the carousel on props change
        Object.keys(carouselProps).forEach((prop) => {
            if (['modelValue'].includes(prop))
                return;
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props[prop], restartCarousel);
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props['modelValue'], (val) => {
            if (val !== currentSlideIndex.value) {
                slideTo(Number(val));
            }
        });
        // Init carousel
        initCarousel();
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
            // Handel when slides added/removed
            if (slidesCount.value !== slides.value.length) {
                updateCarousel();
            }
        });
        const data = {
            config,
            slidesCount,
            slideWidth,
            currentSlide: currentSlideIndex,
            maxSlide: maxSlideIndex,
            minSlide: minSlideIndex,
            middleSlide: middleSlideIndex,
        };
        expose({
            updateBreakpointsConfigs,
            updateSlidesData,
            updateSlideWidth,
            initCarousel,
            restartCarousel,
            updateCarousel,
            slideTo,
            next,
            prev,
            nav,
            data,
        });
        const slotSlides = slots.default || slots.slides;
        const slotAddons = slots.addons;
        const slotsProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(data);
        return () => {
            const slidesElements = getSlidesVNodes(slotSlides === null || slotSlides === void 0 ? void 0 : slotSlides(slotsProps));
            const addonsElements = (slotAddons === null || slotAddons === void 0 ? void 0 : slotAddons(slotsProps)) || [];
            slidesElements.forEach((el, index) => (el.props.index = index));
            let output = slidesElements;
            if (config.wrapAround) {
                const slidesBefore = slidesElements.map((el, index) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.cloneVNode)(el, { index: -slidesElements.length + index, isClone: true }));
                const slidesAfter = slidesElements.map((el, index) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.cloneVNode)(el, { index: slidesElements.length + index, isClone: true }));
                output = [...slidesBefore, ...slidesElements, ...slidesAfter];
            }
            slides.value = slidesElements;
            const trackEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('ol', {
                class: 'carousel__track',
                style: trackStyle.value,
                onMousedown: config.mouseDrag
                    ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(handleDragStart, ['capture'])
                    : null,
                onTouchstart: config.touchDrag
                    ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(handleDragStart, ['capture'])
                    : null,
            }, output);
            const viewPortEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', { class: 'carousel__viewport' }, trackEl);
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('section', {
                ref: root,
                class: {
                    carousel: true,
                    'carousel--rtl': config.dir === 'rtl',
                },
                dir: config.dir,
                'aria-label': 'Gallery',
                tabindex: '0',
                onMouseenter: handleMouseEnter,
                onMouseleave: handleMouseLeave,
            }, [viewPortEl, addonsElements, (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(ARIAComponent)]);
        };
    },
});

const icons = {
    arrowUp: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z',
    arrowDown: 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
    arrowRight: 'M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z',
    arrowLeft: 'M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z',
};

const Icon = (props) => {
    const iconName = props.name;
    if (!iconName || typeof iconName !== 'string') {
        return;
    }
    const path = icons[iconName];
    const pathEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('path', { d: path });
    const iconTitle = (props.title || iconName);
    const titleEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('title', iconTitle);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('svg', {
        class: 'carousel__icon',
        viewBox: '0 0 24 24',
        role: 'img',
        ariaLabel: iconTitle,
    }, [titleEl, pathEl]);
};
Icon.props = { name: String, title: String };

const Navigation = (props, { slots, attrs }) => {
    const { next: slotNext, prev: slotPrev } = slots || {};
    const config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('config', (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(Object.assign({}, defaultConfigs)));
    const maxSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('maxSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const minSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('minSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const currentSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('currentSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('nav', {});
    const isRTL = config.dir === 'rtl';
    const prevButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('button', {
        type: 'button',
        class: [
            'carousel__prev',
            !config.wrapAround &&
                currentSlide.value <= minSlide.value &&
                'carousel__prev--disabled',
            attrs === null || attrs === void 0 ? void 0 : attrs.class,
        ],
        'aria-label': `Navigate to previous slide`,
        onClick: nav.prev,
    }, (slotPrev === null || slotPrev === void 0 ? void 0 : slotPrev()) || (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(Icon, { name: isRTL ? 'arrowRight' : 'arrowLeft' }));
    const nextButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('button', {
        type: 'button',
        class: [
            'carousel__next',
            !config.wrapAround &&
                currentSlide.value >= maxSlide.value &&
                'carousel__next--disabled',
            attrs === null || attrs === void 0 ? void 0 : attrs.class,
        ],
        'aria-label': `Navigate to next slide`,
        onClick: nav.next,
    }, (slotNext === null || slotNext === void 0 ? void 0 : slotNext()) || (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(Icon, { name: isRTL ? 'arrowLeft' : 'arrowRight' }));
    return [prevButton, nextButton];
};

const Pagination = () => {
    const maxSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('maxSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const minSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('minSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const currentSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('currentSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const slidesCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('slidesCount', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('nav', {});
    function handleButtonClick(slideNumber) {
        nav.slideTo(slideNumber);
    }
    const isActive = (slide) => {
        const val = mapNumberToRange(currentSlide.value, slidesCount.value - 1, 0);
        return val === slide;
    };
    const children = [];
    for (let slide = minSlide.value; slide < maxSlide.value + 1; slide++) {
        const button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('button', {
            type: 'button',
            class: {
                'carousel__pagination-button': true,
                'carousel__pagination-button--active': isActive(slide),
            },
            'aria-label': `Navigate to slide ${slide + 1}`,
            onClick: () => handleButtonClick(slide),
        });
        const item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('li', { class: 'carousel__pagination-item', key: slide }, button);
        children.push(item);
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('ol', { class: 'carousel__pagination' }, children);
};

var Slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'CarouselSlide',
    props: {
        index: {
            type: Number,
            default: 1,
        },
        isClone: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { slots }) {
        const config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('config', (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(Object.assign({}, defaultConfigs)));
        const currentSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('currentSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0));
        const slidesToScroll = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('slidesToScroll', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0));
        const slideWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('slideWidth', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0));
        const isSliding = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('isSliding', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false));
        const slideStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return {
                width: slideWidth.value ? `${slideWidth.value}px` : `100%`,
            };
        });
        const isActive = () => props.index === currentSlide.value;
        const isVisible = () => {
            const min = Math.floor(slidesToScroll.value);
            const max = Math.ceil(slidesToScroll.value + config.itemsToShow - 1);
            return props.index >= min && props.index <= max;
        };
        const isPrev = () => props.index === currentSlide.value - 1;
        const isNext = () => props.index === currentSlide.value + 1;
        return () => {
            var _a;
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('li', {
                style: slideStyle.value,
                class: {
                    carousel__slide: true,
                    'carousel_slide--clone': props.isClone,
                    'carousel__slide--visible': isVisible(),
                    'carousel__slide--active': isActive(),
                    'carousel__slide--prev': isPrev(),
                    'carousel__slide--next': isNext(),
                    'carousel__slide--sliding': isSliding.value,
                },
                'aria-hidden': !isVisible(),
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
    },
});




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
module.exports = JSON.parse('{"Categories":"All Categories","Feature":"Featured Products","Gaming":"Gaming Products","Best":"Best Seller Products","Brands":"Our Brands","Colors":"Colors","Subscribe":"Subscribe Our Newsletter","Register":"Register","Create Account":"Create Account","Placeholder Name":"Enter Your Name","Placeholder Email":"Enter Your Email","Placeholder Password":"Password","Placeholder Confirm":"Confirm Password","Agree Policy":"I agree to terms & Policy.","Have Account":"Already have an account?","No Account":"Don\'t have an account?","Login":"Login"}');

/***/ }),

/***/ "./resources/js/lang/fn/data.json":
/*!****************************************!*\
  !*** ./resources/js/lang/fn/data.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Categories":"Toutes Catégories","Feature":"Produits populaires","Gaming":"Produits de jeu","Best":"Produits les plus vendus","Brands":"Nos marques","Colors":"Couleurs","Subscribe":"Abonnez-vous à notre newsletter","Register":"S\'inscrire","Create Account":"Créer un compte","Placeholder Name":"Entrez votre nom","Placeholder Email":"Entrer votre Email","Placeholder Password":"Mot de passe","Placeholder Confirm":"Confirmez le mot de passe","Agree Policy":"J\'accepte les termes et la politique.","Have Account":"Vous avez déjà un compte?","No Account":"Vous n\'avez pas de compte?","Login":"Connexion"}');

/***/ }),

/***/ "./resources/js/lang/jp/data.json":
/*!****************************************!*\
  !*** ./resources/js/lang/jp/data.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Categories":"すべてのカテゴリ","Feature":"おすすめ商品","Gaming":"ゲーム製品","Best":"ベストセラー商品","Brands":"我々のブランド","Colors":"色","Subscribe":"ニュースレターを購読する","Register":"登録","Create Account":"アカウントを作成する","Placeholder Name":"あなたの名前を入力してください","Placeholder Email":"メールアドレスを入力","Placeholder Password":"パスワード","Placeholder Confirm":"パスワードを認証する","Agree Policy":"規約とポリシーに同意します。","Have Account":"すでにアカウントをお持ちですか？","No Account":"アカウントをお持ちでない場合?","Login":"ログイン"}');

/***/ }),

/***/ "./resources/js/lang/mm/data.json":
/*!****************************************!*\
  !*** ./resources/js/lang/mm/data.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Categories":"အမျိုးအစားအားလုံး","Feature":"အထူးအသားပေး ထုတ်ကုန်များ","Gaming":"ဂိမ်းထုတ်ကုန်များ","Best":"ရောင်းအားအကောင်းဆုံး ထုတ်ကုန်များ","Brands":"ကျွန်ုပ်တို့၏အမှတ်တံဆိပ်များ","Colors":"အရောင်များ","Subscribe":"ကျွန်ုပ်တို့၏သတင်းလွှာကို စာရင်းသွင်းပါ။","Register":"မှတ်ပုံတင်ပါ။","Create Account":"အကောင့်ပြုလုပ်ပါ","Placeholder Name":"သင့်အမည်ကို ထည့်သွင်းပါ","Placeholder Email":"သင့်၏အီးမေးလ်လိပ်စာထည့်ပါ","Placeholder Password":"စကားဝှက်","Placeholder Confirm":"စကားဝှက်အတည်ပြုပါ","Agree Policy":"စည်းမျဉ်းများနှင့် မူဝါဒကို သဘောတူပါသည်။","Have Account":"အကောင့်ရှိပြီးသားလား?","No Account":"အကောင့်မရှိဘူးလား?","Login":"အကောင့်ဝင်ရန်"}');

/***/ })

}]);