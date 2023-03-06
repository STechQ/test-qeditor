(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["websdk"] = factory();
	else
		root["websdk"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../common/shrimp/helpers/lazyLoader.ts":
/*!*************************************************!*\
  !*** ../../common/shrimp/helpers/lazyLoader.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyLoader": () => (/* binding */ LazyLoader)
/* harmony export */ });
var LazyLoader = /** @class */ (function () {
    function LazyLoader() {
    }
    LazyLoader.LoadModule = function (moduleBody) {
        var moduleObject = {};
        var module = new Function("module", "exports", moduleBody);
        var temp_export = {};
        module(moduleObject, temp_export);
        var exported = moduleObject.exports;
        return exported;
    };
    LazyLoader.FetchModuleBody = function (url) {
        return new Promise(function (res, rej) { return fetch(url).then(function (response) { return response.text().then(function (body) { return res({ body: body, status: response.status }); }).catch(rej); }).catch(rej); });
    };
    return LazyLoader;
}());



/***/ }),

/***/ "../../common/shrimp/helpers/qjsonParser/QJsonContentParser.ts":
/*!*********************************************************************!*\
  !*** ../../common/shrimp/helpers/qjsonParser/QJsonContentParser.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QJsonContentParser": () => (/* binding */ QJsonContentParser)
/* harmony export */ });
var QJsonContentParser = /** @class */ (function () {
    function QJsonContentParser() {
    }
    QJsonContentParser.ParseQJsonContent = function (jsonString) {
        var json = jsonString;
        if (jsonString.indexOf("let pjson =") > -1) {
            var jsonSplitted = jsonString.split("let pjson =");
            jsonSplitted = jsonSplitted[1].split(';\nexport')[0].split(';\r\nexport');
            json = jsonSplitted[0];
        }
        else if (json.indexOf("rally_microUI") > -1) {
            var registerIndex = json.indexOf("registerQJson");
            var jsonStartIndex = json.indexOf(",", registerIndex) + 1;
            json = json.substring(jsonStartIndex, json.length - 2);
        }
        return JSON.parse(json);
    };
    return QJsonContentParser;
}());



/***/ }),

/***/ "../../common/shrimp/helpers/qjsonParser/QJsonExtractHelper.ts":
/*!*********************************************************************!*\
  !*** ../../common/shrimp/helpers/qjsonParser/QJsonExtractHelper.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QJsonExtractHelper": () => (/* binding */ QJsonExtractHelper)
/* harmony export */ });
/* harmony import */ var _QJsonParserV2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QJsonParserV2 */ "../../common/shrimp/helpers/qjsonParser/QJsonParserV2.ts");
/* harmony import */ var _QJsonContentParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QJsonContentParser */ "../../common/shrimp/helpers/qjsonParser/QJsonContentParser.ts");


var QJsonExtractHelper = /** @class */ (function () {
    function QJsonExtractHelper() {
    }
    QJsonExtractHelper.qJsonExtractor = function (qjsonData) {
        var jsonString = QJsonExtractHelper.qJsonMediumDecider(qjsonData);
        if (jsonString.startsWith("qjson-")) {
            var version = (0,_QJsonParserV2__WEBPACK_IMPORTED_MODULE_0__.removeCR)(jsonString.substring("qjson-".length, jsonString.indexOf("\n")));
            return parsers[version].Parse(jsonString);
        }
        return QJsonExtractHelper.ParseQJsonContent(jsonString);
    };
    QJsonExtractHelper.qJsonMediumDecider = function (qjsonData) {
        if (typeof qjsonData == "string") { //rally | symphony
            return qjsonData.startsWith('{"qjson":"') ? JSON.parse(qjsonData).qjson : qjsonData; // symphony : other
        }
        else {
            var qjsonString = JSON.stringify(qjsonData);
            return qjsonData.qjson || qjsonString; //symphony & websdk.axios
        }
    };
    QJsonExtractHelper.ParseQJsonContent = function (jsonString) {
        return _QJsonContentParser__WEBPACK_IMPORTED_MODULE_1__.QJsonContentParser.ParseQJsonContent(jsonString);
    };
    return QJsonExtractHelper;
}());

var parsers = { v2: new _QJsonParserV2__WEBPACK_IMPORTED_MODULE_0__.QJsonParserV2() };


/***/ }),

/***/ "../../common/shrimp/helpers/qjsonParser/QJsonParserV2.ts":
/*!****************************************************************!*\
  !*** ../../common/shrimp/helpers/qjsonParser/QJsonParserV2.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QJsonParserV2": () => (/* binding */ QJsonParserV2),
/* harmony export */   "removeCR": () => (/* binding */ removeCR)
/* harmony export */ });
/* harmony import */ var _QJsonContentParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QJsonContentParser */ "../../common/shrimp/helpers/qjsonParser/QJsonContentParser.ts");
//////////////////////////////////SAMPLE V2 QJSON\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/**
 * @see \test\qjsonV2Tests.spec.ts
 */
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\SAMPLE V2 QJSON//////////////////////////////////

var QJsonParserV2 = /** @class */ (function () {
    function QJsonParserV2() {
    }
    QJsonParserV2.QJsonBodyToString = function (qjson, unformatQjson) {
        return "let pjson = " +
            (unformatQjson == true ? JSON.stringify(qjson) : JSON.stringify(qjson, null, '\t')) +
            ";\r\n" +
            "export default pjson";
    };
    QJsonParserV2.prototype.Serialize = function (qjson) {
        var bodundary = QJsonParserV2.boundary + "\r\n";
        var header = QJsonParserV2.headerPrefix + "v2\r\nboundary: " + bodundary + "\r\n" + bodundary;
        var serializeFile = function (fileName, type, fileBody) { return "name: " + fileName + "\r\ntype: " + type + "\r\n\r\n" + fileBody; };
        var files = qjson.files;
        var cFiles = qjson.cFiles;
        var qjsonFile;
        try {
            qjson.files = undefined;
            qjson.cFiles = undefined;
            qjsonFile = serializeFile("qjson", "qjson", QJsonParserV2.QJsonBodyToString(qjson));
        }
        finally {
            qjson.files = files;
            qjson.cFiles = cFiles;
        } // atomic
        var fileItems = files ? bodundary + Object.keys(files).map(function (fileName) { return serializeFile(fileName, "source", files[fileName]); }).join(bodundary) : "";
        var cFileItems = cFiles ? bodundary + Object.keys(cFiles).map(function (fileName) { return serializeFile(fileName, "compiled", cFiles[fileName]); }).join(bodundary) : "";
        return header + qjsonFile + fileItems + cFileItems;
    };
    QJsonParserV2.prototype.Parse = function (jsonString) {
        var curLine = this.nextLine(jsonString, 0);
        var fileHeaders = this.extractHeaders(jsonString, curLine.lastIndex);
        var boundary = fileHeaders.headers.boundary;
        var lastIndex = fileHeaders.lastIndex;
        var files = {};
        var cFiles = {};
        do {
            var section = this.getSection(jsonString, boundary, lastIndex);
            var targetFiles = section.headers.type == "compiled" ? cFiles : files;
            targetFiles[section.headers.name] = { headers: section.headers, content: section.section };
            lastIndex = section.lastIndex;
        } while (lastIndex != -1);
        var qjson = _QJsonContentParser__WEBPACK_IMPORTED_MODULE_0__.QJsonContentParser.ParseQJsonContent(files["qjson"].content);
        delete files.qjson;
        var qjsonFiles = qjson.files = {};
        var qjsonCFiles = qjson.cFiles = {};
        Object.keys(files).forEach(function (fileName) { return qjsonFiles[fileName] = files[fileName].content; });
        Object.keys(cFiles).forEach(function (fileName) { return qjsonCFiles[fileName] = cFiles[fileName].content; });
        return qjson;
    };
    QJsonParserV2.prototype.getSection = function (str, boundary, lastIndex) {
        var headers = this.extractHeaders(str, lastIndex);
        var section = this.getTillBoundary(str, boundary, headers.lastIndex);
        return { headers: headers.headers, section: section.section, lastIndex: section.lastIndex };
    };
    QJsonParserV2.prototype.getTillBoundary = function (str, boundary, lastIndex) {
        var nextBoundaryIndex = str.indexOf(boundary, lastIndex);
        if (nextBoundaryIndex == -1) {
            return { section: str.substring(lastIndex), lastIndex: -1 };
        }
        return { section: str.substring(lastIndex, nextBoundaryIndex), lastIndex: nextBoundaryIndex + boundary.length + 1 };
    };
    QJsonParserV2.prototype.extractHeaders = function (str, lastIndex) {
        var headersBucket = {};
        var curLine = { line: "", lastIndex: lastIndex };
        do {
            curLine = this.nextLine(str, curLine.lastIndex);
            if (!curLine.line) {
                break;
            } // headers section end
            var lineData = this.parseLine(curLine.line);
            if (!lineData) {
                continue;
            } // line is not parsable skip
            headersBucket[lineData.key] = lineData.value;
        } while (curLine.lastIndex != -1);
        return { headers: headersBucket, lastIndex: curLine.lastIndex };
    };
    QJsonParserV2.prototype.parseLine = function (line) {
        var commaIndex = line.indexOf(":");
        if (commaIndex == -1) {
            return undefined;
        }
        return { key: line.substring(0, commaIndex).trim(), value: line.substring(commaIndex + 1).trim() };
    };
    QJsonParserV2.prototype.nextLine = function (str, lastIndex) {
        var lineEnd = str.indexOf("\n", lastIndex);
        var line = removeCR(str.substring(lastIndex, lineEnd == -1 ? undefined : lineEnd));
        return { line: line, lastIndex: lineEnd + 1 || -1 };
    };
    QJsonParserV2.boundary = "-------------------" + "QJSONFileBoundary" + "-----------------------------";
    QJsonParserV2.headerPrefix = "qjson-";
    return QJsonParserV2;
}());
function removeCR(str) {
    return str.endsWith("\r") ? str.substring(0, str.length - 1) : str;
}



