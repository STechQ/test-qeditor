"use strict";
(this["webpackChunkwebsdk"] = this["webpackChunkwebsdk"] || []).push([["src_components_quick_QVideo_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QVideo.vue?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QVideo.vue?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    name: "QVideo",
    props: {
        src: {
            type: String,
        },
        controls: {
            type: Boolean,
            default: true
        },
        width: {
            type: String
        },
        height: {
            type: String
        },
        autoPlay: {
            type: Boolean,
            default: false
        },
        muted: {
            type: Boolean,
            default: false
        },
        loop: {
            type: Boolean,
            default: false
        },
        controlsList: {
            type: String
        },
        poster: {
            type: String
        },
        preload: {
            type: String
        },
    },
    methods: {
        play: function () {
            this.$refs['videoRef'].play();
        },
        pause: function () {
            this.$refs['videoRef'].pause();
        },
        load: function () {
            this.$refs['videoRef'].load();
        },
        currentTime: function (second) {
            if (second) {
                this.$refs['videoRef'].currentTime = second;
            }
            else {
                return this.$refs['videoRef'].currentTime;
            }
        },
        duration: function () {
            return this.$refs['videoRef'].duration;
        },
        currentSrc: function () {
            return this.$refs['videoRef'].currentSrc;
        },
        volume: function (volume) {
            if (volume) {
                this.$refs['videoRef'].volume = volume;
            }
            else {
                return this.$refs['videoRef'].volume;
            }
        },
        ended: function () {
            this.$emit("ended");
        },
        durationChange: function () {
            this.$emit("durationChange");
        },
        onPlay: function () {
            this.$emit("play");
        },
        onPause: function () {
            this.$emit("pause");
        },
        onPlaying: function () {
            this.$emit("playing");
        },
        progress: function () {
            this.$emit("progress");
        },
        volumeChange: function () {
            this.$emit("volumeChange");
        },
        rateChange: function () {
            this.$emit("rateChange");
        },
        emptied: function () {
            this.$emit("emptied");
        },
        stalled: function () {
            this.$emit("stalled");
        },
        suspend: function () {
            this.$emit("suspend");
        },
        timeUpdate: function () {
            this.$emit("timeUpdate");
        },
        canPlay: function () {
            this.$emit("canPlay");
        },
        canPlayThrough: function () {
            this.$emit("canPlayThrough");
        },
        waiting: function () {
            this.$emit("waiting");
        },
        error: function () {
            this.$emit("error");
        }
    },
    destroyed: function () {
        var _a;
        (_a = this.$el) === null || _a === void 0 ? void 0 : _a.remove();
    }
}));


/***/ }),

/***/ "./src/components/quick/QVideo.vue":
/*!*****************************************!*\
  !*** ./src/components/quick/QVideo.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QVideo_vue_vue_type_template_id_a6cf81c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QVideo.vue?vue&type=template&id=a6cf81c8& */ "./src/components/quick/QVideo.vue?vue&type=template&id=a6cf81c8&");
/* harmony import */ var _QVideo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QVideo.vue?vue&type=script&lang=ts& */ "./src/components/quick/QVideo.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QVideo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QVideo_vue_vue_type_template_id_a6cf81c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _QVideo_vue_vue_type_template_id_a6cf81c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/QVideo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/QVideo.vue?vue&type=script&lang=ts&":
/*!******************************************************************!*\
  !*** ./src/components/quick/QVideo.vue?vue&type=script&lang=ts& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QVideo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QVideo.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QVideo.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QVideo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/QVideo.vue?vue&type=template&id=a6cf81c8&":
/*!************************************************************************!*\
  !*** ./src/components/quick/QVideo.vue?vue&type=template&id=a6cf81c8& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QVideo_vue_vue_type_template_id_a6cf81c8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QVideo_vue_vue_type_template_id_a6cf81c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QVideo_vue_vue_type_template_id_a6cf81c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QVideo.vue?vue&type=template&id=a6cf81c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QVideo.vue?vue&type=template&id=a6cf81c8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QVideo.vue?vue&type=template&id=a6cf81c8&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QVideo.vue?vue&type=template&id=a6cf81c8& ***!
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
  return _c(
    "video",
    {
      ref: "videoRef",
      attrs: {
        src: _vm.src,
        width: _vm.width,
        height: _vm.height,
        autoplay: _vm.autoPlay,
        controls: _vm.controls,
        loop: _vm.loop,
        controlslist: _vm.controlsList,
        poster: _vm.poster,
        preload: _vm.preload,
      },
      domProps: { muted: _vm.muted },
      on: {
        ended: _vm.ended,
        play: _vm.onPlay,
        pause: _vm.onPause,
        durationchange: _vm.durationChange,
        playing: _vm.onPlaying,
        progress: _vm.progress,
        ratechange: _vm.rateChange,
        emptied: _vm.emptied,
        stalled: _vm.stalled,
        suspend: _vm.suspend,
        timeupdate: _vm.timeUpdate,
        volumechange: _vm.volumeChange,
        canplay: _vm.canPlay,
        canplaythrough: _vm.canPlayThrough,
        waiting: _vm.waiting,
        error: _vm.error,
      },
    },
    [_vm._v("\n        Your browser does not support HTML5 video.\n")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_QVideo_vue.js.map