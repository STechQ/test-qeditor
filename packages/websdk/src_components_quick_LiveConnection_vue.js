"use strict";
(this["webpackChunkwebsdk"] = this["webpackChunkwebsdk"] || []).push([["src_components_quick_LiveConnection_vue"],{

/***/ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/LiveConnection.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/LiveConnection.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/shrimp/helpers/logger */ "../../common/shrimp/helpers/logger.ts");
/* harmony import */ var _common_shrimp_helpers_typeHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/shrimp/helpers/typeHelper */ "../../common/shrimp/helpers/typeHelper.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _implementation_GlobalMethodsImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../implementation/GlobalMethodsImpl */ "./src/implementation/GlobalMethodsImpl.ts");
/* harmony import */ var _WebSDK__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../WebSDK */ "./src/WebSDK.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_4__["default"].extend({
    name: "LiveConnection",
    props: {
        url: {
            type: String,
            default: ""
        },
        secure: {
            type: Boolean,
            default: false
        },
        message: {
            type: [Object, String],
            default: ""
        },
        urlParams: {
            type: Object,
            default: function () { }
        },
        enableIamAuth: {
            type: Boolean,
            default: false
        },
        sendQueueMessage: {
            type: Boolean,
            default: true
        },
        autoConnect: {
            type: Boolean,
            default: false
        },
        reconnect: {
            type: Boolean,
            default: false
        },
        reconnectInterval: {
            type: Number,
            default: 60
        },
        reconnectBackOff: {
            type: Boolean,
            default: false
        },
        _renderingProps: {
            type: Object,
            default: {
                isEditMode: {
                    type: Boolean,
                    default: false
                }
            }
        }
    },
    data: function () {
        this.$props.sendQueueMessage = this.$props.sendQueueMessage !== false;
        return {
            typeHelper: new _common_shrimp_helpers_typeHelper__WEBPACK_IMPORTED_MODULE_1__.TypeHelper(),
            seqErrCount: 0,
            connection: { readyState: WebSocket.CLOSED, close: function () { } },
            urlData: this.$props.url,
            urlParamsData: this.$props.urlParams,
            messageData: this.$props.message,
            messageRequestList: [],
            timerID: 0,
            reconectTryCount: 0,
            reason: "",
            onConnectionReason: {
                connectionError: "ConnectionError",
                connectionClose: "ConnectionClose",
                userSend: "UserSend",
                autoConnect: "AutoConnect"
            }
        };
    },
    methods: {
        Send: function (message, urlParams) {
            var self = this;
            var connectionReason = self.onConnectionReason.userSend;
            self.SendMessage(connectionReason, message, urlParams);
        },
        SendMessage: function (connectionReason, message, urlParams) {
            var _this = this;
            if (message) {
                this.messageData = message;
            }
            if (this.messageData) {
                var messageJson_1 = "";
                if (this.typeHelper.isString(this.messageData)) {
                    messageJson_1 = this.messageData;
                }
                else {
                    messageJson_1 = JSON.stringify(this.messageData);
                }
                var sendMessage = function () {
                    _this.connection.send(messageJson_1);
                };
                this._connect(connectionReason, sendMessage, urlParams);
            }
            else {
                this._connect(connectionReason);
            }
        },
        Close: function () {
            if (this._renderingProps.isEditMode) {
                return;
            }
            this.connection.close();
            var minLogType = _implementation_GlobalMethodsImpl__WEBPACK_IMPORTED_MODULE_2__.GlobalMethodsImpl.settingsWrapper.settings.minEngineLogLevel ? _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_0__.LogType[_implementation_GlobalMethodsImpl__WEBPACK_IMPORTED_MODULE_2__.GlobalMethodsImpl.settingsWrapper.settings.minEngineLogLevel] : undefined;
            _common_shrimp_helpers_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log({ logMessage: "[ LiveConnection has closed ][Url: " + this.urlData + " ] ", minEngineLogLevel: minLogType });
        },
        _connect: function (connectionReason, sendMessage, urlParams) {
            var self = this;
            if (self._renderingProps.isEditMode) {
                return;
            }
            switch (this.connection.readyState) {
                case WebSocket.OPEN:
                    sendMessage && sendMessage();
                    return;
                case WebSocket.CLOSED:
                    this.urlParamsData = urlParams || this.urlParamsData;
                    break;
                case WebSocket.CLOSING:
                    return;
                case WebSocket.CONNECTING:
                    sendMessage && this.messageRequestList.push(sendMessage);
                    return;
            }
            self._regulateUrl();
            self.connection = new WebSocket(self.urlData);
            self.reason = connectionReason;
            self.connection.onopen = function (evt) {
                var _a, _b;
                return __awaiter(this, void 0, void 0, function () {
                    var iamToken;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                self.seqErrCount = 0;
                                if (!self.enableIamAuth) return [3 /*break*/, 2];
                                return [4 /*yield*/, ((_a = _WebSDK__WEBPACK_IMPORTED_MODULE_3__.WebSDK.getPlateauIAM()) === null || _a === void 0 ? void 0 : _a.refreshPromise())];
                            case 1:
                                _c.sent();
                                iamToken = (_b = _WebSDK__WEBPACK_IMPORTED_MODULE_3__.WebSDK.getPlateauIAM()) === null || _b === void 0 ? void 0 : _b.getToken();
                                if (iamToken) {
                                    self.connection.send(JSON.stringify({ token: iamToken }));
                                }
                                _c.label = 2;
                            case 2:
                                self.$emit('onConnectionOpen', self.reason);
                                sendMessage && sendMessage();
                                if (self.sendQueueMessage) {
                                    self.messageRequestList && self.messageRequestList.map(function (cbFunc) { return cbFunc(); });
                                }
                                this.reconectTryCount = 0;
                                return [2 /*return*/];
                        }
                    });
                });
            };
            self.connection.onerror = function (evt) {
                var connectionError = self.onConnectionReason.connectionError;
                self.seqErrCount++;
                self.$emit('onError', evt, self.seqErrCount);
                if (self.connection.readyState == WebSocket.CLOSED && self.reconnect == true) {
                    self._reConnect(connectionError);
                }
            };
            self.connection.onmessage = function (evt) {
                var _a;
                return __awaiter(this, void 0, void 0, function () {
                    var messageJson;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!self.enableIamAuth) return [3 /*break*/, 2];
                                return [4 /*yield*/, ((_a = _WebSDK__WEBPACK_IMPORTED_MODULE_3__.WebSDK.getPlateauIAM()) === null || _a === void 0 ? void 0 : _a.refreshPromise())];
                            case 1:
                                _b.sent();
                                _b.label = 2;
                            case 2:
                                messageJson = "";
                                if (self.typeHelper.isJsonString(evt.data)) {
                                    messageJson = JSON.parse(evt.data);
                                }
                                else {
                                    messageJson = evt.data;
                                }
                                self.$emit('onMessageReceived', messageJson);
                                return [2 /*return*/];
                        }
                    });
                });
            };
            self.connection.onclose = function (e) {
                var connectionClose = self.onConnectionReason.connectionClose;
                self.$emit('onClose', e);
                // TO-DO: delete self.connection; or self.connection = null; to prevent the browser to build up a pile of unused connection objects. (Garbage collector?) 
                if (self.reconnect == true) {
                    self._reConnect(connectionClose);
                }
            };
        },
        _regulateUrl: function () {
            this.urlData = this.url;
            if (this.urlData.startsWith('ws') && this.secure == undefined) {
                this.urlData;
            }
            else {
                if (this.urlData.startsWith('ws')) {
                    this.urlData = this.urlData.split('//')[1];
                }
                else if (this.urlData.startsWith('/')) {
                    this.urlData = this.urlData.substring(1);
                }
                var wsUrlPrefix = "ws://";
                if (this.secure) {
                    wsUrlPrefix = 'wss://';
                }
                this.urlData = wsUrlPrefix.concat(this.urlData);
            }
            this._setUrlParams();
        },
        _setUrlParams: function () {
            for (var paramKey in this.urlParams) {
                this.urlData = this.urlData.replace('#' + paramKey + '#', this.urlParams[paramKey]);
            }
        },
        _calculateReconnectInterval: function (intervalCounter) {
            var calculatedInterval = intervalCounter;
            if (this.reconnectBackOff) {
                var fibonacciArray = [1, 2, 3, 5, 8, 13, 21];
                var intervalUnit = intervalCounter / 5;
                var fibonacciRatio = this.reconectTryCount > fibonacciArray.length ? fibonacciArray[fibonacciArray.length - 1] : fibonacciArray[this.reconectTryCount - 1];
                calculatedInterval = Math.round(intervalUnit * fibonacciRatio);
            }
            return calculatedInterval;
        },
        _reConnect: function (reconnectReason) {
            var _this = this;
            this.reconectTryCount++;
            var timeoutCounter = this._calculateReconnectInterval(this.reconnectInterval);
            this.timerID = window.setTimeout(function () {
                delete _this.timerID;
                if (!_this.sendQueueMessage) {
                    _this.messageData = undefined;
                }
                _this.SendMessage(reconnectReason);
            }, timeoutCounter * 1000);
        }
    },
    mounted: function () {
        if (this.autoConnect) {
            var self_1 = this;
            var connectionReason = self_1.onConnectionReason.autoConnect;
            this._connect(connectionReason);
        }
    },
    destroyed: function () {
        this.Close();
    },
    computed: {
        message: {
            get: function () {
                var self = this;
                return self.messageData;
            },
            set: function (newMsg) {
                var self = this;
                self.messageData = newMsg;
            }
        },
        urlParams: {
            get: function () {
                var self = this;
                return self.urlParamsData;
            },
            set: function (newParams) {
                var self = this;
                self.urlParamsData = newParams;
            }
        }
    }
}));