/***/ }),

/***/ "../../common/shrimp/helpers/urlHelper.ts":
/*!************************************************!*\
  !*** ../../common/shrimp/helpers/urlHelper.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlHelper": () => (/* binding */ UrlHelper)
/* harmony export */ });
var src = document.currentScript.src;
var pathRoot = src.substring(0, src.lastIndexOf("/"));
var UrlHelper = /** @class */ (function () {
    function UrlHelper() {
    }
    UrlHelper.getScriptRoot = function () {
        return pathRoot;
    };
    UrlHelper.concatUrl = function (url1, url2) {
        return (url1.endsWith("/") ? url1 : url1 + "/") + (url2.startsWith("/") ? url2.substring(1) : url2);
    };
    UrlHelper.IsDirectUrl = function (url) {
        return url.startsWith("http:") || url.startsWith("https:") || url.startsWith("blob:");
    };
    UrlHelper.GetDomain = function (urlString) {
        var url;
        try {
            url = new URL(urlString);
        }
        catch (ex) {
            var a = document.createElement("a");
            a.href = urlString;
            url = a;
        }
        return url.protocol + "//" + url.hostname + (url.port ? ":" + url.port : "");
    };
    UrlHelper.ParseQuery = function (queryString) {
        var query = {};
        if (!queryString) {
            return query;
        }
        var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            var curKey = decodeURIComponent(pair[0]);
            var curItem = query[curKey];
            if (!curItem) {
                curItem = [];
                query[curKey] = curItem;
            }
            curItem.push(decodeURIComponent(pair[1] || ''));
        }
        return query;
    };
    return UrlHelper;
}());



/***/ }),

/***/ "./build/legacy.ts":
/*!*************************!*\
  !*** ./build/legacy.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Legacy": () => (/* binding */ Legacy)
/* harmony export */ });
/* harmony import */ var _common_shrimp_helpers_urlHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/shrimp/helpers/urlHelper */ "../../common/shrimp/helpers/urlHelper.ts");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var Legacy = /** @class */ (function () {
    function Legacy() {
    }
    Legacy.migrateLegacySettings = function (settings) {
        /*
        csspath -> cssPath
        domainURL, urlprefix  ->  qjsonURLPrefix
        RegionalDefinition  ->  regionalDefinition
        DomainModuleList -> domainModuleList
        Backend -> backendInf
        PredefinedBackendHeaders -> backendInf.PredefinedBackendHeaders
        HeaderExceptionList -> backendInf.HeaderExceptionList
        Header -> backendInf.Header
        backendInf.singleTab -> singleTab
        */
        var legacySettingFields = [
            { oldField: "csspath", newField: "cssPath", log: "legacy Settings.yaml. change csspath -> cssPath" },
            { oldField: "domainURL", newField: "qjsonURLPrefix", log: "legacy Settings.yaml. change domainURL -> qjsonURLPrefix" },
            { oldField: "urlprefix", newField: "qjsonURLPrefix", log: "legacy Settings.yaml. change urlprefix -> qjsonURLPrefix" },
            { oldField: "RegionalDefinition", newField: "regionalDefinition", log: "legacy Settings.yaml. change RegionalDefinition -> regionalDefinition" },
            { oldField: "DomainModuleList", newField: "domainModuleList", log: "legacy Settings.yaml. change DomainModuleList -> domainModuleList" },
            { oldField: "Backend", newField: "backendInf", log: "legacy Settings.yaml. Move Backend in to backendInf key." },
            { oldField: "PredefinedBackendHeaders", newField: "backendInf.PredefinedBackendHeaders", log: "legacy Settings.yaml. Move PredefinedBackendHeaders in to backendInf key." },
            { oldField: "HeaderExceptionList", newField: "backendInf.HeaderExceptionList", log: "legacy Settings.yaml. Move HeaderExceptionList in to backendInf key." },
            { oldField: "Header", newField: "backendInf.Header", log: "legacy Settings.yaml. Move Header in to backendInf key." },
            { oldField: "backendInf.singleTab", newField: "singleTab", log: "legacy Settings.yaml. Move Header in to backendInf key." },
        ];
        var findOldFieldValue = function (fieldPath) {
            var fieldPathArray = fieldPath.split('.');
            var field = settings;
            for (var i = 0; i < fieldPathArray.length; i++) {
                var temp = field[fieldPathArray[i]];
                if (!temp) {
                    return;
                }
                if (i == fieldPathArray.length - 1)
                    delete field[fieldPathArray[i]];
                field = temp;
            }
            return field;
        };
        var setNewFieldValue = function (value, fieldPathArray, settings) {
            if (fieldPathArray.length == 1) {
                if (!settings[fieldPathArray[0]]) {
                    settings[fieldPathArray[0]] = value;
                }
                return;
            }
            if (settings[fieldPathArray[0]] && typeof (settings[fieldPathArray[0]]) != "object")
                settings[fieldPathArray[0]] = {};
            settings[fieldPathArray[0]] = settings[fieldPathArray[0]] || {};
            setNewFieldValue(value, fieldPathArray.slice(1), settings[fieldPathArray[0]]);
        };
        legacySettingFields.forEach(function (item) {
            var oldField = findOldFieldValue(item.oldField);
            if (oldField) {
                setNewFieldValue(oldField, item.newField.split('.'), settings);
            }
        });
        return settings;
    };
    /*
     * @param url: (legacy applications url format: quick://<module_name>/<path_to_file>)
     * @returns formattedURL for newBuild
     */
    Legacy.fixLegacyPathFormat = function (url) {
        if (url.startsWith("quick://")) {
            var splittedPath = url.substring(8).split('/');
            return "/microui/" + splittedPath[0] + "/qjson/" + url.substring(splittedPath[0].length + 9);
        }
        else {
            return url;
        }
    };
    Legacy.containerServicesModifications = function (self, containerServices) {
        if (!containerServices) {
            containerServices = {};
        }
        if (self.PlateauIAM) {
            containerServices.logout = function () { self.PlateauIAM.logout(); };
            containerServices.getPlateauIAM = function () { return self.PlateauIAM; };
        }
        //LIMBO: below code found in qui. we do not know if anyone uses this. 
        //undocumented noRelativeQjsonUrl feature. 
        if (self.webSDKSettings && self.webSDKSettings.noRelativeQjsonUrl) {
            containerServices.getURL = function (url, mode) {
                if (mode != "ui" || _common_shrimp_helpers_urlHelper__WEBPACK_IMPORTED_MODULE_0__.UrlHelper.IsDirectUrl(url)) {
                    return undefined;
                }
                return url.startsWith("/") ? url : "/" + url;
            };
        }
        //undocumented noRelativeQjsonUrl feature.
        return containerServices;
    };
    Legacy.fixQueryString = function (qjsonPath) {
        var _a;
        //ex:
        //this is symphony -> "q=/isleasing-sym/qjsonfunc?qjsonpath=homeTablet"
        //this is qui -> "q=/static/qjsons/homeTablet"
        var search = window.location.search;
        var query = {};
        if (search) {
            search = search[0] === '?' ? search.substr(1) : search;
            search = search.replace(/\?/, "&");
            query = _common_shrimp_helpers_urlHelper__WEBPACK_IMPORTED_MODULE_0__.UrlHelper.ParseQuery(search);
            qjsonPath = query.q ? query.q.splice(0, 1).join("") : qjsonPath;
            if (((_a = query.q) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                delete query.q;
            }
        }
        if (query.qjsonpath) {
            qjsonPath += "?qjsonpath=" + query.qjsonpath.splice(0, 1);
            if (query.qjsonpath.length == 0) {
                delete query.qjsonpath;
            }
        }
        var leftQueryString = Object.entries(query).map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            return value === null || value === void 0 ? void 0 : value.map(function (eachValue) { return encodeURIComponent(key) + "=" + encodeURIComponent(eachValue); });
        }).map(function (item) { return item === null || item === void 0 ? void 0 : item.join("&"); }).join('&');
        if (qjsonPath === null || qjsonPath === void 0 ? void 0 : qjsonPath.endsWith(".js")) {
            return qjsonPath;
        }
        if (qjsonPath) {
            var _qjsonPath = (qjsonPath === null || qjsonPath === void 0 ? void 0 : qjsonPath.endsWith(".qjson")) ? qjsonPath : qjsonPath += ".qjson";
            return leftQueryString ? _qjsonPath + "?" + leftQueryString : _qjsonPath;
        }
        return qjsonPath;
    };
    return Legacy;
}());



/***/ }),

/***/ "./src/managers/LivePreviewManager.ts":
/*!********************************************!*\
  !*** ./src/managers/LivePreviewManager.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LivePreviewManager": () => (/* binding */ LivePreviewManager)
/* harmony export */ });
/* harmony import */ var _stechquick_plateau_comm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stechquick/plateau-comm */ "../plateau-comm/dist/PlateauMessaging.js");
/* harmony import */ var _stechquick_plateau_comm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stechquick_plateau_comm__WEBPACK_IMPORTED_MODULE_0__);
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

