"use strict";
(this["webpackChunkwebsdk"] = this["webpackChunkwebsdk"] || []).push([["src_components_quick_QReCaptcha_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QReCaptcha.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QReCaptcha.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    name: "QReCaptcha",
    data: function () {
        return {
            captchaKeys: "",
            language: ""
        };
    },
    destroyed: function () {
        var _a;
        (_a = this.$el) === null || _a === void 0 ? void 0 : _a.remove();
    },
    props: {
        _renderingProps: {
            type: Object,
            default: null,
        },
        siteKey: {
            type: String
        },
        size: {
            type: String,
            default: "normal",
        },
        tabindex: {
            type: Number
        },
    },
    mounted: function () {
        var _a, _b, _c, _d;
        var dory = this._renderingProps.context().GetItemSingle("Dory");
        this.language = dory.GetLRType().substring(0, 2);
        var environmentVariable = (_b = (_a = dory.shellConfigs).getEnvironmentVariable) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.captchaKeys = (_c = this.siteKey) !== null && _c !== void 0 ? _c : (_d = environmentVariable === null || environmentVariable === void 0 ? void 0 : environmentVariable.captchaKeys) === null || _d === void 0 ? void 0 : _d.sitekey;
        document.querySelectorAll("script[src*=recaptcha__]").forEach(function (el) { return el.remove(); });
        document.querySelectorAll("div:has(.g-recaptcha-bubble-arrow)").forEach(function (el) { return el.remove(); });
        var recaptchaScript = document.createElement("script");
        recaptchaScript.id = "recaptchaScript";
        recaptchaScript.src = "https://www.google.com/recaptcha/api.js?hl=" + this.language + "&onload=onLoadCallBack&render=explicit";
        recaptchaScript.async = true;
        recaptchaScript.defer = true;
        document.head.appendChild(recaptchaScript);
    },
    created: function () {
        window["onLoadCallBack"] = this.onLoadCallBack;
    },
    methods: {
        onLoadCallBack: function () {
            grecaptcha.render("divRecaptcha", {
                "sitekey": this.captchaKeys,
                "size": this.size,
                "tabindex": this.tabindex,
                "callback": this.successCallBack,
                "expired-callback": this.expiredCallback,
                "error-callback": this.errorCallback
            });
            var captchaFrame = document.querySelector("iframe[src*=recaptcha]");
            var lang = captchaFrame.src.split("hl=")[1];
            captchaFrame.src = captchaFrame.src.replace(lang.substring(0, 2), this.language);
        },
        successCallBack: function (token) {
            this.$emit("onVerify", token);
        },
        expiredCallback: function () {
            this.$emit("onFail", { reason: 'expired' });
        },
        errorCallback: function () {
            this.$emit("onFail", { reason: 'error' });
        }
    },
}));


/***/ }),

/***/ "./src/components/quick/QReCaptcha.vue":
/*!*********************************************!*\
  !*** ./src/components/quick/QReCaptcha.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QReCaptcha_vue_vue_type_template_id_36e774e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QReCaptcha.vue?vue&type=template&id=36e774e8&scoped=true& */ "./src/components/quick/QReCaptcha.vue?vue&type=template&id=36e774e8&scoped=true&");
/* harmony import */ var _QReCaptcha_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QReCaptcha.vue?vue&type=script&lang=ts& */ "./src/components/quick/QReCaptcha.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QReCaptcha_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QReCaptcha_vue_vue_type_template_id_36e774e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _QReCaptcha_vue_vue_type_template_id_36e774e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "36e774e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/QReCaptcha.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/QReCaptcha.vue?vue&type=script&lang=ts&":
/*!**********************************************************************!*\
  !*** ./src/components/quick/QReCaptcha.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QReCaptcha_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QReCaptcha.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QReCaptcha.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QReCaptcha_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/QReCaptcha.vue?vue&type=template&id=36e774e8&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./src/components/quick/QReCaptcha.vue?vue&type=template&id=36e774e8&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QReCaptcha_vue_vue_type_template_id_36e774e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QReCaptcha_vue_vue_type_template_id_36e774e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QReCaptcha_vue_vue_type_template_id_36e774e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QReCaptcha.vue?vue&type=template&id=36e774e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QReCaptcha.vue?vue&type=template&id=36e774e8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QReCaptcha.vue?vue&type=template&id=36e774e8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QReCaptcha.vue?vue&type=template&id=36e774e8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { staticClass: "form" }, [
      _c("div", { staticClass: "g-recaptcha", attrs: { id: "divRecaptcha" } }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_QReCaptcha_vue.js.map