/***/ }),

/***/ "./src/components/quick/LiveConnection.vue":
/*!*************************************************!*\
  !*** ./src/components/quick/LiveConnection.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LiveConnection_vue_vue_type_template_id_0fc0f108___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LiveConnection.vue?vue&type=template&id=0fc0f108& */ "./src/components/quick/LiveConnection.vue?vue&type=template&id=0fc0f108&");
/* harmony import */ var _LiveConnection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LiveConnection.vue?vue&type=script&lang=ts& */ "./src/components/quick/LiveConnection.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LiveConnection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LiveConnection_vue_vue_type_template_id_0fc0f108___WEBPACK_IMPORTED_MODULE_0__.render,
  _LiveConnection_vue_vue_type_template_id_0fc0f108___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/quick/LiveConnection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/quick/LiveConnection.vue?vue&type=script&lang=ts&":
/*!**************************************************************************!*\
  !*** ./src/components/quick/LiveConnection.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveConnection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LiveConnection.vue?vue&type=script&lang=ts& */ "../../node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/LiveConnection.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveConnection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/quick/LiveConnection.vue?vue&type=template&id=0fc0f108&":
/*!********************************************************************************!*\
  !*** ./src/components/quick/LiveConnection.vue?vue&type=template&id=0fc0f108& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveConnection_vue_vue_type_template_id_0fc0f108___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveConnection_vue_vue_type_template_id_0fc0f108___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveConnection_vue_vue_type_template_id_0fc0f108___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LiveConnection.vue?vue&type=template&id=0fc0f108& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/LiveConnection.vue?vue&type=template&id=0fc0f108&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/LiveConnection.vue?vue&type=template&id=0fc0f108&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/quick/LiveConnection.vue?vue&type=template&id=0fc0f108& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=src_components_quick_LiveConnection_vue.js.map