var LivePreviewManager = /** @class */ (function () {
    function LivePreviewManager(targetWindow) {
        this.frameCommunication = _stechquick_plateau_comm__WEBPACK_IMPORTED_MODULE_0__.PlateauMessaging.CreatePlateauMessaging(targetWindow);
    }
    LivePreviewManager.prototype.isItLivePreview = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var self, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, ((_a = self.frameCommunication.Send("LivePreview", "getLPID", { type: "getLPID" }, { awaitResponse: true, awaitTime: 100 })) === null || _a === void 0 ? void 0 : _a.catch(function (reason) {
                                return;
                            }))];
                    case 1:
                        response = _b.sent();
                        if (!response || response.msg.type != "getLPIDResponse") {
                            return [2 /*return*/];
                        }
                        self.livePreviewID = response.msg.ID;
                        return [2 /*return*/, response.msg.ID];
                }
            });
        });
    };
    LivePreviewManager.prototype.getLivePreviewSettings = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var self, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, ((_a = self.frameCommunication.Send("LivePreview", "getLPPlateauUIOptions", { type: "getLPPlateauUIOptions" }, { awaitResponse: true, awaitTime: 10000 })) === null || _a === void 0 ? void 0 : _a.catch(function (reason) {
                                return;
                            }))];
                    case 1:
                        response = _b.sent();
                        if (!response || response.msg.type != "getLPPlateauUIOptionsResponse") {
                            return [2 /*return*/];
                        }
                        self.getQjsonUrlPrefix = response.msg.getQJsonUrlPrefix;
                        return [2 /*return*/, response.msg.PlateauUIOptions];
                }
            });
        });
    };
    LivePreviewManager.prototype.setExternalQJsonRetriever = function (sdk) {
        var self = this;
        if (!self.getQjsonUrlPrefix) {
            return;
        }
        sdk.setQJsonUrlPrefix(self.getQjsonUrlPrefix);
    };
    return LivePreviewManager;
}());



/***/ }),

/***/ "../../node_modules/@stechquick/algae/lib/helpers/createPromiseData.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@stechquick/algae/lib/helpers/createPromiseData.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePromiseData = void 0;
var syncResolved = false;
new Promise(function (res) { return res(); }).then(function () { return syncResolved = true; });
typeof (doNothing) != "undefined" && doNothing();
var syncResolveProblem = syncResolved === true; // platform has sync resolve problem or not
/**
 * @param timeout timeout time in ms, undefined if infinite
 */
function CreatePromiseData(timeout, opt) {
    if (opt === void 0) { opt = {}; }
    var syncResolveFixer = function (cb) { return syncResolveProblem && opt.fixSyncResolve ? function (value) { return setTimeout(function () { return cb(value); }); } : cb; };
    var resolver = undefined, reject = undefined;
    var timer;
    var startTimer = function (timeout) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () { reject(new Error("The operation has timed out. timeoutValue  : " + timeout)); }, timeout);
    };
    if (timeout) {
        startTimer(timeout);
    }
    return {
        startTimer: startTimer,
        promise: new Promise(function (res, rej) { resolver = syncResolveFixer(res); reject = rej; }),
        resolver: resolver,
        reject: reject
    };
}
exports.CreatePromiseData = CreatePromiseData;


/***/ }),

/***/ "../../node_modules/@stechquick/algae/lib/helpers/importHelper.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@stechquick/algae/lib/helpers/importHelper.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.importModuleBody = exports.importModuleFile = exports.importModule = exports.importScript = void 0;
var createPromiseData_1 = __webpack_require__(/*! ./createPromiseData */ "../../node_modules/@stechquick/algae/lib/helpers/createPromiseData.js");
function importScript(path, windowLibraryName, importField) {
    if (importField === void 0) { importField = "default"; }
    return __awaiter(this, void 0, void 0, function () {
        var prom, script, module;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    prom = (0, createPromiseData_1.CreatePromiseData)();
                    script = document.createElement("script");
                    script.src = path;
                    script.onload = function () { return prom.resolver(); };
                    script.onerror = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return prom.reject(__assign({}, args));
                    };
                    document.body.appendChild(script);
                    return [4 /*yield*/, prom.promise];
                case 1:
                    _a.sent();
                    module = window[windowLibraryName];
                    try {
                        delete window[windowLibraryName];
                    }
                    catch (error) { // throws "Cannot delete property of #<Window>", some declared properties are mounted on the window and are non-configurable.
                    }
                    return [2 /*return*/, (importField == "*" ? module : module[importField])];
            }
        });
    });
}
exports.importScript = importScript;
function importModule(path, require, importField) {
    if (importField === void 0) { importField = "default"; }
    return __awaiter(this, void 0, void 0, function () {
        var compjs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, importModuleFile(path)];
                case 1:
                    compjs = _a.sent();
                    return [2 /*return*/, importModuleBody(compjs, require, importField)];
            }
        });
    });
}
exports.importModule = importModule;
function importModuleFile(path) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(path)];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, result.text()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.importModuleFile = importModuleFile;
function importModuleBody(moduleJs, require, importField) {
    if (importField === void 0) { importField = "default"; }
    return __awaiter(this, void 0, void 0, function () {
        var module, exports;
        return __generator(this, function (_a) {
            module = {}, exports = {};
            new Function("module", "exports", "require", moduleJs)(module, exports, require);
            return [2 /*return*/, (importField == "*" ? module.exports : module.exports[importField])];
        });
    });
}
exports.importModuleBody = importModuleBody;


/***/ }),

/***/ "../plateau-comm/dist/PlateauMessaging.js":
/*!************************************************!*\
  !*** ../plateau-comm/dist/PlateauMessaging.js ***!
  \************************************************/
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_547__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_547__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_547__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_547__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_547__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_547__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_547__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_547__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_547__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_547__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_547__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_547__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_547__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_547__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_547__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_547__(__nested_webpack_require_547__.s = "./src/PlateauMessaging.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../common/shrimp/helpers/arrayHelper.ts":
/*!**************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/arrayHelper.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayHelper = void 0;
var ArrayHelper = /** @class */ (function () {
    function ArrayHelper() {
    }
    ArrayHelper.findAndRet = function (array, predicate) {
        var len = array.length;
        for (var i = 0; i < len; i++) {
            var retVal = predicate(array[i], i, array);
            if (retVal !== undefined) {
                return retVal;
            }
        }
        return undefined;
    };
    ArrayHelper.InitArray = function (size) {
        var arr = [];
        for (var i = 0; i < size; i++) {
            arr.push(i);
        }
        return arr;
    };
    ArrayHelper.InitEmptyArray = function (size) {
        return Array.from(new Array(size));
    };
    /**
     * Fast way to find last object in a given array
     * @param array to be search in
     * @param key to be last searched  object key
     */
    ArrayHelper.lastIndexOf = function (array, key, value) {
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i][key] === (value ? value : key))
                return i;
        }
        return -1;
    };
    ;
    /**
     * Change object of index
     * First index can move to the end of the array
     * Last index can move to first index
     * @param array Array to be moved
     * @param oldIndex Old index of object
     * @param newIndex New index of object
     */
    ArrayHelper.arrayMove = function (array, oldIndex, newIndex) {
        if (newIndex < 0) {
            array.splice(array.length - 1, 0, array.splice(oldIndex, 1)[0]);
        }
        else if (newIndex == array.length) {
            array.splice(0, 0, array.splice(oldIndex, 1)[0]);
        }
        else {
            array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
        }
    };
    ;
    return ArrayHelper;
}());
exports.ArrayHelper = ArrayHelper;


/***/ }),

/***/ "../../common/shrimp/helpers/bulkManager.ts":
/*!**************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/bulkManager.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkManager = void 0;
var BulkManager = /** @class */ (function () {
    function BulkManager() {
    }
    /**
     * Vomit the bulk messages into callback function of the shell
     * @param message Log message that to be added
     */
    BulkManager.prototype.writeMessage = function (message) {
        var _a;
        (_a = this.logHandler) === null || _a === void 0 ? void 0 : _a.call(this, message);
    };
    return BulkManager;
}());
exports.BulkManager = BulkManager;


/***/ }),

/***/ "../../common/shrimp/helpers/catcher.ts":
/*!**********************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/catcher.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_7594__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.catcher = void 0;
var logger_1 = __nested_webpack_require_7594__(/*! ./logger */ "../../common/shrimp/helpers/logger.ts");
var catcher = /** @class */ (function () {
    function catcher() {
    }
    catcher.tryLog = function (_a) {
        var cb = _a.cb, catchLog = _a.catchLog;
        try {
            cb();
        }
        catch (error) {
            var logMessage = catchLog ? catchLog(error) : "tryLog error happened";
            logger_1.Logger.Log({ logMessage: logMessage, error: error, logType: logger_1.LogType.Error });
        }
    };
    return catcher;
}());
exports.catcher = catcher;


/***/ }),

/***/ "../../common/shrimp/helpers/cryptoHelper.ts":
/*!***************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/cryptoHelper.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoHelper = void 0;
var CryptoHelper = /** @class */ (function () {
    function CryptoHelper() {
    }
    /**
     *
     * @param base number layout (number of distinct digits) (10'luk sayı düzeni, 16'lık sayı düzeni)
     * @param length length of word. Max value: 16
     */
    CryptoHelper.GetRandomWord = function (base, length) {
        return Math.random().toString(base).substring(2, length + 2);
    };
    /**
     * Ex: be945482-jf10-40d1-a50d-rzxa2c41fdcu
     */
    CryptoHelper.CreateGuid = function () {
        var _this = this;
        return [8, 4, 4, 4, 6].map(function (length) { return _this.GetRandomWord(36, length); }).join("-") + ((++CryptoHelper.guidCounter) % 2150000000).toString(36);
    };
    CryptoHelper.guidCounter = 0;
    return CryptoHelper;
}());
exports.CryptoHelper = CryptoHelper;


/***/ }),

