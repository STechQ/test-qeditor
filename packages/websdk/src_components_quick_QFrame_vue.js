"use strict";
(this["webpackChunkwebsdk"] = this["webpackChunkwebsdk"] || []).push([["src_components_quick_QFrame_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QFrame.vue?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QFrame.vue?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_shrimp_helpers_urlHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/shrimp/helpers/urlHelper */ "../../common/shrimp/helpers/urlHelper.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
    name: "QFrame",
    props: {
        url: {
            type: String,
        },
        width: {
            type: String,
            default: "100%",
        },
        height: {
            type: String,
            default: "calc(100vh)",
        },
        border: {
            type: Number,
            default: 0,
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
    },
    data: function () {
        return {
            messageListenerCb: undefined,
        };
    },
    methods: {
        test: function (param) { },
        Send: function (message) {
            var _a;
            var domain = _common_shrimp_helpers_urlHelper__WEBPACK_IMPORTED_MODULE_0__.UrlHelper.GetDomain(this.url);
            var frame = this.$refs.frame;
            (_a = frame.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(message, domain);
        },
        renderSource: function (url) {
            var _a, _b, _c;
            var takenSrc;
            if (url.startsWith("data:application/pdf;base64,")) {
                takenSrc = (_a = url.split("data:application/pdf;base64,")) === null || _a === void 0 ? void 0 : _a[1];
            }
            else if (this.url.startsWith("data:application/pdf,")) {
                takenSrc = (_b = url.split("data:application/pdf,")) === null || _b === void 0 ? void 0 : _b[1];
            }
            else {
                return url;
            }
            var blob = this.base64ToBlob(takenSrc, "application/pdf");
            return (_c = URL.createObjectURL(blob)) !== null && _c !== void 0 ? _c : url;
        },
        base64ToBlob: function (base64, type) {
            if (type === void 0) { type = "application/octet-stream"; }
            var binStr = atob(base64);
            var len = binStr.length;
            var arr = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                arr[i] = binStr.charCodeAt(i);
            }
            return new Blob([arr], { type: type });
        },
        post: function (url, params, enctype) {
            var form, input;
            form = document.createElement("form");
            form.action = this.renderSource(url);
            form.method = "post";
            form.target = "qframe";
            if (enctype) {
                form.enctype = enctype;
            }
            Object.keys(params).forEach(function (elm) {
                input = document.createElement("input");
                input.name = elm;
                input.value = params[elm];
                input.type = "hidden";
                form.appendChild(input);
            });
            var frame = this.$refs['frame'];
            frame.appendChild(form);
            form.submit();
            frame.removeChild(form);
        },
        onLoad: function () {
            this.$emit("onLoad");
        }
    },
    mounted: function () {
        var _this = this;
        var messageListener = function (ev) {
            var frame = _this.$refs.frame;
            if (frame.contentWindow != ev.source) {
                return;
            } // skip for this listener. Another frame sent "message".
            _this.$emit("onMessage", ev.data);
        };
        this.messageListenerCb = function () { return messageListener; };
        window.addEventListener("message", messageListener);
    },
    destroyed: function () {
        var _a;
        if (this.messageListenerCb) {
            window.removeEventListener("message", this.messageListenerCb());
        }
        (_a = this.$el) === null || _a === void 0 ? void 0 : _a.remove();
    },
    computed: {
        style: function () {
            return "border:" + this.border + ";overflow:hidden;height:" + this.height + ";width:" + this.width + ";opacity:" + (this.isLoading ? 0.1 : 1);
        },
    },
}));


/***/ }),

/***/ "./src/components/quick/QFrame.vue":
/*!*****************************************!*\
  !*** ./src/components/quick/QFrame.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QFrame_vue_vue_type_template_id_7da30b0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QFrame.vue?vue&type=template&id=7da30b0e& */ "./src/components/quick/QFrame.vue?vue&type=template&id=7da30b0e&");
/* harmony import */ var _QFrame_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QFrame.vue?vue&type=script&lang=ts& */ "./src/components/quick/QFrame.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QFrame_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QFrame_vue_vue_type_template_id_7da30b0e___WEBPACK_IMPORTED_MODULE_0__.render,
  _QFrame_vue_vue_type_template_id_7da30b0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/QFrame.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/QFrame.vue?vue&type=script&lang=ts&":
/*!******************************************************************!*\
  !*** ./src/components/quick/QFrame.vue?vue&type=script&lang=ts& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QFrame_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QFrame.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QFrame.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QFrame_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/QFrame.vue?vue&type=template&id=7da30b0e&":
/*!************************************************************************!*\
  !*** ./src/components/quick/QFrame.vue?vue&type=template&id=7da30b0e& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QFrame_vue_vue_type_template_id_7da30b0e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QFrame_vue_vue_type_template_id_7da30b0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QFrame_vue_vue_type_template_id_7da30b0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QFrame.vue?vue&type=template&id=7da30b0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QFrame.vue?vue&type=template&id=7da30b0e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QFrame.vue?vue&type=template&id=7da30b0e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QFrame.vue?vue&type=template&id=7da30b0e& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("iframe", {
    ref: "frame",
    style: _vm.style,
    attrs: { src: _vm.renderSource(this.url), name: "qframe" },
    on: { load: _vm.onLoad },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_QFrame_vue.js.map