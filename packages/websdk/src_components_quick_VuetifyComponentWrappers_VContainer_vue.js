"use strict";
(this["webpackChunkwebsdk"] = this["webpackChunkwebsdk"] || []).push([["src_components_quick_VuetifyComponentWrappers_VContainer_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/VuetifyComponentWrappers/VContainer.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/VuetifyComponentWrappers/VContainer.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _common_shrimp_helpers_typeHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../common/shrimp/helpers/typeHelper */ "../../common/shrimp/helpers/typeHelper.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
    name: "VContainer",
    props: {
        eager: {
            default: true
        },
        fluid: {
            default: false
        },
        customCompClass: {
            default: "container",
            type: String
        },
        _renderingProps: {
            type: Object,
        },
    },
    data: function () {
        return {
            renderData: true
        };
    },
    destroyed: function () {
        var _a;
        (_a = this.$el) === null || _a === void 0 ? void 0 : _a.remove();
    },
    watch: {
        eager: function (newValue, oldValue) {
            if (newValue == true) {
                this.renderData = true;
            }
        }
    },
    created: function () {
        this.renderData = new _common_shrimp_helpers_typeHelper__WEBPACK_IMPORTED_MODULE_0__.TypeHelper().cloneObject(this.eager);
    },
}));


/***/ }),

/***/ "./src/components/quick/VuetifyComponentWrappers/VContainer.vue":
/*!**********************************************************************!*\
  !*** ./src/components/quick/VuetifyComponentWrappers/VContainer.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VContainer_vue_vue_type_template_id_e15c686e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VContainer.vue?vue&type=template&id=e15c686e& */ "./src/components/quick/VuetifyComponentWrappers/VContainer.vue?vue&type=template&id=e15c686e&");
/* harmony import */ var _VContainer_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VContainer.vue?vue&type=script&lang=ts& */ "./src/components/quick/VuetifyComponentWrappers/VContainer.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VContainer_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VContainer_vue_vue_type_template_id_e15c686e___WEBPACK_IMPORTED_MODULE_0__.render,
  _VContainer_vue_vue_type_template_id_e15c686e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/VuetifyComponentWrappers/VContainer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/VuetifyComponentWrappers/VContainer.vue?vue&type=script&lang=ts&":
/*!***********************************************************************************************!*\
  !*** ./src/components/quick/VuetifyComponentWrappers/VContainer.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_VContainer_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VContainer.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/VuetifyComponentWrappers/VContainer.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_VContainer_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/VuetifyComponentWrappers/VContainer.vue?vue&type=template&id=e15c686e&":
/*!*****************************************************************************************************!*\
  !*** ./src/components/quick/VuetifyComponentWrappers/VContainer.vue?vue&type=template&id=e15c686e& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VContainer_vue_vue_type_template_id_e15c686e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VContainer_vue_vue_type_template_id_e15c686e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VContainer_vue_vue_type_template_id_e15c686e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VContainer.vue?vue&type=template&id=e15c686e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/VuetifyComponentWrappers/VContainer.vue?vue&type=template&id=e15c686e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/VuetifyComponentWrappers/VContainer.vue?vue&type=template&id=e15c686e&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/VuetifyComponentWrappers/VContainer.vue?vue&type=template&id=e15c686e& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
  return _vm.renderData
    ? _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.eager,
              expression: "eager",
            },
          ],
          class: _vm.customCompClass,
          attrs: { id: _vm._renderingProps.props().ID },
        },
        [_vm._t("default")],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_VuetifyComponentWrappers_VContainer_vue.js.map