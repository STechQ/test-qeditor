"use strict";
(this["webpackChunkwebsdk"] = this["webpackChunkwebsdk"] || []).push([["src_managers_PlateauIAM_ts"],{

/***/ "./src/managers/PlateauIAM.ts":
/*!************************************!*\
  !*** ./src/managers/PlateauIAM.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlateauIAM": () => (/* binding */ PlateauIAM)
/* harmony export */ });
/* harmony import */ var keycloak_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! keycloak-js */ "../../node_modules/keycloak-js/dist/keycloak.mjs");
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

var PlateauIAM = /** @class */ (function () {
    function PlateauIAM() {
        var _this = this;
        this.refreshTime = 6000;
        this.updateTime = 10;
        this.initOptions = {
            url: 'http://identity-provider.dev.rally.softtech/auth/',
            realm: 'main',
            clientId: 'ui-web-client',
            onLoad: 'login-required',
            pkceMethod: 'S256',
            identityProvider: '',
        };
        // private keycloak?: Keycloak;
        //PLATEAU SECURITY OBJECT
        this.iamPlateau = undefined;
        this.getToken = function () {
            if (_this.iamPlateau != undefined)
                return _this.iamPlateau.token;
            else
                return undefined;
        };
        this.getInfo = function () {
            if (_this.iamPlateau != undefined)
                return _this.iamPlateau.info;
            else
                return undefined;
        };
    }
    PlateauIAM.prototype.setOptions = function (initOptions) {
        try {
            if (initOptions.identityProvider != undefined) {
                if (typeof initOptions.identityProvider === 'object') {
                    var subdomain = '';
                    var ipUrlSplit = initOptions.url.split('.');
                    var order = 2;
                    try {
                        order = parseInt(initOptions.identityProvider.order);
                        if (order <= 0) {
                            order = 2;
                        }
                    }
                    catch (error) {
                        order = 2;
                    }
                    if (initOptions.identityProvider.type === 'queryString') {
                        var params = new URLSearchParams(window.location.search);
                        if (params.get('subdomain') != null) {
                            subdomain = params.get('subdomain');
                            // ipUrlSplit[1] = subdomain
                            ipUrlSplit[order - 1] = subdomain;
                            this.initOptions.subdomain = subdomain;
                        }
                        if (params.get('realm') != null) {
                            initOptions.realm = params.get('realm');
                        }
                    }
                    else if (initOptions.identityProvider.type === 'subdomain') {
                        var urlSplit = window.location.host.split('.');
                        subdomain = urlSplit[0]; // optional parametre ile subdomain of subdomain alinabilir
                        ipUrlSplit[order - 1] = subdomain;
                    }
                    // ipUrlSplit[1] = subdomain               
                    initOptions.url = ipUrlSplit.join('.');
                }
                else if (initOptions.identityProvider.length > 1) {
                    initOptions.url = window.location.protocol + '//' + window.location.host.replace(initOptions.identityProvider, 'identity-provider') + '/auth';
                }
            }
            /*
                    turisui
                    http://turisui.participant-turis-mr-484-dev.turispsql.plateaux.softtech
                    http://identity-provider.participant-turis-mr-484-dev.turispsql.plateaux.softtech/auth
             */
            if (initOptions.url)
                this.initOptions.url = initOptions.url;
            if (initOptions.realm)
                this.initOptions.realm = initOptions.realm;
            if (initOptions.clientId)
                this.initOptions.clientId = initOptions.clientId;
            if (initOptions.onLoad)
                this.initOptions.onLoad = initOptions.onLoad;
            if (initOptions.pkceMethod)
                this.initOptions.pkceMethod = initOptions.pkceMethod;
            if (initOptions.identityProvider)
                this.initOptions.identityProvider = initOptions.identityProvider;
        }
        catch (error) {
        }
    };
    PlateauIAM.prototype.isAuthenticated = function () {
        var _a;
        if (((_a = this.iamPlateau) === null || _a === void 0 ? void 0 : _a.token) != undefined)
            return true;
    };
    PlateauIAM.prototype.init = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var auth;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.keycloak = (0,keycloak_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.initOptions);
                        return [4 /*yield*/, this.keycloak.init({ onLoad: this.initOptions.onLoad, pkceMethod: this.initOptions.pkceMethod, checkLoginIframe: false })];
                    case 1:
                        auth = _a.sent();
                        if (typeof auth == 'boolean') {
                            if (!auth) {
                                window.location.reload();
                            }
                            else {
                                this.constructIAMPlateau();
                            }
                            callback();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PlateauIAM.prototype.constructIAMPlateau = function () {
        var _a, _b, _c;
        if (this.iamPlateau == undefined)
            this.iamPlateau = { token: (_a = this.keycloak) === null || _a === void 0 ? void 0 : _a.token, info: (_b = this.keycloak) === null || _b === void 0 ? void 0 : _b.tokenParsed };
        else
            this.iamPlateau.token = (_c = this.keycloak) === null || _c === void 0 ? void 0 : _c.token;
        // if (window.location.search) sessionStorage.setItem('queryParams', window.location.search);
        if (window.location.search)
            document.cookie = "queryParamsIAM=" + window.location.search + ";path=/;";
    };
    PlateauIAM.prototype.refreshPromise = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var isRefreshed, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        isRefreshed = false;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ((_a = this.keycloak) === null || _a === void 0 ? void 0 : _a.updateToken(this.updateTime))];
                    case 2:
                        isRefreshed = _b.sent();
                        this.constructIAMPlateau();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        window.location.href = window.location.protocol + '//' + window.location.host;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, isRefreshed];
                }
            });
        });
    };
    PlateauIAM.prototype.logout = function () {
        var _a, _b;
        var getredirectURL = window.location.protocol + '//' + window.location.host;
        if ((this.initOptions.identityProvider).type === 'queryString') {
            if (this.initOptions.realm)
                getredirectURL = window.location.protocol + '//' + window.location.host + '?realm=' + this.initOptions.realm;
            if (this.initOptions.subdomain)
                getredirectURL = window.location.protocol + '//' + window.location.host + '?subdomain=' + this.initOptions.subdomain;
            if (this.initOptions.realm && this.initOptions.subdomain)
                getredirectURL = window.location.protocol + '//' + window.location.host + '?realm=' + this.initOptions.realm + '&subdomain=' + this.initOptions.subdomain;
        }
        console.log('getredirectURL:');
        console.log(getredirectURL);
        // const getredirectURL = this.initOptions.url
        var options = { redirectUri: getredirectURL };
        var logoutUrl = (_a = this.keycloak) === null || _a === void 0 ? void 0 : _a.createLogoutUrl(options);
        var options2 = { redirectUri: logoutUrl };
        (_b = this.keycloak) === null || _b === void 0 ? void 0 : _b.logout(options2);
    };
    PlateauIAM.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var callback;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        callback = function () {
                            /*             setInterval(() => {
                                            this.refresh()
                                        }, this.refreshTime)
                             */ 
                        };
                        return [4 /*yield*/, this.init(callback)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PlateauIAM;
}());



/***/ })

}]);
//# sourceMappingURL=src_managers_PlateauIAM_ts.js.map