/***/ "../../common/shrimp/helpers/eventBus.ts":
/*!***********************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/eventBus.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_9969__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBus = void 0;
var hook_1 = __nested_webpack_require_9969__(/*! ./hook */ "../../common/shrimp/helpers/hook.ts");
var EventBus = /** @class */ (function () {
    function EventBus() {
        this.subsDict = {};
    }
    EventBus.prototype.obtainSubsList = function (eventName) {
        return this.subsDict[eventName] || (this.subsDict[eventName] = new hook_1.Hook("EventBus_" + eventName));
    };
    EventBus.prototype.Subscribe = function (eventName, cb) {
        if (eventName == EventBus.AllEvents) {
            throw new Error(eventName + " is a registered key. If you want to subscribe all events, use SubsribeAll().");
        }
        this.obtainSubsList(eventName).subscribe(cb);
    };
    EventBus.prototype.Unsubscribe = function (eventName, cb) {
        var _a;
        if (eventName == EventBus.AllEvents) {
            throw new Error(eventName + " is a registered key. If you want to subscribe all events, use SubsribeAll().");
        }
        (_a = this.subsDict[eventName]) === null || _a === void 0 ? void 0 : _a.unsubscribe(cb);
    };
    EventBus.prototype.SubscribeAll = function (cb) {
        this.obtainSubsList(EventBus.AllEvents).subscribe(cb);
    };
    EventBus.prototype.UnsubscribeAll = function (cb) {
        var _a;
        (_a = this.subsDict[EventBus.AllEvents]) === null || _a === void 0 ? void 0 : _a.unsubscribe(cb);
    };
    EventBus.prototype.Trigger = function (eventName) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var allEventsHook = this.subsDict[EventBus.AllEvents];
        allEventsHook === null || allEventsHook === void 0 ? void 0 : allEventsHook.triggerer.apply(allEventsHook, params);
        if (eventName == EventBus.AllEvents) {
            return;
        }
        var hook = this.subsDict[eventName];
        hook === null || hook === void 0 ? void 0 : hook.triggerer.apply(hook, params);
    };
    EventBus.prototype.TriggerJustAllSubs = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var allEventsHook = this.subsDict[EventBus.AllEvents];
        allEventsHook === null || allEventsHook === void 0 ? void 0 : allEventsHook.triggerer.apply(allEventsHook, params);
    };
    EventBus.AllEvents = "AllEvents";
    return EventBus;
}());
exports.EventBus = EventBus;


/***/ }),

/***/ "../../common/shrimp/helpers/frameCommunicator.ts":
/*!********************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/frameCommunicator.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_12911__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameCommunicator = void 0;
var structuredSocket_1 = __nested_webpack_require_12911__(/*! ./webSocket/structuredSocket */ "../../common/shrimp/helpers/webSocket/structuredSocket.ts");
var WindowSocket = /** @class */ (function () {
    function WindowSocket(targetWindow) {
        var _this = this;
        this.OnMessageWithDirectObject = true;
        this.targetWindow = targetWindow;
        window.addEventListener("message", function (ev) {
            var _a;
            if (ev.source != targetWindow) {
                return;
            }
            (_a = _this.OnMessage) === null || _a === void 0 ? void 0 : _a.call(_this, ev.data);
        });
    }
    WindowSocket.prototype.Send = function (packet) {
        this.targetWindow.postMessage(packet, "*");
    };
    return WindowSocket;
}());
var FrameCommunicator = /** @class */ (function () {
    function FrameCommunicator(targetWindow) {
        this.windowSocket = new WindowSocket(targetWindow);
        this.structuredSocket = new structuredSocket_1.StructuredSocket(this.windowSocket);
    }
    FrameCommunicator.prototype.Send = function (target, messageType, message, options) {
        var structuredSocket = this.structuredSocket;
        return structuredSocket.Send(message, options);
    };
    FrameCommunicator.prototype.Subscribe = function (target, messageType, cb) {
        var structuredSocket = this.structuredSocket;
        structuredSocket.Subscribe(messageType, cb);
    };
    FrameCommunicator.prototype.SubscribeAll = function (cb) {
        this.structuredSocket.SubscribeAll(function (data) { return cb(data); });
    };
    FrameCommunicator.prototype.UnsubscribeAll = function (cb) {
        this.structuredSocket.UnsubscribeAll(function (data) { return cb(data); });
    };
    return FrameCommunicator;
}());
exports.FrameCommunicator = FrameCommunicator;


/***/ }),

