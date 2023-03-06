"use strict";
(this["webpackChunkwebsdk"] = this["webpackChunkwebsdk"] || []).push([["src_components_quick_QLabel_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLabel.vue?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLabel.vue?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    name: "QLabel",
    data: function () {
        return {
            innerClass: "",
            mystyle: "white-space:pre-wrap"
        };
    },
    props: {
        text: {
            type: String,
            default: "Text",
            note: "Use to set label text of field"
        },
        tagType: {
            type: String,
            default: "span",
            note: "Text tag type"
        },
        maxWidth: {
            type: String
        },
        whiteSpace: {
            type: String,
            default: "pre-wrap"
        },
        textOverflow: {
            type: String
        },
        overflow: {
            type: String
        },
        processHtml: {
            type: Boolean,
            default: false
        }
    },
    mounted: function () {
        var self = this; // classes diye bişi var mı yok mu bilinmiyor. aşağıdaki satır komple anlamsız olabilir.
        if (self.classes) {
            this.innerClass = Object.keys(self.classes).join(" ");
        }
    },
    destroyed: function () {
        var _a;
        (_a = this.$el) === null || _a === void 0 ? void 0 : _a.remove();
    },
    computed: {
        getType: function () {
            var self = this;
            if (self.processHtml) {
                if (self.tagType == 'paragraph') {
                    return 'paragraphWithHtml';
                }
                else if (self.tagType == 'span') {
                    return 'spanWithHtml';
                }
            }
            return self.tagType;
        }
    }
}));


/***/ }),

/***/ "./src/components/quick/QLabel.vue":
/*!*****************************************!*\
  !*** ./src/components/quick/QLabel.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QLabel_vue_vue_type_template_id_38ebc515___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QLabel.vue?vue&type=template&id=38ebc515& */ "./src/components/quick/QLabel.vue?vue&type=template&id=38ebc515&");
/* harmony import */ var _QLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QLabel.vue?vue&type=script&lang=ts& */ "./src/components/quick/QLabel.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QLabel_vue_vue_type_template_id_38ebc515___WEBPACK_IMPORTED_MODULE_0__.render,
  _QLabel_vue_vue_type_template_id_38ebc515___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/QLabel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/QLabel.vue?vue&type=script&lang=ts&":
/*!******************************************************************!*\
  !*** ./src/components/quick/QLabel.vue?vue&type=script&lang=ts& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QLabel.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLabel.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/QLabel.vue?vue&type=template&id=38ebc515&":
/*!************************************************************************!*\
  !*** ./src/components/quick/QLabel.vue?vue&type=template&id=38ebc515& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QLabel_vue_vue_type_template_id_38ebc515___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QLabel_vue_vue_type_template_id_38ebc515___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QLabel_vue_vue_type_template_id_38ebc515___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QLabel.vue?vue&type=template&id=38ebc515& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLabel.vue?vue&type=template&id=38ebc515&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLabel.vue?vue&type=template&id=38ebc515&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QLabel.vue?vue&type=template&id=38ebc515& ***!
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
  return _vm.getType == "span"
    ? _c(
        "span",
        {
          class: "q-label " + _vm.innerClass,
          style: {
            maxWidth: _vm.maxWidth,
            whiteSpace: _vm.whiteSpace,
            lineHeight: 1.3,
            wordBreak: "break-word",
            overflow: _vm.overflow,
            textOverflow: _vm.textOverflow,
          },
        },
        [_vm._v(_vm._s(_vm.text))]
      )
    : _vm.getType == "spanWithHtml"
    ? _c("span", {
        class: "q-label " + _vm.innerClass,
        style: {
          maxWidth: _vm.maxWidth,
          whiteSpace: _vm.whiteSpace,
          lineHeight: 1.3,
          wordBreak: "break-word",
          overflow: _vm.overflow,
          textOverflow: _vm.textOverflow,
        },
        domProps: { innerHTML: _vm._s(_vm.text) },
      })
    : _vm.getType == "paragraph"
    ? _c(
        "p",
        {
          class: "q-label " + _vm.innerClass,
          style: {
            maxWidth: _vm.maxWidth,
            whiteSpace: _vm.whiteSpace,
            lineHeight: 1.3,
            wordBreak: "break-word",
          },
        },
        [_vm._v("\n  " + _vm._s(_vm.text) + "\n")]
      )
    : _vm.getType == "paragraphWithHtml"
    ? _c("p", {
        class: "q-label " + _vm.innerClass,
        style: {
          maxWidth: _vm.maxWidth,
          whiteSpace: _vm.whiteSpace,
          lineHeight: 1.3,
          wordBreak: "break-word",
        },
        domProps: { innerHTML: _vm._s(_vm.text) },
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_QLabel_vue.js.map