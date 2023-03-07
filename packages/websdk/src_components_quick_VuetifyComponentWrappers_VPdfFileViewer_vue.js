"use strict";
(this["webpackChunkwebsdk"] = this["webpackChunkwebsdk"] || []).push([["src_components_quick_VuetifyComponentWrappers_VPdfFileViewer_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/VuetifyComponentWrappers/VPdfFileViewer.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/VuetifyComponentWrappers/VPdfFileViewer.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _QDocumentViewer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../QDocumentViewer.vue */ "./src/components/quick/QDocumentViewer.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
    components: {
        QDocumentViewer: _QDocumentViewer_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
    data: function () {
        return {
            show: true,
            loadedRatio: 0,
            numPages: 0,
            turn: 0,
        };
    },
    name: "VPdfFileViewer",
    props: {
        src: {
            default: "",
            type: [String, Object],
        },
        height: {
            type: String,
        },
        width: {
            type: String,
        },
        page: {
            type: Number,
            default: 1,
        },
        scale: {
            type: String,
        },
        loadingContent: {
            type: String,
            default: "Loading...",
        },
        customCompClass: {
            default: "pdf",
            type: String,
        },
    },
    destroyed: function () {
        var _a;
        (_a = this.$el) === null || _a === void 0 ? void 0 : _a.remove();
    },
}));


/***/ }),

/***/ "./src/components/quick/VuetifyComponentWrappers/VPdfFileViewer.vue":
/*!**************************************************************************!*\
  !*** ./src/components/quick/VuetifyComponentWrappers/VPdfFileViewer.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VPdfFileViewer_vue_vue_type_template_id_254105f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VPdfFileViewer.vue?vue&type=template&id=254105f0& */ "./src/components/quick/VuetifyComponentWrappers/VPdfFileViewer.vue?vue&type=template&id=254105f0&");
/* harmony import */ var _VPdfFileViewer_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VPdfFileViewer.vue?vue&type=script&lang=ts& */ "./src/components/quick/VuetifyComponentWrappers/VPdfFileViewer.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VPdfFileViewer_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VPdfFileViewer_vue_vue_type_template_id_254105f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _VPdfFileViewer_vue_vue_type_template_id_254105f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/VuetifyComponentWrappers/VPdfFileViewer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/VuetifyComponentWrappers/VPdfFileViewer.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************************!*\
  !*** ./src/components/quick/VuetifyComponentWrappers/VPdfFileViewer.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_VPdfFileViewer_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VPdfFileViewer.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/VuetifyComponentWrappers/VPdfFileViewer.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_VPdfFileViewer_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/VuetifyComponentWrappers/VPdfFileViewer.vue?vue&type=template&id=254105f0&":
/*!*********************************************************************************************************!*\
  !*** ./src/components/quick/VuetifyComponentWrappers/VPdfFileViewer.vue?vue&type=template&id=254105f0& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VPdfFileViewer_vue_vue_type_template_id_254105f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VPdfFileViewer_vue_vue_type_template_id_254105f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VPdfFileViewer_vue_vue_type_template_id_254105f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VPdfFileViewer.vue?vue&type=template&id=254105f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/VuetifyComponentWrappers/VPdfFileViewer.vue?vue&type=template&id=254105f0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/VuetifyComponentWrappers/VPdfFileViewer.vue?vue&type=template&id=254105f0&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/VuetifyComponentWrappers/VPdfFileViewer.vue?vue&type=template&id=254105f0& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _c("q-document-viewer", {
    attrs: {
      src: _vm.src,
      height: _vm.height,
      width: _vm.width,
      page: _vm.page,
      scale: _vm.scale,
      loadingContent: _vm.loadingContent,
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_VuetifyComponentWrappers_VPdfFileViewer_vue.js.map