/***/ "../../common/shrimp/helpers/hook.ts":
/*!*******************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/hook.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_15209__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Hook = void 0;
var catcher_1 = __nested_webpack_require_15209__(/*! ./catcher */ "../../common/shrimp/helpers/catcher.ts");
var stringHelper_1 = __nested_webpack_require_15209__(/*! ./stringHelper */ "../../common/shrimp/helpers/stringHelper.ts");
var Hook = /** @class */ (function () {
    function Hook(hookName, options) {
        if (options === void 0) { options = {}; }
        this.subscribers = [];
        this.hookStateListeners = [];
        this.hookName = hookName;
        this.triggerPostSubscribersWithCb = options.triggerPostSubscribersWithCb || false;
        options.manageState = options.manageState || false;
        this.hookState = { triggered: false, triggerArgs: [], active: options.manageState };
    }
    Object.defineProperty(Hook.prototype, "TriggerPostSubscribersWithCb", {
        get: function () {
            return this.triggerPostSubscribersWithCb;
        },
        set: function (v) {
            this.triggerPostSubscribersWithCb = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hook.prototype, "subscriberCount", {
        get: function () {
            return this.subscribers.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hook.prototype, "hasSubscribers", {
        get: function () {
            return this.subscriberCount > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hook.prototype, "hasPostSubscribers", {
        get: function () {
            var _a, _b;
            return (((_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.hasPostSubscribers) || ((_b = this.postSubscribers) === null || _b === void 0 ? void 0 : _b.hasSubscribers)) === true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hook.prototype, "triggerer", {
        get: function () {
            return this.trigger;
        },
        enumerable: false,
        configurable: true
    });
    Hook.prototype.trigger = function () {
        var _this = this;
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.hookState.active) {
            this.hookState.triggered = true;
            this.hookState.triggerArgs = args;
        }
        this.subscribers.forEach(function (sub) { return _this.tryTriggerSubscriber(sub, args); });
        if (!this.triggerPostSubscribersWithCb)
            (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.triggerer.apply(this.postSubscribers, args);
    };
    Hook.prototype.tryTriggerSubscriber = function (sub, args) {
        var _this = this;
        catcher_1.catcher.tryLog({ cb: function () { return sub.apply(null, args); }, catchLog: function () { return _this.getHookName() + " subscriber failed"; } });
    };
    Hook.prototype.getHookName = function () {
        var retVal = this.hookName;
        if (!stringHelper_1.StringHelper.endsWith(retVal.toLowerCase(), "hook")) {
            retVal += " hook";
        }
        return retVal;
    };
    Hook.prototype.ResetAndStartState = function () {
        this.hookState.triggerArgs = [];
        this.hookState.active = true;
        this.hookState.triggered = false;
        this.hookStateListeners.forEach(function (cb) { return cb.apply(null); });
    };
    Hook.prototype.DisableState = function () {
        this.hookState.triggerArgs = [];
        this.hookState.active = false;
        this.hookState.triggered = false;
    };
    Hook.prototype.IsTriggered = function () {
        if (!this.hookState.active) {
            throw new Error("IsTriggered can not be checked on a non manageState Hook: " + this.hookName);
        }
        return this.hookState.triggered;
    };
    Hook.prototype.triggerPostSubscribers = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.triggerer.apply(this.postSubscribers, args);
    };
    //#region subscribers
    Hook.prototype.subscribe = function (cb) {
        this.subscribers.push(cb);
        this.hookState.active && this.hookState.triggered && this.tryTriggerSubscriber(cb, this.hookState.triggerArgs);
    };
    Hook.prototype.unsubscribe = function (cb) {
        this.subscribers = this.subscribers.filter(function (sub) { return sub != cb; }); // splice is fastest but this is safest, because of immutability, because of forEach traversals
    };
    Hook.prototype.clearSubscribers = function () {
        this.subscribers = [];
    };
    //#endregion
    //#region postSubscribers
    Hook.prototype.postSubscribe = function (cb) {
        if (!this.postSubscribers) {
            this.postSubscribers = new Hook(this.hookName + "_Post", { manageState: this.hookState.active });
            this.postSubscribers.hookState = this.hookState;
        }
        this.postSubscribers.subscribe(cb);
    };
    Hook.prototype.postUnsubscribe = function (cb) {
        var _a;
        (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.unsubscribe(cb);
    };
    Hook.prototype.clearPostSubscribers = function (forced) {
        var _a;
        if (forced === void 0) { forced = false; }
        (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.clearSubscribers();
        if (forced || !this.hasPostSubscribers) {
            this.postSubscribers = undefined;
        }
    };
    //#endregion
    Hook.prototype.listenHookState = function (cb) {
        this.hookStateListeners.push(cb);
    };
    Hook.prototype.forceClearAllSubscibers = function () {
        this.clearPostSubscribers(true);
        this.clearSubscribers();
    };
    return Hook;
}());
exports.Hook = Hook;


/***/ }),

/***/ "../../common/shrimp/helpers/logger.ts":
/*!*********************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/logger.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_21591__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LogType = void 0;
var ILogger_1 = __nested_webpack_require_21591__(/*! ../interfaces/ComponentInterfaces/ILogger */ "../../common/shrimp/interfaces/ComponentInterfaces/ILogger.ts");
Object.defineProperty(exports, "LogType", { enumerable: true, get: function () { return ILogger_1.LogType; } });
var bulkManager_1 = __nested_webpack_require_21591__(/*! ./bulkManager */ "../../common/shrimp/helpers/bulkManager.ts");
var windowHelper_1 = __nested_webpack_require_21591__(/*! ./windowHelper */ "../../common/shrimp/helpers/windowHelper.ts");
var Singularizer = /** @class */ (function () {
    function Singularizer() {
    }
    Singularizer.trySingularize = function (name, instance) {
        if (!this.singularized(name)) {
            windowHelper_1.WindowHelper.Instance.Window[name] = instance;
            return true;
        }
        return false;
    };
    Singularizer.singularized = function (name) {
        return windowHelper_1.WindowHelper.Instance.Window[name];
    };
    Singularizer.getFreeName = function (name) {
        var _a;
        var win = (_a = windowHelper_1.WindowHelper === null || windowHelper_1.WindowHelper === void 0 ? void 0 : windowHelper_1.WindowHelper.Instance.Window) !== null && _a !== void 0 ? _a : {};
        var counter = 0;
        while (win[name + "_" + ++counter])
            ;
        return name + "_" + counter;
    };
    return Singularizer;
}());
var Logger = /** @class */ (function () {
    function Logger() {
        // i know this functions are static but in rallyshell we have shrimp not quick_shrimp.
        // and the first caller of the functions are throws 'not implemented exception' because of lazy load.
        return { Log: this.Log };
    }
    Object.defineProperty(Logger, "LogBulkManager", {
        get: function () {
            if (!Logger.logBulkManager) {
                Logger.logBulkManager = Singularizer.singularized(Logger.windowName);
            }
            return Logger.logBulkManager;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Whenever the shell initiates its callback, this handling also will be initiated as well
     * ? Static may change? Will see
     * @param timer Seconds of writing down the messages
     * @param callBack Function that handles the messages, comes from shell.
     */
    Logger.Init = function (_a) {
        var callBack = _a.callBack, clear = _a.clear;
        this.logBulkManager = new bulkManager_1.BulkManager();
        this.logBulkManager.logHandler = callBack;
        Singularizer.trySingularize(this.windowName, this.logBulkManager);
    };
    /**
     * Console log function
     * @param logMessage Message that to be written to the console
     * @param logType console type(Debug, Trace, Warning, Error)
     * @param backgroundColor message background color
     * @param color message text color
     * @param additional additional info for logging
     * @param yamlLogType
     * @returns void
     */
    Logger.Log = function (_a) {
        var logMessage = _a.logMessage, _b = _a.logType, logType = _b === void 0 ? ILogger_1.LogType.Trace : _b, error = _a.error, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? null : _c, _d = _a.textColor, textColor = _d === void 0 ? null : _d, _e = _a.additional, additional = _e === void 0 ? null : _e, source = _a.source, _f = _a.isClientLog, isClientLog = _f === void 0 ? false : _f, yamlLogType = _a.yamlLogType, minEngineLogLevel = _a.minEngineLogLevel;
        var colorOptions = backgroundColor || textColor ? "background: " + backgroundColor + "; color: " + textColor : null;
        var targetLog;
        switch (true) {
            case logType == ILogger_1.LogType.MobilDebug && this.logLevel.indexOf(ILogger_1.LogType.MobilDebug) > -1:
                targetLog = console.log;
                break;
            case (logType == ILogger_1.LogType.Debug && this.logLevel.indexOf(ILogger_1.LogType.Debug) > -1):
            case (logType == ILogger_1.LogType.Trace && this.logLevel.indexOf(ILogger_1.LogType.Trace) > -1):
                targetLog = console.log;
                break;
            case (logType == ILogger_1.LogType.Error && this.logLevel.indexOf(ILogger_1.LogType.Error) > -1):
                targetLog = console.error;
                break;
            case (logType == ILogger_1.LogType.Warning && this.logLevel.indexOf(ILogger_1.LogType.Warning) > -1):
                targetLog = console.warn;
                break;
            case true:
                break;
        }
        var params = [logMessage];
        if (colorOptions && typeof logMessage === "string") {
            params[0] = '%c' + logMessage;
            params.push(colorOptions);
        }
        if (error) {
            params.push(error);
        }
        if (additional) {
            params.push(additional);
        }
        if (source) { // MUST BE LAST!!!! (used in mobile sim. -> editor logging)
            params.push({ source: source });
        }
        targetLog === null || targetLog === void 0 ? void 0 : targetLog.apply(console, params);
        if (isClientLog || (isClientLog && yamlLogType && yamlLogType <= logType) || minEngineLogLevel && minEngineLogLevel <= logType) {
            this.prepareClientLog(logMessage, logType);
        }
    };
    /**
     * Log messages are controlled by their size and add them to the bulk array with type, date and caller function name
     * @param logMessage Message that will be written to the server
     * @param logType Type of log message
     */
    Logger.prepareClientLog = function (logMessage, logType) {
        var _a;
        var currentDateFormat = new Date(Date.now());
        var clientDate = currentDateFormat.getFullYear() + "." + ("0" + (currentDateFormat.getMonth() + 1)).slice(-2) + "." + ("0" + currentDateFormat.getDate()).slice(-2) + " " +
            currentDateFormat.getHours() + ':' + ("0" + currentDateFormat.getMinutes()).slice(-2) + ':' + ("0" + currentDateFormat.getSeconds()).slice(-2) + ':' + currentDateFormat.getMilliseconds();
        ;
        var message;
        var whoCallMe = this.getCalleFunctionName();
        if (typeof logMessage !== "string" && logType > 0) {
            try {
                message = this.shorten(JSON.stringify(logMessage), logType);
            }
            catch (error) {
                message = "Can not stringfy the given log. Type of log data is: " + Object.prototype.toString.call(logMessage);
            }
        }
        else {
            message = this.shorten(logMessage, logType);
        }
        (_a = Logger.LogBulkManager) === null || _a === void 0 ? void 0 : _a.writeMessage({ message: message, type: ILogger_1.LogType[logType], time: clientDate, caller: whoCallMe });
    };
    /**
     * Can't call Log.calle.caller beacuse of the TypeScript classes are on "strict mode"
     * JS doesn't allow to arguments.callee.caller on strict mode
     * So just throw an simple Error and get the latest function name
     * returns String
     */
    Logger.getCalleFunctionName = function () {
        // try {
        //     throw new Error();
        // }
        // catch (e) {
        //     try {
        //         return e.stack.split('at ')[4].split(' ')[0];
        //     } catch (e) {
        //         return '';
        //     }
        // }
        return '';
    };
    /**
     * Clears the bulk of messages
     */
    Logger.clearLogs = function () {
        var _a, _b;
        (_b = (_a = Logger.LogBulkManager) === null || _a === void 0 ? void 0 : _a.clear) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    /**
     * Trim the message with size of the log type
     * @param logMessage log message
     * @param logType Log type that will be controlled
     */
    Logger.shorten = function (logMessage, logType) {
        if (logType > logMessage.length) {
            return logMessage;
        }
        else {
            return "Non trimmed message size is: " + logMessage.length;
        }
    };
    ;
    /**
     * @deprecated do not use. Use Logger.Log(...)
     */
    Logger.prototype.Log = function (options) {
        return Logger.Log(options);
    };
    Logger.windowName = Singularizer.getFreeName("shrimp_shelldorynemo_pulsar_lbm");
    Logger.logLevel = [ILogger_1.LogType.MobilDebug, ILogger_1.LogType.Trace, ILogger_1.LogType.Debug, ILogger_1.LogType.Warning, ILogger_1.LogType.Error];
    return Logger;
}());
exports.Logger = Logger;


/***/ }),

/***/ "../../common/shrimp/helpers/singularizer.ts":
/*!***************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/singularizer.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Singularizer = void 0;
var Singularizer = /** @class */ (function () {
    function Singularizer() {
    }
    Singularizer.trySingularize = function (name, targetObject, instance) {
        var retVal = targetObject[name];
        if (!retVal) {
            retVal = targetObject[name] = instance;
        }
        return retVal;
    };
    return Singularizer;
}());
exports.Singularizer = Singularizer;


/***/ }),

/***/ "../../common/shrimp/helpers/stringHelper.ts":
/*!***************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/stringHelper.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_31433__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelper = void 0;
var arrayHelper_1 = __nested_webpack_require_31433__(/*! ./arrayHelper */ "../../common/shrimp/helpers/arrayHelper.ts");
var StringHelper = /** @class */ (function () {
    function StringHelper() {
    }
    /** Function that count occurrences of a substring in a string;
     * @author Vitim.us https://gist.github.com/victornpb/7736865
     * @see http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string/7924240#7924240
     */
    StringHelper.OccurenceCount = function (value, searchString, allowOverlapping) {
        value += "";
        searchString += "";
        if (searchString.length <= 0)
            return (value.length + 1);
        var n = 0, pos = 0, step = allowOverlapping ? 1 : searchString.length;
        while (true) {
            pos = value.indexOf(searchString, pos);
            if (pos >= 0) {
                ++n;
                pos += step;
            }
            else
                break;
        }
        return n;
    };
    StringHelper.RepeatString = function (value, repeatCount) {
        return arrayHelper_1.ArrayHelper.InitEmptyArray(repeatCount + 1).join(value);
    };
    StringHelper.TrimStart = function (str, removeString) {
        if (!str || !removeString) {
            return str;
        }
        while (true) {
            var index = str.indexOf(removeString);
            if (index != 0) {
                return str;
            }
            str = str.substring(removeString.length);
        }
    };
    StringHelper.endsWith = function (self, search, this_len) {
        if (this_len === undefined || this_len > self.length) {
            this_len = self.length;
        }
        return self.substring(this_len - search.length, this_len) === search;
    };
    /**
     * Returns a random string
     * @param length Length of generated random string
     */
    StringHelper.randomStringGenerator = function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    StringHelper.capitalizeString = function (input) {
        ///<summary>Capitialize first letter of a string</summary>
        return input.charAt(0).toUpperCase() + input.slice(1);
    };
    ;
    /**
     * Change char in string
     * @param str String that to be changed
     * @param index Index of string
     * @param chr Char
     */
    StringHelper.setCharAt = function (str, index, chr) {
        if (index < 0) {
            return str;
        }
        if (index > str.length) {
            index = str.length - 1;
        }
        return str.substr(0, index) + chr + str.substr(index + 1);
    };
    return StringHelper;
}());
exports.StringHelper = StringHelper;


/***/ }),

/***/ "../../common/shrimp/helpers/webSocket/structuredSocket.ts":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/webSocket/structuredSocket.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_34920__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StructuredSocket = void 0;
var IPromiseData_1 = __nested_webpack_require_34920__(/*! ../../interfaces/IPromiseData */ "../../common/shrimp/interfaces/IPromiseData.ts");
var cryptoHelper_1 = __nested_webpack_require_34920__(/*! ../cryptoHelper */ "../../common/shrimp/helpers/cryptoHelper.ts");
var eventBus_1 = __nested_webpack_require_34920__(/*! ../eventBus */ "../../common/shrimp/helpers/eventBus.ts");
var StructuredSocket = /** @class */ (function () {
    function StructuredSocket(socket) {
        this.socket = socket;
        this.awaitMsgList = {};
        this.eventBus = new eventBus_1.EventBus();
        socket.OnMessage = this.listen.bind(this);
    }
    StructuredSocket.prototype.CreatePackage = function (msg, options) {
        var packet = { msg: msg, id: cryptoHelper_1.CryptoHelper.CreateGuid(), replyId: options.replyId };
        return packet;
    };
    StructuredSocket.prototype.Send = function (msg, options) {
        var packet = this.CreatePackage(msg, options);
        this.socket.Send(packet);
        var promData;
        if (options.awaitResponse) {
            promData = (0, IPromiseData_1.CreatePromiseData)(options.awaitTime);
            this.awaitMsgList[packet.id] = { promData: promData };
        }
        return promData === null || promData === void 0 ? void 0 : promData.promise;
    };
    StructuredSocket.prototype.Subscribe = function (key, cb) {
        this.eventBus.Subscribe(key, cb);
    };
    StructuredSocket.prototype.Unsubscribe = function (key, cb) {
        this.eventBus.Unsubscribe(key, cb);
    };
    StructuredSocket.prototype.SubscribeAll = function (cb) {
        this.eventBus.SubscribeAll(cb);
    };
    StructuredSocket.prototype.UnsubscribeAll = function (cb) {
        this.eventBus.UnsubscribeAll(cb);
    };
    StructuredSocket.prototype.ConvertBufferToStructure = function (data) {
        var packet = (this.socket.OnMessageWithDirectObject ? data : JSON.parse(data.toString()));
        if (!packet.msg || !packet.msg.type) {
            return undefined;
        }
        return packet;
    };
    StructuredSocket.prototype.listen = function (data) {
        var packet;
        try {
            packet = this.ConvertBufferToStructure(data);
        }
        catch (ex) { }
        if (!packet) {
            return undefined;
        }
        if (packet.replyId) {
            var awaiter = this.awaitMsgList[packet.replyId];
            if (awaiter) {
                delete this.awaitMsgList[packet.replyId];
                awaiter.promData.resolver(packet);
            }
            this.eventBus.TriggerJustAllSubs(packet);
            return;
        }
        this.eventBus.Trigger(packet.msg.type, packet);
    };
    return StructuredSocket;
}());
exports.StructuredSocket = StructuredSocket;


/***/ }),

/***/ "../../common/shrimp/helpers/windowHelper.ts":
/*!***************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/windowHelper.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_38162__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowHelper = void 0;
var logger_1 = __nested_webpack_require_38162__(/*! ./logger */ "../../common/shrimp/helpers/logger.ts");
var singularizer_1 = __nested_webpack_require_38162__(/*! ./singularizer */ "../../common/shrimp/helpers/singularizer.ts");
var undefinedType = "undefined";
var WindowHelper = /** @class */ (function () {
    function WindowHelper() {
        this.doc = typeof (document) !== undefinedType ? document : {
            addEventListener: function (type, listener, options) {
                //might simulate this in future...
                logger_1.Logger.Log({ logMessage: "Enviroment does not support document. Triggering document.addEventListener now, type is: " + type, logType: logger_1.LogType.Warning });
                listener({ target: { readyState: this.readyState } });
            },
            createElement: function (tagName, options) {
                return { tagName: tagName, options: options };
            },
            readyState: "complete"
        };
        this.hist = typeof (history) !== undefinedType ? history : {
            pushState: function (data, title, url) {
                //might log data and url with additional data in logging
                logger_1.Logger.Log({ logMessage: "history.pushState not supported on Node. title: " + title, logType: logger_1.LogType.Debug });
            }
        };
        this.win = typeof (window) !== undefinedType ? window : {
            setInterval: setInterval,
            clearInterval: clearInterval,
            setTimeout: setTimeout,
            clearTimeout: clearTimeout,
            atob: atob,
            btoa: btoa
        };
        this.helperWorker = {
            worker: function (scriptURL, options) {
                return typeof (Worker) !== undefinedType ? new Worker(scriptURL, options) : undefined;
            }
        };
        // this.eventListeners = this.wrapEventListeners();
    }
    Object.defineProperty(WindowHelper.prototype, "onPopState", {
        set: function (value) {
            if (typeof (window) !== undefinedType) {
                window.onpopstate = value;
            }
            else {
                logger_1.Logger.Log({ logMessage: "onPopState not supported on Node.", logType: logger_1.LogType.Debug });
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowHelper.prototype, "document", {
        get: function () {
            return this.doc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowHelper.prototype, "history", {
        get: function () {
            return this.hist;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowHelper.prototype, "Window", {
        get: function () {
            return this.win;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowHelper.prototype, "Worker", {
        get: function () {
            return this.helperWorker;
        },
        enumerable: false,
        configurable: true
    });
    WindowHelper.Instance = singularizer_1.Singularizer.trySingularize("theOneWindow", new WindowHelper().Window, new WindowHelper());
    return WindowHelper;
}());
exports.WindowHelper = WindowHelper;


/***/ }),

/***/ "../../common/shrimp/interfaces/ComponentInterfaces/ILogger.ts":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/interfaces/ComponentInterfaces/ILogger.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LogType = void 0;
var LogType;
(function (LogType) {
    LogType[LogType["Debug"] = 0] = "Debug";
    LogType[LogType["MobilDebug"] = 1000] = "MobilDebug";
    LogType[LogType["Trace"] = 200000] = "Trace";
    LogType[LogType["Warning"] = 500000] = "Warning";
    LogType[LogType["Error"] = 1000000] = "Error"; // 500Kb
})(LogType = exports.LogType || (exports.LogType = {}));


/***/ }),

/***/ "../../common/shrimp/interfaces/IPromiseData.ts":
/*!******************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/interfaces/IPromiseData.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseAllSettled = exports.CreatePromiseData = void 0;
var syncResolved = false;
new Promise(function (res) { return res(); }).then(function () { return syncResolved = true; });
typeof (doNothing) != "undefined" && doNothing();
var syncResolveProblem = syncResolved === true; // platform has sync resolve problem or not
/**
 * @param timeout timeout time in ms, undefined if infinite
 */
function CreatePromiseData(timeout, opt) {
    if (opt === void 0) { opt = {}; }
    var syncResolveFixer = function (cb) { return syncResolveProblem && opt.fixSyncResolve ? function (value) { return setTimeout(function () { return cb(value); }); } : cb; };
    var resolver = undefined, reject = undefined;
    var timer;
    var startTimer = function (timeout) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () { reject(new Error("The operation has timed out. timeoutValue  : " + timeout)); }, timeout);
    };
    if (timeout) {
        startTimer(timeout);
    }
    return {
        startTimer: startTimer,
        promise: new Promise(function (res, rej) { resolver = syncResolveFixer(res); reject = rej; }),
        resolver: resolver,
        reject: reject
    };
}
exports.CreatePromiseData = CreatePromiseData;
function PromiseAllSettled(proms) {
    var _this = this;
    var retProm = CreatePromiseData();
    var left = proms.length;
    proms.forEach(function (prom) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, , 2, 3]);
                    return [4 /*yield*/, prom];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    if (--left <= 0) {
                        retProm.resolver(prom);
                    }
                    return [7 /*endfinally*/];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    return retProm.promise;
}
exports.PromiseAllSettled = PromiseAllSettled;


/***/ }),

/***/ "./src/PlateauMessaging.ts":
/*!*********************************!*\
  !*** ./src/PlateauMessaging.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_47841__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PlateauMessaging = exports.FrameCommunicator = void 0;
var frameCommunicator_1 = __nested_webpack_require_47841__(/*! ../../../common/shrimp/helpers/frameCommunicator */ "../../common/shrimp/helpers/frameCommunicator.ts");
Object.defineProperty(exports, "FrameCommunicator", { enumerable: true, get: function () { return frameCommunicator_1.FrameCommunicator; } });
var PlateauMessaging = /** @class */ (function () {
    function PlateauMessaging() {
    }
    PlateauMessaging.CreatePlateauMessaging = function (targetWindow) {
        var mes = new frameCommunicator_1.FrameCommunicator(targetWindow);
        return mes;
    };
    return PlateauMessaging;
}());
exports.PlateauMessaging = PlateauMessaging;


