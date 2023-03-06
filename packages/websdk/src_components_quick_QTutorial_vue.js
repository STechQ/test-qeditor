"use strict";
(this["webpackChunkwebsdk"] = this["webpackChunkwebsdk"] || []).push([["src_components_quick_QTutorial_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QTutorial.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QTutorial.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intro.js */ "../../node_modules/intro.js/intro.js");
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intro_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var intro_js_minified_introjs_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intro.js/minified/introjs.min.css */ "../../node_modules/intro.js/minified/introjs.min.css");
/* harmony import */ var _common_shrimp_interfaces_RenderingInterfaces_IDory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/shrimp/interfaces/RenderingInterfaces/IDory */ "../../common/shrimp/interfaces/RenderingInterfaces/IDory.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
// import "intro.js/introjs.css";




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_3__["default"].extend({
    name: "QTutorial",
    data: function () {
        return {
            currentStepValue: undefined,
        };
    },
    props: {
        _renderingProps: {
            default: {
                context: undefined,
                isEditMode: undefined,
            },
        },
        steps: {
            default: [{ text: "", compID: "" }],
        },
        nextButtonLabel: {
            type: String,
            default: "'Next'",
        },
        skipButtonLabel: {
            type: String,
            default: "'Skip'",
        },
        prevButtonLabel: {
            type: String,
            default: "'Back'",
        },
        doneButtonLabel: {
            type: String,
            default: "Done",
        },
        hidePrevButton: {
            type: Boolean,
        },
        showStepNumbers: {
            type: Boolean,
        },
        keyboardNavigation: {
            type: Boolean,
        },
    },
    mounted: function () {
    },
    destroyed: function () {
        var _a;
        (_a = this.$el) === null || _a === void 0 ? void 0 : _a.remove();
    },
    methods: {
        start: function () {
            if (this._renderingProps.isEditMode == false) {
                this.manupilateDom();
                var introJS = __webpack_require__(/*! intro.js */ "../../node_modules/intro.js/intro.js");
                var vm = this;
                introJS
                    .introJs()
                    .setOptions({
                    nextLabel: this.nextButtonLabel,
                    prevLabel: this.prevButtonLabel,
                    skipLabel: this.skipButtonLabel,
                    doneLabel: this.doneButtonLabel,
                    hidePrev: this.hidePrevButton,
                    showStepNumbers: this.showStepNumbers,
                    keyboardNavigation: this.keyboardNavigation,
                })
                    .onbeforeexit(function () {
                    var currentStepIndex = this._currentStep;
                    var currentStep = currentStepIndex + 1;
                    vm.currentStepValue = currentStep;
                    vm.$emit("beforeExit");
                })
                    .onafterchange(function () {
                    vm.$emit("onafterchange");
                })
                    .oncomplete(function () {
                    vm.$emit("oncomplete");
                })
                    .start();
            }
        },
        goToStep: function (value) {
            this.manupilateDom();
            var introJS = __webpack_require__(/*! intro.js */ "../../node_modules/intro.js/intro.js");
            introJS.introJs().goToStepNumber(value).start();
        },
        // onbeforeexit() {
        //   this.manupilateDom();
        //   var vm =this
        //   introJs()
        //     .start()
        //     .onbeforeexit(function (this) {
        //       var currentStepIndex = this._currentStep;
        //       var currentStep = currentStepIndex + 1;
        //       vm.currentStepValue=currentStep
        //        vm.$emit("beforeExit");
        //     });
        // },
        // onafterchange() {
        //   this.manupilateDom();
        //   var vm = this;
        //   introJs()
        //     .start()
        //     .onafterchange(function (targetElement) {
        //       vm.$emit("onafterchange");
        //     });
        // },
        // oncomplete() {
        //   this.manupilateDom();
        //   var vm = this;
        //   introJs()
        //     .start()
        //     .oncomplete(function () {
        //       vm.$emit("oncomplete");
        //     });
        // },
        exit: function () {
            this.manupilateDom();
            var introJS = __webpack_require__(/*! intro.js */ "../../node_modules/intro.js/intro.js");
            intro_js__WEBPACK_IMPORTED_MODULE_0___default()().exit();
        },
        manupilateDom: function () {
            var _this = this;
            this.steps.forEach(function (step, index) {
                var _a, _b;
                var compColl = (_b = (_a = _this._renderingProps.context()) === null || _a === void 0 ? void 0 : _a.GetItemSingle(_common_shrimp_interfaces_RenderingInterfaces_IDory__WEBPACK_IMPORTED_MODULE_2__.DoryContextName)) === null || _b === void 0 ? void 0 : _b.GetComponentCollectionByID(step.compID);
                index = index + 1;
                var compDom = compColl === null || compColl === void 0 ? void 0 : compColl.domElement;
                if (!compDom) {
                    return;
                }
                compDom.setAttribute("data-step", index.toString());
                compDom.setAttribute("data-intro", step.text);
            });
        },
    },
}));


/***/ }),

/***/ "./src/components/quick/QTutorial.vue":
/*!********************************************!*\
  !*** ./src/components/quick/QTutorial.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QTutorial_vue_vue_type_template_id_47f7f8cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QTutorial.vue?vue&type=template&id=47f7f8cd& */ "./src/components/quick/QTutorial.vue?vue&type=template&id=47f7f8cd&");
/* harmony import */ var _QTutorial_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QTutorial.vue?vue&type=script&lang=ts& */ "./src/components/quick/QTutorial.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QTutorial_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QTutorial_vue_vue_type_template_id_47f7f8cd___WEBPACK_IMPORTED_MODULE_0__.render,
  _QTutorial_vue_vue_type_template_id_47f7f8cd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/QTutorial.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/QTutorial.vue?vue&type=script&lang=ts&":
/*!*********************************************************************!*\
  !*** ./src/components/quick/QTutorial.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QTutorial_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QTutorial.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QTutorial.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QTutorial_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/QTutorial.vue?vue&type=template&id=47f7f8cd&":
/*!***************************************************************************!*\
  !*** ./src/components/quick/QTutorial.vue?vue&type=template&id=47f7f8cd& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QTutorial_vue_vue_type_template_id_47f7f8cd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QTutorial_vue_vue_type_template_id_47f7f8cd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QTutorial_vue_vue_type_template_id_47f7f8cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QTutorial.vue?vue&type=template&id=47f7f8cd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QTutorial.vue?vue&type=template&id=47f7f8cd&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QTutorial.vue?vue&type=template&id=47f7f8cd&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QTutorial.vue?vue&type=template&id=47f7f8cd& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "hello" })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_QTutorial_vue.js.map