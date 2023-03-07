"use strict";
(this["webpackChunkwebsdk"] = this["webpackChunkwebsdk"] || []).push([["src_components_quick_QMenu_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QMenu.vue?vue&type=script&lang=ts&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QMenu.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    name: "QMenu",
    data: function () { return ({
        mini: true,
        resultList: [Object],
        innerClass: "",
        containes: false,
    }); },
    props: {
        activeColor: {
            type: String,
        },
        width: {
            type: String,
        },
        miniVariantWidth: {
            type: String,
        },
        menuData: {
            type: [Object],
        },
        collapseOnItemSelect: {
            type: Boolean,
            default: false,
        },
        hideMenuTitle: {
            type: Boolean,
            default: false,
        },
        fixed: {
            type: Boolean,
        },
        color: {
            type: String,
        },
        autoCollapse: {
            type: Boolean,
        },
        title: {
            type: String,
        },
        showOnlyIcon: {
            type: Boolean,
            default: false,
        },
        expandOnHover: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
        menuData: {
            immediate: true,
            handler: function (newValue) {
                this.resultList = newValue !== null && newValue !== void 0 ? newValue : [];
                this.childrenSetActiveDefaultAsFalse(this.resultList);
            },
        },
        color: {
            immediate: true,
            handler: function (newValue) {
                this.setTheme();
            },
        },
        mini: {
            immediate: true,
            handler: function (newValue) {
                this.$emit("update:mini-variant", newValue);
            },
        },
    },
    mounted: function () { },
    destroyed: function () {
        var _a;
        (_a = this.$el) === null || _a === void 0 ? void 0 : _a.remove();
    },
    methods: {
        setTheme: function () {
            switch (this.activeColor) {
                case "primary":
                    return "primaryTheme";
                case "secondary":
                    return "secondaryTheme";
                case "success":
                    return "successTheme";
                case "error":
                    return "errorTheme";
                case "warning":
                    return "warningTheme";
                default:
                    if (this.color == undefined) {
                        return "secondaryTheme";
                    }
                    else {
                        return "white--text";
                    }
            }
        },
        isIconPathAvaliable: function (imagePath) {
            var isAvaliable = imagePath && imagePath.startsWith("mdi-") ? true : false;
            return isAvaliable;
        },
        isImagePathAvaliable: function (imagePath) {
            var isAvaliable = imagePath &&
                (imagePath.toLocaleLowerCase("tr").startsWith("http:") ||
                    imagePath.toLocaleLowerCase("tr").startsWith("https:"))
                ? true
                : false;
            return isAvaliable;
        },
        setPrependIcon: function (imagePath) {
            return imagePath && imagePath.startsWith("mdi-") ? imagePath : "";
        },
        setIconSize: function (iconPath) {
            var _a, _b, _c, _d, _e, _f;
            return {
                size: (_a = iconPath === null || iconPath === void 0 ? void 0 : iconPath.iconOptions) === null || _a === void 0 ? void 0 : _a.size,
                "x-small": !!((_b = iconPath === null || iconPath === void 0 ? void 0 : iconPath.iconOptions) === null || _b === void 0 ? void 0 : _b.xSmall),
                small: !!((_c = iconPath === null || iconPath === void 0 ? void 0 : iconPath.iconOptions) === null || _c === void 0 ? void 0 : _c.small),
                large: !!((_d = iconPath === null || iconPath === void 0 ? void 0 : iconPath.iconOptions) === null || _d === void 0 ? void 0 : _d.large),
                "x-large": !!((_e = iconPath === null || iconPath === void 0 ? void 0 : iconPath.iconOptions) === null || _e === void 0 ? void 0 : _e.xLarge),
                color: (_f = iconPath === null || iconPath === void 0 ? void 0 : iconPath.iconOptions) === null || _f === void 0 ? void 0 : _f.color
            };
        },
        setImageSize: function (imagePath) {
            var _a, _b;
            return {
                height: (_a = imagePath === null || imagePath === void 0 ? void 0 : imagePath.imageOptions) === null || _a === void 0 ? void 0 : _a.height,
                width: (_b = imagePath === null || imagePath === void 0 ? void 0 : imagePath.imageOptions) === null || _b === void 0 ? void 0 : _b.width,
            };
        },
        childrenSetActiveDefaultAsFalse: function (list) {
            var _this = this;
            list.forEach(function (item) {
                if (Object(item).imagePath &&
                    !Object(item).imagePath.startsWith("mdi-")) {
                    if (!Object(item)
                        .imagePath.toLocaleLowerCase("tr")
                        .startsWith("http:") &&
                        !Object(item).imagePath.toLocaleLowerCase("tr").startsWith("https:")) {
                        var protocolAndPath = window.location.protocol + "//" + window.location.host;
                        _this.$set(item, "imagePath", protocolAndPath +
                            (Object(item).imagePath.startsWith("/")
                                ? Object(item).imagePath
                                : "/" + Object(item).imagePath));
                    }
                }
                if (!Object(item).active) {
                    _this.$set(item, "active", false);
                }
                if (Object(item).children) {
                    _this.childrenSetActiveDefaultAsFalse(Object(item).children);
                }
            });
        },
        menuItemsLoop: function (list, clickedItem) {
            var _this = this;
            this.containes = false;
            list.forEach(function (item) {
                if (!Object(item).children) {
                    if (Object(item).active) {
                        setTimeout(function () {
                            Object(item).active = false;
                        }, 100);
                    }
                }
                else {
                    if (_this.autoCollapse) {
                        _this.isCurrentGroupContainsClickedItem(item, clickedItem);
                        if (_this.containes == false) {
                            Object(item).active = false;
                        }
                    }
                    _this.menuItemsLoop(Object(item).children, clickedItem);
                }
            });
        },
        isCurrentGroupContainsClickedItem: function (item, clickedItem) {
            var _this = this;
            item.children.forEach(function (child) {
                if (child == clickedItem) {
                    _this.containes = true;
                }
                else {
                    if (child.children) {
                        _this.isCurrentGroupContainsClickedItem(child, clickedItem);
                    }
                }
            });
        },
        clickRow: function (item, index) {
            if (this.collapseOnItemSelect) {
                this.updateMini();
            }
            if (Object(item).active) {
                Object(item).active = false;
                this.$emit("click:row", item);
            }
            else {
                var self_1 = this;
                this.menuItemsLoop(this.resultList, item);
                setTimeout(function () {
                    Object(item).active = true;
                    self_1.$emit("click:row", item);
                }, 100);
            }
        },
        calculatePadding: function (index, item) {
            var padding = 0;
            if (item.imagePath && item.imagePath.startsWith("mdi-")) {
                padding = 15;
            }
            else if (item.imagePath &&
                (item.imagePath.toLocaleLowerCase("tr").startsWith("http:") ||
                    item.imagePath.toLocaleLowerCase("tr").startsWith("https:"))) {
                padding = 15;
            }
            else {
                padding = 15 * index + 24 * index;
            }
            return padding;
        },
        collapseAll: function () {
            this.resultList.forEach(function (item) {
                Object(item).active = false;
            });
        },
        updateMini: function () {
            if (this.expandOnHover) {
                return;
            }
            this.collapseAll();
            this.mini = !this.mini;
        },
        onClickGroup: function () {
            if (this.mini) {
                this.mini = false;
            }
            if (this.autoCollapse) {
                this.resultList.forEach(function (item) {
                    if (Object(item).active) {
                        setTimeout(function () {
                            Object(item).active = false;
                        }, 100);
                    }
                });
            }
        },
    },
}));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QMenu.vue?vue&type=style&index=0&id=84290464&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QMenu.vue?vue&type=style&index=0&id=84290464&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-list-item__icon > .v-image {\n  margin-top: -10px;\n}\n.v-list-item__icon:first-child {\n  margin-right: 15px !important;\n}\n.prependIcon .v-list-item__icon {\n  margin-right: 0 !important;\n}\n.firstChild .v-list-item__icon:first-child {\n  padding-left: 39px;\n}\n.secondChild .v-list-item__icon:first-child {\n  padding-left: 78px;\n}\n.thirdChild .v-list-item__icon:first-child {\n  padding-left: 117px;\n}\n.v-navigation-drawer__content::-webkit-scrollbar {\n  display: none;\n}\n.v-navigation-drawer__content {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n.secondaryTheme {\n  color: black;\n}\n.secondaryTheme .v-list-item--active {\n  color: black !important;\n}\n.secondaryTheme .v-list-item__icon {\n  color: black !important;\n}\n.primaryTheme {\n  color: #1976d2 !important;\n}\n.primaryTheme .v-list-item--active {\n  color: #1976d2 !important;\n}\n.primaryTheme .v-list-item__icon {\n  color: #1976d2 !important;\n}\n.v-list-group--active.primaryTheme .v-list-item--active .v-list-item__title {\n  color: #1976d2 !important;\n}\n.successTheme {\n  color: #4cb050 !important;\n}\n.successTheme .v-list-item--active {\n  color: #4cb050 !important;\n}\n.successTheme .v-list-item__icon {\n  color: #4cb050 !important;\n}\n.v-list-group--active.successTheme .v-list-item--active .v-list-item__title {\n  color: #4cb050 !important;\n}\n.errorTheme {\n  color: #ff5252 !important;\n}\n.errorTheme .v-list-item--active {\n  color: #ff5252 !important;\n}\n.errorTheme .v-list-item__icon {\n  color: #ff5252 !important;\n}\n.v-list-group--active.errorTheme .v-list-item--active .v-list-item__title {\n  color: #ff5252 !important;\n}\n.warningTheme {\n  color: #fb8c00 !important;\n}\n.warningTheme .v-list-item--active {\n  color: #fb8c00 !important;\n}\n.warningTheme .v-list-item__icon {\n  color: #fb8c00 !important;\n}\n.v-list-group--active.warningTheme .v-list-item--active .v-list-item__title {\n  color: #fb8c00 !important;\n}\n\n/* .blackTheme .v-list-item--active:before{\n  opacity: 0.12!important;\n  color: blue!important;\n} */\n.v-list {\n  padding: unset !important;\n}\n.v-list-group__header.v-list-item {\n  height: 56px;\n}\n.v-list-group--active.white--text .v-list-item--active .v-list-item__title {\n  color: white;\n}\n.v-list-item__icon {\n  color: white;\n}\n", "",{"version":3,"sources":["webpack://./src/components/quick/QMenu.vue"],"names":[],"mappings":";AA8jBA;EACA,iBAAA;AACA;AACA;EACA,6BAAA;AACA;AACA;EACA,0BAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,mBAAA;AACA;AACA;EACA,aAAA;AACA;AACA;EACA,wBAAA,EAAA,gBAAA;EACA,qBAAA,EAAA,YAAA;AACA;AACA;EACA,YAAA;AACA;AACA;EACA,uBAAA;AACA;AACA;EACA,uBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;AACA;;AAEA;;;GAGA;AACA;EACA,yBAAA;AACA;AACA;EACA,YAAA;AACA;AACA;EACA,YAAA;AACA;AACA;EACA,YAAA;AACA","sourcesContent":["<template>\n  <v-navigation-drawer\n    permanent\n    :mini-variant.sync=\"mini\"\n    :mini-variant-width=\"miniVariantWidth\"\n    :expand-on-hover=\"expandOnHover\"\n    v-model=\"navDrawer\"\n    :fixed=\"fixed\"\n    :width=\"width\"\n    :color=\"color\"\n  >\n    <v-list v-if=\"!hideMenuTitle\">\n      <v-list-item class=\"px-2\">\n        <v-list-item-avatar>\n          <v-icon\n            @click=\"updateMini()\"\n            v-if=\"!showOnlyIcon\"\n            id=\"menuBtn\"\n            :class=\"setTheme()\"\n            large\n            >mdi-menu</v-icon\n          >\n        </v-list-item-avatar>\n        <v-list-item-title :class=\"setTheme()\">{{ title }}</v-list-item-title>\n        <v-icon\n          v-show=\"!expandOnHover\"\n          @click=\"updateMini()\"\n          id=\"closeBtn\"\n          :class=\"setTheme()\"\n          small\n          >mdi-close</v-icon\n        >\n      </v-list-item>\n    </v-list>\n\n    <div v-for=\"(item1, i) in resultList\" :key=\"i\">\n      <v-list v-if=\"item1.menuItem\">\n        <v-list-group\n          v-if=\"item1.children && item1.children.length > 0\"\n          :class=\"setTheme()\"\n          v-model=\"item1.active\"\n          @click=\"onClickGroup()\"\n        >\n          <template v-slot:prependIcon>\n            <v-img\n              v-if=\"isImagePathAvaliable(item1.imagePath)\"\n              :src=\"item1.imagePath\"\n              v-bind=\"setImageSize(item1.options)\"\n            ></v-img>\n            <v-icon\n              v-if=\"setPrependIcon(item1.imagePath)\"\n              v-bind=\"setIconSize(item1.options)\"\n            >\n              {{ setPrependIcon(item1.imagePath) }}\n            </v-icon>\n          </template>\n\n          <template v-slot:activator>\n            <v-list-item-content :id=\"item1.code\">\n              <v-list-item>\n                <v-list-item-title>{{ item1.code }}</v-list-item-title>\n              </v-list-item>\n            </v-list-item-content>\n          </template>\n\n          <div v-for=\"(item2, k) in item1.children\" :key=\"k\">\n            <v-list class=\"firstChild prependIcon\" v-if=\"item2.menuItem\">\n              <v-list-group\n                v-if=\"item2.children && item2.children.length > 0\"\n                v-model=\"item2.active\"\n                :class=\"setTheme()\"\n              >\n                <template v-slot:prependIcon>\n                  <v-img\n                    v-if=\"isImagePathAvaliable(item2.imagePath)\"\n                    :src=\"item2.imagePath\"\n                    v-bind=\"setImageSize(item2.options)\"\n                  ></v-img>\n                  <v-icon\n                    v-if=\"setPrependIcon(item2.imagePath)\"\n                    v-bind=\"setIconSize(item2.options)\"\n                  >\n                    {{ setPrependIcon(item2.imagePath) }}\n                  </v-icon>\n                </template>\n\n                <template v-slot:activator>\n                  <v-list-item-content :id=\"item2.code\">\n                    <v-list-item-title\n                      :style=\"`padding-left:${calculatePadding(1, item2)}px`\"\n                      class=\"firstChild\"\n                      v-text=\"item2.code\"\n                    >\n                    </v-list-item-title>\n                  </v-list-item-content>\n                </template>\n\n                <div :key=\"k\" v-for=\"(item3, k) in item2.children\">\n                  <v-list class=\"secondChild prependIcon\" v-if=\"item3.menuItem\">\n                    <v-list-group\n                      v-if=\"item3.children && item3.children.length > 0\"\n                      :class=\"setTheme()\"\n                      v-model=\"item3.active\"\n                    >\n                      <template v-slot:prependIcon>\n                        <v-img\n                          v-if=\"isImagePathAvaliable(item3.imagePath)\"\n                          :src=\"item3.imagePath\"\n                          v-bind=\"setImageSize(item3.options)\"\n                        ></v-img>\n                        <v-icon\n                          v-if=\"setPrependIcon(item3.imagePath)\"\n                          v-bind=\"setIconSize(item3.options)\"\n                        >\n                          {{ setPrependIcon(item3.imagePath) }}\n                        </v-icon>\n                      </template>\n\n                      <template v-slot:activator>\n                        <v-list-item-content :id=\"item3.code\">\n                          <v-list-item-title\n                            :style=\"`padding-left:${calculatePadding(\n                              2,\n                              item3\n                            )}px`\"\n                            class=\"secondChild\"\n                            v-text=\"item3.code\"\n                          >\n                          </v-list-item-title>\n                        </v-list-item-content>\n                      </template>\n\n                      <div :key=\"k\" v-for=\"(item4, k) in item3.children\">\n                        <v-list class=\"thirdChild\" v-if=\"item4.menuItem\">\n                          <v-list-group\n                            v-if=\"item4.children && item4.children.length > 0\"\n                            :class=\"setTheme()\"\n                            v-model=\"item4.active\"\n                          >\n                            <template v-slot:prependIcon>\n                              <v-img\n                                v-if=\"isImagePathAvaliable(item4.imagePath)\"\n                                :src=\"item4.imagePath\"\n                                v-bind=\"setImageSize(item4.options)\"\n                              ></v-img>\n                              <v-icon\n                                v-if=\"setPrependIcon(item4.imagePath)\"\n                                v-bind=\"setIconSize(item4.options)\"\n                              >\n                                {{ setPrependIcon(item4.imagePath) }}\n                              </v-icon>\n                            </template>\n\n                            <template v-slot:activator>\n                              <v-list-item-content>\n                                <v-list-item-title\n                                  :style=\"`padding-left:${calculatePadding(\n                                    3,\n                                    item4\n                                  )}px`\"\n                                  v-text=\"item4.code\"\n                                ></v-list-item-title>\n                              </v-list-item-content>\n                            </template>\n                          </v-list-group>\n\n                          <v-list-item-group v-else :class=\"setTheme()\">\n                            <v-list-item\n                              @click=\"clickRow(item4)\"\n                              v-model=\"item4.active\"\n                            >\n                              <v-list-item-icon\n                                v-if=\"\n                                  isIconPathAvaliable(item4.imagePath) ||\n                                  isImagePathAvaliable(item4.imagePath)\n                                \"\n                              >\n                                <v-icon\n                                  v-if=\"isIconPathAvaliable(item4.imagePath)\"\n                                  v-text=\"item4.imagePath\"\n                                  v-bind=\"setIconSize(item4.options)\"\n                                ></v-icon>\n\n                                <v-img\n                                  v-if=\"isImagePathAvaliable(item4.imagePath)\"\n                                  :src=\"item4.imagePath\"\n                                  v-bind=\"setImageSize(item4.options)\"\n                                ></v-img>\n                              </v-list-item-icon>\n\n                              <v-list-item-content :id=\"item4.code\">\n                                <v-list-item-title\n                                  :style=\"`padding-left:${calculatePadding(\n                                    3,\n                                    item4\n                                  )}px`\"\n                                  v-text=\"item4.code\"\n                                >\n                                </v-list-item-title>\n                              </v-list-item-content>\n                            </v-list-item>\n                          </v-list-item-group>\n                        </v-list>\n                      </div>\n                    </v-list-group>\n                    <v-list-item-group v-else :class=\"setTheme()\">\n                      <v-list-item\n                        link\n                        @click=\"clickRow(item3)\"\n                        v-model=\"item3.active\"\n                      >\n                        <v-list-item-icon\n                          v-if=\"\n                            isIconPathAvaliable(item3.imagePath) ||\n                            isImagePathAvaliable(item3.imagePath)\n                          \"\n                        >\n                          <v-icon\n                            v-if=\"isIconPathAvaliable(item3.imagePath)\"\n                            v-text=\"item3.imagePath\"\n                            v-bind=\"setIconSize(item3.options)\"\n                          ></v-icon>\n\n                          <v-img\n                            v-if=\"isImagePathAvaliable(item3.imagePath)\"\n                            :src=\"item3.imagePath\"\n                            v-bind=\"setIconSize(item3.options)\"\n                            \n                          ></v-img>\n                        </v-list-item-icon>\n\n                        <v-list-item-content :id=\"item3.code\">\n                          <v-list-item-title\n                            :style=\"`padding-left:${calculatePadding(\n                              2,\n                              item3\n                            )}px`\"\n                            v-text=\"item3.code\"\n                          >\n                          </v-list-item-title>\n                        </v-list-item-content>\n                      </v-list-item>\n                    </v-list-item-group>\n                  </v-list>\n                </div>\n              </v-list-group>\n              <v-list-item-group v-else :class=\"setTheme()\">\n                <v-list-item\n                  @click=\"clickRow(item2)\"\n                  id=\"listItem2\"\n                  v-model=\"item2.active\"\n                >\n                  <v-list-item-icon\n                    v-if=\"\n                      isIconPathAvaliable(item2.imagePath) ||\n                      isImagePathAvaliable(item2.imagePath)\n                    \"\n                  >\n                    <v-icon\n                      v-if=\"isIconPathAvaliable(item2.imagePath)\"\n                      v-text=\"item2.imagePath\"\n                      v-bind=\"setIconSize(item2.options)\"\n                    ></v-icon>\n                    <v-img\n                      v-if=\"isImagePathAvaliable(item2.imagePath)\"\n                      :src=\"item2.imagePath\"\n                      v-bind=\"setIconSize(item2.options)\"\n\n                    ></v-img>\n                  </v-list-item-icon>\n                  <v-list-item-content :id=\"item2.code\">\n                    <v-list-item-title\n                      :style=\"`padding-left:${calculatePadding(1, item2)}px`\"\n                      v-text=\"item2.code\"\n                    >\n                    </v-list-item-title>\n                  </v-list-item-content>\n                </v-list-item>\n              </v-list-item-group>\n            </v-list>\n          </div>\n        </v-list-group>\n\n        <v-list-item-group v-else :class=\"setTheme()\">\n          <v-list-item v-model=\"item1.active\" link @click=\"clickRow(item1)\">\n            <v-list-item-icon\n              v-if=\"\n                isIconPathAvaliable(item1.imagePath) ||\n                isImagePathAvaliable(item1.imagePath)\n              \"\n            >\n              <v-icon\n                v-if=\"isIconPathAvaliable(item1.imagePath)\"\n                v-text=\"item1.imagePath\"\n                v-bind=\"setIconSize(item1.options)\"\n              ></v-icon>\n              <v-img\n                v-if=\"isImagePathAvaliable(item1.imagePath)\"\n                :src=\"item1.imagePath\"\n                v-bind=\"setImageSize(item1.options)\"\n              ></v-img>\n            </v-list-item-icon>\n\n            <v-list-item-title\n              :style=\"`padding-left:${calculatePadding(1, item1)}px`\"\n              v-text=\"item1.code\"\n            >\n            </v-list-item-title>\n          </v-list-item>\n        </v-list-item-group>\n      </v-list>\n    </div>\n  </v-navigation-drawer>\n</template>\n\n<script lang=\"ts\">\nimport Vue from \"vue\";\nexport default Vue.extend({\n  name: \"QMenu\",\n  data: () => ({\n    mini: true,\n    resultList: [Object],\n    innerClass: \"\",\n    containes: false,\n  }),\n  props: {\n    activeColor: {\n      type: String,\n    },\n    width: {\n      type: String,\n    },\n    miniVariantWidth: {\n      type: String,\n    },\n    menuData: {\n      type: [Object],\n    },\n    collapseOnItemSelect: {\n      type: Boolean,\n      default: false,\n    },\n    hideMenuTitle: {\n      type: Boolean,\n      default: false,\n    },\n    fixed: {\n      type: Boolean,\n    },\n    color: {\n      type: String,\n    },\n    autoCollapse: {\n      type: Boolean,\n    },\n    title: {\n      type: String,\n    },\n    showOnlyIcon: {\n      type: Boolean,\n      default: false,\n    },\n    expandOnHover: {\n      type: Boolean,\n      default: false,\n    },\n  },\n  watch: {\n    menuData: {\n      immediate: true,\n      handler(newValue) {\n        this.resultList = newValue ?? [];\n        this.childrenSetActiveDefaultAsFalse(this.resultList);\n      },\n    },\n    color: {\n      immediate: true,\n      handler(newValue) {\n        this.setTheme();\n      },\n    },\n    mini: {\n      immediate: true,\n      handler(newValue) {\n        this.$emit(\"update:mini-variant\", newValue);\n      },\n    },\n  },\n  mounted() {},\n  destroyed() {\n    this.$el?.remove();\n  },\n  methods: {\n    setTheme() {\n      switch (this.activeColor) {\n        case \"primary\":\n          return \"primaryTheme\";\n        case \"secondary\":\n          return \"secondaryTheme\";\n        case \"success\":\n          return \"successTheme\";\n        case \"error\":\n          return \"errorTheme\";\n        case \"warning\":\n          return \"warningTheme\";\n        default:\n          if (this.color == undefined) {\n            return \"secondaryTheme\";\n          } else {\n            return \"white--text\";\n          }\n      }\n    },\n\n    isIconPathAvaliable(imagePath: any) {\n      let isAvaliable =\n        imagePath && imagePath.startsWith(\"mdi-\") ? true : false;\n      return isAvaliable;\n    },\n    isImagePathAvaliable(imagePath: any) {\n      let isAvaliable =\n        imagePath &&\n        (imagePath.toLocaleLowerCase(\"tr\").startsWith(\"http:\") ||\n          imagePath.toLocaleLowerCase(\"tr\").startsWith(\"https:\"))\n          ? true\n          : false;\n      return isAvaliable;\n    },\n    setPrependIcon(imagePath: any) {\n      return imagePath && imagePath.startsWith(\"mdi-\") ? imagePath : \"\";\n    },\n    setIconSize(iconPath: any) {\n      return {\n        size: iconPath?.iconOptions?.size,\n        \"x-small\": !!iconPath?.iconOptions?.xSmall,\n        small: !!iconPath?.iconOptions?.small,\n        large: !!iconPath?.iconOptions?.large,\n        \"x-large\": !!iconPath?.iconOptions?.xLarge,\n        color:iconPath?.iconOptions?.color\n      };\n    },\n    setImageSize(imagePath: any) {\n      return {\n        height: imagePath?.imageOptions?.height,\n        width: imagePath?.imageOptions?.width,\n      };\n    },\n    childrenSetActiveDefaultAsFalse(list) {\n      list.forEach((item: Object) => {\n        if (\n          Object(item).imagePath &&\n          !Object(item).imagePath.startsWith(\"mdi-\")\n        ) {\n          if (\n            !Object(item)\n              .imagePath.toLocaleLowerCase(\"tr\")\n              .startsWith(\"http:\") &&\n            !Object(item).imagePath.toLocaleLowerCase(\"tr\").startsWith(\"https:\")\n          ) {\n            let protocolAndPath =\n              window.location.protocol + \"//\" + window.location.host;\n            this.$set(\n              item,\n              \"imagePath\",\n              protocolAndPath +\n                (Object(item).imagePath.startsWith(\"/\")\n                  ? Object(item).imagePath\n                  : \"/\" + Object(item).imagePath)\n            );\n          }\n        }\n        if (!Object(item).active) {\n          this.$set(item, \"active\", false);\n        }\n        if (Object(item).children) {\n          this.childrenSetActiveDefaultAsFalse(Object(item).children);\n        }\n      });\n    },\n    menuItemsLoop(list, clickedItem) {\n      this.containes = false;\n      list.forEach((item: any) => {\n        if (!Object(item).children) {\n          if (Object(item).active) {\n            setTimeout(function () {\n              Object(item).active = false;\n            }, 100);\n          }\n        } else {\n          if (this.autoCollapse) {\n            this.isCurrentGroupContainsClickedItem(item, clickedItem);\n            if (this.containes == false) {\n              Object(item).active = false;\n            }\n          }\n          this.menuItemsLoop(Object(item).children, clickedItem);\n        }\n      });\n    },\n\n    isCurrentGroupContainsClickedItem(item, clickedItem) {\n      item.children.forEach((child) => {\n        if (child == clickedItem) {\n          this.containes = true;\n        } else {\n          if (child.children) {\n            this.isCurrentGroupContainsClickedItem(child, clickedItem);\n          }\n        }\n      });\n    },\n    clickRow(item: Object, index: Number) {\n      if (this.collapseOnItemSelect) {\n        this.updateMini();\n      }\n      if (Object(item).active) {\n        Object(item).active = false;\n        this.$emit(\"click:row\", item);\n      } else {\n        const self = this;\n        this.menuItemsLoop(this.resultList, item);\n        setTimeout(function () {\n          Object(item).active = true;\n          self.$emit(\"click:row\", item);\n        }, 100);\n      }\n    },\n    calculatePadding(index: number, item: any): Number {\n      let padding = 0;\n\n      if (item.imagePath && item.imagePath.startsWith(\"mdi-\")) {\n        padding = 15;\n      } else if (\n        item.imagePath &&\n        (item.imagePath.toLocaleLowerCase(\"tr\").startsWith(\"http:\") ||\n          item.imagePath.toLocaleLowerCase(\"tr\").startsWith(\"https:\"))\n      ) {\n        padding = 15;\n      } else {\n        padding = 15 * index + 24 * index;\n      }\n      return padding;\n    },\n    collapseAll() {\n      this.resultList.forEach((item: Object) => {\n        Object(item).active = false;\n      });\n    },\n    updateMini() {\n      if (this.expandOnHover) {\n        return;\n      }\n      this.collapseAll();\n      this.mini = !this.mini;\n    },\n    onClickGroup() {\n      if (this.mini) {\n        this.mini = false;\n      }\n      if (this.autoCollapse) {\n        this.resultList.forEach((item: Object) => {\n          if (Object(item).active) {\n            setTimeout(function () {\n              Object(item).active = false;\n            }, 100);\n          }\n        });\n      }\n    },\n  },\n});\n</script>\n\n<style >\n.v-list-item__icon > .v-image {\n  margin-top: -10px;\n}\n.v-list-item__icon:first-child {\n  margin-right: 15px !important;\n}\n.prependIcon .v-list-item__icon {\n  margin-right: 0 !important;\n}\n.firstChild .v-list-item__icon:first-child {\n  padding-left: 39px;\n}\n.secondChild .v-list-item__icon:first-child {\n  padding-left: 78px;\n}\n.thirdChild .v-list-item__icon:first-child {\n  padding-left: 117px;\n}\n.v-navigation-drawer__content::-webkit-scrollbar {\n  display: none;\n}\n.v-navigation-drawer__content {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n.secondaryTheme {\n  color: black;\n}\n.secondaryTheme .v-list-item--active {\n  color: black !important;\n}\n.secondaryTheme .v-list-item__icon {\n  color: black !important;\n}\n.primaryTheme {\n  color: #1976d2 !important;\n}\n.primaryTheme .v-list-item--active {\n  color: #1976d2 !important;\n}\n.primaryTheme .v-list-item__icon {\n  color: #1976d2 !important;\n}\n.v-list-group--active.primaryTheme .v-list-item--active .v-list-item__title {\n  color: #1976d2 !important;\n}\n.successTheme {\n  color: #4cb050 !important;\n}\n.successTheme .v-list-item--active {\n  color: #4cb050 !important;\n}\n.successTheme .v-list-item__icon {\n  color: #4cb050 !important;\n}\n.v-list-group--active.successTheme .v-list-item--active .v-list-item__title {\n  color: #4cb050 !important;\n}\n.errorTheme {\n  color: #ff5252 !important;\n}\n.errorTheme .v-list-item--active {\n  color: #ff5252 !important;\n}\n.errorTheme .v-list-item__icon {\n  color: #ff5252 !important;\n}\n.v-list-group--active.errorTheme .v-list-item--active .v-list-item__title {\n  color: #ff5252 !important;\n}\n.warningTheme {\n  color: #fb8c00 !important;\n}\n.warningTheme .v-list-item--active {\n  color: #fb8c00 !important;\n}\n.warningTheme .v-list-item__icon {\n  color: #fb8c00 !important;\n}\n.v-list-group--active.warningTheme .v-list-item--active .v-list-item__title {\n  color: #fb8c00 !important;\n}\n\n/* .blackTheme .v-list-item--active:before{\n  opacity: 0.12!important;\n  color: blue!important;\n} */\n.v-list {\n  padding: unset !important;\n}\n.v-list-group__header.v-list-item {\n  height: 56px;\n}\n.v-list-group--active.white--text .v-list-item--active .v-list-item__title {\n  color: white;\n}\n.v-list-item__icon {\n  color: white;\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QMenu.vue?vue&type=style&index=0&id=84290464&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QMenu.vue?vue&type=style&index=0&id=84290464&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QMenu_vue_vue_type_style_index_0_id_84290464_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QMenu.vue?vue&type=style&index=0&id=84290464&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QMenu.vue?vue&type=style&index=0&id=84290464&lang=css&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QMenu_vue_vue_type_style_index_0_id_84290464_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QMenu_vue_vue_type_style_index_0_id_84290464_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QMenu_vue_vue_type_style_index_0_id_84290464_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QMenu_vue_vue_type_style_index_0_id_84290464_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/quick/QMenu.vue":
/*!****************************************!*\
  !*** ./src/components/quick/QMenu.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QMenu_vue_vue_type_template_id_84290464___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QMenu.vue?vue&type=template&id=84290464& */ "./src/components/quick/QMenu.vue?vue&type=template&id=84290464&");
/* harmony import */ var _QMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QMenu.vue?vue&type=script&lang=ts& */ "./src/components/quick/QMenu.vue?vue&type=script&lang=ts&");
/* harmony import */ var _QMenu_vue_vue_type_style_index_0_id_84290464_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QMenu.vue?vue&type=style&index=0&id=84290464&lang=css& */ "./src/components/quick/QMenu.vue?vue&type=style&index=0&id=84290464&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QMenu_vue_vue_type_template_id_84290464___WEBPACK_IMPORTED_MODULE_0__.render,
  _QMenu_vue_vue_type_template_id_84290464___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/QMenu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/QMenu.vue?vue&type=script&lang=ts&":