/***/ })

/******/ });
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "websdk:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"websdk": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = this["webpackChunkwebsdk"] = this["webpackChunkwebsdk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************!*\
  !*** ./websdk.ts ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRenderer": () => (/* binding */ createRenderer),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _build_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build/legacy */ "./build/legacy.ts");
/* harmony import */ var _stechquick_algae_lib_helpers_importHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stechquick/algae/lib/helpers/importHelper */ "../../node_modules/@stechquick/algae/lib/helpers/importHelper.js");
/* harmony import */ var _stechquick_algae_lib_helpers_importHelper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stechquick_algae_lib_helpers_importHelper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_shrimp_helpers_qjsonParser_QJsonExtractHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/shrimp/helpers/qjsonParser/QJsonExtractHelper */ "../../common/shrimp/helpers/qjsonParser/QJsonExtractHelper.ts");
/* harmony import */ var _common_shrimp_helpers_lazyLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/shrimp/helpers/lazyLoader */ "../../common/shrimp/helpers/lazyLoader.ts");
/* harmony import */ var _src_managers_LivePreviewManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/managers/LivePreviewManager */ "./src/managers/LivePreviewManager.ts");
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





var PlateauUI = /** @class */ (function () {
    function PlateauUI(container, renderer, mountPoint) {
        this.container = container;
        this.renderer = renderer;
        this.mountPoint = mountPoint;
    }
    PlateauUI.prototype.open = function (qjsonPath, args) {
        this.container.open({ renderer: this.renderer, qjsonPath: qjsonPath, args: args });
    };
    PlateauUI.prototype.show = function () {
        this.mountPoint.style.display = "block";
    };
    PlateauUI.prototype.hide = function () {
        this.mountPoint.style.display = "none";
    };
    PlateauUI.prototype.close = function () {
        this.renderer.Hibernate();
    };
    PlateauUI.prototype.trigger = function (_a) {
        var eventName = _a.eventName, parameters = _a.parameters;
        return this.renderer.Trigger(eventName, parameters);
    };
    return PlateauUI;
}());
var WebsdkContainer = /** @class */ (function () {
    function WebsdkContainer() {
        this.enviromentInfo = "sdk";
        this.PlateauIAM = undefined;
        this.PlateauUIOptions = {
            corsEnabled: true,
            iam: "./settings/settings_iam.js",
            settings: "./settings/settings_web.js"
        };
    }
    WebsdkContainer.prototype.init = function (_a) {
        var _b, _c, _d, _e;
        var PlateauUIOptions = _a.PlateauUIOptions, _f = _a.environmentInfo, environmentInfo = _f === void 0 ? "sdk" : _f;
        return __awaiter(this, void 0, void 0, function () {
            var self, LPPlateauUIOptions, settingsWeb, settingsIAM, _g, securePage, unsecurePages, i, queryString, containerServices, _h, rendererConfig;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        self = this;
                        self.enviromentInfo = environmentInfo;
                        return [4 /*yield*/, self.configureLivePreview()];
                    case 1:
                        LPPlateauUIOptions = _j.sent();
                        self.PlateauUIOptions = LPPlateauUIOptions ? LPPlateauUIOptions : (PlateauUIOptions !== null && PlateauUIOptions !== void 0 ? PlateauUIOptions : this.PlateauUIOptions);
                        if (!!self.settingsWeb) return [3 /*break*/, 5];
                        if (!self.lpManager) return [3 /*break*/, 2];
                        self.settingsWeb = self.PlateauUIOptions.settings;
                        self.settingsWeb.settings = self.settingsWeb.settings || { value: {}, type: "object" };
                        if (self.settingsWeb.localProxy && self.settingsWeb.localProxy.type == "object") {
                            self.settingsWeb.settings.value.settingsProxyYaml = self.settingsWeb.settings.value.settingsProxyYaml || {};
                            self.settingsWeb.settings.value.settingsProxyYaml["localProxy"] = self.settingsWeb.localProxy.value;
                        }
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, self.LoadJS(self.PlateauUIOptions.settings, "plateauUISettings", "*")];
                    case 3:
                        settingsWeb = _j.sent();
                        if (!settingsWeb) {
                            throw "please set following: PlateauUIOptions['settings']";
                        }
                        self.settingsWeb = settingsWeb;
                        _j.label = 4;
                    case 4:
                        self.SDKSettings = _build_legacy__WEBPACK_IMPORTED_MODULE_0__.Legacy.migrateLegacySettings(self.settingsWeb.settings.value);
                        _j.label = 5;
                    case 5:
                        if (!self.PlateauUIOptions.iam) return [3 /*break*/, 9];
                        return [4 /*yield*/, self.LoadJS(self.PlateauUIOptions.iam, "plateauUIIAMOptions", "*", false)];
                    case 6:
                        settingsIAM = _j.sent();
                        if (!(settingsIAM && ((_b = settingsIAM.iam) === null || _b === void 0 ? void 0 : _b.active))) return [3 /*break*/, 9];
                        _g = self;
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_keycloak-js_dist_keycloak_mjs"), __webpack_require__.e("src_managers_PlateauIAM_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./src/managers/PlateauIAM */ "./src/managers/PlateauIAM.ts"))];
                    case 7:
                        _g.PlateauIAM = new (_j.sent()).PlateauIAM();
                        self.PlateauIAM.setOptions(settingsIAM.iam.options);
                        self.PlateauIAM.settingsIAM = settingsIAM;
                        securePage = true;
                        unsecurePages = (_d = (_c = self.PlateauIAM.settingsIAM) === null || _c === void 0 ? void 0 : _c.iam) === null || _d === void 0 ? void 0 : _d.unsecurePages;
                        if (unsecurePages) {
                            for (i = 0; i < unsecurePages.length; i++) {
                                queryString = _build_legacy__WEBPACK_IMPORTED_MODULE_0__.Legacy.fixQueryString();
                                if (unsecurePages[i] === queryString) //self.settingsWeb.settings.value.rootqjson)
                                    securePage = false;
                            }
                        }
                        if (!securePage) return [3 /*break*/, 9];
                        return [4 /*yield*/, self.PlateauIAM.login()];
                    case 8:
                        _j.sent();
                        if (!self.PlateauIAM.isAuthenticated()) {
                            throw Error("Authentication: Must logon");
                        }
                        _j.label = 9;
                    case 9:
                        if (!!self.SDKInstance) return [3 /*break*/, 13];
                        if (!((_e = self.settingsWeb) === null || _e === void 0 ? void 0 : _e.containerServices)) return [3 /*break*/, 11];
                        return [4 /*yield*/, self.LoadObject(self.settingsWeb.containerServices, "plateauUIContainerServices", "*", false)];
                    case 10:
                        containerServices = _j.sent();
                        containerServices = _build_legacy__WEBPACK_IMPORTED_MODULE_0__.Legacy.containerServicesModifications(self, containerServices);
                        _j.label = 11;
                    case 11:
                        _h = self;
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_stechquick_flow-runtime_dist_flowRuntime_src_flow_js-node_modules_axios_-6102e4"), __webpack_require__.e("node_modules_moment_locale_sync_recursive_-src_WebSDK_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./src/WebSDK */ "./src/WebSDK.ts"))];
                    case 12:
                        _h.SDKInstance = new (_j.sent()).WebSDK(self.SDKSettings, containerServices, { environmentName: environmentInfo });
                        if (self.lpManager) {
                            self.lpManager.setExternalQJsonRetriever(self.SDKInstance);
                        }
                        if (window.location.search)
                            document.cookie = "queryParams=" + window.location.search + ";path=/;";
                        _j.label = 13;
                    case 13: return [4 /*yield*/, self.setSDKConfig()];
                    case 14:
                        rendererConfig = _j.sent();
                        self.SDKConfiguration = rendererConfig;
                        return [2 /*return*/];
                }
            });
        });
    };
    WebsdkContainer.prototype.createRenderer = function (_a) {
        var mountPoint = _a.mountPoint;
        return __awaiter(this, void 0, void 0, function () {
            var self, renderer, plateauUI;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        self = this;
                        renderer = self.SDKInstance.CreateRenderer({ mountPoint: mountPoint, config: self.SDKConfiguration });
                        return [4 /*yield*/, self.setSettingsQJsons({ renderer: renderer })];
                    case 1:
                        _b.sent();
                        plateauUI = new PlateauUI(self, renderer, mountPoint);
                        return [2 /*return*/, plateauUI];
                }
            });
        });
    };
    WebsdkContainer.prototype.open = function (_a) {
        var _b, _c, _d;
        var renderer = _a.renderer, qjsonPath = _a.qjsonPath, args = _a.args;
        return __awaiter(this, void 0, void 0, function () {
            var self, renderOptions, queryString, qjsonContent, pageName, ux;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        self = this;
                        queryString = _build_legacy__WEBPACK_IMPORTED_MODULE_0__.Legacy.fixQueryString();
                        if (!(this.enviromentInfo == "sdk" && qjsonPath)) return [3 /*break*/, 1];
                        qjsonPath = _build_legacy__WEBPACK_IMPORTED_MODULE_0__.Legacy.fixLegacyPathFormat(qjsonPath);
                        renderOptions = { pjsonPath: qjsonPath, storeItems: args };
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(this.enviromentInfo == "qui" && queryString)) return [3 /*break*/, 2];
                        renderOptions = { pjsonPath: queryString, storeItems: args };
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(!renderOptions && ((_b = self.settingsWeb) === null || _b === void 0 ? void 0 : _b.rootqjson))) return [3 /*break*/, 4];
                        return [4 /*yield*/, self.LoadObject((_c = self.settingsWeb) === null || _c === void 0 ? void 0 : _c.rootqjson, "")];
                    case 3:
                        qjsonContent = _e.sent();
                        pageName = self.settingsWeb.settings.value.rootqjson;
                        renderOptions = { pjsonContent: qjsonContent, pageName: pageName, storeItems: args };
                        return [3 /*break*/, 5];
                    case 4: throw Error("please set following: PlateauUIOptions.rootqjson");
                    case 5:
                        renderer.Render(renderOptions);
                        ux = (_d = this.SDKInstance) === null || _d === void 0 ? void 0 : _d.getUXManager();
                        ux === null || ux === void 0 ? void 0 : ux.setTheme("default");
                        return [2 /*return*/];
                }
            });
        });
    };
    WebsdkContainer.prototype.setSDKConfig = function () {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var self, plateauUIComponentOptions, plateauUIGlobalLRQjson, rendererConfig;
            return __generator(this, function (_e) {
                self = this;
                if ((_a = self.settingsWeb) === null || _a === void 0 ? void 0 : _a.componentList) {
                    plateauUIComponentOptions = self.LoadObject(self.settingsWeb.componentList, "plateauUIComponentOptions", "*", false);
                }
                if ((_b = self.settingsWeb) === null || _b === void 0 ? void 0 : _b.globalLocalization) {
                    plateauUIGlobalLRQjson = self.LoadObject((_c = self.settingsWeb) === null || _c === void 0 ? void 0 : _c.globalLocalization, "", "*", false); //windowLibraryName
                    self.LoadQjson((_d = self.settingsWeb) === null || _d === void 0 ? void 0 : _d.globalLocalization);
                }
                rendererConfig = {};
                return [2 /*return*/, Promise.all([plateauUIComponentOptions, plateauUIGlobalLRQjson]).then(function (_a) {
                        var _b, _c;
                        var _d = __read(_a, 2), plateauUIComponentOptions = _d[0], plateauUIGlobalLRQjson = _d[1];
                        if (plateauUIComponentOptions) {
                            rendererConfig.SiteSettings = { compSettings: plateauUIComponentOptions };
                        }
                        if (plateauUIGlobalLRQjson) {
                            rendererConfig.GlobalLRDict = plateauUIGlobalLRQjson.clrids;
                        }
                        if ((_b = self.SDKSettings) === null || _b === void 0 ? void 0 : _b.rootLangCode) {
                            rendererConfig.LRType = (_c = self.SDKSettings) === null || _c === void 0 ? void 0 : _c.rootLangCode;
                        }
                        return rendererConfig;
                    })];
            });
        });
    };
    WebsdkContainer.prototype.setSettingsQJsons = function (_a) {
        var _b, _c, _d, _e, _f, _g, _h, _j;
        var renderer = _a.renderer;
        return __awaiter(this, void 0, void 0, function () {
            var self, qjson, err_1, qjson, err_2, qjson, err_3;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        self = this;
                        if (!((_b = self.settingsWeb) === null || _b === void 0 ? void 0 : _b.pipeline)) return [3 /*break*/, 5];
                        return [4 /*yield*/, self.LoadObject((_c = self.settingsWeb) === null || _c === void 0 ? void 0 : _c.pipeline, "", "*", false)];
                    case 1:
                        qjson = _k.sent();
                        if (!qjson) return [3 /*break*/, 5];
                        _k.label = 2;
                    case 2:
                        _k.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, renderer.settingsQJsons.SetPipelineQjson(qjson)];
                    case 3:
                        _k.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _k.sent();
                        return [3 /*break*/, 5];
                    case 5:
                        if (!((_d = self.settingsWeb) === null || _d === void 0 ? void 0 : _d.alert)) return [3 /*break*/, 10];
                        return [4 /*yield*/, self.LoadObject((_e = self.settingsWeb) === null || _e === void 0 ? void 0 : _e.alert, "", "*", false)];
                    case 6:
                        qjson = _k.sent();
                        if (!qjson) return [3 /*break*/, 10];
                        _k.label = 7;
                    case 7:
                        _k.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, renderer.settingsQJsons.SetAlertQjson(qjson)];
                    case 8:
                        _k.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        err_2 = _k.sent();
                        return [3 /*break*/, 10];
                    case 10:
                        if (!((_f = self.settingsWeb) === null || _f === void 0 ? void 0 : _f.loading)) return [3 /*break*/, 15];
                        return [4 /*yield*/, self.LoadObject((_g = self.settingsWeb) === null || _g === void 0 ? void 0 : _g.loading, "", "*", false)];
                    case 11:
                        qjson = _k.sent();
                        if (!qjson) return [3 /*break*/, 15];
                        _k.label = 12;
                    case 12:
                        _k.trys.push([12, 14, , 15]);
                        return [4 /*yield*/, renderer.settingsQJsons.SetLoadingQjson(qjson)];
                    case 13:
                        _k.sent();
                        return [3 /*break*/, 15];
                    case 14:
                        err_3 = _k.sent();
                        return [3 /*break*/, 15];
                    case 15:
                        if (!((_h = self.SDKSettings) === null || _h === void 0 ? void 0 : _h.domainModuleList)) return [3 /*break*/, 17];
                        return [4 /*yield*/, ((_j = self.SDKInstance) === null || _j === void 0 ? void 0 : _j.LoadModuleCompLists(self.SDKSettings.domainModuleList).catch(function (ev) {
                                console.log(ev);
                            }))];
                    case 16:
                        _k.sent();
                        _k.label = 17;
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    WebsdkContainer.prototype.LoadObject = function (data, windowLibraryName, importField, required) {
        if (required === void 0) { required = true; }
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        if (!data) {
                            return [2 /*return*/];
                        }
                        if (!(data.format == "qjson")) return [3 /*break*/, 2];
                        return [4 /*yield*/, self.LoadQjson(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (data.format == "lottie") {
                            throw new Error("Not implemented");
                        }
                        if (!(data.type == "path")) return [3 /*break*/, 4];
                        return [4 /*yield*/, self.LoadJS(data.value, windowLibraryName, importField, required)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        if (data.type == "object") {
                            return [2 /*return*/, data.value];
                        }
                        if (!(data.type == "js")) return [3 /*break*/, 6];
                        return [4 /*yield*/, (0,_stechquick_algae_lib_helpers_importHelper__WEBPACK_IMPORTED_MODULE_1__.importModuleBody)(data.value, function () { }, importField)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    WebsdkContainer.prototype.LoadJS = function (requestData, windowLibraryName, importField, required) {
        if (required === void 0) { required = true; }
        return __awaiter(this, void 0, void 0, function () {
            var self, requestObject, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!(this.PlateauUIOptions.corsEnabled && typeof requestData == "string")) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0,_stechquick_algae_lib_helpers_importHelper__WEBPACK_IMPORTED_MODULE_1__.importScript)(requestData, windowLibraryName, importField)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        requestObject = typeof requestData == "string" ? requestData : new Request(requestData.url, { method: 'GET', body: JSON.stringify(requestData.body), headers: requestData.headers });
                        return [4 /*yield*/, (0,_stechquick_algae_lib_helpers_importHelper__WEBPACK_IMPORTED_MODULE_1__.importModule)(requestObject, function () { }, importField)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        if (!required) {
                            return [2 /*return*/, undefined];
                        }
                        throw new Error("couldn't load " + JSON.stringify(requestData));
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    WebsdkContainer.prototype.LoadQjson = function (plateauUIObject) {
        return __awaiter(this, void 0, void 0, function () {
            var qJsonString, qjsonPath, qJsonExtracted;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qJsonString = "";
                        if (!(plateauUIObject.type == "path")) return [3 /*break*/, 2];
                        qjsonPath = _build_legacy__WEBPACK_IMPORTED_MODULE_0__.Legacy.fixLegacyPathFormat(plateauUIObject.value);
                        return [4 /*yield*/, _common_shrimp_helpers_lazyLoader__WEBPACK_IMPORTED_MODULE_3__.LazyLoader.FetchModuleBody(qjsonPath)];
                    case 1:
                        qJsonString = (_a.sent()).body; //TODO:newWebSDKBuild change to load from importHelper
                        _a.label = 2;
                    case 2:
                        if (plateauUIObject.type == "js") {
                            qJsonString = plateauUIObject.value;
                        }
                        if (!qJsonString) {
                            return [2 /*return*/, undefined];
                        }
                        qJsonExtracted = _common_shrimp_helpers_qjsonParser_QJsonExtractHelper__WEBPACK_IMPORTED_MODULE_2__.QJsonExtractHelper.qJsonExtractor(qJsonString);
                        if (!qJsonExtracted) {
                            throw new Error("qJsonExtracted is undefined");
                        }
                        return [2 /*return*/, qJsonExtracted];
                }
            });
        });
    };
    WebsdkContainer.prototype.configureLivePreview = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, lpManager, resp, settingsResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        lpManager = new _src_managers_LivePreviewManager__WEBPACK_IMPORTED_MODULE_4__.LivePreviewManager(parent);
                        return [4 /*yield*/, lpManager.isItLivePreview()];
                    case 1:
                        resp = _a.sent();
                        if (!resp) {
                            return [2 /*return*/];
                        }
                        self.lpManager = lpManager;
                        return [4 /*yield*/, lpManager.getLivePreviewSettings()];
                    case 2:
                        settingsResponse = _a.sent();
                        if (!settingsResponse) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, settingsResponse];
                }
            });
        });
    };
    return WebsdkContainer;
}());
var websdkContainerInstance;
function init(PlateauUIOptions, environmentInfo) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (websdkContainerInstance) {
                        return [2 /*return*/];
                    }
                    websdkContainerInstance = new WebsdkContainer();
                    return [4 /*yield*/, websdkContainerInstance.init({ PlateauUIOptions: PlateauUIOptions, environmentInfo: environmentInfo })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, websdkContainerInstance];
            }
        });
    });
}
function createRenderer(_a) {
    var mountPoint = _a.mountPoint;
    if (!websdkContainerInstance) {
        throw "websdk initiation went wrong.";
    }
    var plateauUI = websdkContainerInstance.createRenderer({ mountPoint: mountPoint });
    return plateauUI;
}


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=websdk.js.map