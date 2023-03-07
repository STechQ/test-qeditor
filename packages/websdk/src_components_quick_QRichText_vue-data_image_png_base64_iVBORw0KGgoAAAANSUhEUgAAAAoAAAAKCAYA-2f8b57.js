"use strict";
(this["webpackChunkwebsdk"] = this["webpackChunkwebsdk"] || []).push([["src_components_quick_QRichText_vue-data_image_png_base64_iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYA-2f8b57"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QRichText.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QRichText.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify */ "../../node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prosemirror-model */ "../../node_modules/prosemirror-model/dist/index.js");
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "../../node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap-vuetify */ "../../node_modules/tiptap-vuetify/dist/bundle-esm.js");
/* harmony import */ var tiptap_vuetify_dist_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiptap-vuetify/dist/main.css */ "../../node_modules/tiptap-vuetify/dist/main.css");
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "../../node_modules/vuetify/dist/vuetify.min.css");







var vuetify = new (vuetify__WEBPACK_IMPORTED_MODULE_4___default())({
    lang: {
        // If you change the language here, then it changes in the editor itself
        current: "en" // en | es | fr | pl | ru
    }
});
vue__WEBPACK_IMPORTED_MODULE_5__["default"].use((vuetify__WEBPACK_IMPORTED_MODULE_4___default()));
vue__WEBPACK_IMPORTED_MODULE_5__["default"].use(tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.TiptapVuetifyPlugin, {
    vuetify: vuetify,
    iconsGroup: "mdi",
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_5__["default"].extend({
    components: { TiptapVuetify: tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.TiptapVuetify },
    name: "QRichText",
    props: {
        height: {
            type: String,
            default: "auto",
        },
        minHeight: {
            type: String,
            default: "auto",
        },
        ToolBarcolor: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        buttonsHide: {
            type: Boolean,
            default: false,
        }
    },
    data: function () { return ({
        editorContentStyle: {
            '--height': "auto",
            '--minHeight': "auto"
        },
        editor: new tiptap__WEBPACK_IMPORTED_MODULE_0__.Editor(),
        extensions: [
            // Render in the Bubble menu
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Bold,
            [
                tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Link,
                {
                    renderIn: "bubbleMenu",
                },
            ],
            [
                tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Underline,
                {
                    renderIn: "bubbleMenu",
                },
            ],
            [
                tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Strike,
                {
                    renderIn: "bubbleMenu",
                },
            ],
            // Render in the toolbar
            [
                tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Blockquote,
                {
                    renderIn: "toolbar",
                },
            ],
            // You can use a short form, the default "renderIn" is "'toolbar'"
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.History,
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Image,
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Strike,
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Italic,
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.ListItem,
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.BulletList,
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.OrderedList,
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Table,
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.TableHeader,
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.TableCell,
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.TableRow,
            [
                tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Heading,
                {
                    // Options that fall into the tiptap's extension
                    options: {
                        levels: [1, 2, 3],
                    },
                },
            ],
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Code,
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.HorizontalRule,
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Paragraph,
            tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.HardBreak, // line break on Shift + Ctrl + Enter
        ],
        htmlContent: '',
        content: "\n      <p>\n      To see the result, select the text.\n      A special menu will appear to which you can bind the necessary extensions and\n      the buttons will be displayed there.\n      </p>\n      <p>\n      <strong>Test text:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </p>",
    }); },
    mounted: function () {
    },
    destroyed: function () {
        var _a;
        (_a = this.$el) === null || _a === void 0 ? void 0 : _a.remove();
    },
    methods: {
        blurEvent: function () {
            this.$emit("blur");
        },
        focusEvent: function () {
            this.$emit("focus");
        },
        inputEvent: function () {
            this.$emit("input");
        },
        initEvent: function (_a) {
            var editor = _a.editor;
            this.editor = editor;
        },
        getElementFromString: function (content) {
            var element = document.createElement('div');
            element.innerHTML = content;
            return element;
        },
        insertContent: function (content) {
            if (!content || !this.editor || !this.editor.state || !this.editor.state.tr) {
                return;
            }
            var selection = this.editor.state.selection;
            var element = this.getElementFromString(content);
            var slice = prosemirror_model__WEBPACK_IMPORTED_MODULE_6__.DOMParser.fromSchema(this.editor.state.schema).parseSlice(element);
            var transaction = this.editor.state.tr.insert(selection.anchor, slice.content);
            this.editor.view.dispatch(transaction);
        },
    },
    watch: {
        content: function () {
            this.$emit('change');
        },
        height: {
            immediate: true,
            handler: function (newValue) {
                this.editorContentStyle['--height'] = newValue !== null && newValue !== void 0 ? newValue : "auto";
            },
        },
        minHeight: {
            immediate: true,
            handler: function (newValue) {
                this.editorContentStyle['--minHeight'] = newValue !== null && newValue !== void 0 ? newValue : "auto";
            },
        }
    }
}));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QRichText.vue?vue&type=style&index=0&id=1ed0c418&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QRichText.vue?vue&type=style&index=0&id=1ed0c418&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.tiptap-vuetify-editor__action-render-btn{\n    border: unset!important;\n}\n.tiptap-vuetify-editor__content ul li{\n      list-style: unset !important;\n}\n.tiptap-vuetify-editor__content {\n      height: var(--height);\n      min-height: var(--minHeight);\n}\n", "",{"version":3,"sources":["webpack://./src/components/quick/QRichText.vue"],"names":[],"mappings":";AA0NA;IACA,uBAAA;AAEA;AACA;MACA,4BAAA;AACA;AACA;MACA,qBAAA;MACA,4BAAA;AACA","sourcesContent":["<template>\n  <div>\n    <tiptap-vuetify\n      @blur=\"blurEvent\"\n      @focus=\"focusEvent\"\n      @input=\"inputEvent\"\n      @init=\"initEvent\"\n      :toolbar-attributes=\"{ color: ToolBarcolor, style:{display:buttonsHide ? 'none':(ToolBarcolor ? 'block' : 'unset')} }\"\n      v-model=\"content\"\n      :extensions=\"extensions\"\n      :disabled=\"disabled\"  \n      :style=\"editorContentStyle\"\n    >\n    </tiptap-vuetify>\n  </div>\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport Vuetify from \"vuetify\";\nimport { DOMParser } from 'prosemirror-model';\nimport { Editor } from \"tiptap\";\nimport { TiptapVuetifyPlugin } from \"tiptap-vuetify\";\nimport \"tiptap-vuetify/dist/main.css\";\nimport \"vuetify/dist/vuetify.min.css\";\nconst vuetify = new Vuetify({\n  lang: {\n    // If you change the language here, then it changes in the editor itself\n    current: \"en\" // en | es | fr | pl | ru\n  }\n});\nVue.use(Vuetify);\nVue.use(TiptapVuetifyPlugin, {\n  vuetify,\n  iconsGroup: \"mdi\",\n});\nimport {\n  // component\n  TiptapVuetify,\n  // extensions\n  Heading,\n  Bold,\n  Italic,\n  Strike,\n  Underline,\n  Code,\n  Paragraph,\n  BulletList,\n  OrderedList,\n  Image,\n  ListItem,\n  Link,\n  Blockquote,\n  HardBreak,\n  Table,\n  TableHeader,\n  TableCell,\n  TableRow,\n  HorizontalRule,\n  History,\n} from \"tiptap-vuetify\";\n\nexport default Vue.extend({\n  components: { TiptapVuetify },\n  name: \"QRichText\",\n  props: {\n    height: {\n      type: String,\n      default: \"auto\",\n    },\n    minHeight: {\n      type: String,\n      default: \"auto\",\n    },\n    ToolBarcolor: {\n      type: String,\n      default: \"\",\n    },\n    disabled: {\n      type: Boolean,\n      default: false,\n    },\n    buttonsHide:{\n      type: Boolean,\n      default: false,\n    }\n  },\n  data: () => ({\n    editorContentStyle :{\n      '--height':\"auto\",\n      '--minHeight':\"auto\"\n    },\n    editor: new Editor(),\n    extensions: [\n      // Render in the Bubble menu\n      Bold,\n      [\n        Link,\n        {\n          renderIn: \"bubbleMenu\",\n        },\n      ],\n      [\n        Underline,\n        {\n          renderIn: \"bubbleMenu\",\n        },\n      ],\n      [\n        Strike,\n        {\n          renderIn: \"bubbleMenu\",\n        },\n      ],\n      // Render in the toolbar\n      [\n        Blockquote,\n        {\n          renderIn: \"toolbar\",\n        },\n      ],\n      // You can use a short form, the default \"renderIn\" is \"'toolbar'\"\n      History,\n      Image,\n      Strike,\n      Italic,\n      ListItem, // if you need to use a list (BulletList, OrderedList)\n      BulletList,\n      OrderedList,\n      Table,\n      TableHeader,\n      TableCell,\n      TableRow,\n      [\n        Heading,\n        {\n          // Options that fall into the tiptap's extension\n          options: {\n            levels: [1, 2, 3],\n          },\n        },\n      ],\n      Code,\n      HorizontalRule,\n      Paragraph,\n      HardBreak, // line break on Shift + Ctrl + Enter\n    ],\n    htmlContent:'',\n    content: `\n      <p>\n      To see the result, select the text.\n      A special menu will appear to which you can bind the necessary extensions and\n      the buttons will be displayed there.\n      </p>\n      <p>\n      <strong>Test text:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </p>`,\n  }),\n  mounted(){\n     \n  },\n  destroyed() {\n      this.$el?.remove();\n   },\n  methods: {\n    blurEvent() {\n      this.$emit(\"blur\");\n    },\n    focusEvent() {\n      this.$emit(\"focus\");\n    },\n    inputEvent() {\n     \n      this.$emit(\"input\");\n     \n    },\n    initEvent({editor}) {\n      this.editor = editor;\n    },\n    getElementFromString(content:string):HTMLDivElement {           \n      let element = document.createElement('div') as HTMLDivElement;\n      element.innerHTML = content;\n      return element;\n    },\n    insertContent(content:string){\n       \n      if(!content || !this.editor || !this.editor.state || !this.editor.state.tr){\n        return;\n      }\n      let { selection } = this.editor.state;\n      let element:HTMLDivElement = this.getElementFromString(content) as HTMLDivElement;\n      let slice = DOMParser.fromSchema(this.editor.state.schema).parseSlice(element);\n      let transaction = this.editor.state.tr.insert(selection.anchor, slice.content);\n      this.editor.view.dispatch(transaction);\n    },\n  },\n  watch:{\n    content: function(){\n    \n      this.$emit('change')\n     \n    },\n     height: {\n      immediate: true,\n      handler(newValue) {\n        this.editorContentStyle['--height'] = newValue ?? \"auto\";\n      },\n    },\n     minHeight: {\n      immediate: true,\n      handler(newValue) {\n        this.editorContentStyle['--minHeight'] = newValue ?? \"auto\";\n      },\n    }\n  }\n\n});\n</script>\n<style >\n.tiptap-vuetify-editor__action-render-btn{\n    border: unset!important;\n   \n}\n.tiptap-vuetify-editor__content ul li{\n      list-style: unset !important;\n}\n.tiptap-vuetify-editor__content {\n      height: var(--height);\n      min-height: var(--minHeight);\n}\n</style>\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QRichText.vue?vue&type=style&index=0&id=1ed0c418&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QRichText.vue?vue&type=style&index=0&id=1ed0c418&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QRichText_vue_vue_type_style_index_0_id_1ed0c418_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QRichText.vue?vue&type=style&index=0&id=1ed0c418&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QRichText.vue?vue&type=style&index=0&id=1ed0c418&lang=css&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QRichText_vue_vue_type_style_index_0_id_1ed0c418_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QRichText_vue_vue_type_style_index_0_id_1ed0c418_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QRichText_vue_vue_type_style_index_0_id_1ed0c418_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QRichText_vue_vue_type_style_index_0_id_1ed0c418_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/quick/QRichText.vue":
/*!********************************************!*\
  !*** ./src/components/quick/QRichText.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QRichText_vue_vue_type_template_id_1ed0c418___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QRichText.vue?vue&type=template&id=1ed0c418& */ "./src/components/quick/QRichText.vue?vue&type=template&id=1ed0c418&");
/* harmony import */ var _QRichText_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QRichText.vue?vue&type=script&lang=ts& */ "./src/components/quick/QRichText.vue?vue&type=script&lang=ts&");
/* harmony import */ var _QRichText_vue_vue_type_style_index_0_id_1ed0c418_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QRichText.vue?vue&type=style&index=0&id=1ed0c418&lang=css& */ "./src/components/quick/QRichText.vue?vue&type=style&index=0&id=1ed0c418&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QRichText_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QRichText_vue_vue_type_template_id_1ed0c418___WEBPACK_IMPORTED_MODULE_0__.render,
  _QRichText_vue_vue_type_template_id_1ed0c418___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/QRichText.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/QRichText.vue?vue&type=script&lang=ts&":
