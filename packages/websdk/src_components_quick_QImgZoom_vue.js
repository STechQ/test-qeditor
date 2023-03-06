"use strict";
(this["webpackChunkwebsdk"] = this["webpackChunkwebsdk"] || []).push([["src_components_quick_QImgZoom_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QImgZoom.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QImgZoom.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    name: "QImgZoom",
    data: function () {
        return {
            pageX: 0,
            pageY: 0,
            bigImgWidth: 0,
            bigImgHeight: 0,
            bigImgLeft: 0,
            bigImgTop: 0,
            show: false,
            imgWidth: 0,
            isClick: false,
            rotateDeg: 0,
            margin_left: 0,
            margin_top: 0,
            divHeight: 0,
            divWidth: 0,
            backSizeX: 0,
            backSizeY: 0,
            mouseX: 0,
            mouseY: 0
        };
    },
    props: {
        src: {
            type: String,
            default: 'https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QImgZoom/defaultPhoto.jpg'
        },
        zoomedAreaHeight: {
            type: Number,
            default: 100
        },
        zoomedAreaWidth: {
            type: Number,
            default: 100
        },
        zoomedAreaOpacity: {
            type: String,
            default: '0.2'
        },
        zoomedAreaColor: {
            type: String,
            default: '#000'
        },
        zoomedImageHeight: {
            type: Number,
            default: 500
        },
        zoomedImageWidth: {
            type: Number,
            default: 500
        },
        marginLeft: {
            type: Number,
            default: 5
        },
        height: {
            type: Number,
            default: 400
        },
        width: {
            type: Number,
            default: 400
        },
        zoomType: {
            type: String,
            default: 'NextTo'
        },
        zoomRate: {
            type: Number,
            default: 2
        },
        imageFit: {
            type: String,
            default: 'cover'
        },
        disableZoom: {
            type: Boolean,
            default: false
        },
        hideRotation: {
            type: Boolean,
            default: false
        },
        zoomInUrl: {
            type: String
        },
        zoomOutUrl: {
            type: String
        }
    },
    mounted: function () {
        this.divHeight = this.height;
        this.divWidth = this.width;
    },
    methods: {
        mouseMove: function (event) {
            if (this.disableZoom) {
                return;
            }
            if (!this.show) {
                this.show = true;
            }
            var imgShow = this.$refs.imgShow.getBoundingClientRect();
            this.mouseX = event.clientX - imgShow.left;
            this.mouseY = event.clientY - imgShow.top;
            switch (this.zoomType) {
                case 'On':
                    this.zoomTypeOn(this.mouseX, this.mouseY);
                    break;
                case 'NextTo':
                    this.zoomTypeNextTo(this.mouseX, this.mouseY);
                    break;
            }
        },
        mouseLeave: function () {
            this.show = false;
            this.isClick = false;
        },
        imageClick: function () {
            if (this.zoomType === 'On') {
                this.isClick = !this.isClick;
            }
        },
        rotate: function (angle) {
            this.rotateDeg += angle !== null && angle !== void 0 ? angle : 90;
            if (this.rotateDeg % 180 !== 0 && this.rotateDeg % 90 === 0) {
                this.margin_top = (this.width - this.height) / 2;
                this.margin_left = (this.height - this.width) / 2;
                this.divWidth = this.height;
                this.divHeight = this.width;
            }
            else {
                this.margin_left = 0;
                this.margin_top = 0;
                this.divWidth = this.width;
                this.divHeight = this.height;
            }
        },
        zoomTypeOn: function (x, y) {
            if (this.isClick) {
                var zoomRateForTypeOn = this.zoomRate < 2 ? this.zoomRate : 2;
                this.backSizeX = this.width * zoomRateForTypeOn;
                this.backSizeY = this.height * zoomRateForTypeOn;
                if (this.rotateDeg % 360 === 0) {
                    this.pageX = x / this.width * 100;
                    this.pageY = y / this.height * 100;
                }
                else if ((this.rotateDeg > 0 && this.rotateDeg % 270 === 0) || (this.rotateDeg < 0 && this.rotateDeg % 270 !== 0 && this.rotateDeg % 180 !== 0 && this.rotateDeg % 90 === 0)) {
                    this.pageX = 100 - (y / this.width * 100);
                    this.pageY = x / this.height * 100;
                }
                else if (this.rotateDeg % 180 === 0) {
                    this.pageX = 100 - (x / this.width * 100);
                    this.pageY = 100 - (y / this.height * 100);
                }
                else if (this.rotateDeg % 90 === 0 || (this.rotateDeg < 0 && this.rotateDeg % 270 === 0)) {
                    this.pageX = y / this.width * 100;
                    this.pageY = 100 - (x / this.height * 100);
                }
            }
        },
        zoomTypeNextTo: function (x, y) {
            var imageW = this.$refs.imgShow.clientWidth;
            var imageH = this.$refs.imgShow.clientHeight;
            this.imgWidth = imageW + this.marginLeft;
            var wTimes = this.zoomedImageWidth / this.zoomedAreaWidth;
            var hTimes = this.zoomedImageHeight / this.zoomedAreaHeight;
            this.bigImgWidth = wTimes * imageW;
            this.bigImgHeight = hTimes * imageH;
            if (x <= this.zoomedAreaWidth / 2) {
                x = 0;
            }
            else if (x >= imageW - this.zoomedAreaWidth / 2) {
                x = imageW - this.zoomedAreaWidth;
            }
            else {
                x = x - this.zoomedAreaWidth / 2;
            }
            if (y < this.zoomedAreaHeight / 2) {
                y = 0;
            }
            else if (y >= imageH - this.zoomedAreaHeight / 2) {
                y = imageH - this.zoomedAreaHeight;
            }
            else {
                y = y - this.zoomedAreaHeight / 2;
            }
            this.pageX = x;
            this.pageY = y;
            this.bigImgLeft = -x * wTimes;
            this.bigImgTop = -y * hTimes;
            if (this.rotateDeg % 180 !== 0 && this.rotateDeg % 90 === 0) {
                if (this.height > this.width) {
                    this.bigImgLeft += this.zoomedImageWidth;
                    this.bigImgTop -= this.zoomedImageHeight;
                }
                else if (this.height < this.width) {
                    this.bigImgLeft -= this.zoomedImageWidth;
                    this.bigImgTop += this.zoomedImageHeight;
                }
                var width = this.bigImgWidth;
                this.bigImgWidth = this.bigImgHeight;
                this.bigImgHeight = width;
            }
        }
    },
    computed: {
        imageStyle: function () {
            var style = {
                transform: "rotate(" + this.rotateDeg + "deg)",
                marginLeft: this.margin_left + "px",
                marginTop: this.margin_top + "px",
                objectFit: this.imageFit,
                width: this.width + "px",
                height: this.height + "px"
            };
            if (this.zoomType === 'On') {
                if (this.show && this.isClick) {
                    style = __assign(__assign({}, style), { width: this.bigImgWidth ? this.bigImgWidth + "px" : this.width + "px", height: this.bigImgHeight ? this.bigImgHeight + "px" : this.height + "px", left: this.bigImgLeft + "px", top: this.bigImgTop + "px", opacity: 0 });
                }
            }
            return style;
        },
        divStyle: function () {
            var style = {
                objectFit: this.imageFit,
                width: this.divWidth + "px",
                height: this.divHeight + "px"
            };
            if (!this.disableZoom && this.zoomType === 'On') {
                if (this.isClick) {
                    style = __assign(__assign({}, style), { cursor: "url(" + this.zoomOutUrl + ") 15 15, zoom-out", backgroundImage: "url(" + this.src + ")", backgroundPosition: this.pageX + "% " + this.pageY + "%", width: this.width + "px", height: this.height + "px", transform: "rotate(" + this.rotateDeg + "deg)", marginLeft: this.margin_left + "px", marginTop: this.margin_top + "px", backgroundSize: this.backSizeX + "px " + this.backSizeY + "px" });
                }
                else {
                    style = __assign(__assign({}, style), { cursor: "url(" + this.zoomInUrl + ") 15 15, zoom-in" });
                }
            }
            return style;
        }
    },
    watch: {
        isClick: function () {
            this.zoomTypeOn(this.mouseX, this.mouseY);
        }
    }
}));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QImgZoom.vue?vue&type=style&index=0&id=450ba5d2&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QImgZoom.vue?vue&type=style&index=0&id=450ba5d2&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.show {\n  position: relative;\n}\n.show-img {\n  height: 100%;\n  width: 100%;\n}\n.img-rect {\n  position: absolute;\n  border: 1px solid rgb(204, 204, 204);\n  display: block;\n}\n.img-review {\n  position: absolute;\n  overflow: hidden;\n  top: 0px;\n  display: block;\n}\n.img-zoom-out {\n  overflow: hidden;\n  display: block;\n}\n.big-img {\n  position: absolute;\n  z-index: 5;\n}\n.img-zoom-div {\n  position: relative;\n}\n.rotation {\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 5;\n  margin-bottom: 5px;\n}\n.rotation-icons {\n  background-color: #fff;\n  opacity: 0.9;\n  border-radius: 4px;\n  margin-right: 5px;\n}\n.rotation-icon {\n  padding: 3px;\n  font-size: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/components/quick/QImgZoom.vue"],"names":[],"mappings":";AA8VA;EACA,kBAAA;AACA;AAEA;EACA,YAAA;EACA,WAAA;AACA;AAEA;EACA,kBAAA;EACA,oCAAA;EACA,cAAA;AACA;AAEA;EACA,kBAAA;EACA,gBAAA;EACA,QAAA;EACA,cAAA;AACA;AAEA;EACA,gBAAA;EACA,cAAA;AACA;AAEA;EACA,kBAAA;EACA,UAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,aAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,UAAA;EACA,kBAAA;AACA;AAEA;EACA,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;AACA;AAEA;EACA,YAAA;EACA,eAAA;AACA","sourcesContent":["<template>\n  <div\n    class=\"img-zoom-div\"\n    :style=\"{\n      width: `${divWidth}px`,\n      height: `${divHeight}px`,\n    }\"\n  >\n    <div\n      ref=\"imgShow\"\n      :class=\"{ show: true, 'img-zoom-out': zoomType === 'On' }\"\n      :style=\"divStyle\"\n      @mousemove=\"mouseMove\"\n      @mouseleave=\"mouseLeave\"\n      @click=\"imageClick\"\n    >\n      <img\n        :class=\"{\n          'show-img': zoomType === 'NextTo',\n          'big-img': zoomType === 'On',\n        }\"\n        :src=\"src\"\n        alt=\"show-img\"\n        :style=\"imageStyle\"\n      />\n\n      <div\n        class=\"img-rect\"\n        v-if=\"show && zoomType === 'NextTo'\"\n        :style=\"{\n          left: `${pageX}px`,\n          top: `${pageY}px`,\n          width:\n            zoomedAreaWidth > width ? `${width}px` : `${zoomedAreaWidth}px`,\n          height:\n            zoomedAreaHeight > height ? `${height}px` : `${zoomedAreaHeight}px`,\n          backgroundColor: zoomedAreaColor,\n          opacity: zoomedAreaOpacity,\n          cursor: `url(${zoomInUrl}) 15 15, zoom-in`\n        }\"\n        @mousemove=\"mouseMove\"\n        @mouseleave=\"mouseLeave\"\n      />\n      <div\n        class=\"img-review\"\n        v-if=\"show && zoomType === 'NextTo'\"\n        :style=\"{\n          width: `${zoomedImageWidth}px`,\n          height: `${zoomedImageHeight}px`,\n          left: `${imgWidth}px`,\n          zIndex: 6,\n        }\"\n      >\n        <img\n          class=\"big-img\"\n          :src=\"src\"\n          alt=\"big-img\"\n          :style=\"{\n            width: `${bigImgWidth}px`,\n            height: `${bigImgHeight}px`,\n            left: `${bigImgLeft}px`,\n            top: `${bigImgTop}px`,\n            objectFit: imageFit,\n            transform: `rotate(${rotateDeg}deg)`,\n          }\"\n        />\n      </div>\n    </div>\n    <div class=\"rotation\" v-if=\"!hideRotation\">\n      <div class=\"rotation-icons\" @click=\"rotate(90)\">\n        <i class=\"mdi mdi-rotate-left rotation-icon\" />\n      </div>\n      <div class=\"rotation-icons\" @click=\"rotate(-90)\">\n        <i class=\"mdi mdi-rotate-right rotation-icon\" />\n      </div>\n    </div>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nexport default Vue.extend({\n  name: \"QImgZoom\",\n  data() {\n    return {\n      pageX: 0,\n      pageY: 0,\n      bigImgWidth: 0,\n      bigImgHeight: 0,\n      bigImgLeft: 0,\n      bigImgTop: 0,\n      show: false,\n      imgWidth: 0,\n      isClick: false,\n      rotateDeg: 0,\n      margin_left: 0,\n      margin_top: 0,\n      divHeight: 0,\n      divWidth: 0,\n      backSizeX: 0,\n      backSizeY: 0,\n      mouseX: 0,\n      mouseY: 0\n    }\n  },\n  props: {\n    src: {\n      type: String,\n      default: 'https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QImgZoom/defaultPhoto.jpg'\n    },\n    zoomedAreaHeight: {\n      type: Number,\n      default: 100\n    },\n    zoomedAreaWidth: {\n      type: Number,\n      default: 100\n    },\n    zoomedAreaOpacity: {\n      type: String,\n      default: '0.2'\n    },\n    zoomedAreaColor: {\n      type: String,\n      default: '#000'\n    },\n    zoomedImageHeight: {\n      type: Number,\n      default: 500\n    },\n    zoomedImageWidth: {\n      type: Number,\n      default: 500\n    },\n    marginLeft: {\n      type: Number,\n      default: 5\n    },\n    height: {\n      type: Number,\n      default: 400\n    },\n    width: {\n      type: Number,\n      default: 400\n    },\n    zoomType: {\n      type: String,\n      default: 'NextTo'\n    },\n    zoomRate: {\n      type: Number,\n      default: 2\n    },\n    imageFit: {\n      type: String,\n      default: 'cover'\n    },\n    disableZoom: {\n      type: Boolean,\n      default: false\n    },\n    hideRotation: {\n      type: Boolean,\n      default: false\n    },\n    zoomInUrl: {\n      type: String\n    },\n    zoomOutUrl: {\n      type: String\n    }\n  },\n  mounted() {\n    this.divHeight = this.height;\n    this.divWidth = this.width;\n  },\n  methods: {\n    mouseMove(event: any) {\n      if (this.disableZoom) {\n        return;\n      }\n      if (!this.show) {\n        this.show = true;\n      }\n      let imgShow = (<any>this.$refs.imgShow).getBoundingClientRect();\n      this.mouseX = event.clientX - imgShow.left;\n      this.mouseY = event.clientY - imgShow.top;\n      switch (this.zoomType) {\n        case 'On':\n          this.zoomTypeOn(this.mouseX, this.mouseY);\n          break;\n        case 'NextTo':\n          this.zoomTypeNextTo(this.mouseX, this.mouseY);\n          break;\n      }\n\n    },\n    mouseLeave() {\n      this.show = false;\n      this.isClick = false;\n    },\n    imageClick() {\n      if (this.zoomType === 'On') {\n        this.isClick = !this.isClick;\n      }\n    },\n    rotate(angle?: 0 | 90 | 180 | 270 | 360 | -90 | -180 | -270 | -360) {\n      this.rotateDeg += angle ?? 90;\n      if (this.rotateDeg % 180 !== 0 && this.rotateDeg % 90 === 0) {\n        this.margin_top = (this.width - this.height) / 2;\n        this.margin_left = (this.height - this.width) / 2;\n        this.divWidth = this.height;\n        this.divHeight = this.width;\n      } else {\n        this.margin_left = 0;\n        this.margin_top = 0;\n        this.divWidth = this.width;\n        this.divHeight = this.height;\n      }\n    },\n    zoomTypeOn(x: number, y: number) {\n      if (this.isClick) {\n        let zoomRateForTypeOn = this.zoomRate < 2 ? this.zoomRate : 2;\n        this.backSizeX = this.width * zoomRateForTypeOn;\n        this.backSizeY = this.height * zoomRateForTypeOn;\n\n        if (this.rotateDeg % 360 === 0) {\n          this.pageX = x / this.width * 100;\n          this.pageY = y / this.height * 100;\n        }\n        else if ((this.rotateDeg > 0 && this.rotateDeg % 270 === 0) || (this.rotateDeg < 0 && this.rotateDeg % 270 !== 0 && this.rotateDeg % 180 !== 0 && this.rotateDeg % 90 === 0)) {\n          this.pageX = 100 - (y / this.width * 100);\n          this.pageY = x / this.height * 100;\n        }\n        else if (this.rotateDeg % 180 === 0) {\n          this.pageX = 100 - (x / this.width * 100);\n          this.pageY = 100 - (y / this.height * 100);\n        }\n        else if (this.rotateDeg % 90 === 0 || (this.rotateDeg < 0 && this.rotateDeg % 270 === 0)) {\n          this.pageX = y / this.width * 100;\n          this.pageY = 100 - (x / this.height * 100);\n        }\n      }\n\n    },\n    zoomTypeNextTo(x: number, y: number) {\n      var imageW = (<any>this.$refs.imgShow).clientWidth;\n      var imageH = (<any>this.$refs.imgShow).clientHeight;\n      this.imgWidth = imageW + this.marginLeft;\n      var wTimes = this.zoomedImageWidth / this.zoomedAreaWidth;\n      var hTimes = this.zoomedImageHeight / this.zoomedAreaHeight;\n      this.bigImgWidth = wTimes * imageW;\n      this.bigImgHeight = hTimes * imageH;\n      if (x <= this.zoomedAreaWidth / 2) {\n        x = 0;\n      } else if (x >= imageW - this.zoomedAreaWidth / 2) {\n        x = imageW - this.zoomedAreaWidth;\n      } else {\n        x = x - this.zoomedAreaWidth / 2;\n      }\n      if (y < this.zoomedAreaHeight / 2) {\n        y = 0;\n      } else if (y >= imageH - this.zoomedAreaHeight / 2) {\n        y = imageH - this.zoomedAreaHeight;\n      } else {\n        y = y - this.zoomedAreaHeight / 2;\n      }\n      this.pageX = x;\n      this.pageY = y;\n      this.bigImgLeft = -x * wTimes;\n      this.bigImgTop = -y * hTimes;\n      if (this.rotateDeg % 180 !== 0 && this.rotateDeg % 90 === 0) {\n        if (this.height > this.width) {\n          this.bigImgLeft += this.zoomedImageWidth;\n          this.bigImgTop -= this.zoomedImageHeight;\n        }\n        else if (this.height < this.width) {\n          this.bigImgLeft -= this.zoomedImageWidth;\n          this.bigImgTop += this.zoomedImageHeight;\n        }\n        let width = this.bigImgWidth;\n        this.bigImgWidth = this.bigImgHeight;\n        this.bigImgHeight = width;\n      }\n    }\n  },\n  computed: {\n    imageStyle() {\n      let style: any = {\n        transform: `rotate(${this.rotateDeg}deg)`,\n        marginLeft: `${this.margin_left}px`,\n        marginTop: `${this.margin_top}px`,\n        objectFit: this.imageFit,\n        width: `${this.width}px`,\n        height: `${this.height}px`\n      }\n      if (this.zoomType === 'On') {\n        if (this.show && this.isClick) {\n          style = {\n            ...style,\n            width: this.bigImgWidth ? `${this.bigImgWidth}px` : `${this.width}px`,\n            height: this.bigImgHeight ? `${this.bigImgHeight}px` : `${this.height}px`,\n            left: `${this.bigImgLeft}px`,\n            top: `${this.bigImgTop}px`,\n            opacity: 0,\n          }\n        }\n      }\n      return style;\n    },\n    divStyle() {\n      let style: any = {\n        objectFit: this.imageFit,\n        width: `${this.divWidth}px`,\n        height: `${this.divHeight}px`\n      };\n      if (!this.disableZoom && this.zoomType === 'On') {\n        if (this.isClick) {\n          style = {\n            ...style,\n            cursor: `url(${this.zoomOutUrl}) 15 15, zoom-out`,\n            backgroundImage: `url(${this.src})`,\n            backgroundPosition: `${this.pageX}% ${this.pageY}%`,\n            width: `${this.width}px`,\n            height: `${this.height}px`,\n            transform: `rotate(${this.rotateDeg}deg)`,\n            marginLeft: `${this.margin_left}px`,\n            marginTop: `${this.margin_top}px`,\n            backgroundSize: `${this.backSizeX}px ${this.backSizeY}px`\n          }\n        } else {\n          style = {\n            ...style,\n            cursor: `url(${this.zoomInUrl}) 15 15, zoom-in`\n          }\n        }\n      }\n      return style;\n    }\n  },\n  watch: {\n    isClick() {\n      this.zoomTypeOn(this.mouseX, this.mouseY);\n    }\n  }\n\n});\n</script>\n<style>\n.show {\n  position: relative;\n}\n\n.show-img {\n  height: 100%;\n  width: 100%;\n}\n\n.img-rect {\n  position: absolute;\n  border: 1px solid rgb(204, 204, 204);\n  display: block;\n}\n\n.img-review {\n  position: absolute;\n  overflow: hidden;\n  top: 0px;\n  display: block;\n}\n\n.img-zoom-out {\n  overflow: hidden;\n  display: block;\n}\n\n.big-img {\n  position: absolute;\n  z-index: 5;\n}\n\n.img-zoom-div {\n  position: relative;\n}\n\n.rotation {\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 5;\n  margin-bottom: 5px;\n}\n\n.rotation-icons {\n  background-color: #fff;\n  opacity: 0.9;\n  border-radius: 4px;\n  margin-right: 5px;\n}\n\n.rotation-icon {\n  padding: 3px;\n  font-size: 20px;\n}\n</style>\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QImgZoom.vue?vue&type=style&index=0&id=450ba5d2&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QImgZoom.vue?vue&type=style&index=0&id=450ba5d2&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QImgZoom_vue_vue_type_style_index_0_id_450ba5d2_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QImgZoom.vue?vue&type=style&index=0&id=450ba5d2&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QImgZoom.vue?vue&type=style&index=0&id=450ba5d2&lang=css&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QImgZoom_vue_vue_type_style_index_0_id_450ba5d2_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QImgZoom_vue_vue_type_style_index_0_id_450ba5d2_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QImgZoom_vue_vue_type_style_index_0_id_450ba5d2_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QImgZoom_vue_vue_type_style_index_0_id_450ba5d2_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/quick/QImgZoom.vue":
/*!*******************************************!*\
  !*** ./src/components/quick/QImgZoom.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QImgZoom_vue_vue_type_template_id_450ba5d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QImgZoom.vue?vue&type=template&id=450ba5d2& */ "./src/components/quick/QImgZoom.vue?vue&type=template&id=450ba5d2&");