/*!*****************************************************************!*\
  !*** ./src/components/quick/QMenu.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QMenu.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QMenu.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/QMenu.vue?vue&type=style&index=0&id=84290464&lang=css&":
/*!*************************************************************************************!*\
  !*** ./src/components/quick/QMenu.vue?vue&type=style&index=0&id=84290464&lang=css& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QMenu_vue_vue_type_style_index_0_id_84290464_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QMenu.vue?vue&type=style&index=0&id=84290464&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QMenu.vue?vue&type=style&index=0&id=84290464&lang=css&");


/***/ }),

/***/ "./src/components/quick/QMenu.vue?vue&type=template&id=84290464&":
/*!***********************************************************************!*\
  !*** ./src/components/quick/QMenu.vue?vue&type=template&id=84290464& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QMenu_vue_vue_type_template_id_84290464___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QMenu_vue_vue_type_template_id_84290464___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QMenu_vue_vue_type_template_id_84290464___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QMenu.vue?vue&type=template&id=84290464& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QMenu.vue?vue&type=template&id=84290464&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QMenu.vue?vue&type=template&id=84290464&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QMenu.vue?vue&type=template&id=84290464& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    "v-navigation-drawer",
    {
      attrs: {
        permanent: "",
        "mini-variant": _vm.mini,
        "mini-variant-width": _vm.miniVariantWidth,
        "expand-on-hover": _vm.expandOnHover,
        fixed: _vm.fixed,
        width: _vm.width,
        color: _vm.color,
      },
      on: {
        "update:miniVariant": function ($event) {
          _vm.mini = $event
        },
        "update:mini-variant": function ($event) {
          _vm.mini = $event
        },
      },
      model: {
        value: _vm.navDrawer,
        callback: function ($$v) {
          _vm.navDrawer = $$v
        },
        expression: "navDrawer",
      },
    },
    [
      !_vm.hideMenuTitle
        ? _c(
            "v-list",
            [
              _c(
                "v-list-item",
                { staticClass: "px-2" },
                [
                  _c(
                    "v-list-item-avatar",
                    [
                      !_vm.showOnlyIcon
                        ? _c(
                            "v-icon",
                            {
                              class: _vm.setTheme(),
                              attrs: { id: "menuBtn", large: "" },
                              on: {
                                click: function ($event) {
                                  return _vm.updateMini()
                                },
                              },
                            },
                            [_vm._v("mdi-menu")]
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", { class: _vm.setTheme() }, [
                    _vm._v(_vm._s(_vm.title)),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-icon",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.expandOnHover,
                          expression: "!expandOnHover",
                        },
                      ],
                      class: _vm.setTheme(),
                      attrs: { id: "closeBtn", small: "" },
                      on: {
                        click: function ($event) {
                          return _vm.updateMini()
                        },
                      },
                    },
                    [_vm._v("mdi-close")]
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.resultList, function (item1, i) {
        return _c(
          "div",
          { key: i },
          [
            item1.menuItem
              ? _c(
                  "v-list",
                  [
                    item1.children && item1.children.length > 0
                      ? _c(
                          "v-list-group",
                          {
                            class: _vm.setTheme(),
                            on: {
                              click: function ($event) {
                                return _vm.onClickGroup()
                              },
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "prependIcon",
                                  fn: function () {
                                    return [
                                      _vm.isImagePathAvaliable(item1.imagePath)
                                        ? _c(
                                            "v-img",
                                            _vm._b(
                                              {
                                                attrs: { src: item1.imagePath },
                                              },
                                              "v-img",
                                              _vm.setImageSize(item1.options),
                                              false
                                            )
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.setPrependIcon(item1.imagePath)
                                        ? _c(
                                            "v-icon",
                                            _vm._b(
                                              {},
                                              "v-icon",
                                              _vm.setIconSize(item1.options),
                                              false
                                            ),
                                            [
                                              _vm._v(
                                                "\n            " +
                                                  _vm._s(
                                                    _vm.setPrependIcon(
                                                      item1.imagePath
                                                    )
                                                  ) +
                                                  "\n          "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]
                                  },
                                  proxy: true,
                                },
                                {
                                  key: "activator",
                                  fn: function () {
                                    return [
                                      _c(
                                        "v-list-item-content",
                                        { attrs: { id: item1.code } },
                                        [
                                          _c(
                                            "v-list-item",
                                            [
                                              _c("v-list-item-title", [
                                                _vm._v(_vm._s(item1.code)),
                                              ]),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ],
                              null,
                              true
                            ),
                            model: {
                              value: item1.active,
                              callback: function ($$v) {
                                _vm.$set(item1, "active", $$v)
                              },
                              expression: "item1.active",
                            },
                          },
                          [
                            _vm._v(" "),
                            _vm._v(" "),
                            _vm._l(item1.children, function (item2, k) {
                              return _c(
                                "div",
                                { key: k },
                                [
                                  item2.menuItem
                                    ? _c(
                                        "v-list",
                                        {
                                          staticClass: "firstChild prependIcon",
                                        },
                                        [
                                          item2.children &&
                                          item2.children.length > 0
                                            ? _c(
                                                "v-list-group",
                                                {
                                                  class: _vm.setTheme(),
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "prependIcon",
                                                        fn: function () {
                                                          return [
                                                            _vm.isImagePathAvaliable(
                                                              item2.imagePath
                                                            )
                                                              ? _c(
                                                                  "v-img",
                                                                  _vm._b(
                                                                    {
                                                                      attrs: {
                                                                        src: item2.imagePath,
                                                                      },
                                                                    },
                                                                    "v-img",
                                                                    _vm.setImageSize(
                                                                      item2.options
                                                                    ),
                                                                    false
                                                                  )
                                                                )
                                                              : _vm._e(),
                                                            _vm._v(" "),
                                                            _vm.setPrependIcon(
                                                              item2.imagePath
                                                            )
                                                              ? _c(
                                                                  "v-icon",
                                                                  _vm._b(
                                                                    {},
                                                                    "v-icon",
                                                                    _vm.setIconSize(
                                                                      item2.options
                                                                    ),
                                                                    false
                                                                  ),
                                                                  [
                                                                    _vm._v(
                                                                      "\n                  " +
                                                                        _vm._s(
                                                                          _vm.setPrependIcon(
                                                                            item2.imagePath
                                                                          )
                                                                        ) +
                                                                        "\n                "
                                                                    ),
                                                                  ]
                                                                )
                                                              : _vm._e(),
                                                          ]
                                                        },
                                                        proxy: true,
                                                      },
                                                      {
                                                        key: "activator",
                                                        fn: function () {
                                                          return [
                                                            _c(
                                                              "v-list-item-content",
                                                              {
                                                                attrs: {
                                                                  id: item2.code,
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "v-list-item-title",
                                                                  {
                                                                    staticClass:
                                                                      "firstChild",
                                                                    style:
                                                                      "padding-left:" +
                                                                      _vm.calculatePadding(
                                                                        1,
                                                                        item2
                                                                      ) +
                                                                      "px",
                                                                    domProps: {
                                                                      textContent:
                                                                        _vm._s(
                                                                          item2.code
                                                                        ),
                                                                    },
                                                                  }
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ]
                                                        },
                                                        proxy: true,
                                                      },
                                                    ],
                                                    null,
                                                    true
                                                  ),
                                                  model: {
                                                    value: item2.active,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        item2,
                                                        "active",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "item2.active",
                                                  },
                                                },
                                                [
                                                  _vm._v(" "),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    item2.children,
                                                    function (item3, k) {
                                                      return _c(
                                                        "div",
                                                        { key: k },
                                                        [
                                                          item3.menuItem
                                                            ? _c(
                                                                "v-list",
                                                                {
                                                                  staticClass:
                                                                    "secondChild prependIcon",
                                                                },
                                                                [
                                                                  item3.children &&
                                                                  item3.children
                                                                    .length > 0
                                                                    ? _c(
                                                                        "v-list-group",
                                                                        {
                                                                          class:
                                                                            _vm.setTheme(),
                                                                          scopedSlots:
                                                                            _vm._u(
                                                                              [
                                                                                {
                                                                                  key: "prependIcon",
                                                                                  fn: function () {
                                                                                    return [
                                                                                      _vm.isImagePathAvaliable(
                                                                                        item3.imagePath
                                                                                      )
                                                                                        ? _c(
                                                                                            "v-img",
                                                                                            _vm._b(
                                                                                              {
                                                                                                attrs:
                                                                                                  {
                                                                                                    src: item3.imagePath,
                                                                                                  },
                                                                                              },
                                                                                              "v-img",
                                                                                              _vm.setImageSize(
                                                                                                item3.options
                                                                                              ),
                                                                                              false
                                                                                            )
                                                                                          )
                                                                                        : _vm._e(),
                                                                                      _vm._v(
                                                                                        " "
                                                                                      ),
                                                                                      _vm.setPrependIcon(
                                                                                        item3.imagePath
                                                                                      )
                                                                                        ? _c(
                                                                                            "v-icon",
                                                                                            _vm._b(
                                                                                              {},
                                                                                              "v-icon",
                                                                                              _vm.setIconSize(
                                                                                                item3.options
                                                                                              ),
                                                                                              false
                                                                                            ),
                                                                                            [
                                                                                              _vm._v(
                                                                                                "\n                        " +
                                                                                                  _vm._s(
                                                                                                    _vm.setPrependIcon(
                                                                                                      item3.imagePath
                                                                                                    )
                                                                                                  ) +
                                                                                                  "\n                      "
                                                                                              ),
                                                                                            ]
                                                                                          )
                                                                                        : _vm._e(),
                                                                                    ]
                                                                                  },
                                                                                  proxy: true,
                                                                                },
                                                                                {
                                                                                  key: "activator",
                                                                                  fn: function () {
                                                                                    return [
                                                                                      _c(
                                                                                        "v-list-item-content",
                                                                                        {
                                                                                          attrs:
                                                                                            {
                                                                                              id: item3.code,
                                                                                            },
                                                                                        },
                                                                                        [
                                                                                          _c(
                                                                                            "v-list-item-title",
                                                                                            {
                                                                                              staticClass:
                                                                                                "secondChild",
                                                                                              style:
                                                                                                "padding-left:" +
                                                                                                _vm.calculatePadding(
                                                                                                  2,
                                                                                                  item3
                                                                                                ) +
                                                                                                "px",
                                                                                              domProps:
                                                                                                {
                                                                                                  textContent:
                                                                                                    _vm._s(
                                                                                                      item3.code
                                                                                                    ),
                                                                                                },
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                        1
                                                                                      ),
                                                                                    ]
                                                                                  },
                                                                                  proxy: true,
                                                                                },
                                                                              ],
                                                                              null,
                                                                              true
                                                                            ),
                                                                          model:
                                                                            {
                                                                              value:
                                                                                item3.active,
                                                                              callback:
                                                                                function (
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    item3,
                                                                                    "active",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                              expression:
                                                                                "item3.active",
                                                                            },
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _vm._l(
                                                                            item3.children,
                                                                            function (
                                                                              item4,
                                                                              k
                                                                            ) {
                                                                              return _c(
                                                                                "div",
                                                                                {
                                                                                  key: k,
                                                                                },
                                                                                [
                                                                                  item4.menuItem
                                                                                    ? _c(
                                                                                        "v-list",
                                                                                        {
                                                                                          staticClass:
                                                                                            "thirdChild",
                                                                                        },
                                                                                        [
                                                                                          item4.children &&
                                                                                          item4
                                                                                            .children
                                                                                            .length >
                                                                                            0
                                                                                            ? _c(
                                                                                                "v-list-group",
                                                                                                {
                                                                                                  class:
                                                                                                    _vm.setTheme(),
                                                                                                  scopedSlots:
                                                                                                    _vm._u(
                                                                                                      [
                                                                                                        {
                                                                                                          key: "prependIcon",
                                                                                                          fn: function () {
                                                                                                            return [
                                                                                                              _vm.isImagePathAvaliable(
                                                                                                                item4.imagePath
                                                                                                              )
                                                                                                                ? _c(
                                                                                                                    "v-img",
                                                                                                                    _vm._b(
                                                                                                                      {
                                                                                                                        attrs:
                                                                                                                          {
                                                                                                                            src: item4.imagePath,
                                                                                                                          },
                                                                                                                      },
                                                                                                                      "v-img",
                                                                                                                      _vm.setImageSize(
                                                                                                                        item4.options
                                                                                                                      ),
                                                                                                                      false
                                                                                                                    )
                                                                                                                  )
                                                                                                                : _vm._e(),
                                                                                                              _vm._v(
                                                                                                                " "
                                                                                                              ),
                                                                                                              _vm.setPrependIcon(
                                                                                                                item4.imagePath
                                                                                                              )
                                                                                                                ? _c(
                                                                                                                    "v-icon",
                                                                                                                    _vm._b(
                                                                                                                      {},
                                                                                                                      "v-icon",
                                                                                                                      _vm.setIconSize(
                                                                                                                        item4.options
                                                                                                                      ),
                                                                                                                      false
                                                                                                                    ),
                                                                                                                    [
                                                                                                                      _vm._v(
                                                                                                                        "\n                              " +
                                                                                                                          _vm._s(
                                                                                                                            _vm.setPrependIcon(
                                                                                                                              item4.imagePath
                                                                                                                            )
                                                                                                                          ) +
                                                                                                                          "\n                            "
                                                                                                                      ),
                                                                                                                    ]
                                                                                                                  )
                                                                                                                : _vm._e(),
                                                                                                            ]
                                                                                                          },
                                                                                                          proxy: true,
                                                                                                        },
                                                                                                        {
                                                                                                          key: "activator",
                                                                                                          fn: function () {
                                                                                                            return [
                                                                                                              _c(
                                                                                                                "v-list-item-content",
                                                                                                                [
                                                                                                                  _c(
                                                                                                                    "v-list-item-title",
                                                                                                                    {
                                                                                                                      style:
                                                                                                                        "padding-left:" +
                                                                                                                        _vm.calculatePadding(
                                                                                                                          3,
                                                                                                                          item4
                                                                                                                        ) +
                                                                                                                        "px",
                                                                                                                      domProps:
                                                                                                                        {
                                                                                                                          textContent:
                                                                                                                            _vm._s(
                                                                                                                              item4.code
                                                                                                                            ),
                                                                                                                        },
                                                                                                                    }
                                                                                                                  ),
                                                                                                                ],
                                                                                                                1
                                                                                                              ),
                                                                                                            ]
                                                                                                          },
                                                                                                          proxy: true,
                                                                                                        },
                                                                                                      ],
                                                                                                      null,
                                                                                                      true
                                                                                                    ),
                                                                                                  model:
                                                                                                    {
                                                                                                      value:
                                                                                                        item4.active,
                                                                                                      callback:
                                                                                                        function (
                                                                                                          $$v
                                                                                                        ) {
                                                                                                          _vm.$set(
                                                                                                            item4,
                                                                                                            "active",
                                                                                                            $$v
                                                                                                          )
                                                                                                        },
                                                                                                      expression:
                                                                                                        "item4.active",
                                                                                                    },
                                                                                                }
                                                                                              )
                                                                                            : _c(
                                                                                                "v-list-item-group",
                                                                                                {
                                                                                                  class:
                                                                                                    _vm.setTheme(),
                                                                                                },
                                                                                                [
                                                                                                  _c(
                                                                                                    "v-list-item",
                                                                                                    {
                                                                                                      on: {
                                                                                                        click:
                                                                                                          function (
                                                                                                            $event
                                                                                                          ) {
                                                                                                            return _vm.clickRow(
                                                                                                              item4
                                                                                                            )
                                                                                                          },
                                                                                                      },
                                                                                                      model:
                                                                                                        {
                                                                                                          value:
                                                                                                            item4.active,
                                                                                                          callback:
                                                                                                            function (
                                                                                                              $$v
                                                                                                            ) {
                                                                                                              _vm.$set(
                                                                                                                item4,
                                                                                                                "active",
                                                                                                                $$v
                                                                                                              )
                                                                                                            },
                                                                                                          expression:
                                                                                                            "item4.active",
                                                                                                        },
                                                                                                    },
                                                                                                    [
                                                                                                      _vm.isIconPathAvaliable(
                                                                                                        item4.imagePath
                                                                                                      ) ||
                                                                                                      _vm.isImagePathAvaliable(
                                                                                                        item4.imagePath
                                                                                                      )
                                                                                                        ? _c(
                                                                                                            "v-list-item-icon",
                                                                                                            [
                                                                                                              _vm.isIconPathAvaliable(
                                                                                                                item4.imagePath
                                                                                                              )
                                                                                                                ? _c(
                                                                                                                    "v-icon",
                                                                                                                    _vm._b(
                                                                                                                      {
                                                                                                                        domProps:
                                                                                                                          {
                                                                                                                            textContent:
                                                                                                                              _vm._s(
                                                                                                                                item4.imagePath
                                                                                                                              ),
                                                                                                                          },
                                                                                                                      },
                                                                                                                      "v-icon",
                                                                                                                      _vm.setIconSize(
                                                                                                                        item4.options
                                                                                                                      ),
                                                                                                                      false
                                                                                                                    )
                                                                                                                  )
                                                                                                                : _vm._e(),
                                                                                                              _vm._v(
                                                                                                                " "
                                                                                                              ),
                                                                                                              _vm.isImagePathAvaliable(
                                                                                                                item4.imagePath
                                                                                                              )
                                                                                                                ? _c(
                                                                                                                    "v-img",
                                                                                                                    _vm._b(
                                                                                                                      {
                                                                                                                        attrs:
                                                                                                                          {
                                                                                                                            src: item4.imagePath,
                                                                                                                          },
                                                                                                                      },
                                                                                                                      "v-img",
                                                                                                                      _vm.setImageSize(
                                                                                                                        item4.options
                                                                                                                      ),
                                                                                                                      false
                                                                                                                    )
                                                                                                                  )
                                                                                                                : _vm._e(),
                                                                                                            ],
                                                                                                            1
                                                                                                          )
                                                                                                        : _vm._e(),
                                                                                                      _vm._v(
                                                                                                        " "
                                                                                                      ),
                                                                                                      _c(
                                                                                                        "v-list-item-content",
                                                                                                        {
                                                                                                          attrs:
                                                                                                            {
                                                                                                              id: item4.code,
                                                                                                            },
                                                                                                        },
                                                                                                        [
                                                                                                          _c(
                                                                                                            "v-list-item-title",
                                                                                                            {
                                                                                                              style:
                                                                                                                "padding-left:" +
                                                                                                                _vm.calculatePadding(
                                                                                                                  3,
                                                                                                                  item4
                                                                                                                ) +
                                                                                                                "px",
                                                                                                              domProps:
                                                                                                                {
                                                                                                                  textContent:
                                                                                                                    _vm._s(
                                                                                                                      item4.code
                                                                                                                    ),
                                                                                                                },
                                                                                                            }
                                                                                                          ),
                                                                                                        ],
                                                                                                        1
                                                                                                      ),
                                                                                                    ],
                                                                                                    1
                                                                                                  ),
                                                                                                ],
                                                                                                1
                                                                                              ),
                                                                                        ],
                                                                                        1
                                                                                      )
                                                                                    : _vm._e(),
                                                                                ],
                                                                                1
                                                                              )
                                                                            }
                                                                          ),
                                                                        ],
                                                                        2
                                                                      )
                                                                    : _c(
                                                                        "v-list-item-group",
                                                                        {
                                                                          class:
                                                                            _vm.setTheme(),
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-list-item",
                                                                            {
                                                                              attrs:
                                                                                {
                                                                                  link: "",
                                                                                },
                                                                              on: {
                                                                                click:
                                                                                  function (
                                                                                    $event
                                                                                  ) {
                                                                                    return _vm.clickRow(
                                                                                      item3
                                                                                    )
                                                                                  },
                                                                              },
                                                                              model:
                                                                                {
                                                                                  value:
                                                                                    item3.active,
                                                                                  callback:
                                                                                    function (
                                                                                      $$v
                                                                                    ) {
                                                                                      _vm.$set(
                                                                                        item3,
                                                                                        "active",
                                                                                        $$v
                                                                                      )
                                                                                    },
                                                                                  expression:
                                                                                    "item3.active",
                                                                                },
                                                                            },
                                                                            [
                                                                              _vm.isIconPathAvaliable(
                                                                                item3.imagePath
                                                                              ) ||
                                                                              _vm.isImagePathAvaliable(
                                                                                item3.imagePath
                                                                              )
                                                                                ? _c(
                                                                                    "v-list-item-icon",
                                                                                    [
                                                                                      _vm.isIconPathAvaliable(
                                                                                        item3.imagePath
                                                                                      )
                                                                                        ? _c(
                                                                                            "v-icon",
                                                                                            _vm._b(
                                                                                              {
                                                                                                domProps:
                                                                                                  {
                                                                                                    textContent:
                                                                                                      _vm._s(
                                                                                                        item3.imagePath
                                                                                                      ),
                                                                                                  },
                                                                                              },
                                                                                              "v-icon",
                                                                                              _vm.setIconSize(
                                                                                                item3.options
                                                                                              ),
                                                                                              false
                                                                                            )
                                                                                          )
                                                                                        : _vm._e(),
                                                                                      _vm._v(
                                                                                        " "
                                                                                      ),
                                                                                      _vm.isImagePathAvaliable(
                                                                                        item3.imagePath
                                                                                      )
                                                                                        ? _c(
                                                                                            "v-img",
                                                                                            _vm._b(
                                                                                              {
                                                                                                attrs:
                                                                                                  {
                                                                                                    src: item3.imagePath,
                                                                                                  },
                                                                                              },
                                                                                              "v-img",
                                                                                              _vm.setIconSize(
                                                                                                item3.options
                                                                                              ),
                                                                                              false
                                                                                            )
                                                                                          )
                                                                                        : _vm._e(),
                                                                                    ],
                                                                                    1
                                                                                  )
                                                                                : _vm._e(),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "v-list-item-content",
                                                                                {
                                                                                  attrs:
                                                                                    {
                                                                                      id: item3.code,
                                                                                    },
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "v-list-item-title",
                                                                                    {
                                                                                      style:
                                                                                        "padding-left:" +
                                                                                        _vm.calculatePadding(
                                                                                          2,
                                                                                          item3
                                                                                        ) +
                                                                                        "px",
                                                                                      domProps:
                                                                                        {
                                                                                          textContent:
                                                                                            _vm._s(
                                                                                              item3.code
                                                                                            ),
                                                                                        },
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                                1
                                                                              ),
                                                                            ],
                                                                            1
                                                                          ),
                                                                        ],
                                                                        1
                                                                      ),
                                                                ],
                                                                1
                                                              )
                                                            : _vm._e(),
                                                        ],
                                                        1
                                                      )
                                                    }
                                                  ),
                                                ],
                                                2
                                              )
                                            : _c(
                                                "v-list-item-group",
                                                { class: _vm.setTheme() },
                                                [
                                                  _c(
                                                    "v-list-item",
                                                    {
                                                      attrs: {
                                                        id: "listItem2",
                                                      },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          return _vm.clickRow(
                                                            item2
                                                          )
                                                        },
                                                      },
                                                      model: {
                                                        value: item2.active,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            item2,
                                                            "active",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "item2.active",
                                                      },
                                                    },
                                                    [
                                                      _vm.isIconPathAvaliable(
                                                        item2.imagePath
                                                      ) ||
                                                      _vm.isImagePathAvaliable(
                                                        item2.imagePath
                                                      )
                                                        ? _c(
                                                            "v-list-item-icon",
                                                            [
                                                              _vm.isIconPathAvaliable(
                                                                item2.imagePath
                                                              )
                                                                ? _c(
                                                                    "v-icon",
                                                                    _vm._b(
                                                                      {
                                                                        domProps:
                                                                          {
                                                                            textContent:
                                                                              _vm._s(
                                                                                item2.imagePath
                                                                              ),
                                                                          },
                                                                      },
                                                                      "v-icon",
                                                                      _vm.setIconSize(
                                                                        item2.options
                                                                      ),
                                                                      false
                                                                    )
                                                                  )
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              _vm.isImagePathAvaliable(
                                                                item2.imagePath
                                                              )
                                                                ? _c(
                                                                    "v-img",
                                                                    _vm._b(
                                                                      {
                                                                        attrs: {
                                                                          src: item2.imagePath,
                                                                        },
                                                                      },
                                                                      "v-img",
                                                                      _vm.setIconSize(
                                                                        item2.options
                                                                      ),
                                                                      false
                                                                    )
                                                                  )
                                                                : _vm._e(),
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-content",
                                                        {
                                                          attrs: {
                                                            id: item2.code,
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-title",
                                                            {
                                                              style:
                                                                "padding-left:" +
                                                                _vm.calculatePadding(
                                                                  1,
                                                                  item2
                                                                ) +
                                                                "px",
                                                              domProps: {
                                                                textContent:
                                                                  _vm._s(
                                                                    item2.code
                                                                  ),
                                                              },
                                                            }
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                ],
                                1
                              )
                            }),
                          ],
                          2
                        )
                      : _c(
                          "v-list-item-group",
                          { class: _vm.setTheme() },
                          [
                            _c(
                              "v-list-item",
                              {
                                attrs: { link: "" },
                                on: {
                                  click: function ($event) {
                                    return _vm.clickRow(item1)
                                  },
                                },
                                model: {
                                  value: item1.active,
                                  callback: function ($$v) {
                                    _vm.$set(item1, "active", $$v)
                                  },
                                  expression: "item1.active",
                                },
                              },
                              [
                                _vm.isIconPathAvaliable(item1.imagePath) ||
                                _vm.isImagePathAvaliable(item1.imagePath)
                                  ? _c(
                                      "v-list-item-icon",
                                      [
                                        _vm.isIconPathAvaliable(item1.imagePath)
                                          ? _c(
                                              "v-icon",
                                              _vm._b(
                                                {
                                                  domProps: {
                                                    textContent: _vm._s(
                                                      item1.imagePath
                                                    ),
                                                  },
                                                },
                                                "v-icon",
                                                _vm.setIconSize(item1.options),
                                                false
                                              )
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.isImagePathAvaliable(
                                          item1.imagePath
                                        )
                                          ? _c(
                                              "v-img",
                                              _vm._b(
                                                {
                                                  attrs: {
                                                    src: item1.imagePath,
                                                  },
                                                },
                                                "v-img",
                                                _vm.setImageSize(item1.options),
                                                false
                                              )
                                            )
                                          : _vm._e(),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("v-list-item-title", {
                                  style:
                                    "padding-left:" +
                                    _vm.calculatePadding(1, item1) +
                                    "px",
                                  domProps: { textContent: _vm._s(item1.code) },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                  ],
                  1
                )
              : _vm._e(),
          ],
          1
        )
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_QMenu_vue.js.map