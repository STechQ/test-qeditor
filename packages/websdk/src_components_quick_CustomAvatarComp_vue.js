"use strict";
(this["webpackChunkwebsdk"] = this["webpackChunkwebsdk"] || []).push([["src_components_quick_CustomAvatarComp_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/CustomAvatarComp.vue?vue&type=script&lang=ts&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/CustomAvatarComp.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    name: "CustomAvatarComp",
    data: function () {
        return { innerClass: "" };
    },
    props: {
        text: {
            type: String,
            default: "Text",
            note: "Use to set label text of field"
        },
        exteraInf: {
            type: String,
            note: "Use to set label text of field"
        },
        id: {
            type: Number,
            note: ''
        },
        src: {
            type: String,
            note: ''
        },
        customClass: {
            type: Object,
            note: "Use to set class font size of field"
        }
    },
    mounted: function () {
        var self = this; // classes diye bişi var mı yok mu bilinmiyor. aşağıdaki satır komple anlamsız olabilir.
        if (self.classes) {
            this.innerClass = Object.keys(self.classes).join(" ");
        }
        this.$emit('mounted');
    },
    destroyed: function () {
        var _a;
        (_a = this.$el) === null || _a === void 0 ? void 0 : _a.remove();
    }
}));


/***/ }),

/***/ "./src/components/quick/CustomAvatarComp.vue":
/*!***************************************************!*\
  !*** ./src/components/quick/CustomAvatarComp.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomAvatarComp_vue_vue_type_template_id_6c0baa2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomAvatarComp.vue?vue&type=template&id=6c0baa2a& */ "./src/components/quick/CustomAvatarComp.vue?vue&type=template&id=6c0baa2a&");
/* harmony import */ var _CustomAvatarComp_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomAvatarComp.vue?vue&type=script&lang=ts& */ "./src/components/quick/CustomAvatarComp.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomAvatarComp_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomAvatarComp_vue_vue_type_template_id_6c0baa2a___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomAvatarComp_vue_vue_type_template_id_6c0baa2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/CustomAvatarComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/CustomAvatarComp.vue?vue&type=script&lang=ts&":
/*!****************************************************************************!*\
  !*** ./src/components/quick/CustomAvatarComp.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomAvatarComp_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomAvatarComp.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/CustomAvatarComp.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomAvatarComp_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/CustomAvatarComp.vue?vue&type=template&id=6c0baa2a&":
/*!**********************************************************************************!*\
  !*** ./src/components/quick/CustomAvatarComp.vue?vue&type=template&id=6c0baa2a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomAvatarComp_vue_vue_type_template_id_6c0baa2a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomAvatarComp_vue_vue_type_template_id_6c0baa2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomAvatarComp_vue_vue_type_template_id_6c0baa2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomAvatarComp.vue?vue&type=template&id=6c0baa2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/CustomAvatarComp.vue?vue&type=template&id=6c0baa2a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/CustomAvatarComp.vue?vue&type=template&id=6c0baa2a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/CustomAvatarComp.vue?vue&type=template&id=6c0baa2a& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("v-avatar", { class: _vm.innerClass, attrs: { color: "indigo" } }, [
        _c("img", { attrs: { src: _vm.src } }),
      ]),
      _vm._v("\n    " + _vm._s(_vm.text) + "\n    "),
      _c(
        "div",
        { staticStyle: { "margin-left": "43px, font-family:initial" } },
        [_vm._v(_vm._s(_vm.exteraInf))]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_CustomAvatarComp_vue.js.map