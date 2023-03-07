"use strict";
(this["webpackChunkwebsdk"] = this["webpackChunkwebsdk"] || []).push([["src_components_quick_GroupBox_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GroupBox.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GroupBox.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    name: "groupBox",
    props: {
        formName: {
            type: String,
            default: null
        },
        __domElements: {
            type: Object,
            default: null
        },
        toggleContent: {
            type: Boolean,
            default: false
        },
        showToggleArrow: {
            type: Boolean,
            default: false
        },
        disableToggle: {
            type: Boolean,
            default: false
        },
        header: {
            type: String,
            default: ""
        },
        rightHeader: {
            type: String,
            default: ""
        },
        leftSubHeader: {
            type: String,
            default: ""
        },
        leftSubHeaderFontSize: {
            type: String,
            default: "10pt"
        },
        leftSubHeaderFontColor: {
            type: String,
            default: "#555;"
        },
        rightSubHeader: {
            type: String,
            default: ""
        },
        rightSubHeaderFontSize: {
            type: String,
            default: "10pt"
        },
        rightSubHeaderFontColor: {
            type: String,
            default: "#555;"
        },
        backGroundColor: {
            type: String,
            default: "white"
        },
        displayData: {
            type: String,
            default: "block"
        },
        showHeader: {
            type: Boolean,
            default: false
        },
        defaultDiv: {
            type: Boolean,
            default: true
        },
        customStyle: {
            type: String,
            default: ""
        },
        _renderingProps: {
            type: Object,
            default: null
        },
        isTableCell: {
            type: Boolean,
            default: false
        },
        colspan: {
            type: [String, Number],
            default: null
        }
    },
    mounted: function () {
        var e_1, _a;
        if (this.isRendered === false) {
            return;
        }
        var holderDiv = this.$refs["holder"];
        try {
            for (var _b = __values(this.__domElements.default), _c = _b.next(); !_c.done; _c = _b.next()) {
                var element = _c.value;
                holderDiv.appendChild(element);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    },
    data: function () {
        return {
            toggleContentData: this.toggleContent,
            toggleTitle: this.header,
            toggleRightTitle: this.rightHeader,
            bGColor: this.backGroundColor,
            rigthSubtitle: this.rightSubHeader,
            leftSubtitle: this.leftSubHeader
        };
    },
    created: function () {
    },
    methods: {
        switchContent: function () {
            if (this.disableToggle) {
                return;
            }
            this.toggleContentData = !this.toggleContentData;
            var icon = this.$refs["toggle-arrow-down"];
        },
        getHeaderClass: function () {
            return "toggle-header";
        },
        resetForm: function () {
            var componentCollection = this._renderingProps.context().contextItems.Dory.GetComponentCollectionByID(this._renderingProps.props().ID);
            this.arrangeChildElements(componentCollection, "reset");
            this.$validator.reset();
        },
        disableForm: function (state) {
            var componentCollection = this._renderingProps.context().contextItems.Dory.GetComponentCollectionByID(this._renderingProps.props().ID);
            this.arrangeChildElements(componentCollection, "disable", state);
        },
        arrangeChildElements: function (componentCollection, type, state) {
            var self = this;
            if (componentCollection.children) {
                var _loop_1 = function (index) {
                    var element = componentCollection.children.default[index];
                    self.$nextTick(function () {
                        if (type == "disable") {
                            element.component['disabled'] = state ? true : false;
                        }
                        if (type == "reset") {
                            if (element.component["dataValue"]) {
                                element.component["dataValue"] = null;
                            }
                            else if (element.component["radioGroupValue"]) {
                                element.component["radioGroupValue"] = null;
                            }
                            else if (element.component["valueData"]) {
                                element.component["valueData"] = null;
                            }
                        }
                    });
                    self.arrangeChildElements(element, type, state);
                };
                for (var index = 0; index < componentCollection.children.default.length; index++) {
                    _loop_1(index);
                }
            }
        }
    },
    computed: {
        headerClass: function () {
            return this.getHeaderClass();
        },
        validateAll: function () {
            if (this.isRendered === false) {
                return false;
            }
            if (this.isDisabled === false) {
                return false;
            }
            return true;
        }
    }
}));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GroupBox.vue?vue&type=style&index=0&id=0ef7bfde&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GroupBox.vue?vue&type=style&index=0&id=0ef7bfde&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.groupbox-container-toggle[data-v-0ef7bfde] {\n  flex: 1 0 100%;\n  max-width: 100%;\n  outline: none;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  border-top: 1px solid #ebeef5;\n}\n.toggle-body[data-v-0ef7bfde] {\n  height: inherit;\n  width: inherit;\n  padding: 14px;\n}\n.toggle-header[data-v-0ef7bfde] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  position: relative;\n  padding: 12px 24px;\n  min-height: 48px;\n  border-bottom: 1px solid #ebeef5;\n}\n.header[data-v-0ef7bfde] {\n  /* display: flex; */\n  cursor: default;\n  align-items: center;\n  position: relative;\n  padding: 12px 12px;\n  min-height: 48px;\n}\n.toggle-header .toggle-header-icon .v-icon[data-v-0ef7bfde] {\n  color: rgba(0, 0, 0, 0.54);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  transform: rotate(-90deg);\n}\n.header .toggle-header-icon .v-icon[data-v-0ef7bfde] {\n  color: rgba(0, 0, 0, 0.54);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  transform: rotate(-90deg);\n}\n.header-text[data-v-0ef7bfde] {\n  /* display: flex; */\n  font-size: 14pt;\n  min-width: 200px;\n  color: #555;\n  display: inline-block;\n  white-space: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n}\n.subheader-text[data-v-0ef7bfde] {\n  min-width: 200px;\n  color: #555;\n  display: inline-block;\n  white-space: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 200;\n}\n.groupBoxActive .toggle-header-icon .v-icon[data-v-0ef7bfde] {\n  transform: rotateZ(0);\n}\n.toggle-header > *[data-v-0ef7bfde]:not(.toggle-header-icon) {\n  flex: 1 1 auto;\n}\n.groupBoxActive.toggle-header[data-v-0ef7bfde]:before {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  width: 95%;\n  top: 100%;\n}\n.fade-enter-active[data-v-0ef7bfde],\n.fade-leave-active[data-v-0ef7bfde] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-0ef7bfde], .fade-leave-to[data-v-0ef7bfde] /* .fade-leave-active below version 2.1.8 */ {\n  opacity: 0;\n}\n.defaultDiv[data-v-0ef7bfde] {\n  padding: 3px 3px;\n}\n.renderMode[data-v-0ef7bfde] {\n  background-color: white;\n  margin: 20px 20px 0;\n  padding: 20px 30px;\n  border-radius: 8px;\n}\n", "",{"version":3,"sources":["webpack://./src/components/quick/GroupBox.vue"],"names":[],"mappings":";AAgUA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,yCAAA;EACA,sBAAA;EACA,0BAAA;EACA,6BAAA;AACA;AACA;EACA,eAAA;EACA,cAAA;EACA,aAAA;AACA;AACA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,gCAAA;AACA;AAEA;EACA,mBAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,0BAAA;EACA,gDAAA;EACA,yBAAA;AACA;AACA;EACA,0BAAA;EACA,gDAAA;EACA,yBAAA;AACA;AAEA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,qBAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,gBAAA;AACA;AACA;EACA,gBAAA;EACA,WAAA;EACA,qBAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,gBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,cAAA;AACA;AACA;EACA,WAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,SAAA;AACA;AACA;;EAEA,wBAAA;AACA;AACA;EACA,UAAA;AACA;AACA;EACA,gBAAA;AACA;AACA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;AACA","sourcesContent":["<template>\n  <form :data-vv-name=\"formName\" :data-vv-scope=\"formName\" v-if=\"formName\" :ref=\"formName\">\n    <div v-if=\"validateAll\" :id=\"id\">\n      <template v-if=\"toggleContent\">\n        <div\n          class=\"groupbox-container-toggle\"\n          :style=\"`background-color: ${backGroundColor} !important;`\"\n        >\n          <div :class=\"headerClass || {groupBoxActive: toggleContentData}\" @click=\"switchContent\">\n            <div class=\"header-text\">{{toggleTitle}}</div>\n\n            <div class=\"toggle-header-icon\" v-if=\"showToggleArrow\">\n              <i\n                aria-hidden=\"true\"\n                ref=\"toggle-arrow-down\"\n                class=\"v-icon material-icons theme--light\"\n              >keyboard_arrow_down</i>\n            </div>\n          </div>\n          <div style=\"display: table; width: 100%;\">\n            <div\n              class=\"subheader-text\"\n              style=\"width: 50%; padding: 12px 24px;\"\n              :style=\"`font-size:${leftSubHeaderFontSize}; color:${leftSubHeaderFontColor};`\"\n            >{{leftSubtitle}}</div>\n            <div\n              class=\"subheader-text\"\n              style=\"width: 50%; padding: 12px 24px; text-align: right;\"\n              :style=\"`font-size:${rightSubHeaderFontSize}; color:${rightSubHeaderFontColor};`\"\n            >{{rigthSubtitle}}</div>\n          </div>\n          <transition name=\"fade\">\n            <div\n              ref=\"holder\"\n              v-show=\"toggleContentData\"\n              class=\"toggle-body\"\n              :style=\"{display: displayData}\"\n            ></div>\n          </transition>\n        </div>\n      </template>\n      <template v-else>\n        <div\n          ref=\"holder\"\n          :class=\"[{defaultDiv : defaultDiv}, {renderMode : defaultDiv && !_renderingProps.isEditMode }]\"\n          :style=\"`background-color: ${backGroundColor} !important;  display:${displayData} !important; ${customStyle}`\"\n        >\n          <template v-if=\"showHeader\">\n            <div :class=\"headerClass\">\n              <div>\n                <div class=\"header-text\" style=\"width: 50%; float: left;\">{{toggleTitle}}</div>\n                <div class=\"header-text\" style=\"width: 50%; text-align: right;\">{{toggleRightTitle}}</div>\n              </div>\n            </div>\n            <div style=\"display: table; width: 100%;\">\n              <div\n                class=\"subheader-text\"\n                style=\"width: 50%; padding: 12px 24px;\"\n                :style=\"`font-size:${leftSubHeaderFontSize}; color:${leftSubHeaderFontColor};`\"\n              >{{leftSubtitle}}</div>\n              <div\n                class=\"subheader-text\"\n                style=\"width: 50%; padding: 12px 24px; text-align: right;\"\n                :style=\"`font-size:${rightSubHeaderFontSize}; color:${rightSubHeaderFontColor};`\"\n              >{{rigthSubtitle}}</div>\n            </div>\n          </template>\n        </div>\n      </template>\n    </div>\n  </form>\n  <div v-else-if=\"formName == null && !isTableCell\">\n    <div v-if=\"validateAll\" :id=\"id\">\n      <template v-if=\"toggleContent\">\n        <div\n          class=\"groupbox-container-toggle\"\n          :style=\"`background-color: ${backGroundColor} !important;`\"\n        >\n          <div :class=\"headerClass || {groupBoxActive: toggleContentData}\" @click=\"switchContent\">\n            <div class=\"header-text\">{{toggleTitle}}</div>\n\n            <div class=\"toggle-header-icon\" v-if=\"showToggleArrow\">\n              <i\n                aria-hidden=\"true\"\n                ref=\"toggle-arrow-down\"\n                class=\"v-icon material-icons theme--light\"\n              >keyboard_arrow_down</i>\n            </div>\n          </div>\n          <div style=\"display: table; width: 100%;\">\n            <div\n              class=\"subheader-text\"\n              style=\"width: 50%; padding: 12px 24px;\"\n              :style=\"`font-size:${leftSubHeaderFontSize}; color:${leftSubHeaderFontColor};`\"\n            >{{leftSubtitle}}</div>\n            <div\n              class=\"subheader-text\"\n              style=\"width: 50%; padding: 12px 24px; text-align: right;\"\n              :style=\"`font-size:${rightSubHeaderFontSize}; color:${rightSubHeaderFontColor};`\"\n            >{{rigthSubtitle}}</div>\n          </div>\n          <transition name=\"fade\">\n            <div\n              ref=\"holder\"\n              v-show=\"toggleContentData\"\n              class=\"toggle-body\"\n              :style=\"{display: displayData}\"\n            ></div>\n          </transition>\n        </div>\n      </template>\n      <template v-else>\n        <div\n          ref=\"holder\"\n          :class=\"[{defaultDiv : defaultDiv}, {renderMode : defaultDiv && !_renderingProps.isEditMode }]\"\n          :style=\"`background-color: ${backGroundColor} !important;  display:${displayData} !important; ${customStyle}`\"\n        >\n          <template v-if=\"showHeader\">\n            <div :class=\"headerClass\">\n              <div>\n                <div class=\"header-text\" style=\"width: 50%; float: left;\">{{toggleTitle}}</div>\n                <div class=\"header-text\" style=\"width: 50%; text-align: right;\">{{toggleRightTitle}}</div>\n              </div>\n            </div>\n            <div style=\"display: table; width: 100%;\">\n              <div\n                class=\"subheader-text\"\n                style=\"width: 50%; padding: 12px 24px;\"\n                :style=\"`font-size:${leftSubHeaderFontSize}; color:${leftSubHeaderFontColor};`\"\n              >{{leftSubtitle}}</div>\n              <div\n                class=\"subheader-text\"\n                style=\"width: 50%; padding: 12px 24px; text-align: right;\"\n                :style=\"`font-size:${rightSubHeaderFontSize}; color:${rightSubHeaderFontColor};`\"\n              >{{rigthSubtitle}}</div>\n            </div>\n          </template>\n        </div>\n      </template>\n    </div>\n  </div>\n  <td v-else-if=\"isTableCell\" :colspan=\"colspan\" ref=\"holder\"></td>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport { IComponentCollection } from \"../../../../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection\";\n\nexport default Vue.extend({\n  name: \"groupBox\",\n  props: {\n    formName: {\n      type: String,\n      default: null\n    },\n    __domElements: {\n      type: Object,\n      default: null\n    },\n    toggleContent: {\n      type: Boolean,\n      default: false\n    },\n    showToggleArrow: {\n      type: Boolean,\n      default: false\n    },\n    disableToggle: {\n      type: Boolean,\n      default: false\n    },\n    header: {\n      type: String,\n      default: \"\"\n    },\n    rightHeader: {\n      type: String,\n      default: \"\"\n    },\n    leftSubHeader: {\n      type: String,\n      default: \"\"\n    },\n    leftSubHeaderFontSize: {\n      type: String,\n      default: \"10pt\"\n    },\n    leftSubHeaderFontColor: {\n      type: String,\n      default: \"#555;\"\n    },\n    rightSubHeader: {\n      type: String,\n      default: \"\"\n    },\n    rightSubHeaderFontSize: {\n      type: String,\n      default: \"10pt\"\n    },\n    rightSubHeaderFontColor: {\n      type: String,\n      default: \"#555;\"\n    },\n    backGroundColor: {\n      type: String,\n      default: \"white\"\n    },\n    displayData: {\n      type: String,\n      default: \"block\"\n    },\n    showHeader: {\n      type: Boolean,\n      default: false\n    },\n    defaultDiv: {\n      type: Boolean,\n      default: true\n    },\n    customStyle: {\n      type: String,\n      default: \"\"\n    },\n    _renderingProps: {\n      type: Object,\n      default: null\n    },\n    isTableCell: {\n      type: Boolean,\n      default: false\n    },\n    colspan: {\n      type: [String, Number],\n      default: null\n    }\n  },\n  mounted() {\n    if ((<any>this).isRendered === false) {\n      return;\n    }\n    let holderDiv = <HTMLElement>this.$refs[\"holder\"];\n    for (let element of this.__domElements.default) {\n      holderDiv.appendChild(element);\n    }\n  },\n  data() {\n    return {\n      toggleContentData: this.toggleContent,\n      toggleTitle: this.header,\n      toggleRightTitle: this.rightHeader,\n      bGColor: this.backGroundColor,\n      rigthSubtitle: this.rightSubHeader,\n      leftSubtitle: this.leftSubHeader\n    };\n  },\n  created() {\n  },\n  methods: {\n    switchContent() {\n      if (this.disableToggle) { return; }\n      (<any>this).toggleContentData = !(<any>this).toggleContentData;\n      let icon = this.$refs[\"toggle-arrow-down\"];\n    },\n    getHeaderClass() {\n      return \"toggle-header\";\n    },\n    resetForm() {\n      let componentCollection: IComponentCollection = this._renderingProps.context().contextItems.Dory.GetComponentCollectionByID(this._renderingProps.props().ID);\n      (<any>this).arrangeChildElements(componentCollection, \"reset\");\n      (<any>this).$validator.reset();\n    },\n    disableForm(state: boolean) {\n      let componentCollection: IComponentCollection = this._renderingProps.context().contextItems.Dory.GetComponentCollectionByID(this._renderingProps.props().ID);\n      (<any>this).arrangeChildElements(componentCollection, \"disable\", state);\n    },\n    arrangeChildElements(componentCollection: IComponentCollection, type: string, state: boolean) {\n      const self = (<any>this);\n      if (componentCollection.children) {\n        for (let index = 0; index < componentCollection.children.default.length; index++) {\n          const element = componentCollection.children.default[index];\n          self.$nextTick(() => {\n            if (type == \"disable\") {\n              element.component!['disabled'] = state ? true : false\n            }\n            if (type == \"reset\") {\n              if (element.component![\"dataValue\"]) {\n                element.component![\"dataValue\"] = null;\n              }\n              else if (element.component![\"radioGroupValue\"]) {\n                element.component![\"radioGroupValue\"] = null;\n              }\n              else if (element.component![\"valueData\"]) {\n                element.component![\"valueData\"] = null;\n              }\n            }\n          })\n          self.arrangeChildElements(element, type, state);\n        }\n      }\n    }\n  },\n  computed: {\n    headerClass() {\n      return (<any>this).getHeaderClass();\n    },\n    validateAll() {\n      if ((<any>this).isRendered === false) {\n        return false;\n      }\n      if ((<any>this).isDisabled === false) {\n        return false;\n      }\n      return true;\n    }\n  }\n})\n</script>\n\n\n<style scoped>\n.groupbox-container-toggle {\n  flex: 1 0 100%;\n  max-width: 100%;\n  outline: none;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  border-top: 1px solid #ebeef5;\n}\n.toggle-body {\n  height: inherit;\n  width: inherit;\n  padding: 14px;\n}\n.toggle-header {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  position: relative;\n  padding: 12px 24px;\n  min-height: 48px;\n  border-bottom: 1px solid #ebeef5;\n}\n\n.header {\n  /* display: flex; */\n  cursor: default;\n  align-items: center;\n  position: relative;\n  padding: 12px 12px;\n  min-height: 48px;\n}\n\n.toggle-header .toggle-header-icon .v-icon {\n  color: rgba(0, 0, 0, 0.54);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  transform: rotate(-90deg);\n}\n.header .toggle-header-icon .v-icon {\n  color: rgba(0, 0, 0, 0.54);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  transform: rotate(-90deg);\n}\n\n.header-text {\n  /* display: flex; */\n  font-size: 14pt;\n  min-width: 200px;\n  color: #555;\n  display: inline-block;\n  white-space: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n}\n.subheader-text {\n  min-width: 200px;\n  color: #555;\n  display: inline-block;\n  white-space: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 200;\n}\n.groupBoxActive .toggle-header-icon .v-icon {\n  transform: rotateZ(0);\n}\n.toggle-header > *:not(.toggle-header-icon) {\n  flex: 1 1 auto;\n}\n.groupBoxActive.toggle-header:before {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  width: 95%;\n  top: 100%;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.5s;\n}\n.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {\n  opacity: 0;\n}\n.defaultDiv {\n  padding: 3px 3px;\n}\n.renderMode {\n  background-color: white;\n  margin: 20px 20px 0;\n  padding: 20px 30px;\n  border-radius: 8px;\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GroupBox.vue?vue&type=style&index=0&id=0ef7bfde&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GroupBox.vue?vue&type=style&index=0&id=0ef7bfde&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupBox_vue_vue_type_style_index_0_id_0ef7bfde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupBox.vue?vue&type=style&index=0&id=0ef7bfde&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GroupBox.vue?vue&type=style&index=0&id=0ef7bfde&scoped=true&lang=css&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupBox_vue_vue_type_style_index_0_id_0ef7bfde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupBox_vue_vue_type_style_index_0_id_0ef7bfde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupBox_vue_vue_type_style_index_0_id_0ef7bfde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupBox_vue_vue_type_style_index_0_id_0ef7bfde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/quick/GroupBox.vue":
/*!*******************************************!*\
  !*** ./src/components/quick/GroupBox.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GroupBox_vue_vue_type_template_id_0ef7bfde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupBox.vue?vue&type=template&id=0ef7bfde&scoped=true& */ "./src/components/quick/GroupBox.vue?vue&type=template&id=0ef7bfde&scoped=true&");
/* harmony import */ var _GroupBox_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupBox.vue?vue&type=script&lang=ts& */ "./src/components/quick/GroupBox.vue?vue&type=script&lang=ts&");
/* harmony import */ var _GroupBox_vue_vue_type_style_index_0_id_0ef7bfde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupBox.vue?vue&type=style&index=0&id=0ef7bfde&scoped=true&lang=css& */ "./src/components/quick/GroupBox.vue?vue&type=style&index=0&id=0ef7bfde&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GroupBox_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GroupBox_vue_vue_type_template_id_0ef7bfde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GroupBox_vue_vue_type_template_id_0ef7bfde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0ef7bfde",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/GroupBox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/GroupBox.vue?vue&type=script&lang=ts&":
/*!********************************************************************!*\
  !*** ./src/components/quick/GroupBox.vue?vue&type=script&lang=ts& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupBox_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupBox.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GroupBox.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupBox_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/GroupBox.vue?vue&type=style&index=0&id=0ef7bfde&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./src/components/quick/GroupBox.vue?vue&type=style&index=0&id=0ef7bfde&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupBox_vue_vue_type_style_index_0_id_0ef7bfde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupBox.vue?vue&type=style&index=0&id=0ef7bfde&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GroupBox.vue?vue&type=style&index=0&id=0ef7bfde&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/quick/GroupBox.vue?vue&type=template&id=0ef7bfde&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./src/components/quick/GroupBox.vue?vue&type=template&id=0ef7bfde&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupBox_vue_vue_type_template_id_0ef7bfde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupBox_vue_vue_type_template_id_0ef7bfde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupBox_vue_vue_type_template_id_0ef7bfde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupBox.vue?vue&type=template&id=0ef7bfde&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GroupBox.vue?vue&type=template&id=0ef7bfde&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GroupBox.vue?vue&type=template&id=0ef7bfde&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/GroupBox.vue?vue&type=template&id=0ef7bfde&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _vm.formName
    ? _c(
        "form",
        {
          ref: _vm.formName,
          attrs: {
            "data-vv-name": _vm.formName,
            "data-vv-scope": _vm.formName,
          },
        },
        [
          _vm.validateAll
            ? _c(
                "div",
                { attrs: { id: _vm.id } },
                [
                  _vm.toggleContent
                    ? [
                        _c(
                          "div",
                          {
                            staticClass: "groupbox-container-toggle",
                            style:
                              "background-color: " +
                              _vm.backGroundColor +
                              " !important;",
                          },
                          [
                            _c(
                              "div",
                              {
                                class: _vm.headerClass || {
                                  groupBoxActive: _vm.toggleContentData,
                                },
                                on: { click: _vm.switchContent },
                              },
                              [
                                _c("div", { staticClass: "header-text" }, [
                                  _vm._v(_vm._s(_vm.toggleTitle)),
                                ]),
                                _vm._v(" "),
                                _vm.showToggleArrow
                                  ? _c(
                                      "div",
                                      { staticClass: "toggle-header-icon" },
                                      [
                                        _c(
                                          "i",
                                          {
                                            ref: "toggle-arrow-down",
                                            staticClass:
                                              "v-icon material-icons theme--light",
                                            attrs: { "aria-hidden": "true" },
                                          },
                                          [_vm._v("keyboard_arrow_down")]
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  display: "table",
                                  width: "100%",
                                },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "subheader-text",
                                    staticStyle: {
                                      width: "50%",
                                      padding: "12px 24px",
                                    },
                                    style:
                                      "font-size:" +
                                      _vm.leftSubHeaderFontSize +
                                      "; color:" +
                                      _vm.leftSubHeaderFontColor +
                                      ";",
                                  },
                                  [_vm._v(_vm._s(_vm.leftSubtitle))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "subheader-text",
                                    staticStyle: {
                                      width: "50%",
                                      padding: "12px 24px",
                                      "text-align": "right",
                                    },
                                    style:
                                      "font-size:" +
                                      _vm.rightSubHeaderFontSize +
                                      "; color:" +
                                      _vm.rightSubHeaderFontColor +
                                      ";",
                                  },
                                  [_vm._v(_vm._s(_vm.rigthSubtitle))]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("transition", { attrs: { name: "fade" } }, [
                              _c("div", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.toggleContentData,
                                    expression: "toggleContentData",
                                  },
                                ],
                                ref: "holder",
                                staticClass: "toggle-body",
                                style: { display: _vm.displayData },
                              }),
                            ]),
                          ],
                          1
                        ),
                      ]
                    : [
                        _c(
                          "div",
                          {
                            ref: "holder",
                            class: [
                              { defaultDiv: _vm.defaultDiv },
                              {
                                renderMode:
                                  _vm.defaultDiv &&
                                  !_vm._renderingProps.isEditMode,
                              },
                            ],
                            style:
                              "background-color: " +
                              _vm.backGroundColor +
                              " !important;  display:" +
                              _vm.displayData +
                              " !important; " +
                              _vm.customStyle,
                          },
                          [
                            _vm.showHeader
                              ? [
                                  _c("div", { class: _vm.headerClass }, [
                                    _c("div", [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "header-text",
                                          staticStyle: {
                                            width: "50%",
                                            float: "left",
                                          },
                                        },
                                        [_vm._v(_vm._s(_vm.toggleTitle))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "header-text",
                                          staticStyle: {
                                            width: "50%",
                                            "text-align": "right",
                                          },
                                        },
                                        [_vm._v(_vm._s(_vm.toggleRightTitle))]
                                      ),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        display: "table",
                                        width: "100%",
                                      },
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "subheader-text",
                                          staticStyle: {
                                            width: "50%",
                                            padding: "12px 24px",
                                          },
                                          style:
                                            "font-size:" +
                                            _vm.leftSubHeaderFontSize +
                                            "; color:" +
                                            _vm.leftSubHeaderFontColor +
                                            ";",
                                        },
                                        [_vm._v(_vm._s(_vm.leftSubtitle))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "subheader-text",
                                          staticStyle: {
                                            width: "50%",
                                            padding: "12px 24px",
                                            "text-align": "right",
                                          },
                                          style:
                                            "font-size:" +
                                            _vm.rightSubHeaderFontSize +
                                            "; color:" +
                                            _vm.rightSubHeaderFontColor +
                                            ";",
                                        },
                                        [_vm._v(_vm._s(_vm.rigthSubtitle))]
                                      ),
                                    ]
                                  ),
                                ]
                              : _vm._e(),
                          ],
                          2
                        ),
                      ],
                ],
                2
              )
            : _vm._e(),
        ]
      )
    : _vm.formName == null && !_vm.isTableCell
    ? _c("div", [
        _vm.validateAll
          ? _c(
              "div",
              { attrs: { id: _vm.id } },
              [
                _vm.toggleContent
                  ? [
                      _c(
                        "div",
                        {
                          staticClass: "groupbox-container-toggle",
                          style:
                            "background-color: " +
                            _vm.backGroundColor +
                            " !important;",
                        },
                        [
                          _c(
                            "div",
                            {
                              class: _vm.headerClass || {
                                groupBoxActive: _vm.toggleContentData,
                              },
                              on: { click: _vm.switchContent },
                            },
                            [
                              _c("div", { staticClass: "header-text" }, [
                                _vm._v(_vm._s(_vm.toggleTitle)),
                              ]),
                              _vm._v(" "),
                              _vm.showToggleArrow
                                ? _c(
                                    "div",
                                    { staticClass: "toggle-header-icon" },
                                    [
                                      _c(
                                        "i",
                                        {
                                          ref: "toggle-arrow-down",
                                          staticClass:
                                            "v-icon material-icons theme--light",
                                          attrs: { "aria-hidden": "true" },
                                        },
                                        [_vm._v("keyboard_arrow_down")]
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: { display: "table", width: "100%" },
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "subheader-text",
                                  staticStyle: {
                                    width: "50%",
                                    padding: "12px 24px",
                                  },
                                  style:
                                    "font-size:" +
                                    _vm.leftSubHeaderFontSize +
                                    "; color:" +
                                    _vm.leftSubHeaderFontColor +
                                    ";",
                                },
                                [_vm._v(_vm._s(_vm.leftSubtitle))]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "subheader-text",
                                  staticStyle: {
                                    width: "50%",
                                    padding: "12px 24px",
                                    "text-align": "right",
                                  },
                                  style:
                                    "font-size:" +
                                    _vm.rightSubHeaderFontSize +
                                    "; color:" +
                                    _vm.rightSubHeaderFontColor +
                                    ";",
                                },
                                [_vm._v(_vm._s(_vm.rigthSubtitle))]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("transition", { attrs: { name: "fade" } }, [
                            _c("div", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.toggleContentData,
                                  expression: "toggleContentData",
                                },
                              ],
                              ref: "holder",
                              staticClass: "toggle-body",
                              style: { display: _vm.displayData },
                            }),
                          ]),
                        ],
                        1
                      ),
                    ]
                  : [
                      _c(
                        "div",
                        {
                          ref: "holder",
                          class: [
                            { defaultDiv: _vm.defaultDiv },
                            {
                              renderMode:
                                _vm.defaultDiv &&
                                !_vm._renderingProps.isEditMode,
                            },
                          ],
                          style:
                            "background-color: " +
                            _vm.backGroundColor +
                            " !important;  display:" +
                            _vm.displayData +
                            " !important; " +
                            _vm.customStyle,
                        },
                        [
                          _vm.showHeader
                            ? [
                                _c("div", { class: _vm.headerClass }, [
                                  _c("div", [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "header-text",
                                        staticStyle: {
                                          width: "50%",
                                          float: "left",
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.toggleTitle))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "header-text",
                                        staticStyle: {
                                          width: "50%",
                                          "text-align": "right",
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.toggleRightTitle))]
                                    ),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      display: "table",
                                      width: "100%",
                                    },
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "subheader-text",
                                        staticStyle: {
                                          width: "50%",
                                          padding: "12px 24px",
                                        },
                                        style:
                                          "font-size:" +
                                          _vm.leftSubHeaderFontSize +
                                          "; color:" +
                                          _vm.leftSubHeaderFontColor +
                                          ";",
                                      },
                                      [_vm._v(_vm._s(_vm.leftSubtitle))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "subheader-text",
                                        staticStyle: {
                                          width: "50%",
                                          padding: "12px 24px",
                                          "text-align": "right",
                                        },
                                        style:
                                          "font-size:" +
                                          _vm.rightSubHeaderFontSize +
                                          "; color:" +
                                          _vm.rightSubHeaderFontColor +
                                          ";",
                                      },
                                      [_vm._v(_vm._s(_vm.rigthSubtitle))]
                                    ),
                                  ]
                                ),
                              ]
                            : _vm._e(),
                        ],
                        2
                      ),
                    ],
              ],
              2
            )
          : _vm._e(),
      ])
    : _vm.isTableCell
    ? _c("td", { ref: "holder", attrs: { colspan: _vm.colspan } })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_GroupBox_vue.js.map