/* harmony import */ var _QImgZoom_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QImgZoom.vue?vue&type=script&lang=ts& */ "./src/components/quick/QImgZoom.vue?vue&type=script&lang=ts&");
/* harmony import */ var _QImgZoom_vue_vue_type_style_index_0_id_450ba5d2_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QImgZoom.vue?vue&type=style&index=0&id=450ba5d2&lang=css& */ "./src/components/quick/QImgZoom.vue?vue&type=style&index=0&id=450ba5d2&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QImgZoom_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QImgZoom_vue_vue_type_template_id_450ba5d2___WEBPACK_IMPORTED_MODULE_0__.render,
  _QImgZoom_vue_vue_type_template_id_450ba5d2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/QImgZoom.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/QImgZoom.vue?vue&type=script&lang=ts&":
/*!********************************************************************!*\
  !*** ./src/components/quick/QImgZoom.vue?vue&type=script&lang=ts& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QImgZoom_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QImgZoom.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QImgZoom.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QImgZoom_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/QImgZoom.vue?vue&type=style&index=0&id=450ba5d2&lang=css&":
/*!****************************************************************************************!*\
  !*** ./src/components/quick/QImgZoom.vue?vue&type=style&index=0&id=450ba5d2&lang=css& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QImgZoom_vue_vue_type_style_index_0_id_450ba5d2_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QImgZoom.vue?vue&type=style&index=0&id=450ba5d2&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QImgZoom.vue?vue&type=style&index=0&id=450ba5d2&lang=css&");


/***/ }),