/*!*********************************************************************!*\
  !*** ./src/components/quick/QRichText.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QRichText_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QRichText.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QRichText.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_QRichText_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/QRichText.vue?vue&type=style&index=0&id=1ed0c418&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./src/components/quick/QRichText.vue?vue&type=style&index=0&id=1ed0c418&lang=css& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QRichText_vue_vue_type_style_index_0_id_1ed0c418_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QRichText.vue?vue&type=style&index=0&id=1ed0c418&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QRichText.vue?vue&type=style&index=0&id=1ed0c418&lang=css&");


/***/ }),

/***/ "./src/components/quick/QRichText.vue?vue&type=template&id=1ed0c418&":
/*!***************************************************************************!*\
  !*** ./src/components/quick/QRichText.vue?vue&type=template&id=1ed0c418& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QRichText_vue_vue_type_template_id_1ed0c418___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QRichText_vue_vue_type_template_id_1ed0c418___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QRichText_vue_vue_type_template_id_1ed0c418___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QRichText.vue?vue&type=template&id=1ed0c418& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QRichText.vue?vue&type=template&id=1ed0c418&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QRichText.vue?vue&type=template&id=1ed0c418&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/QRichText.vue?vue&type=template&id=1ed0c418& ***!
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
  return _c(
    "div",
    [
      _c("tiptap-vuetify", {
        style: _vm.editorContentStyle,
        attrs: {
          "toolbar-attributes": {
            color: _vm.ToolBarcolor,
            style: {
              display: _vm.buttonsHide
                ? "none"
                : _vm.ToolBarcolor
                ? "block"
                : "unset",
            },
          },
          extensions: _vm.extensions,
          disabled: _vm.disabled,
        },
        on: {
          blur: _vm.blurEvent,
          focus: _vm.focusEvent,
          input: _vm.inputEvent,
          init: _vm.initEvent,
        },
        model: {
          value: _vm.content,
          callback: function ($$v) {
            _vm.content = $$v
          },
          expression: "content",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC":
/*!******************************************************************************************************************************************!*\
  !*** data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC";

/***/ })

}]);
//# sourceMappingURL=src_components_quick_QRichText_vue-data_image_png_base64_iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYA-2f8b57.js.map