/***/ "./src/components/quick/QImgZoom.vue?vue&type=template&id=450ba5d2&":
/*!**************************************************************************!*\
  !*** ./src/components/quick/QImgZoom.vue?vue&type=template&id=450ba5d2& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QImgZoom_vue_vue_type_template_id_450ba5d2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QImgZoom_vue_vue_type_template_id_450ba5d2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QImgZoom_vue_vue_type_template_id_450ba5d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QImgZoom.vue?vue&type=template&id=450ba5d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QImgZoom.vue?vue&type=template&id=450ba5d2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QImgZoom.vue?vue&type=template&id=450ba5d2&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QImgZoom.vue?vue&type=template&id=450ba5d2& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "img-zoom-div",
      style: {
        width: _vm.divWidth + "px",
        height: _vm.divHeight + "px",
      },
    },
    [
      _c(
        "div",
        {
          ref: "imgShow",
          class: { show: true, "img-zoom-out": _vm.zoomType === "On" },
          style: _vm.divStyle,
          on: {
            mousemove: _vm.mouseMove,
            mouseleave: _vm.mouseLeave,
            click: _vm.imageClick,
          },
        },
        [
          _c("img", {
            class: {
              "show-img": _vm.zoomType === "NextTo",
              "big-img": _vm.zoomType === "On",
            },
            style: _vm.imageStyle,
            attrs: { src: _vm.src, alt: "show-img" },
          }),
          _vm._v(" "),
          _vm.show && _vm.zoomType === "NextTo"
            ? _c("div", {
                staticClass: "img-rect",
                style: {
                  left: _vm.pageX + "px",
                  top: _vm.pageY + "px",
                  width:
                    _vm.zoomedAreaWidth > _vm.width
                      ? _vm.width + "px"
                      : _vm.zoomedAreaWidth + "px",
                  height:
                    _vm.zoomedAreaHeight > _vm.height
                      ? _vm.height + "px"
                      : _vm.zoomedAreaHeight + "px",
                  backgroundColor: _vm.zoomedAreaColor,
                  opacity: _vm.zoomedAreaOpacity,
                  cursor: "url(" + _vm.zoomInUrl + ") 15 15, zoom-in",
                },
                on: { mousemove: _vm.mouseMove, mouseleave: _vm.mouseLeave },
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.show && _vm.zoomType === "NextTo"
            ? _c(
                "div",
                {
                  staticClass: "img-review",
                  style: {
                    width: _vm.zoomedImageWidth + "px",
                    height: _vm.zoomedImageHeight + "px",
                    left: _vm.imgWidth + "px",
                    zIndex: 6,
                  },
                },
                [
                  _c("img", {
                    staticClass: "big-img",
                    style: {
                      width: _vm.bigImgWidth + "px",
                      height: _vm.bigImgHeight + "px",
                      left: _vm.bigImgLeft + "px",
                      top: _vm.bigImgTop + "px",
                      objectFit: _vm.imageFit,
                      transform: "rotate(" + _vm.rotateDeg + "deg)",
                    },
                    attrs: { src: _vm.src, alt: "big-img" },
                  }),
                ]
              )
            : _vm._e(),
        ]
      ),
      _vm._v(" "),
      !_vm.hideRotation
        ? _c("div", { staticClass: "rotation" }, [
            _c(
              "div",
              {
                staticClass: "rotation-icons",
                on: {
                  click: function ($event) {
                    return _vm.rotate(90)
                  },
                },
              },
              [_c("i", { staticClass: "mdi mdi-rotate-left rotation-icon" })]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "rotation-icons",
                on: {
                  click: function ($event) {
                    return _vm.rotate(-90)
                  },
                },
              },
              [_c("i", { staticClass: "mdi mdi-rotate-right rotation-icon" })]
            ),
          ])
        : _vm._e(),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_QImgZoom_vue.js.map