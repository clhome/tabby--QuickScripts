(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("tabby-core"), require("tabby-terminal"), require("@ng-bootstrap/ng-bootstrap"), require("fs"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/forms", "tabby-core", "tabby-terminal", "@ng-bootstrap/ng-bootstrap", "fs"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("tabby-core"), require("tabby-terminal"), require("@ng-bootstrap/ng-bootstrap"), require("fs")) : factory(root["@angular/core"], root["@angular/common"], root["@angular/forms"], root["tabby-core"], root["tabby-terminal"], root["@ng-bootstrap/ng-bootstrap"], root["fs"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, (__WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_common__, __WEBPACK_EXTERNAL_MODULE__angular_forms__, __WEBPACK_EXTERNAL_MODULE_tabby_core__, __WEBPACK_EXTERNAL_MODULE_tabby_terminal__, __WEBPACK_EXTERNAL_MODULE__ng_bootstrap_ng_bootstrap__, __WEBPACK_EXTERNAL_MODULE_fs__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/quickScriptsBar.scss"
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/quickScriptsBar.scss ***!
  \***************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* 快捷脚本按钮栏样式 */\n.quick-scripts-bar {\n  display: flex;\n  align-items: center;\n  padding: 2px 8px;\n  background: rgba(0, 0, 0, 0.15);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  gap: 4px;\n  flex-shrink: 0;\n  overflow-x: auto;\n  min-height: 30px;\n  /* 脚本按钮通用样式 */\n}\n.quick-scripts-bar .script-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 10px;\n  font-size: 12px;\n  line-height: 1.4;\n  color: #ccc;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 3px;\n  cursor: pointer;\n  white-space: nowrap;\n  user-select: none;\n  transition: all 0.15s ease;\n}\n.quick-scripts-bar .script-btn:hover {\n  color: #fff;\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.25);\n}\n.quick-scripts-bar .script-btn:active {\n  background: rgba(255, 255, 255, 0.2);\n}\n.quick-scripts-bar .script-btn {\n  /* 正在执行中的按钮状态 */\n}\n.quick-scripts-bar .script-btn.running {\n  color: #4fc3f7;\n  border-color: #4fc3f7;\n  background: rgba(79, 195, 247, 0.12);\n  cursor: not-allowed;\n  animation: pulse 1.5s infinite;\n}\n.quick-scripts-bar {\n  /* 新建按钮 - 固定为红色 */\n}\n.quick-scripts-bar .script-btn-add {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 22px;\n  padding: 0;\n  font-size: 16px;\n  font-weight: bold;\n  color: #fff;\n  background: #e74c3c;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  flex-shrink: 0;\n}\n.quick-scripts-bar .script-btn-add:hover {\n  background: #c0392b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n\n/* 执行中的脉冲动画 */\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}", "",{"version":3,"sources":["webpack://./src/quickScriptsBar.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB,cAAA;AACA;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,+BAAA;EACA,kDAAA;EACA,QAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EAEA,aAAA;AACJ;AAAI;EACI,oBAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,qCAAA;EACA,2CAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,iBAAA;EACA,0BAAA;AAER;AAAQ;EACI,WAAA;EACA,qCAAA;EACA,uCAAA;AAEZ;AACQ;EACI,oCAAA;AACZ;AAvBI;EAyBI,eAAA;AACR;AAAQ;EACI,cAAA;EACA,qBAAA;EACA,oCAAA;EACA,mBAAA;EACA,8BAAA;AAEZ;AA7CA;EA+CI,iBAAA;AACJ;AAAI;EACI,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,eAAA;EACA,iBAAA;EACA,WAAA;EACA,mBAAA;EACA,oCAAA;EACA,kBAAA;EACA,eAAA;EACA,0BAAA;EACA,cAAA;AAER;AAAQ;EACI,mBAAA;EACA,gCAAA;AAEZ;;AAGA,aAAA;AACA;EACI;IAAW,UAAA;EACb;EAAE;IAAM,YAAA;EAGR;AACF","sourcesContent":["/* 快捷脚本按钮栏样式 */\r\n.quick-scripts-bar {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 2px 8px;\r\n    background: rgba(0, 0, 0, 0.15);\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.06);\r\n    gap: 4px;\r\n    flex-shrink: 0;\r\n    overflow-x: auto;\r\n    min-height: 30px;\r\n\r\n    /* 脚本按钮通用样式 */\r\n    .script-btn {\r\n        display: inline-flex;\r\n        align-items: center;\r\n        padding: 2px 10px;\r\n        font-size: 12px;\r\n        line-height: 1.4;\r\n        color: #ccc;\r\n        background: rgba(255, 255, 255, 0.08);\r\n        border: 1px solid rgba(255, 255, 255, 0.12);\r\n        border-radius: 3px;\r\n        cursor: pointer;\r\n        white-space: nowrap;\r\n        user-select: none;\r\n        transition: all 0.15s ease;\r\n\r\n        &:hover {\r\n            color: #fff;\r\n            background: rgba(255, 255, 255, 0.15);\r\n            border-color: rgba(255, 255, 255, 0.25);\r\n        }\r\n\r\n        &:active {\r\n            background: rgba(255, 255, 255, 0.2);\r\n        }\r\n\r\n        /* 正在执行中的按钮状态 */\r\n        &.running {\r\n            color: #4fc3f7;\r\n            border-color: #4fc3f7;\r\n            background: rgba(79, 195, 247, 0.12);\r\n            cursor: not-allowed;\r\n            animation: pulse 1.5s infinite;\r\n        }\r\n    }\r\n\r\n    /* 新建按钮 - 固定为红色 */\r\n    .script-btn-add {\r\n        display: inline-flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        width: 24px;\r\n        height: 22px;\r\n        padding: 0;\r\n        font-size: 16px;\r\n        font-weight: bold;\r\n        color: #fff;\r\n        background: #e74c3c;\r\n        border: 1px solid rgba(0, 0, 0, 0.1);\r\n        border-radius: 3px;\r\n        cursor: pointer;\r\n        transition: all 0.15s ease;\r\n        flex-shrink: 0;\r\n\r\n        &:hover {\r\n            background: #c0392b;\r\n            border-color: rgba(0, 0, 0, 0.2);\r\n        }\r\n    }\r\n}\r\n\r\n/* 执行中的脉冲动画 */\r\n@keyframes pulse {\r\n    0%, 100% { opacity: 1; }\r\n    50% { opacity: 0.6; }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
(module) {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ },

/***/ "./src/quickScriptsBar.scss"
/*!**********************************!*\
  !*** ./src/quickScriptsBar.scss ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_quickScriptsBar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./quickScriptsBar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/quickScriptsBar.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_quickScriptsBar_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_quickScriptsBar_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./src/configProvider.ts"
/*!*******************************!*\
  !*** ./src/configProvider.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickScriptsConfigProvider: () => (/* binding */ QuickScriptsConfigProvider)
/* harmony export */ });
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_0__);

/** 插件配置默认值 */
class QuickScriptsConfigProvider extends tabby_core__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider {
    constructor() {
        super(...arguments);
        this.defaults = {
            quickScriptsPlugin: {
                /** 全局备份脚本列表 */
                scripts: [],
                /** 站点隔离的脚本列表映射 (profileId -> scripts) */
                profileScripts: {},
                /** 命令提示符正则（用于判断上一条命令执行完毕） */
                promptPattern: '(\\$|#|>|%)\\s*$',
                /** 超时时间（毫秒），超过此时间强制执行下一条命令 */
                commandTimeout: 30000,
                /** 发送命令前的最小延时（毫秒） */
                minDelay: 500,
            },
            sftpLocalFavorites: [],
            sftpRemoteFavorites: {},
        };
    }
}


/***/ },

/***/ "./src/i18n.ts"
/*!*********************!*\
  !*** ./src/i18n.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isZh: () => (/* binding */ isZh),
/* harmony export */   t: () => (/* binding */ t)
/* harmony export */ });
let isChinese = false;
try {
    const lang = ((navigator === null || navigator === void 0 ? void 0 : navigator.language) || process.env.LANG || '').toLowerCase();
    isChinese = lang.startsWith('zh');
}
catch (_a) {
    // ignore
}
function t(zhText, enText) {
    return isChinese ? zhText : enText;
}
function isZh() {
    return isChinese;
}


/***/ },

/***/ "./src/scriptEditModal.ts"
/*!********************************!*\
  !*** ./src/scriptEditModal.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScriptEditModalComponent: () => (/* binding */ ScriptEditModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "@ng-bootstrap/ng-bootstrap");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * 脚本编辑弹窗组件
 * 用于新建和编辑快捷脚本
 */
let ScriptEditModalComponent = class ScriptEditModalComponent {
    constructor(modalInstance) {
        this.modalInstance = modalInstance;
        /** 脚本名称 */
        this.scriptName = '';
        /** 命令文本（换行分隔） */
        this.commandsText = '';
        /** 标签颜色 */
        this.scriptColor = '#5588cc';
        /** 是否为新建模式 */
        this.isNew = true;
    }
    /** 保存并关闭弹窗 */
    save() {
        const commands = this.commandsText
            .split('\n')
            .map(line => line.trimEnd())
            .filter(line => line.length > 0);
        this.modalInstance.close({
            action: 'save',
            name: this.scriptName.trim(),
            commands,
            color: this.scriptColor,
        });
    }
    /** 删除脚本 */
    deleteScript() {
        this.modalInstance.close({
            action: 'delete',
        });
    }
    /** 取消操作 */
    cancel() {
        this.modalInstance.dismiss();
    }
};
ScriptEditModalComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        template: `
        <div class="modal-header">
            <h5 class="modal-title">{{ isNew ? '新建脚本' : '编辑脚本' }}</h5>
            <button type="button" class="close" (click)="cancel()">
                <span>&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label>脚本名称</label>
                <input
                    type="text"
                    class="form-control"
                    [(ngModel)]="scriptName"
                    placeholder="输入脚本名称"
                    autofocus
                />
            </div>
            <div class="form-group mt-3 d-flex align-items-center">
                <label class="mb-0 mr-3">标签颜色</label>
                <input
                    type="color"
                    [(ngModel)]="scriptColor"
                    style="width: 40px; height: 28px; padding: 0; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; background: transparent; border-radius: 3px;"
                />
            </div>
            <div class="form-group mt-3">
                <label>命令列表 <small class="text-muted">（一行一条命令，按顺序执行）</small></label>
                <textarea
                    class="form-control"
                    [(ngModel)]="commandsText"
                    rows="10"
                    placeholder="cd /tmp&#10;ls -la&#10;whoami"
                    style="font-family: monospace; font-size: 13px;"
                ></textarea>
            </div>
        </div>
        <div class="modal-footer">
            <button *ngIf="!isNew" class="btn btn-danger mr-auto" (click)="deleteScript()">
                删除脚本
            </button>
            <button class="btn btn-outline-secondary" (click)="cancel()">取消</button>
            <button class="btn btn-primary" (click)="save()" [disabled]="!scriptName.trim()">
                保存
            </button>
        </div>
    `,
    }),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal])
], ScriptEditModalComponent);



/***/ },

/***/ "./src/sftp/local-transfers.ts"
/*!*************************************!*\
  !*** ./src/sftp/local-transfers.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalPathFileDownload: () => (/* binding */ LocalPathFileDownload),
/* harmony export */   LocalPathFileUpload: () => (/* binding */ LocalPathFileUpload)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_2__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class LocalPathFileUpload extends tabby_core__WEBPACK_IMPORTED_MODULE_2__.FileUpload {
    constructor(filePath) {
        super();
        this.filePath = filePath;
        this.fd = null;
        this.position = 0;
    }
    getName() {
        return path__WEBPACK_IMPORTED_MODULE_1__.basename(this.filePath);
    }
    getMode() {
        return 0o644;
    }
    getSize() {
        try {
            return fs__WEBPACK_IMPORTED_MODULE_0__.statSync(this.filePath).size;
        }
        catch (_a) {
            return 0;
        }
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isCancelled()) {
                return Buffer.alloc(0);
            }
            if (this.fd === null) {
                this.fd = fs__WEBPACK_IMPORTED_MODULE_0__.openSync(this.filePath, 'r');
            }
            const buf = Buffer.allocUnsafe(256 * 1024);
            const bytesRead = fs__WEBPACK_IMPORTED_MODULE_0__.readSync(this.fd, buf, 0, buf.length, this.position);
            if (!bytesRead) {
                return Buffer.alloc(0);
            }
            this.position += bytesRead;
            this.increaseProgress(bytesRead);
            return buf.subarray(0, bytesRead);
        });
    }
    close() {
        if (this.fd !== null) {
            try {
                fs__WEBPACK_IMPORTED_MODULE_0__.closeSync(this.fd);
            }
            catch (_a) {
                // ignore
            }
            this.fd = null;
        }
    }
}
class LocalPathFileDownload extends tabby_core__WEBPACK_IMPORTED_MODULE_2__.FileDownload {
    constructor(targetPath, mode, size) {
        super();
        this.targetPath = targetPath;
        this.mode = mode;
        this.size = size;
        this.fd = null;
    }
    getName() {
        return path__WEBPACK_IMPORTED_MODULE_1__.basename(this.targetPath);
    }
    getMode() {
        return this.mode;
    }
    getSize() {
        return this.size;
    }
    write(buffer) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isCancelled()) {
                return;
            }
            if (this.fd === null) {
                this.fd = fs__WEBPACK_IMPORTED_MODULE_0__.openSync(this.targetPath, 'w');
            }
            fs__WEBPACK_IMPORTED_MODULE_0__.writeSync(this.fd, buffer);
            this.increaseProgress(buffer.length);
        });
    }
    close() {
        if (this.fd !== null) {
            try {
                fs__WEBPACK_IMPORTED_MODULE_0__.closeSync(this.fd);
            }
            catch (_a) {
                // ignore
            }
            this.fd = null;
        }
    }
}


/***/ },

/***/ "./src/sftp/sftp-manager-tab.component.ts"
/*!************************************************!*\
  !*** ./src/sftp/sftp-manager-tab.component.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SftpManagerTabComponent: () => (/* binding */ SftpManagerTabComponent)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ "fs/promises");
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../i18n */ "./src/i18n.ts");
/* harmony import */ var _local_transfers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./local-transfers */ "./src/sftp/local-transfers.ts");
/* harmony import */ var _sftp_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sftp.service */ "./src/sftp/sftp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










let SftpManagerTabComponent = class SftpManagerTabComponent extends tabby_core__WEBPACK_IMPORTED_MODULE_6__.BaseTabComponent {
    t(zhText, enText) {
        return (0,_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(zhText, enText);
    }
    getOctalPerms(mode) {
        if (mode === undefined) {
            return '';
        }
        return (mode & 0o777).toString(8);
    }
    getDateColorParts(timeValue) {
        if (!timeValue)
            return null;
        const d = new Date(timeValue);
        if (isNaN(d.getTime()))
            return null;
        const pad = (n) => n.toString().padStart(2, '0');
        const dateStr = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
        const hourStr = pad(d.getHours());
        const minuteStr = pad(d.getMinutes());
        const now = new Date();
        const dateMatch = d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate();
        const hourMatch = dateMatch && d.getHours() === now.getHours();
        const minuteMatch = hourMatch && d.getMinutes() === now.getMinutes();
        return { date: dateStr, hour: hourStr, minute: minuteStr, dateMatch, hourMatch, minuteMatch };
    }
    constructor(injector, sftp, profilesService, app) {
        // Tabby runtime BaseTabComponent expects Injector in constructor, but typings in this SDK may differ.
        // @ts-expect-error runtime-compatible super(injector)
        super(injector);
        this.sftp = sftp;
        this.profilesService = profilesService;
        this.app = app;
        // injected from the SSH tab when opened via SFTP-UI button
        this.sshSession = null;
        this.profile = null;
        this.connecting = false;
        this.connected = false;
        // legacy UI fields kept for now (not used when opened from SSH tab)
        this.host = '';
        this.port = 22;
        this.username = '';
        this.password = '';
        this.localPath = os__WEBPACK_IMPORTED_MODULE_1__.homedir();
        this.localEntries = [];
        this.remotePath = '/';
        this.remoteEntries = [];
        this.sftpSession = null;
        this.localDropActive = false;
        this.remoteDropActive = false;
        this.transfers = [];
        this.transfersTimer = null;
        this.localFilter = '';
        this.remoteFilter = '';
        this.remotePathInput = this.remotePath;
        this.localPathInput = this.localPath;
        this.localFolderSizeLoading = new Set();
        this.remoteFolderSizeLoading = new Set();
        this.localSortBy = 'modified';
        this.localSortAsc = false;
        this.remoteSortBy = 'modified';
        this.remoteSortAsc = false;
        this.localCache = null;
        this.remoteCache = null;
        this.showHiddenLocal = false;
        this.showHiddenRemote = false;
        this.selectedLocal = [];
        this.selectedRemote = [];
        this.localActionName = '';
        this.localActionPerms = '';
        this.remoteActionName = '';
        this.remoteActionPerms = '';
        this.localLastSelectedIndex = null;
        this.remoteLastSelectedIndex = null;
        this.deleteConfirmVisible = false;
        this.deleteConfirmMode = null;
        this.deleteConfirmText = '';
        this.pendingLocalDelete = [];
        this.pendingRemoteDelete = [];
        this.favDeleteConfirmVisible = false;
        this.favDeleteConfirmText = '';
        this.pendingFavDeleteId = null;
        this.replaceConfirmVisible = false;
        this.replaceConfirmText = '';
        this.replaceConfirmResolve = null;
        this.inputDialogVisible = false;
        this.inputDialogTitle = '';
        this.inputDialogPlaceholder = '';
        this.inputDialogValue = '';
        this.inputDialogPathValue = '';
        this.inputDialogMode = null;
        this.inputDialogTargetPath = null;
        this.inputDialogRemotePath = null;
        this.openedRemoteFiles = new Map();
        this.localPathPresets = [];
        this.localFavorites = [];
        this.remoteFavorites = [];
        this.remoteDropdownOpen = false;
        this.selectedRemoteFavId = '';
        this.recentProfiles = [];
        this.localMenuVisible = false;
        this.localMenuX = 0;
        this.localMenuY = 0;
        this.localMenuItems = [];
        this.favDropdownOpen = false;
        this.platform = injector.get(tabby_core__WEBPACK_IMPORTED_MODULE_6__.PlatformService);
        this.config = injector.get(tabby_core__WEBPACK_IMPORTED_MODULE_6__.ConfigService);
        this.notifications = injector.get(tabby_core__WEBPACK_IMPORTED_MODULE_6__.NotificationsService);
        this.loadLocalFavorites();
        void this.refreshLocal();
        this.transfersTimer = window.setInterval(() => {
            this.transfers = this.transfers.filter(t => !t.transfer.isComplete() && !t.transfer.isCancelled());
        }, 1000);
    }
    ngOnInit() {
        // If there's no live SSH session, this tab was likely restored across
        // restart or opened in an invalid context. Close it immediately to avoid
        // an empty, nameless SFTP tab lingering after restart.
        if (!this.sshSession) {
            try {
                this.app.closeTab(this);
            }
            catch (e) {
                console.error('[SFTP-UI] Failed to close invalid SFTP tab', e);
            }
            return;
        }
        this.loadRemoteFavorites();
        this.remotePathInput = this.remotePath;
        this.localPathInput = this.localPath;
        if (this.sshSession) {
            void this.connect();
        }
        this.loadRecentProfiles();
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connecting || this.connected) {
                return;
            }
            if (!this.sshSession) {
                console.error('[SFTP-UI] No SSH session on current tab');
                return;
            }
            this.connecting = true;
            try {
                this.sftpSession = yield this.sftp.openFromSSHSession(this.sshSession);
                this.connected = true;
                if (!this.remotePath || this.remotePath === '/') {
                    this.remotePath = this.getDefaultRemotePath();
                }
                this.remotePathInput = this.remotePath;
                yield this.refreshRemote();
            }
            catch (e) {
                console.error('[SFTP-UI] SFTP connection failed', e);
            }
            finally {
                this.connecting = false;
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.sftpSession = null;
            this.connected = false;
            this.remoteEntries = [];
        });
    }
    canLocalUp() {
        const parent = path__WEBPACK_IMPORTED_MODULE_0__.dirname(this.localPath);
        return parent !== this.localPath;
    }
    localUp() {
        const parent = path__WEBPACK_IMPORTED_MODULE_0__.dirname(this.localPath);
        if (parent !== this.localPath) {
            this.localPath = parent;
            this.localPathInput = this.localPath;
            void this.refreshLocal();
        }
    }
    remoteUp() {
        if (!this.connected || this.remotePath === '/') {
            return;
        }
        const next = path__WEBPACK_IMPORTED_MODULE_0__.posix.dirname(this.remotePath);
        this.remotePath = next === '.' ? '/' : next;
        this.remotePathInput = this.remotePath;
        void this.refreshRemote();
    }
    refreshLocal() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const names = yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.readdir(this.localPath);
                const entries = [];
                for (const name of names) {
                    const fullPath = path__WEBPACK_IMPORTED_MODULE_0__.join(this.localPath, name);
                    try {
                        const st = yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.stat(fullPath);
                        entries.push({
                            name,
                            fullPath,
                            isDirectory: st.isDirectory(),
                            size: st.size,
                            mtimeMs: st.mtimeMs,
                        });
                    }
                    catch (_a) {
                        // ignore entries that disappeared
                    }
                }
                this.localEntries = entries;
            }
            catch (e) {
                console.error('[SFTP-UI] Local listing failed', e);
            }
        });
    }
    refreshRemote() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connected) {
                return;
            }
            try {
                if (!this.sftpSession) {
                    throw new Error('Not connected');
                }
                this.remoteEntries = yield this.sftpSession.readdir(this.remotePath);
            }
            catch (e) {
                console.error('[SFTP-UI] Remote listing failed', e);
            }
        });
    }
    openLocal(e) {
        if (!e.isDirectory) {
            return;
        }
        this.localPath = e.fullPath;
        this.localPathInput = this.localPath;
        void this.refreshLocal();
    }
    openRemote(e) {
        if (!this.connected) {
            return;
        }
        if (e.isDirectory) {
            this.remotePath = e.fullPath;
            this.remotePathInput = this.remotePath;
            void this.refreshRemote();
        }
        else {
            void this.openRemoteFile(e);
        }
    }
    onDragOver(ev) {
        ev.preventDefault();
    }
    onLocalMouseDown(entry, event) {
        if (event.button === 2) {
            this.onLocalContextMenu(entry, event);
        }
    }
    onRemoteMouseDown(entry, event) {
        if (event.button === 2) {
            this.onRemoteContextMenu(entry, event);
        }
    }
    selectLocal(entry, event) {
        const list = this.getFilteredLocalEntries();
        const index = list.indexOf(entry);
        if (index === -1) {
            return;
        }
        const isCtrl = event.ctrlKey || event.metaKey;
        const isShift = event.shiftKey;
        if (isShift && this.localLastSelectedIndex != null) {
            const [from, to] = this.localLastSelectedIndex < index
                ? [this.localLastSelectedIndex, index]
                : [index, this.localLastSelectedIndex];
            const range = list.slice(from, to + 1);
            const set = new Set(this.selectedLocal);
            for (const e of range) {
                set.add(e);
            }
            this.selectedLocal = Array.from(set);
        }
        else if (isCtrl) {
            const exists = this.selectedLocal.includes(entry);
            if (exists) {
                this.selectedLocal = this.selectedLocal.filter(e => e !== entry);
            }
            else {
                this.selectedLocal = [...this.selectedLocal, entry];
            }
            this.localLastSelectedIndex = index;
        }
        else {
            this.selectedLocal = [entry];
            this.localLastSelectedIndex = index;
        }
        if (this.selectedLocal.length === 1) {
            this.localActionName = this.selectedLocal[0].name;
        }
    }
    isLocalSelected(entry) {
        return this.selectedLocal.includes(entry);
    }
    selectRemote(entry, event) {
        const list = this.getFilteredRemoteEntries();
        const index = list.indexOf(entry);
        if (index === -1) {
            return;
        }
        const isCtrl = event.ctrlKey || event.metaKey;
        const isShift = event.shiftKey;
        if (isShift && this.remoteLastSelectedIndex != null) {
            const [from, to] = this.remoteLastSelectedIndex < index
                ? [this.remoteLastSelectedIndex, index]
                : [index, this.remoteLastSelectedIndex];
            const range = list.slice(from, to + 1);
            const set = new Set(this.selectedRemote);
            for (const e of range) {
                set.add(e);
            }
            this.selectedRemote = Array.from(set);
        }
        else if (isCtrl) {
            const exists = this.selectedRemote.includes(entry);
            if (exists) {
                this.selectedRemote = this.selectedRemote.filter(e => e !== entry);
            }
            else {
                this.selectedRemote = [...this.selectedRemote, entry];
            }
            this.remoteLastSelectedIndex = index;
        }
        else {
            this.selectedRemote = [entry];
            this.remoteLastSelectedIndex = index;
        }
        if (this.selectedRemote.length === 1) {
            this.remoteActionName = this.selectedRemote[0].name;
            const currentPerms = (this.selectedRemote[0].mode & 0o777).toString(8);
            this.remoteActionPerms = currentPerms;
        }
    }
    isRemoteSelected(entry) {
        return this.selectedRemote.includes(entry);
    }
    setLocalSort(field) {
        if (this.localSortBy === field) {
            this.localSortAsc = !this.localSortAsc;
        }
        else {
            this.localSortBy = field;
            this.localSortAsc = true;
        }
    }
    setRemoteSort(field) {
        if (this.remoteSortBy === field) {
            this.remoteSortAsc = !this.remoteSortAsc;
        }
        else {
            this.remoteSortBy = field;
            this.remoteSortAsc = true;
        }
    }
    onDragStartLocal(ev, e) {
        var _a, _b, _c, _d, _e, _f;
        const sources = this.selectedLocal.includes(e) && this.selectedLocal.length ? this.selectedLocal : [e];
        const movePayload = sources.map(x => x.fullPath);
        (_a = ev.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('application/x-tabby-sftp-ui-local-move', JSON.stringify(movePayload));
        // Cross-device drag (local -> remote) supports multi-select
        const payload = {
            kind: 'local-paths',
            paths: sources.map(x => ({ fullPath: x.fullPath, name: x.name, isDirectory: x.isDirectory })),
        };
        (_b = ev.dataTransfer) === null || _b === void 0 ? void 0 : _b.setData('application/x-tabby-sftp-ui', JSON.stringify(payload));
        (_c = ev.dataTransfer) === null || _c === void 0 ? void 0 : _c.setData('text/plain', e.fullPath);
        (_e = (_d = ev.dataTransfer) === null || _d === void 0 ? void 0 : _d.setDragImage) === null || _e === void 0 ? void 0 : _e.call(_d, (_f = ev.target) !== null && _f !== void 0 ? _f : document.body, 0, 0);
    }
    onDragStartRemote(ev, item) {
        var _a, _b, _c, _d, _e, _f;
        if (!this.connected) {
            return;
        }
        const sources = this.selectedRemote.includes(item) && this.selectedRemote.length ? this.selectedRemote : [item];
        const movePayload = sources.map(x => x.fullPath);
        (_a = ev.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('application/x-tabby-sftp-ui-remote-move', JSON.stringify(movePayload));
        // Cross-device drag (remote -> local) supports multi-select
        const payload = {
            kind: 'remote-paths',
            paths: sources.map(x => ({
                remotePath: x.fullPath,
                name: x.name,
                isDirectory: x.isDirectory,
                size: x.size,
                mode: x.mode,
            })),
        };
        (_b = ev.dataTransfer) === null || _b === void 0 ? void 0 : _b.setData('application/x-tabby-sftp-ui', JSON.stringify(payload));
        (_c = ev.dataTransfer) === null || _c === void 0 ? void 0 : _c.setData('text/plain', item.fullPath);
        (_e = (_d = ev.dataTransfer) === null || _d === void 0 ? void 0 : _d.setDragImage) === null || _e === void 0 ? void 0 : _e.call(_d, (_f = ev.target) !== null && _f !== void 0 ? _f : document.body, 0, 0);
    }
    onDropOnRemote(ev) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            ev.preventDefault();
            this.remoteDropActive = false;
            if (!this.connected) {
                return;
            }
            if (!this.sftpSession) {
                return;
            }
            const raw = (_a = ev.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('application/x-tabby-sftp-ui');
            if (raw) {
                let payload;
                try {
                    payload = JSON.parse(raw);
                }
                catch (_d) {
                    return;
                }
                try {
                    if (payload.kind === 'local-file') {
                        const targetRemotePath = path__WEBPACK_IMPORTED_MODULE_0__.posix.join(this.remotePath, payload.name);
                        const existsOnRemote = this.remoteEntries.some(e => e.name === payload.name);
                        if (existsOnRemote) {
                            const ok = yield this.showReplaceConfirm(`Replace existing "${payload.name}" on remote?`);
                            if (!ok) {
                                return;
                            }
                            yield this.deleteRemotePathRecursive(targetRemotePath);
                        }
                        const upload = new _local_transfers__WEBPACK_IMPORTED_MODULE_8__.LocalPathFileUpload(payload.fullPath);
                        this.trackTransfer(upload, 'upload', targetRemotePath, payload.fullPath);
                        yield this.sftpSession.upload(targetRemotePath, upload);
                        yield this.refreshRemote();
                        return;
                    }
                    if (payload.kind === 'local-paths') {
                        for (const p of payload.paths) {
                            const targetRemotePath = path__WEBPACK_IMPORTED_MODULE_0__.posix.join(this.remotePath, p.name);
                            const existsOnRemote = this.remoteEntries.some(e => e.name === p.name);
                            if (existsOnRemote) {
                                const ok = yield this.showReplaceConfirm(`Replace existing "${p.name}" on remote?`);
                                if (!ok) {
                                    continue;
                                }
                                yield this.deleteRemotePathRecursive(targetRemotePath);
                            }
                            yield this.uploadLocalPathToRemote(this.remotePath, p.fullPath);
                        }
                        yield this.refreshRemote();
                        return;
                    }
                }
                catch (e) {
                    console.error('[SFTP-UI] Upload failed', e);
                    return;
                }
            }
            // Drag & drop from OS file manager (Explorer/Finder) into the remote pane
            const osPaths = this.getDroppedOsPaths(ev);
            if (osPaths.length) {
                try {
                    for (const p of osPaths) {
                        const baseName = path__WEBPACK_IMPORTED_MODULE_0__.basename(p);
                        const existing = this.remoteEntries.find(e => e.name === baseName);
                        if (existing) {
                            const ok = yield this.showReplaceConfirm(`Replace existing "${baseName}" on remote?`);
                            if (!ok) {
                                continue;
                            }
                            const remoteTarget = path__WEBPACK_IMPORTED_MODULE_0__.posix.join(this.remotePath, baseName);
                            yield this.deleteRemotePathRecursive(remoteTarget);
                        }
                        yield this.uploadLocalPathToRemote(this.remotePath, p);
                    }
                    yield this.refreshRemote();
                }
                catch (e) {
                    console.error('[SFTP-UI] Upload from OS drop failed', e);
                }
                return;
            }
            // Fallback: use Tabby's native drag parser (supports directories and HTMLFileUpload)
            try {
                const dirUpload = yield ((_c = (_b = this.platform).startUploadFromDragEvent) === null || _c === void 0 ? void 0 : _c.call(_b, ev, true));
                if (dirUpload && this.sftpSession) {
                    yield this.uploadDirectoryUploadToRemote(this.remotePath, dirUpload);
                    yield this.refreshRemote();
                    return;
                }
            }
            catch (e) {
                console.error('[SFTP-UI] startUploadFromDragEvent failed', e);
            }
        });
    }
    onDropOnLocal(ev) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function* () {
            ev.preventDefault();
            this.localDropActive = false;
            // 1) Tabby's internal drag (remote -> local download)
            const rawInternal = (_a = ev.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('application/x-tabby-sftp-ui');
            if (rawInternal) {
                let payload;
                try {
                    payload = JSON.parse(rawInternal);
                }
                catch (_g) {
                    payload = null;
                }
                if (payload && payload.kind === 'remote-file') {
                    try {
                        const targetLocalPath = path__WEBPACK_IMPORTED_MODULE_0__.join(this.localPath, payload.name);
                        if (!this.sftpSession) {
                            throw new Error('Not connected');
                        }
                        if (fs__WEBPACK_IMPORTED_MODULE_3__.existsSync(targetLocalPath)) {
                            const ok = yield this.showReplaceConfirm(`Replace existing "${payload.name}"?`);
                            if (!ok) {
                                return;
                            }
                        }
                        const dl = new _local_transfers__WEBPACK_IMPORTED_MODULE_8__.LocalPathFileDownload(targetLocalPath, payload.mode, payload.size);
                        this.trackTransfer(dl, 'download', payload.remotePath, targetLocalPath);
                        yield this.sftpSession.download(payload.remotePath, dl);
                        yield this.refreshLocal();
                    }
                    catch (e) {
                        console.error('[SFTP-UI] Download failed', e);
                    }
                    return;
                }
                if (payload && payload.kind === 'remote-dir') {
                    try {
                        if (!this.sftpSession) {
                            throw new Error('Not connected');
                        }
                        const targetLocalPath = path__WEBPACK_IMPORTED_MODULE_0__.join(this.localPath, payload.name);
                        if (fs__WEBPACK_IMPORTED_MODULE_3__.existsSync(targetLocalPath)) {
                            const ok = yield this.showReplaceConfirm(`Replace existing folder "${payload.name}"?`);
                            if (!ok) {
                                return;
                            }
                            yield this.deleteLocalPathRecursive(targetLocalPath);
                        }
                        yield this.downloadRemoteDirectoryRecursive(payload.remotePath, targetLocalPath);
                        yield this.refreshLocal();
                    }
                    catch (e) {
                        console.error('[SFTP-UI] Download directory failed', e);
                    }
                    return;
                }
                if (payload && payload.kind === 'remote-paths') {
                    try {
                        if (!this.sftpSession) {
                            throw new Error('Not connected');
                        }
                        for (const it of payload.paths) {
                            const targetLocalPath = path__WEBPACK_IMPORTED_MODULE_0__.join(this.localPath, it.name);
                            if (fs__WEBPACK_IMPORTED_MODULE_3__.existsSync(targetLocalPath)) {
                                const ok = yield this.showReplaceConfirm(it.isDirectory ? `Replace existing folder "${it.name}"?` : `Replace existing "${it.name}"?`);
                                if (!ok) {
                                    continue;
                                }
                                yield this.deleteLocalPathRecursive(targetLocalPath);
                            }
                            if (it.isDirectory) {
                                yield this.downloadRemoteDirectoryRecursive(it.remotePath, targetLocalPath);
                            }
                            else {
                                const dl = new _local_transfers__WEBPACK_IMPORTED_MODULE_8__.LocalPathFileDownload(targetLocalPath, (_b = it.mode) !== null && _b !== void 0 ? _b : 0o644, (_c = it.size) !== null && _c !== void 0 ? _c : 0);
                                this.trackTransfer(dl, 'download', it.remotePath, targetLocalPath);
                                yield this.sftpSession.download(it.remotePath, dl);
                            }
                        }
                        yield this.refreshLocal();
                    }
                    catch (e) {
                        console.error('[SFTP-UI] Download paths failed', e);
                    }
                    return;
                }
            }
            // Drag & drop from OS file manager into the local pane (copy into current local folder)
            const osPaths = this.getDroppedOsPaths(ev);
            if (osPaths.length) {
                try {
                    for (const p of osPaths) {
                        const baseName = path__WEBPACK_IMPORTED_MODULE_0__.basename(p);
                        const destPath = path__WEBPACK_IMPORTED_MODULE_0__.join(this.localPath, baseName);
                        if (fs__WEBPACK_IMPORTED_MODULE_3__.existsSync(destPath)) {
                            const ok = yield this.showReplaceConfirm(`Replace existing "${baseName}"?`);
                            if (!ok) {
                                continue;
                            }
                        }
                        yield this.copyLocalPathIntoLocalDir(this.localPath, p);
                    }
                    yield this.refreshLocal();
                }
                catch (e) {
                    console.error('[SFTP-UI] Local copy from OS drop failed', e);
                }
                return;
            }
            // Fallback: use Tabby's native drag parser, then write files to disk
            try {
                const dirUpload = yield ((_e = (_d = this.platform).startUploadFromDragEvent) === null || _e === void 0 ? void 0 : _e.call(_d, ev, true));
                if (dirUpload) {
                    yield this.writeDirectoryUploadToLocal(this.localPath, dirUpload);
                    yield this.refreshLocal();
                    return;
                }
            }
            catch (e) {
                console.error('[SFTP-UI] startUploadFromDragEvent (local) failed', e);
            }
            const raw = (_f = ev.dataTransfer) === null || _f === void 0 ? void 0 : _f.getData('application/x-tabby-sftp-ui');
            if (!raw) {
                return;
            }
            let payload;
            try {
                payload = JSON.parse(raw);
            }
            catch (_h) {
                return;
            }
            if (payload.kind !== 'remote-file' && payload.kind !== 'remote-dir') {
                return;
            }
            try {
                if (payload.kind === 'remote-file') {
                    const targetLocalPath = path__WEBPACK_IMPORTED_MODULE_0__.join(this.localPath, payload.name);
                    if (!this.sftpSession) {
                        throw new Error('Not connected');
                    }
                    if (fs__WEBPACK_IMPORTED_MODULE_3__.existsSync(targetLocalPath)) {
                        const ok = yield this.showReplaceConfirm(`Replace existing "${payload.name}"?`);
                        if (!ok) {
                            return;
                        }
                        yield this.deleteLocalPathRecursive(targetLocalPath);
                    }
                    const dl = new _local_transfers__WEBPACK_IMPORTED_MODULE_8__.LocalPathFileDownload(targetLocalPath, payload.mode, payload.size);
                    this.trackTransfer(dl, 'download', payload.remotePath, targetLocalPath);
                    yield this.sftpSession.download(payload.remotePath, dl);
                    yield this.refreshLocal();
                    return;
                }
                // remote-dir -> local-dir (recursive download)
                if (!this.sftpSession) {
                    throw new Error('Not connected');
                }
                const targetLocalPath = path__WEBPACK_IMPORTED_MODULE_0__.join(this.localPath, payload.name);
                if (fs__WEBPACK_IMPORTED_MODULE_3__.existsSync(targetLocalPath)) {
                    const ok = yield this.showReplaceConfirm(`Replace existing folder "${payload.name}"?`);
                    if (!ok) {
                        return;
                    }
                    yield this.deleteLocalPathRecursive(targetLocalPath);
                }
                yield this.downloadRemoteDirectoryRecursive(payload.remotePath, targetLocalPath);
                yield this.refreshLocal();
            }
            catch (e) {
                console.error('[SFTP-UI] Download failed', e);
            }
        });
    }
    uploadLocalPathToRemote(remoteDir, localPath) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.sftpSession) {
                return;
            }
            const st = yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.stat(localPath).catch(() => null);
            if (!st) {
                return;
            }
            const baseName = path__WEBPACK_IMPORTED_MODULE_0__.basename(localPath);
            const remoteTarget = path__WEBPACK_IMPORTED_MODULE_0__.posix.join(remoteDir, baseName);
            if (st.isDirectory()) {
                // Ensure destination folder exists, then recursively upload children
                try {
                    yield this.sftpSession.mkdir(remoteTarget);
                }
                catch (_a) {
                    // ignore (might already exist)
                }
                const children = yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.readdir(localPath);
                for (const child of children) {
                    yield this.uploadLocalPathToRemote(remoteTarget, path__WEBPACK_IMPORTED_MODULE_0__.join(localPath, child));
                }
                return;
            }
            const upload = new _local_transfers__WEBPACK_IMPORTED_MODULE_8__.LocalPathFileUpload(localPath);
            this.trackTransfer(upload, 'upload', remoteTarget, localPath);
            yield this.sftpSession.upload(remoteTarget, upload);
        });
    }
    copyLocalPathIntoLocalDir(destDir, srcPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const st = yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.stat(srcPath).catch(() => null);
            if (!st) {
                return;
            }
            const baseName = path__WEBPACK_IMPORTED_MODULE_0__.basename(srcPath);
            const destPath = path__WEBPACK_IMPORTED_MODULE_0__.join(destDir, baseName);
            if (st.isDirectory()) {
                yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.mkdir(destPath, { recursive: true });
                const children = yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.readdir(srcPath);
                for (const child of children) {
                    yield this.copyLocalPathIntoLocalDir(destPath, path__WEBPACK_IMPORTED_MODULE_0__.join(srcPath, child));
                }
                return;
            }
            yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.copyFile(srcPath, destPath);
        });
    }
    uploadDirectoryUploadToRemote(remoteDir, dirUpload) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.sftpSession) {
                return;
            }
            const childrens = (_b = (_a = dirUpload === null || dirUpload === void 0 ? void 0 : dirUpload.getChildrens) === null || _a === void 0 ? void 0 : _a.call(dirUpload)) !== null && _b !== void 0 ? _b : [];
            for (const item of childrens) {
                // DirectoryUpload
                if (typeof (item === null || item === void 0 ? void 0 : item.getChildrens) === 'function') {
                    const name = ((_c = item.getName) === null || _c === void 0 ? void 0 : _c.call(item)) || 'folder';
                    const nextRemote = path__WEBPACK_IMPORTED_MODULE_0__.posix.join(remoteDir, name);
                    try {
                        yield this.sftpSession.mkdir(nextRemote);
                    }
                    catch (_d) {
                        // ignore (might already exist)
                    }
                    yield this.uploadDirectoryUploadToRemote(nextRemote, item);
                    continue;
                }
                // FileUpload (including HTMLFileUpload)
                if (typeof (item === null || item === void 0 ? void 0 : item.read) === 'function' && typeof (item === null || item === void 0 ? void 0 : item.getName) === 'function') {
                    const fileUpload = item;
                    const name = fileUpload.getName();
                    const targetRemotePath = path__WEBPACK_IMPORTED_MODULE_0__.posix.join(remoteDir, name);
                    this.trackTransfer(fileUpload, 'upload', targetRemotePath, name);
                    yield this.sftpSession.upload(targetRemotePath, fileUpload);
                }
            }
        });
    }
    writeDirectoryUploadToLocal(localDir, dirUpload) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const childrens = (_b = (_a = dirUpload === null || dirUpload === void 0 ? void 0 : dirUpload.getChildrens) === null || _a === void 0 ? void 0 : _a.call(dirUpload)) !== null && _b !== void 0 ? _b : [];
            for (const item of childrens) {
                if (typeof (item === null || item === void 0 ? void 0 : item.getChildrens) === 'function') {
                    const name = ((_c = item.getName) === null || _c === void 0 ? void 0 : _c.call(item)) || 'folder';
                    const nextLocal = path__WEBPACK_IMPORTED_MODULE_0__.join(localDir, name);
                    yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.mkdir(nextLocal, { recursive: true });
                    yield this.writeDirectoryUploadToLocal(nextLocal, item);
                    continue;
                }
                if (typeof (item === null || item === void 0 ? void 0 : item.readAll) === 'function' && typeof (item === null || item === void 0 ? void 0 : item.getName) === 'function') {
                    const name = item.getName();
                    const targetLocal = path__WEBPACK_IMPORTED_MODULE_0__.join(localDir, name);
                    const buf = yield item.readAll();
                    yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.writeFile(targetLocal, Buffer.from(buf));
                    try {
                        (_d = item.close) === null || _d === void 0 ? void 0 : _d.call(item);
                    }
                    catch (_e) {
                        // ignore
                    }
                }
            }
        });
    }
    downloadRemoteDirectoryRecursive(remoteDir, localDir) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.sftpSession) {
                return;
            }
            yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.mkdir(localDir, { recursive: true });
            const entries = yield this.sftpSession.readdir(remoteDir).catch(() => null);
            if (!entries) {
                return;
            }
            for (const e of entries) {
                const targetLocal = path__WEBPACK_IMPORTED_MODULE_0__.join(localDir, e.name);
                if (e.isDirectory) {
                    yield this.downloadRemoteDirectoryRecursive(e.fullPath, targetLocal);
                }
                else {
                    const dl = new _local_transfers__WEBPACK_IMPORTED_MODULE_8__.LocalPathFileDownload(targetLocal, e.mode, e.size);
                    this.trackTransfer(dl, 'download', e.fullPath, targetLocal);
                    yield this.sftpSession.download(e.fullPath, dl);
                }
            }
        });
    }
    getDroppedOsPaths(ev) {
        var _a;
        const dt = ev.dataTransfer;
        if (!dt) {
            return [];
        }
        const isWin = os__WEBPACK_IMPORTED_MODULE_1__.platform() === 'win32';
        const isLocalPath = (p) => {
            if (isWin) {
                // Accept both `C:\...` and `C:/...` (some drag sources provide forward slashes)
                return /^[A-Za-z]:[\\/]/.test(p) || p.startsWith('\\\\');
            }
            return p.startsWith('/');
        };
        // 1) Electron-style File.path
        const filePaths = Array.from((_a = dt.files) !== null && _a !== void 0 ? _a : [])
            .map(f => f.path)
            .filter((p) => Boolean(p));
        if (filePaths.length) {
            return filePaths;
        }
        // 2) Sometimes paths are exposed as URIs
        const uriList = dt.getData('text/uri-list') || '';
        const uris = uriList
            .split(/\r?\n/g)
            .map(x => x.trim())
            .filter(x => x && !x.startsWith('#'))
            .map(x => {
            if (x.startsWith('file://')) {
                try {
                    return decodeURIComponent(x.replace(/^file:\/\//, ''));
                }
                catch (_a) {
                    return x.replace(/^file:\/\//, '');
                }
            }
            return x;
        })
            .map(x => {
            // Some sources may produce `/C:/Users/...`
            if (isWin && /^\/[A-Za-z]:[\\/]/.test(x)) {
                return x.slice(1);
            }
            return x;
        })
            .filter(x => x && isLocalPath(x));
        if (uris.length) {
            return uris;
        }
        // 3) Plain text sometimes contains a local path
        const text = dt.getData('text/plain') || '';
        const textLines = text.split(/\r?\n/g).map(x => x.trim()).filter(Boolean);
        const textPaths = textLines
            .map(x => {
            if (x.startsWith('file://')) {
                try {
                    return decodeURIComponent(x.replace(/^file:\/\//, ''));
                }
                catch (_a) {
                    return x.replace(/^file:\/\//, '');
                }
            }
            return x;
        })
            .map(x => {
            if (isWin && /^\/[A-Za-z]:[\\/]/.test(x)) {
                return x.slice(1);
            }
            return x;
        })
            .filter(x => x && isLocalPath(x));
        return textPaths;
    }
    getFilteredLocalEntries() {
        const entriesRef = this.localEntries;
        const filter = this.localFilter;
        const showHidden = this.showHiddenLocal;
        const sortBy = this.localSortBy;
        const asc = this.localSortAsc;
        if (this.localCache &&
            this.localCache.entriesRef === entriesRef &&
            this.localCache.filter === filter &&
            this.localCache.showHidden === showHidden &&
            this.localCache.sortBy === sortBy &&
            this.localCache.asc === asc) {
            return this.localCache.result;
        }
        const term = filter.trim().toLowerCase();
        let entries = entriesRef;
        if (!showHidden) {
            entries = entries.filter(e => !e.name.startsWith('.'));
        }
        if (term) {
            entries = entries.filter(e => e.name.toLowerCase().includes(term));
        }
        const result = this.sortLocalEntries(entries.slice());
        this.localCache = { entriesRef, filter, showHidden, sortBy, asc, result };
        return result;
    }
    getFilteredRemoteEntries() {
        const entriesRef = this.remoteEntries;
        const filter = this.remoteFilter;
        const showHidden = this.showHiddenRemote;
        const sortBy = this.remoteSortBy;
        const asc = this.remoteSortAsc;
        if (this.remoteCache &&
            this.remoteCache.entriesRef === entriesRef &&
            this.remoteCache.filter === filter &&
            this.remoteCache.showHidden === showHidden &&
            this.remoteCache.sortBy === sortBy &&
            this.remoteCache.asc === asc) {
            return this.remoteCache.result;
        }
        const term = filter.trim().toLowerCase();
        let entries = entriesRef;
        if (!showHidden) {
            entries = entries.filter(e => !e.name.startsWith('.'));
        }
        if (term) {
            entries = entries.filter(e => e.name.toLowerCase().includes(term));
        }
        const result = this.sortRemoteEntries(entries.slice());
        this.remoteCache = { entriesRef, filter, showHidden, sortBy, asc, result };
        return result;
    }
    sortLocalEntries(entries) {
        const dirFirst = (a, b) => Number(b.isDirectory) - Number(a.isDirectory);
        const factor = this.localSortAsc ? 1 : -1;
        const field = this.localSortBy;
        return entries.sort((a, b) => {
            var _a, _b, _c, _d;
            const d = dirFirst(a, b);
            if (d !== 0)
                return d;
            if (field === 'name') {
                return a.name.localeCompare(b.name) * factor;
            }
            if (field === 'size') {
                const av = (_a = a.size) !== null && _a !== void 0 ? _a : 0;
                const bv = (_b = b.size) !== null && _b !== void 0 ? _b : 0;
                return (av - bv) * factor;
            }
            const av = (_c = a.mtimeMs) !== null && _c !== void 0 ? _c : 0;
            const bv = (_d = b.mtimeMs) !== null && _d !== void 0 ? _d : 0;
            return (av - bv) * factor;
        });
    }
    sortRemoteEntries(entries) {
        const dirFirst = (a, b) => Number(b.isDirectory) - Number(a.isDirectory);
        const factor = this.remoteSortAsc ? 1 : -1;
        const field = this.remoteSortBy;
        return entries.sort((a, b) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const d = dirFirst(a, b);
            if (d !== 0)
                return d;
            if (field === 'name') {
                return a.name.localeCompare(b.name) * factor;
            }
            if (field === 'size') {
                const av = (_a = a.size) !== null && _a !== void 0 ? _a : 0;
                const bv = (_b = b.size) !== null && _b !== void 0 ? _b : 0;
                return (av - bv) * factor;
            }
            const av = (_e = (_d = (_c = a.modified) === null || _c === void 0 ? void 0 : _c.getTime) === null || _d === void 0 ? void 0 : _d.call(_c)) !== null && _e !== void 0 ? _e : 0;
            const bv = (_h = (_g = (_f = b.modified) === null || _f === void 0 ? void 0 : _f.getTime) === null || _g === void 0 ? void 0 : _g.call(_f)) !== null && _h !== void 0 ? _h : 0;
            return (av - bv) * factor;
        });
    }
    getLocalMovePayload(ev) {
        var _a;
        const raw = (_a = ev.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('application/x-tabby-sftp-ui-local-move');
        if (!raw) {
            return null;
        }
        try {
            const arr = JSON.parse(raw);
            if (Array.isArray(arr)) {
                return arr;
            }
        }
        catch (_b) {
            // ignore
        }
        return null;
    }
    getRemoteMovePayload(ev) {
        var _a;
        const raw = (_a = ev.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('application/x-tabby-sftp-ui-remote-move');
        if (!raw) {
            return null;
        }
        try {
            const arr = JSON.parse(raw);
            if (Array.isArray(arr)) {
                return arr;
            }
        }
        catch (_b) {
            // ignore
        }
        return null;
    }
    formatSize(bytes) {
        if (bytes === undefined || bytes === null) {
            return '';
        }
        if (bytes === 0) {
            return '0 B';
        }
        const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
        let value = bytes;
        let unitIndex = 0;
        while (value >= 1024 && unitIndex < units.length - 1) {
            value /= 1024;
            unitIndex++;
        }
        const digits = value >= 10 || unitIndex === 0 ? 0 : 1;
        return `${value.toFixed(digits)} ${units[unitIndex]}`;
    }
    formatSpeed(bytesPerSecond) {
        if (bytesPerSecond === undefined || bytesPerSecond === null) {
            return '';
        }
        if (bytesPerSecond === 0) {
            return '0 B/s';
        }
        const units = ['B/s', 'KB/s', 'MB/s', 'GB/s', 'TB/s', 'PB/s'];
        let value = bytesPerSecond;
        let unitIndex = 0;
        while (value >= 1024 && unitIndex < units.length - 1) {
            value /= 1024;
            unitIndex++;
        }
        const digits = value >= 10 || unitIndex === 0 ? 0 : 1;
        return `${value.toFixed(digits)} ${units[unitIndex]}`;
    }
    getLocalSizeDisplay(e) {
        if (!e.isDirectory) {
            return this.formatSize(e.size);
        }
        if (e.size !== undefined) {
            return this.formatSize(e.size);
        }
        if (this.localFolderSizeLoading.has(e.fullPath)) {
            return '…';
        }
        return '';
    }
    getRemoteSizeDisplay(e) {
        if (!e.isDirectory) {
            return this.formatSize(e.size);
        }
        const key = e.fullPath;
        if (e.dirSize !== undefined) {
            return this.formatSize(e.dirSize);
        }
        if (this.remoteFolderSizeLoading.has(key)) {
            return '…';
        }
        return '';
    }
    onLocalEntryDragOver(entry, ev) {
        if (!entry.isDirectory) {
            return;
        }
        if (!this.getLocalMovePayload(ev)) {
            return;
        }
        ev.preventDefault();
    }
    onLocalEntryDrop(entry, ev) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!entry.isDirectory) {
                return;
            }
            const sources = this.getLocalMovePayload(ev);
            if (!sources || !sources.length) {
                return;
            }
            ev.preventDefault();
            const targetDir = entry.fullPath;
            try {
                for (const src of sources) {
                    if (!src || src === targetDir) {
                        continue;
                    }
                    // avoid moving a directory into its own subtree
                    if (targetDir.startsWith(src + path__WEBPACK_IMPORTED_MODULE_0__.sep)) {
                        continue;
                    }
                    const name = path__WEBPACK_IMPORTED_MODULE_0__.basename(src);
                    const dst = path__WEBPACK_IMPORTED_MODULE_0__.join(targetDir, name);
                    if (dst === src) {
                        continue;
                    }
                    try {
                        yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.rename(src, dst);
                    }
                    catch (e) {
                        console.error('[SFTP-UI] Local move failed', e);
                    }
                }
                yield this.refreshLocal();
            }
            catch (e) {
                console.error('[SFTP-UI] Local move batch failed', e);
            }
        });
    }
    onRemoteEntryDragOver(entry, ev) {
        if (!entry.isDirectory) {
            return;
        }
        if (!this.getRemoteMovePayload(ev)) {
            return;
        }
        ev.preventDefault();
    }
    onRemoteEntryDrop(entry, ev) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!entry.isDirectory || !this.sftpSession || !this.connected) {
                return;
            }
            const sources = this.getRemoteMovePayload(ev);
            if (!sources || !sources.length) {
                return;
            }
            ev.preventDefault();
            const targetDir = entry.fullPath;
            try {
                for (const src of sources) {
                    if (!src || src === targetDir) {
                        continue;
                    }
                    // avoid moving a directory into its own subtree
                    if (targetDir.startsWith(src + '/')) {
                        continue;
                    }
                    const name = src.split('/').filter(Boolean).pop() || '';
                    if (!name) {
                        continue;
                    }
                    const dst = path__WEBPACK_IMPORTED_MODULE_0__.posix.join(targetDir, name);
                    if (dst === src) {
                        continue;
                    }
                    try {
                        yield this.sftpSession.rename(src, dst);
                    }
                    catch (e) {
                        console.error('[SFTP-UI] Remote move failed', e);
                    }
                }
                yield this.refreshRemote();
            }
            catch (e) {
                console.error('[SFTP-UI] Remote move batch failed', e);
            }
        });
    }
    getRemoteBreadcrumbs() {
        const parts = this.remotePath.split('/').filter(Boolean);
        const crumbs = [];
        let current = '/';
        crumbs.push({ label: '/', path: '/' });
        for (const p of parts) {
            current = current === '/' ? `/${p}` : `${current}/${p}`;
            crumbs.push({ label: p, path: current });
        }
        return crumbs;
    }
    navigateRemoteBreadcrumb(index) {
        const crumbs = this.getRemoteBreadcrumbs();
        const crumb = crumbs[index];
        if (!crumb) {
            return;
        }
        this.remotePath = crumb.path;
        this.remotePathInput = this.remotePath;
        void this.refreshRemote();
    }
    goToRemotePathInput() {
        if (!this.connected) {
            return;
        }
        const target = this.normalizeRemotePath(this.remotePathInput || '/');
        this.remotePath = target;
        this.remotePathInput = target;
        void this.refreshRemote();
    }
    goToLocalPathInput() {
        const target = this.normalizeLocalPath(this.localPathInput || this.localPath);
        this.goToLocalPath(target);
    }
    getLocalBreadcrumbs() {
        const currentPath = this.localPath;
        const parsed = path__WEBPACK_IMPORTED_MODULE_0__.parse(currentPath);
        const root = parsed.root || path__WEBPACK_IMPORTED_MODULE_0__.sep;
        const withoutRoot = currentPath.slice(root.length);
        const parts = withoutRoot.split(path__WEBPACK_IMPORTED_MODULE_0__.sep).filter(Boolean);
        const crumbs = [];
        const rootLabel = root.replace(/[\\\/]+$/, '') || root;
        crumbs.push({ label: rootLabel, path: root });
        let accum = root;
        for (const p of parts) {
            accum = path__WEBPACK_IMPORTED_MODULE_0__.join(accum, p);
            crumbs.push({ label: p, path: accum });
        }
        return crumbs;
    }
    navigateLocalBreadcrumb(index) {
        const crumbs = this.getLocalBreadcrumbs();
        const crumb = crumbs[index];
        if (!crumb) {
            return;
        }
        this.goToLocalPath(crumb.path);
    }
    goToLocalPath(target) {
        this.localPath = target;
        this.localPathInput = target;
        void this.refreshLocal();
    }
    onLocalPresetChange(id) {
        if (!id) {
            return;
        }
        const preset = this.localPathPresets.find(p => p.id === id);
        if (!preset) {
            return;
        }
        this.goToLocalPath(preset.path);
    }
    isCurrentFavorite() {
        return this.localFavorites.some(f => f.path === this.localPath);
    }
    toggleCurrentFavorite() {
        const existingIndex = this.localFavorites.findIndex(f => f.path === this.localPath);
        if (existingIndex >= 0) {
            this.localFavorites.splice(existingIndex, 1);
            this.saveLocalFavorites();
            return;
        }
        const label = path__WEBPACK_IMPORTED_MODULE_0__.basename(this.localPath) || this.localPath;
        const id = `fav-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
        this.localFavorites.push({ id, label, path: this.localPath });
        this.saveLocalFavorites();
    }
    onLocalFavoriteSelect(id) {
        if (!id) {
            return;
        }
        const fav = this.localFavorites.find(f => f.id === id);
        if (!fav) {
            return;
        }
        this.goToLocalPath(fav.path);
    }
    onDocumentClickFav(event) {
        const target = event.target;
        if (target && !target.closest('.fav-dropdown')) {
            this.favDropdownOpen = false;
        }
    }
    toggleFavDropdown() {
        this.favDropdownOpen = !this.favDropdownOpen;
    }
    getSelectedFavLabel() {
        const fav = this.localFavorites.find(f => f.path === this.localPath);
        return fav ? fav.label : '====';
    }
    onFavEditNameClick(event, fav) {
        event.preventDefault();
        event.stopPropagation();
        this.favDropdownOpen = false;
        this.inputDialogPathValue = fav.path || '';
        this.openInputDialog({
            mode: 'local-favorite-rename',
            title: 'Edit Favorite',
            placeholder: 'Enter new name',
            value: fav.label,
            targetPath: fav.id,
        });
    }
    onFavDeleteClick(event, fav) {
        event.preventDefault();
        event.stopPropagation();
        this.favDropdownOpen = false;
        this.localFavorites = this.localFavorites.filter(f => f.id !== fav.id);
        this.saveLocalFavorites();
    }
    onLocalBreadcrumbContextMenu(index, event) {
        event.preventDefault();
        event.stopPropagation();
        const crumbs = this.getLocalBreadcrumbs();
        const crumb = crumbs[index];
        if (!crumb) {
            return;
        }
        const menuItems = [];
        const isWindows = process.platform === 'win32';
        const isRootCrumb = index === 0;
        const basePath = crumb.path;
        // Root crumb on Windows: offer other drives as "siblings"
        if (isWindows && isRootCrumb) {
            const drives = [];
            for (let code = 67; code <= 90; code++) { // C..Z
                const letter = String.fromCharCode(code);
                const rootPath = `${letter}:\\`;
                try {
                    if (fs__WEBPACK_IMPORTED_MODULE_3__.existsSync(rootPath)) {
                        drives.push(rootPath);
                    }
                }
                catch (_a) {
                    // ignore
                }
            }
            for (const d of drives) {
                menuItems.push({ label: d, path: d });
            }
        }
        else {
            // For non-root crumbs (or non-Windows), show sibling folders only
            const parentPath = path__WEBPACK_IMPORTED_MODULE_0__.dirname(basePath);
            try {
                const parentEntries = fs__WEBPACK_IMPORTED_MODULE_3__.readdirSync(parentPath);
                for (const name of parentEntries) {
                    const full = path__WEBPACK_IMPORTED_MODULE_0__.join(parentPath, name);
                    try {
                        const st = fs__WEBPACK_IMPORTED_MODULE_3__.statSync(full);
                        if (st.isDirectory()) {
                            menuItems.push({ label: name, path: full });
                        }
                    }
                    catch (_b) {
                        // ignore
                    }
                }
            }
            catch (_c) {
                // ignore
            }
        }
        if (!menuItems.length) {
            return;
        }
        this.localMenuItems = menuItems;
        this.localMenuVisible = true;
        this.localMenuX = event.clientX;
        this.localMenuY = event.clientY;
    }
    toggleRemoteFavDropdown() {
        this.remoteDropdownOpen = !this.remoteDropdownOpen;
    }
    getSelectedRemoteFavLabel() {
        const fav = this.remoteFavorites.find(f => f.path === this.remotePath);
        return fav ? fav.label : '====';
    }
    onRemoteFavoriteSelect(favId) {
        const fav = this.remoteFavorites.find(f => f.id === favId);
        if (fav && fav.path) {
            this.remotePath = fav.path;
            this.remotePathInput = fav.path;
            void this.refreshRemote();
        }
    }
    isCurrentRemoteFavorite() {
        return this.remoteFavorites.some(f => f.path === this.remotePath);
    }
    toggleCurrentRemoteFavorite() {
        const idx = this.remoteFavorites.findIndex(f => f.path === this.remotePath);
        if (idx >= 0) {
            this.remoteFavorites.splice(idx, 1);
        }
        else {
            this.remoteFavorites.push({
                id: `fav-${Math.random().toString(36).slice(2, 8)}`,
                label: path__WEBPACK_IMPORTED_MODULE_0__.posix.basename(this.remotePath) || this.remotePath,
                path: this.remotePath,
            });
        }
        this.saveRemoteFavorites();
    }
    onRemoteFavEditNameClick(event, fav) {
        event.preventDefault();
        event.stopPropagation();
        this.remoteDropdownOpen = false;
        this.inputDialogPathValue = fav.path || '';
        this.openInputDialog({
            mode: 'remote-favorite-rename',
            title: 'Edit Favorite',
            placeholder: 'Enter new name',
            value: fav.label,
            targetPath: fav.id,
        });
    }
    loadLocalFavorites() {
        try {
            if (!this.config || !this.config.store) {
                return;
            }
            const parsed = this.config.store.sftpLocalFavorites;
            if (Array.isArray(parsed)) {
                this.localFavorites = parsed
                    .filter(f => f && typeof f.path === 'string')
                    .map(f => ({
                    id: String(f.id || `fav-${Math.random().toString(36).slice(2, 8)}`),
                    label: String(f.label || path__WEBPACK_IMPORTED_MODULE_0__.basename(f.path) || f.path),
                    path: String(f.path),
                }));
            }
        }
        catch (_a) {
            // ignore
        }
    }
    saveLocalFavorites() {
        try {
            if (!this.config || !this.config.store) {
                return;
            }
            this.config.store.sftpLocalFavorites = this.localFavorites;
            this.config.save();
        }
        catch (_a) {
            // ignore
        }
    }
    getRemoteProfileId() {
        var _a, _b, _c, _d;
        return ((_a = this.profile) === null || _a === void 0 ? void 0 : _a.id)
            || ((_b = this.profile) === null || _b === void 0 ? void 0 : _b.name)
            || ((_d = (_c = this.profile) === null || _c === void 0 ? void 0 : _c.options) === null || _d === void 0 ? void 0 : _d.host)
            || 'global';
    }
    loadRemoteFavorites() {
        try {
            if (!this.config || !this.config.store) {
                return;
            }
            const profileId = this.getRemoteProfileId();
            const allRemoteFavs = this.config.store.sftpRemoteFavorites || {};
            const parsed = allRemoteFavs[profileId];
            if (Array.isArray(parsed)) {
                this.remoteFavorites = parsed
                    .filter(f => f && typeof f.path === 'string')
                    .map(f => ({
                    id: String(f.id || `fav-${Math.random().toString(36).slice(2, 8)}`),
                    label: String(f.label || path__WEBPACK_IMPORTED_MODULE_0__.basename(f.path) || f.path),
                    path: String(f.path),
                }));
            }
            else {
                this.remoteFavorites = [];
            }
        }
        catch (_a) {
            this.remoteFavorites = [];
        }
    }
    saveRemoteFavorites() {
        try {
            if (!this.config || !this.config.store) {
                return;
            }
            const profileId = this.getRemoteProfileId();
            const allRemoteFavs = Object.assign({}, (this.config.store.sftpRemoteFavorites || {}));
            allRemoteFavs[profileId] = this.remoteFavorites;
            this.config.store.sftpRemoteFavorites = allRemoteFavs;
            this.config.save();
        }
        catch (_a) {
            // ignore
        }
    }
    onLocalMenuItemClick(item) {
        this.localMenuVisible = false;
        this.goToLocalPath(item.path);
    }
    normalizeLocalPath(p) {
        if (!p) {
            return this.localPath;
        }
        let result = p.trim();
        // On Windows allow drive letters and backslashes, but normalize to current OS-style
        if (path__WEBPACK_IMPORTED_MODULE_0__.win32.isAbsolute(result) || path__WEBPACK_IMPORTED_MODULE_0__.posix.isAbsolute(result)) {
            return result;
        }
        // relative path from current localPath
        return path__WEBPACK_IMPORTED_MODULE_0__.join(this.localPath, result);
    }
    normalizeRemotePath(p) {
        if (!p) {
            return '/';
        }
        let result = p.trim();
        if (!result.startsWith('/')) {
            result = '/' + result;
        }
        // remove duplicate slashes
        result = result.replace(/\/+/g, '/');
        return result;
    }
    getDefaultRemotePath() {
        var _a, _b;
        const username = (this.profile && (((_a = this.profile.options) === null || _a === void 0 ? void 0 : _a.username) || ((_b = this.profile.options) === null || _b === void 0 ? void 0 : _b.user))) || '';
        if (username) {
            return `/home/${username}`;
        }
        return '/';
    }
    loadRecentProfiles() {
        var _a, _b;
        try {
            const rec = (_b = (_a = this.profilesService).getRecentProfiles) === null || _b === void 0 ? void 0 : _b.call(_a);
            if (Array.isArray(rec)) {
                this.recentProfiles = rec;
            }
        }
        catch (_c) {
            this.recentProfiles = [];
        }
    }
    getProfileLabel(p) {
        var _a;
        if (!p) {
            return '';
        }
        return p.name || ((_a = p.options) === null || _a === void 0 ? void 0 : _a.host) || p.id || 'Profile';
    }
    launchProfileFromSFTP(p) {
        try {
            void this.profilesService.launchProfile(p);
        }
        catch (e) {
            console.error('[SFTP-UI] launchProfile failed', e);
        }
    }
    onDocumentClick() {
        this.localMenuVisible = false;
    }
    localRename() {
        if (this.selectedLocal.length !== 1) {
            return;
        }
        const entry = this.selectedLocal[0];
        this.openInputDialog({
            mode: 'local-rename',
            title: 'Rename (local)',
            placeholder: 'New name',
            value: entry.name,
            targetPath: entry.fullPath,
        });
    }
    localDelete() {
        if (!this.selectedLocal.length) {
            return;
        }
        this.deleteConfirmMode = 'local';
        this.pendingLocalDelete = this.selectedLocal.slice();
        const names = this.pendingLocalDelete.map(e => e.name);
        this.deleteConfirmText = this.buildDeleteConfirmText('local', names);
        this.deleteConfirmVisible = true;
    }
    localNewFolder() {
        this.openInputDialog({
            mode: 'local-new-folder',
            title: 'New folder (local)',
            placeholder: 'Folder name',
            value: 'New folder',
            targetPath: this.localPath,
        });
    }
    localEditPermissions() {
        if (this.selectedLocal.length !== 1) {
            return;
        }
        const entry = this.selectedLocal[0];
        let currentPerms = '644';
        try {
            const st = fs__WEBPACK_IMPORTED_MODULE_3__.statSync(entry.fullPath);
            currentPerms = (st.mode & 0o777).toString(8);
        }
        catch (_a) {
            // ignore
        }
        this.openInputDialog({
            mode: 'local-edit-permissions',
            title: 'Edit Permissions (local)',
            placeholder: 'Permissions (e.g. 755)',
            value: currentPerms,
            targetPath: entry.fullPath,
        });
    }
    localShowSize() {
        if (this.selectedLocal.length === 1 && this.selectedLocal[0].isDirectory) {
            this.ensureLocalFolderSize(this.selectedLocal[0]);
        }
    }
    remoteRename() {
        if (this.selectedRemote.length !== 1 || !this.sftpSession) {
            return;
        }
        const entry = this.selectedRemote[0];
        this.openInputDialog({
            mode: 'remote-rename',
            title: 'Rename (remote)',
            placeholder: 'New name',
            value: entry.name,
            remotePath: entry.fullPath,
            targetPath: this.remotePath,
        });
    }
    remoteDelete() {
        if (!this.selectedRemote.length || !this.sftpSession) {
            return;
        }
        this.deleteConfirmMode = 'remote';
        this.pendingRemoteDelete = this.selectedRemote.slice();
        const names = this.pendingRemoteDelete.map(e => e.name);
        this.deleteConfirmText = this.buildDeleteConfirmText('remote', names);
        this.deleteConfirmVisible = true;
    }
    remoteNewFolder() {
        if (!this.sftpSession) {
            return;
        }
        this.openInputDialog({
            mode: 'remote-new-folder',
            title: 'New folder (remote)',
            placeholder: 'Folder name',
            value: 'New folder',
            targetPath: this.remotePath,
        });
    }
    openInputDialog(opts) {
        var _a;
        this.inputDialogMode = opts.mode;
        this.inputDialogTitle = opts.title;
        this.inputDialogPlaceholder = opts.placeholder;
        this.inputDialogValue = opts.value;
        this.inputDialogTargetPath = opts.targetPath;
        this.inputDialogRemotePath = (_a = opts.remotePath) !== null && _a !== void 0 ? _a : null;
        this.inputDialogVisible = true;
    }
    deleteFavoriteFromDialog() {
        if (!this.inputDialogVisible ||
            (this.inputDialogMode !== 'local-favorite-rename' &&
                this.inputDialogMode !== 'remote-favorite-rename')) {
            return;
        }
        const id = this.inputDialogTargetPath;
        const isRemote = this.inputDialogMode === 'remote-favorite-rename';
        const fav = isRemote
            ? this.remoteFavorites.find(f => f.id === id)
            : this.localFavorites.find(f => f.id === id);
        this.cancelInputDialog();
        if (fav) {
            this.pendingFavDeleteId = id;
            this.favDeleteConfirmText = `Are you sure you want to delete favorite "${fav.label}"?`;
            this.favDeleteConfirmVisible = true;
        }
    }
    confirmFavDelete() {
        if (this.pendingFavDeleteId) {
            const isRemote = this.remoteFavorites.some(f => f.id === this.pendingFavDeleteId);
            if (isRemote) {
                this.remoteFavorites = this.remoteFavorites.filter(f => f.id !== this.pendingFavDeleteId);
                this.saveRemoteFavorites();
            }
            else {
                this.localFavorites = this.localFavorites.filter(f => f.id !== this.pendingFavDeleteId);
                this.saveLocalFavorites();
            }
        }
        this.cancelFavDelete();
    }
    cancelFavDelete() {
        this.favDeleteConfirmVisible = false;
        this.favDeleteConfirmText = '';
        this.pendingFavDeleteId = null;
    }
    cancelInputDialog() {
        this.inputDialogVisible = false;
        this.inputDialogMode = null;
        this.inputDialogTitle = '';
        this.inputDialogPlaceholder = '';
        this.inputDialogValue = '';
        this.inputDialogPathValue = '';
        this.inputDialogTargetPath = null;
        this.inputDialogRemotePath = null;
    }
    confirmInputDialog() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.inputDialogVisible || !this.inputDialogMode) {
                return;
            }
            const mode = this.inputDialogMode;
            const value = this.inputDialogValue.trim();
            const targetPath = this.inputDialogTargetPath;
            const remotePath = this.inputDialogRemotePath;
            this.cancelInputDialog();
            if (!value || !targetPath) {
                return;
            }
            if (mode === 'local-edit-permissions') {
                const modeNum = parseInt(value, 8);
                if (Number.isNaN(modeNum)) {
                    (_a = this.notifications) === null || _a === void 0 ? void 0 : _a.error('SFTP-UI', 'Invalid permissions value');
                    return;
                }
                try {
                    yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.chmod(targetPath, modeNum);
                    yield this.refreshLocal();
                    (_b = this.notifications) === null || _b === void 0 ? void 0 : _b.notice('Permissions changed successfully');
                }
                catch (e) {
                    (_c = this.notifications) === null || _c === void 0 ? void 0 : _c.error('SFTP-UI', `Local chmod failed: ${e.message || e}`);
                }
                return;
            }
            if (mode === 'remote-edit-permissions') {
                const entry = this.selectedRemote.find(e => e.fullPath === targetPath) || this.selectedRemote[0];
                if (entry) {
                    this.applyRemoteEditPermissions(entry, value);
                }
                return;
            }
            try {
                if (mode === 'local-favorite-rename') {
                    const fav = this.localFavorites.find(f => f.id === targetPath);
                    if (fav) {
                        fav.label = value;
                        if (this.inputDialogPathValue && this.inputDialogPathValue.trim()) {
                            fav.path = this.inputDialogPathValue.trim();
                        }
                        this.saveLocalFavorites();
                    }
                    return;
                }
                if (mode === 'remote-favorite-rename') {
                    const fav = this.remoteFavorites.find(f => f.id === targetPath);
                    if (fav) {
                        fav.label = value;
                        if (this.inputDialogPathValue && this.inputDialogPathValue.trim()) {
                            fav.path = this.inputDialogPathValue.trim();
                        }
                        this.saveRemoteFavorites();
                    }
                    return;
                }
                if (mode === 'local-new-folder') {
                    const dir = targetPath;
                    const folderPath = path__WEBPACK_IMPORTED_MODULE_0__.join(dir, value);
                    yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.mkdir(folderPath, { recursive: true });
                    yield this.refreshLocal();
                    return;
                }
                if (mode === 'local-rename') {
                    const from = targetPath;
                    const to = path__WEBPACK_IMPORTED_MODULE_0__.join(this.localPath, value);
                    if (path__WEBPACK_IMPORTED_MODULE_0__.basename(from) === value) {
                        return;
                    }
                    yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.rename(from, to);
                    yield this.refreshLocal();
                    return;
                }
                if (mode === 'remote-new-folder') {
                    if (!this.sftpSession) {
                        return;
                    }
                    const dir = targetPath;
                    const folderPath = path__WEBPACK_IMPORTED_MODULE_0__.posix.join(dir, value);
                    yield this.sftpSession.mkdir(folderPath);
                    yield this.refreshRemote();
                    return;
                }
                if (mode === 'remote-rename') {
                    if (!this.sftpSession || !remotePath) {
                        return;
                    }
                    const to = path__WEBPACK_IMPORTED_MODULE_0__.posix.join(this.remotePath, value);
                    if (path__WEBPACK_IMPORTED_MODULE_0__.posix.basename(remotePath) === value) {
                        return;
                    }
                    yield this.sftpSession.rename(remotePath, to);
                    yield this.refreshRemote();
                }
            }
            catch (e) {
                console.error('[SFTP-UI] Input dialog action failed', e);
            }
        });
    }
    remoteEditPermissions() {
        if (this.selectedRemote.length !== 1 || !this.sftpSession) {
            return;
        }
        const entry = this.selectedRemote[0];
        const currentPerms = (entry.mode & 0o777).toString(8);
        this.openInputDialog({
            mode: 'remote-edit-permissions',
            title: 'Edit Permissions (remote)',
            placeholder: 'Permissions (e.g. 755)',
            value: currentPerms || '644',
            targetPath: entry.fullPath,
        });
    }
    applyRemoteEditPermissions(entry, value) {
        var _a, _b;
        if (!this.sftpSession) {
            return;
        }
        const mode = parseInt(value.trim(), 8);
        if (Number.isNaN(mode)) {
            (_a = this.notifications) === null || _a === void 0 ? void 0 : _a.error('SFTP-UI', 'Invalid permissions value');
            return;
        }
        const sftp = this.sftpSession;
        if (typeof sftp.chmod === 'function') {
            try {
                let calledBack = false;
                const result = sftp.chmod(entry.fullPath, mode, (err) => {
                    var _a, _b;
                    if (calledBack) {
                        return;
                    }
                    calledBack = true;
                    if (err) {
                        (_a = this.notifications) === null || _a === void 0 ? void 0 : _a.error('SFTP-UI', `Failed to change permissions: ${err.message || err}`);
                    }
                    else {
                        (_b = this.notifications) === null || _b === void 0 ? void 0 : _b.notice('Permissions changed successfully');
                        this.refreshRemote();
                    }
                });
                if (result && typeof result.then === 'function') {
                    result
                        .then(() => {
                        var _a;
                        if (!calledBack) {
                            calledBack = true;
                            (_a = this.notifications) === null || _a === void 0 ? void 0 : _a.notice('Permissions changed successfully');
                            this.refreshRemote();
                        }
                    })
                        .catch((e) => {
                        var _a;
                        if (!calledBack) {
                            calledBack = true;
                            (_a = this.notifications) === null || _a === void 0 ? void 0 : _a.error('SFTP-UI', `Failed to change permissions: ${e.message || e}`);
                        }
                    });
                }
                return;
            }
            catch (e) {
                console.error('[SFTP-UI] chmod call error', e);
            }
        }
        if (typeof sftp.setstat === 'function') {
            try {
                let calledBack = false;
                const result = sftp.setstat(entry.fullPath, { mode }, (err) => {
                    var _a, _b;
                    if (calledBack) {
                        return;
                    }
                    calledBack = true;
                    if (err) {
                        (_a = this.notifications) === null || _a === void 0 ? void 0 : _a.error('SFTP-UI', `Failed to change permissions (setstat): ${err.message || err}`);
                    }
                    else {
                        (_b = this.notifications) === null || _b === void 0 ? void 0 : _b.notice('Permissions changed successfully');
                        this.refreshRemote();
                    }
                });
                if (result && typeof result.then === 'function') {
                    result
                        .then(() => {
                        var _a;
                        if (!calledBack) {
                            calledBack = true;
                            (_a = this.notifications) === null || _a === void 0 ? void 0 : _a.notice('Permissions changed successfully');
                            this.refreshRemote();
                        }
                    })
                        .catch((e) => {
                        var _a;
                        if (!calledBack) {
                            calledBack = true;
                            (_a = this.notifications) === null || _a === void 0 ? void 0 : _a.error('SFTP-UI', `Failed to change permissions (setstat): ${e.message || e}`);
                        }
                    });
                }
                return;
            }
            catch (e) {
                console.error('[SFTP-UI] setstat call error', e);
            }
        }
        (_b = this.notifications) === null || _b === void 0 ? void 0 : _b.error('SFTP-UI', 'Operation not supported by the underlying SFTP client');
    }
    remoteShowSize() {
        if (this.selectedRemote.length === 1 && this.selectedRemote[0].isDirectory) {
            this.ensureRemoteFolderSize(this.selectedRemote[0]);
        }
    }
    remoteDownload() {
        if (!this.selectedRemote.length || !this.sftpSession) {
            return;
        }
        for (const entry of this.selectedRemote) {
            if (entry.isDirectory) {
                continue;
            }
            const targetLocalPath = path__WEBPACK_IMPORTED_MODULE_0__.join(this.localPath, entry.name);
            const dl = new _local_transfers__WEBPACK_IMPORTED_MODULE_8__.LocalPathFileDownload(targetLocalPath, entry.mode, entry.size);
            this.trackTransfer(dl, 'download', entry.fullPath, targetLocalPath);
            void this.sftpSession.download(entry.fullPath, dl)
                .then(() => this.refreshLocal())
                .catch(e => console.error('[SFTP-UI] Remote download failed', e));
        }
    }
    ensureLocalFolderSize(entry) {
        if (!entry.isDirectory) {
            return;
        }
        if (entry.size !== undefined) {
            return;
        }
        if (this.localFolderSizeLoading.has(entry.fullPath)) {
            return;
        }
        this.localFolderSizeLoading.add(entry.fullPath);
        void this.computeLocalFolderSize(entry.fullPath)
            .then(size => {
            entry.size = size;
        })
            .catch(e => {
            console.error('[SFTP-UI] Local folder size failed', e);
        })
            .finally(() => {
            this.localFolderSizeLoading.delete(entry.fullPath);
        });
    }
    ensureRemoteFolderSize(entry) {
        if (!entry.isDirectory) {
            return;
        }
        const key = entry.fullPath;
        if (entry.dirSize !== undefined) {
            return;
        }
        if (this.remoteFolderSizeLoading.has(key)) {
            return;
        }
        if (!this.sftpSession || !this.connected) {
            return;
        }
        this.remoteFolderSizeLoading.add(key);
        void this.computeRemoteFolderSize(key)
            .then(size => {
            ;
            entry.dirSize = size;
        })
            .catch(e => {
            console.error('[SFTP-UI] Remote folder size failed', e);
        })
            .finally(() => {
            this.remoteFolderSizeLoading.delete(key);
        });
    }
    computeLocalFolderSize(root) {
        return __awaiter(this, void 0, void 0, function* () {
            let total = 0;
            const stack = [root];
            const maxEntries = 5000;
            let visited = 0;
            while (stack.length) {
                const dir = stack.pop();
                let names;
                try {
                    names = yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.readdir(dir);
                }
                catch (_a) {
                    continue;
                }
                for (const name of names) {
                    if (visited++ > maxEntries) {
                        return total;
                    }
                    const full = path__WEBPACK_IMPORTED_MODULE_0__.join(dir, name);
                    try {
                        const st = yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.stat(full);
                        if (st.isDirectory()) {
                            stack.push(full);
                        }
                        else {
                            total += st.size;
                        }
                    }
                    catch (_b) {
                        // ignore
                    }
                }
            }
            return total;
        });
    }
    computeRemoteFolderSize(root) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.sftpSession) {
                return 0;
            }
            let total = 0;
            const stack = [root];
            const maxEntries = 5000;
            let visited = 0;
            while (stack.length) {
                const dir = stack.pop();
                let entries;
                try {
                    entries = yield this.sftpSession.readdir(dir);
                }
                catch (_a) {
                    continue;
                }
                for (const item of entries) {
                    if (visited++ > maxEntries) {
                        return total;
                    }
                    if (item.isDirectory) {
                        stack.push(item.fullPath);
                    }
                    else {
                        total += item.size;
                    }
                }
            }
            return total;
        });
    }
    onLocalContextMenu(entry, event) {
        event.preventDefault();
        event.stopPropagation();
        // TODO: полноценное контекстное меню. Пока все действия — через нижнюю панель.
    }
    onRemoteContextMenu(entry, event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.sftpSession) {
            return;
        }
        // TODO: полноценное контекстное меню. Пока все действия — через нижнюю панель.
    }
    trackTransfer(transfer, direction, remotePath, localPath) {
        this.transfers.push({
            transfer,
            direction,
            name: transfer.getName(),
            remotePath,
            localPath,
        });
    }
    cancelTransfer(entry) {
        var _a, _b;
        try {
            if (entry.transfer.isComplete() || entry.transfer.isCancelled()) {
                return;
            }
            (_b = (_a = entry.transfer).cancel) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
        catch (e) {
            console.error('[SFTP-UI] Cancel transfer failed', e);
        }
    }
    getTransferProgress(transfer) {
        var _a, _b;
        try {
            const total = (_a = transfer.getSize) === null || _a === void 0 ? void 0 : _a.call(transfer);
            const done = (_b = transfer.getCompletedBytes) === null || _b === void 0 ? void 0 : _b.call(transfer);
            if (typeof total !== 'number' || total <= 0 || typeof done !== 'number' || done < 0) {
                return transfer.isComplete() ? 100 : 0;
            }
            const value = (done / total) * 100;
            const clamped = Math.max(0, Math.min(100, value));
            return clamped;
        }
        catch (_c) {
            return transfer.isComplete() ? 100 : 0;
        }
    }
    onKeyDown(event) {
        const target = event.target;
        const isTypingTarget = Boolean(target) && ((target === null || target === void 0 ? void 0 : target.tagName) === 'INPUT' ||
            (target === null || target === void 0 ? void 0 : target.tagName) === 'TEXTAREA' ||
            (target === null || target === void 0 ? void 0 : target.isContentEditable));
        if (event.key === 'Escape') {
            if (this.inputDialogVisible) {
                event.preventDefault();
                this.cancelInputDialog();
                return;
            }
            if (this.deleteConfirmVisible) {
                event.preventDefault();
                this.cancelDelete();
                return;
            }
            if (this.replaceConfirmVisible) {
                event.preventDefault();
                this.cancelReplace();
                return;
            }
        }
        if (event.key === 'Delete' || event.key === 'Backspace') {
            // Don't intercept Delete/Backspace while typing in inputs
            if (isTypingTarget) {
                return;
            }
            event.preventDefault();
            if (this.selectedRemote.length) {
                this.remoteDelete();
            }
            else if (this.selectedLocal.length) {
                this.localDelete();
            }
        }
    }
    destroy() {
        // stop file watchers for opened remote files
        for (const { watcher } of this.openedRemoteFiles.values()) {
            try {
                watcher === null || watcher === void 0 ? void 0 : watcher.close();
            }
            catch (_a) {
                // ignore
            }
        }
        this.openedRemoteFiles.clear();
        void this.disconnect();
        if (this.transfersTimer !== null) {
            clearInterval(this.transfersTimer);
            this.transfersTimer = null;
        }
        super.destroy();
    }
    // Prevent Tabby from restoring SFTP-UI tabs across restarts, since they rely
    // on a live SSH session from a terminal tab.
    // Typинги допускают RecoveryToken | null, нам достаточно всегда возвращать null.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getRecoveryToken(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    confirmDelete() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.deleteConfirmVisible) {
                return;
            }
            const mode = this.deleteConfirmMode;
            this.deleteConfirmVisible = false;
            try {
                if (mode === 'local') {
                    const toDelete = this.pendingLocalDelete.slice();
                    this.pendingLocalDelete = [];
                    for (const entry of toDelete) {
                        yield this.deleteLocalEntry(entry);
                    }
                    yield this.refreshLocal();
                    this.selectedLocal = [];
                }
                else if (mode === 'remote' && this.sftpSession) {
                    const toDelete = this.pendingRemoteDelete.slice();
                    this.pendingRemoteDelete = [];
                    for (const entry of toDelete) {
                        yield this.deleteRemoteEntry(entry);
                    }
                    yield this.refreshRemote();
                    this.selectedRemote = [];
                }
            }
            catch (e) {
                console.error('[SFTP-UI] Delete failed', e);
            }
            finally {
                this.deleteConfirmMode = null;
                this.deleteConfirmText = '';
            }
        });
    }
    cancelDelete() {
        this.deleteConfirmVisible = false;
        this.deleteConfirmMode = null;
        this.deleteConfirmText = '';
        this.pendingLocalDelete = [];
        this.pendingRemoteDelete = [];
    }
    showReplaceConfirm(text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.replaceConfirmVisible) {
                // Prevent stacking multiple confirmations; choose the latest replacement intent.
                return false;
            }
            this.replaceConfirmText = text;
            this.replaceConfirmVisible = true;
            return new Promise(resolve => {
                this.replaceConfirmResolve = resolve;
            });
        });
    }
    confirmReplace() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.replaceConfirmVisible) {
                return;
            }
            this.replaceConfirmVisible = false;
            const resolve = this.replaceConfirmResolve;
            this.replaceConfirmResolve = null;
            this.replaceConfirmText = '';
            resolve === null || resolve === void 0 ? void 0 : resolve(true);
        });
    }
    cancelReplace() {
        if (!this.replaceConfirmVisible) {
            return;
        }
        this.replaceConfirmVisible = false;
        const resolve = this.replaceConfirmResolve;
        this.replaceConfirmResolve = null;
        this.replaceConfirmText = '';
        resolve === null || resolve === void 0 ? void 0 : resolve(false);
    }
    deleteLocalEntry(entry) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteLocalPathRecursive(entry.fullPath);
        });
    }
    deleteRemoteEntry(entry) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.sftpSession) {
                return;
            }
            yield this.deleteRemotePathRecursive(entry.fullPath);
        });
    }
    buildDeleteConfirmText(scope, names) {
        const total = names.length;
        const label = scope === 'local' ? 'local' : 'remote';
        if (!total) {
            return `Delete 0 item(s) from ${label}?`;
        }
        const maxShown = 5;
        const shown = names.slice(0, maxShown);
        const list = shown.join(', ');
        if (total <= maxShown) {
            return `Delete ${total} item(s) from ${label}: ${list}?`;
        }
        const rest = total - maxShown;
        return `Delete ${total} item(s) from ${label}: ${list} and ${rest} more?`;
    }
    deleteLocalPathRecursive(target) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const st = yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.stat(target);
                if (!st.isDirectory()) {
                    yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.unlink(target);
                    return;
                }
            }
            catch (e) {
                console.error('[SFTP-UI] Local delete failed (stat)', e);
                return;
            }
            try {
                const names = yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.readdir(target);
                for (const name of names) {
                    const child = path__WEBPACK_IMPORTED_MODULE_0__.join(target, name);
                    yield this.deleteLocalPathRecursive(child);
                }
                yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.rmdir(target);
            }
            catch (e) {
                console.error('[SFTP-UI] Local recursive delete failed', e);
            }
        });
    }
    deleteRemotePathRecursive(target) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.sftpSession) {
                return;
            }
            try {
                const entries = yield this.sftpSession.readdir(target).catch(() => null);
                if (!entries) {
                    // treat as file
                    try {
                        yield this.sftpSession.unlink(target);
                    }
                    catch (e) {
                        console.error('[SFTP-UI] Remote delete failed', e);
                    }
                    return;
                }
                for (const item of entries) {
                    const full = item.fullPath;
                    if (item.isDirectory) {
                        yield this.deleteRemotePathRecursive(full);
                    }
                    else {
                        try {
                            yield this.sftpSession.unlink(full);
                        }
                        catch (e) {
                            console.error('[SFTP-UI] Remote unlink failed', e);
                        }
                    }
                }
                try {
                    yield this.sftpSession.rmdir(target);
                }
                catch (e) {
                    console.error('[SFTP-UI] Remote rmdir failed', e);
                }
            }
            catch (e) {
                console.error('[SFTP-UI] Remote recursive delete failed', e);
            }
        });
    }
    openRemoteFile(entry) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.sftpSession || !this.connected || entry.isDirectory) {
                return;
            }
            try {
                const tmpRoot = path__WEBPACK_IMPORTED_MODULE_0__.join(os__WEBPACK_IMPORTED_MODULE_1__.tmpdir(), 'tabby-sftp-ui');
                yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.mkdir(tmpRoot, { recursive: true });
                const hash = crypto__WEBPACK_IMPORTED_MODULE_4__.createHash('sha1').update(entry.fullPath).digest('hex').slice(0, 10);
                const safeName = entry.name.replace(/[<>:"/\\|?*\x00-\x1F]/g, '_');
                const localPath = path__WEBPACK_IMPORTED_MODULE_0__.join(tmpRoot, `${hash}-${safeName}`);
                // если уже есть watcher на этот файл – закроем его и перезапишем
                const existing = this.openedRemoteFiles.get(localPath);
                if (existing === null || existing === void 0 ? void 0 : existing.watcher) {
                    try {
                        existing.watcher.close();
                    }
                    catch (_a) {
                        // ignore
                    }
                }
                if ((existing === null || existing === void 0 ? void 0 : existing.debounceTimer) != null) {
                    try {
                        clearTimeout(existing.debounceTimer);
                    }
                    catch (_b) {
                        // ignore
                    }
                }
                const dl = new _local_transfers__WEBPACK_IMPORTED_MODULE_8__.LocalPathFileDownload(localPath, entry.mode, entry.size);
                this.trackTransfer(dl, 'download', entry.fullPath, localPath);
                yield this.sftpSession.download(entry.fullPath, dl);
                // настроим наблюдение за изменениями локального файла
                const schedule = () => this.scheduleSyncBackRemoteFile(localPath);
                const watcher = fs__WEBPACK_IMPORTED_MODULE_3__.watch(localPath, { persistent: false }, (eventType) => {
                    // Many editors save atomically (rename) or emit multiple change events.
                    if (eventType === 'change' || eventType === 'rename') {
                        schedule();
                    }
                });
                this.openedRemoteFiles.set(localPath, {
                    remotePath: entry.fullPath,
                    mode: entry.mode,
                    watcher,
                    debounceTimer: null,
                    syncing: false,
                    pending: false,
                    lastUploadedSignature: null,
                });
                this.platform.openPath(localPath);
            }
            catch (e) {
                console.error('[SFTP-UI] Open remote file failed', e);
            }
        });
    }
    scheduleSyncBackRemoteFile(localPath) {
        const info = this.openedRemoteFiles.get(localPath);
        if (!info) {
            return;
        }
        if (info.debounceTimer != null) {
            clearTimeout(info.debounceTimer);
        }
        // Debounce a burst of editor save events
        info.debounceTimer = window.setTimeout(() => {
            info.debounceTimer = null;
            void this.syncBackRemoteFile(localPath);
        }, 650);
    }
    waitForStableLocalFile(localPath) {
        return __awaiter(this, void 0, void 0, function* () {
            // Wait until the file stops changing (editors often write in multiple passes)
            let last = null;
            for (let i = 0; i < 10; i++) {
                const st = yield fs_promises__WEBPACK_IMPORTED_MODULE_2__.stat(localPath).catch(() => null);
                if (!st || !st.isFile()) {
                    return null;
                }
                const cur = { size: st.size, mtimeMs: st.mtimeMs };
                if (last && cur.size === last.size && cur.mtimeMs === last.mtimeMs) {
                    // stable for one interval
                    return cur;
                }
                last = cur;
                yield new Promise(resolve => setTimeout(resolve, 180));
            }
            return last;
        });
    }
    syncBackRemoteFile(localPath) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.sftpSession || !this.connected) {
                return;
            }
            const info = this.openedRemoteFiles.get(localPath);
            if (!info) {
                return;
            }
            if (info.syncing) {
                info.pending = true;
                return;
            }
            info.syncing = true;
            try {
                const stable = yield this.waitForStableLocalFile(localPath);
                if (!stable) {
                    return;
                }
                const signature = `${stable.size}:${stable.mtimeMs}`;
                if (info.lastUploadedSignature === signature) {
                    return;
                }
                const upload = new _local_transfers__WEBPACK_IMPORTED_MODULE_8__.LocalPathFileUpload(localPath);
                this.trackTransfer(upload, 'upload', info.remotePath, localPath);
                yield this.sftpSession.upload(info.remotePath, upload);
                info.lastUploadedSignature = signature;
                yield this.refreshRemote();
            }
            catch (e) {
                console.error('[SFTP-UI] Sync-back remote file failed', e);
            }
            finally {
                info.syncing = false;
                if (info.pending) {
                    info.pending = false;
                    this.scheduleSyncBackRemoteFile(localPath);
                }
            }
        });
    }
};
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.HostListener)('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], SftpManagerTabComponent.prototype, "onDocumentClickFav", null);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.HostListener)('document:click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SftpManagerTabComponent.prototype, "onDocumentClick", null);
SftpManagerTabComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'tabby-sftp-manager-tab',
        template: `
    <div class="sftp-root" tabindex="0" (keydown)="onKeyDown($event)">
      <div class="top-profiles" *ngIf="profile || recentProfiles.length">
        <div class="current" *ngIf="profile">
          <span class="label">Device:</span>
          <span class="value">{{ getProfileLabel(profile) }}</span>
        </div>
        <div class="recent" *ngIf="recentProfiles.length">
          <span class="label">Recent:</span>
          <button
            class="profile-chip"
            *ngFor="let p of recentProfiles"
            (click)="launchProfileFromSFTP(p)"
          >
            {{ getProfileLabel(p) }}
          </button>
        </div>
      </div>
      <div class="sftp-body">
        <div class="pane">
          <div class="pane-title">
            <div class="pane-label">Local</div>
            <div class="pane-path">
              <input
                [(ngModel)]="localPathInput"
                (keyup.enter)="goToLocalPathInput()"
              />
            </div>
            <div class="pane-actions">
              <button
                class="fav-toggle"
                [class.active]="isCurrentFavorite()"
                (click)="toggleCurrentFavorite()"
                title="Toggle favorite for this path"
              >
                ★
              </button>

              <div class="fav-dropdown" style="position: relative; display: inline-block;">
                <button class="fav-dropdown-btn" (click)="toggleFavDropdown()" style="padding: 2px 20px 2px 10px; font-size: 12px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 3px; color: #ccc; cursor: pointer; min-width: 240px; text-align: left; position: relative;">
                  {{ getSelectedFavLabel() }}
                  <span style="position: absolute; right: 6px; top: 50%; transform: translateY(-50%);">▾</span>
                </button>
                <div class="fav-dropdown-menu" *ngIf="favDropdownOpen" style="position: absolute; top: 100%; left: 0; z-index: 1000; background: #1e1e1e; border: 1px solid #333; border-radius: 3px; min-width: 240px; box-shadow: 0 4px 8px rgba(0,0,0,0.5); max-height: 200px; overflow-y: auto;">
                  <div class="fav-dropdown-item" style="padding: 5px 10px; font-size: 12px; color: #ccc; cursor: pointer; background: #1e1e1e;" (click)="toggleFavDropdown()">
                    <em>====</em>
                  </div>

                  <div class="fav-dropdown-item" *ngFor="let f of localFavorites" 
                       style="padding: 5px 10px; font-size: 12px; color: #ccc; cursor: pointer; display: flex; justify-content: space-between; align-items: center;"
                       (click)="onLocalFavoriteSelect(f.id); toggleFavDropdown()">
                    <span>{{ f.label }}</span>
                    <span style="color: #ffc107; border: 1px solid rgba(255, 193, 7, 0.5); border-radius: 4px; padding: 1px 6px; font-size: 11px; cursor: pointer; transition: all 0.2s;" 
                          (click)="onFavEditNameClick($event, f)"
                          (mouseover)="$event.target.style.borderColor='#ffc107'; $event.target.style.background='rgba(255, 193, 7, 0.15)'"
                          (mouseout)="$event.target.style.borderColor='rgba(255, 193, 7, 0.5)'; $event.target.style.background='transparent'">✎</span>
                  </div>

                </div>
              </div>


              <button (click)="refreshLocal()">Refresh</button>
            </div>

          </div>
          <div class="pane-filters">
            <div class="breadcrumbs">
              <ng-container *ngFor="let part of getLocalBreadcrumbs(); let i = index; let last = last">
                <button
                  class="crumb-button"
                  (click)="navigateLocalBreadcrumb(i)"
                  (contextmenu)="onLocalBreadcrumbContextMenu(i, $event)"
                >
                  {{ part.label }}
                </button>
                <span class="crumb-separator" *ngIf="!last">›</span>
              </ng-container>
            </div>
            <input [(ngModel)]="localFilter" placeholder="Filter files..." />
            <label class="show-hidden-toggle">
              <input type="checkbox" [(ngModel)]="showHiddenLocal" />
              <span>Show hidden</span>
            </label>
          </div>
          <div class="pane-list"
            (dragover)="onDragOver($event)"
            (drop)="onDropOnLocal($event)"
          >
            <div class="entry header">
              <span class="icon"></span>
              <span class="name sortable" (click)="setLocalSort('name')">{{ t('名称', 'Name') }}</span>
              <span class="size sortable" (click)="setLocalSort('size')">{{ t('大小', 'Size') }}</span>
              <span class="date sortable" (click)="setLocalSort('modified')">{{ t('修改时间', 'Modified') }}</span>
            </div>
            <div
              class="entry"
              *ngIf="canLocalUp()"
              (dblclick)="localUp()"
            >
              <span class="icon">⬆</span>
              <span class="name">{{ t('返回上级', 'Go up') }}</span>
              <span class="size"></span>
              <span class="date"></span>
            </div>
            <div
              class="entry"
              *ngFor="let e of getFilteredLocalEntries()"
              (click)="selectLocal(e, $event)"
              (dblclick)="openLocal(e)"
              (mousedown)="onLocalMouseDown(e, $event)"
              (contextmenu)="onLocalContextMenu(e, $event)"
              (dragover)="onLocalEntryDragOver(e, $event)"
              (drop)="onLocalEntryDrop(e, $event)"
              [class.drop-target]="localDropActive"
              [class.selected]="isLocalSelected(e)"
              [draggable]="true"
              (dragstart)="onDragStartLocal($event, e)"
            >
              <span class="icon">{{ e.isDirectory ? '📁' : '📄' }}</span>
              <span class="name">{{ e.name }}</span>
              <span class="size">{{ getLocalSizeDisplay(e) }}</span>
              <span class="date">
                <ng-container *ngIf="getDateColorParts(e.mtimeMs) as parts">
                  <span [style.color]="parts.dateMatch ? '#FBF732' : 'inherit'">{{ parts.date }}</span>
                  <span>_</span>
                  <span [style.color]="parts.hourMatch ? '#FBF732' : 'inherit'">{{ parts.hour }}</span>
                  <span [style.color]="parts.minuteMatch ? '#FBF732' : 'inherit'">:{{ parts.minute }}</span>
                </ng-container>
              </span>
            </div>
          </div>
          <div class="pane-actions-bar">
            <div class="selection" *ngIf="selectedLocal.length">
              Selected: {{ selectedLocal.length === 1 ? selectedLocal[0].name : (selectedLocal.length + ' items') }}
            </div>
            <div class="action-inputs">
              <input [(ngModel)]="localActionName" placeholder="Name / new name" />
              <input [(ngModel)]="localActionPerms" placeholder="Perms (e.g. 755)" />
            </div>
            <div class="action-buttons">
              <button (click)="localRename()" [disabled]="selectedLocal.length !== 1">{{ t('重命名', 'Rename') }}</button>
              <button (click)="refreshLocal()">{{ t('刷新', 'Refresh') }}</button>
              <button (click)="localDelete()" [disabled]="!selectedLocal.length">{{ t('删除', 'Delete') }}</button>
              <button (click)="localNewFolder()">{{ t('新建文件夹', 'New Folder') }}</button>
              <button (click)="localEditPermissions()" [disabled]="selectedLocal.length !== 1">{{ t('修改权限', 'Edit Permissions') }}</button>
              <button (click)="localShowSize()" [disabled]="selectedLocal.length !== 1 || !selectedLocal[0].isDirectory">{{ t('查看大小', 'Show Size') }}</button>
            </div>
          </div>
        </div>

        <div class="pane remote-pane">
          <div class="pane-title">
            <div class="pane-label">
              Remote
              <span *ngIf="connected && profile?.options?.host" class="pane-sub">
                — {{ profile.options.host }}
              </span>
            </div>
            <div class="pane-path">
              <input
                [(ngModel)]="remotePathInput"
                (keyup.enter)="goToRemotePathInput()"
                [disabled]="!connected"
              />
            </div>
            <div class="pane-actions">
              <button
                class="fav-toggle"
                [disabled]="!connected"
                [class.active]="isCurrentRemoteFavorite()"
                (click)="toggleCurrentRemoteFavorite()"
                title="Toggle favorite for this path"
              >
                ★
              </button>

              <div class="fav-dropdown" *ngIf="connected" style="position: relative; display: inline-block;">
                <button class="fav-dropdown-btn" (click)="toggleRemoteFavDropdown()" style="padding: 2px 20px 2px 10px; font-size: 12px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 3px; color: #ccc; cursor: pointer; min-width: 240px; text-align: left; position: relative;">
                  {{ getSelectedRemoteFavLabel() }}
                  <span style="position: absolute; right: 6px; top: 50%; transform: translateY(-50%);">▾</span>
                </button>
                <div class="fav-dropdown-menu" *ngIf="remoteDropdownOpen" style="position: absolute; top: 100%; left: 0; z-index: 1000; background: #1e1e1e; border: 1px solid #333; border-radius: 3px; min-width: 240px; box-shadow: 0 4px 8px rgba(0,0,0,0.5); max-height: 200px; overflow-y: auto;">
                  <div class="fav-dropdown-item" style="padding: 5px 10px; font-size: 12px; color: #ccc; cursor: pointer; background: #1e1e1e;" (click)="toggleRemoteFavDropdown()">
                    <em>====</em>
                  </div>

                  <div class="fav-dropdown-item" *ngFor="let f of remoteFavorites" 
                       style="padding: 5px 10px; font-size: 12px; color: #ccc; cursor: pointer; display: flex; justify-content: space-between; align-items: center;"
                       (click)="onRemoteFavoriteSelect(f.id); toggleRemoteFavDropdown()">
                    <span>{{ f.label }}</span>
                    <span style="color: #ffc107; border: 1px solid rgba(255, 193, 7, 0.5); border-radius: 4px; padding: 1px 6px; font-size: 11px; cursor: pointer; transition: all 0.2s;" 
                          (click)="onRemoteFavEditNameClick($event, f)"
                          (mouseover)="$event.target.style.borderColor='#ffc107'; $event.target.style.background='rgba(255, 193, 7, 0.15)'"
                          (mouseout)="$event.target.style.borderColor='rgba(255, 193, 7, 0.5)'; $event.target.style.background='transparent'">✎</span>
                  </div>

                </div>
              </div>

              <button (click)="refreshRemote()" [disabled]="!connected">Refresh</button>
            </div>

          </div>
          <div class="pane-filters">
            <div class="breadcrumbs" *ngIf="connected">
              <ng-container *ngFor="let part of getRemoteBreadcrumbs(); let i = index; let last = last">
                <button
                  class="crumb-button"
                  (click)="navigateRemoteBreadcrumb(i)"
                >
                  {{ part.label }}
                </button>
                <span class="crumb-separator" *ngIf="!last">›</span>
              </ng-container>
            </div>
            <input [(ngModel)]="remoteFilter" placeholder="Filter files..." />
            <label class="show-hidden-toggle">
              <input type="checkbox" [(ngModel)]="showHiddenRemote" />
              <span>Show hidden</span>
            </label>
          </div>
          <div class="pane-list"
            (dragover)="onDragOver($event)"
            (drop)="onDropOnRemote($event)"
          >
            <div class="entry dim" *ngIf="!connected">
              <span class="name">Not connected</span>
            </div>
            <div class="entry header" *ngIf="connected">
              <span class="icon"></span>
              <span class="name sortable" (click)="setRemoteSort('name')">{{ t('名称', 'Name') }}</span>
              <span class="size sortable" (click)="setRemoteSort('size')">{{ t('大小', 'Size') }}</span>
              <span class="perms">{{ t('权限', 'Perms') }}</span>
              <span class="date sortable" (click)="setRemoteSort('modified')">{{ t('修改时间', 'Modified') }}</span>
            </div>
            <div
              class="entry"
              *ngIf="connected && remotePath !== '/'"
              (dblclick)="remoteUp()"
            >
              <span class="icon">⬆</span>
              <span class="name">{{ t('返回上级', 'Go up') }}</span>
              <span class="size"></span>
              <span class="date"></span>
            </div>
            <div
              class="entry"
              *ngFor="let e of getFilteredRemoteEntries()"
              (click)="selectRemote(e, $event)"
              (dblclick)="openRemote(e)"
              (mousedown)="onRemoteMouseDown(e, $event)"
              (contextmenu)="onRemoteContextMenu(e, $event)"
              (dragover)="onRemoteEntryDragOver(e, $event)"
              (drop)="onRemoteEntryDrop(e, $event)"
              [class.drop-target]="remoteDropActive"
              [class.selected]="isRemoteSelected(e)"
              [draggable]="connected"
              (dragstart)="onDragStartRemote($event, e)"
            >
              <span class="icon">{{ e.isDirectory ? '📁' : '📄' }}</span>
              <span class="name">{{ e.name }}</span>
              <span class="size">{{ getRemoteSizeDisplay(e) }}</span>
              <span class="perms">{{ getOctalPerms(e.mode) }}</span>
              <span class="date">
                <ng-container *ngIf="getDateColorParts(e.modified) as parts">
                  <span [style.color]="parts.dateMatch ? '#FBF732' : 'inherit'">{{ parts.date }}</span>
                  <span>_</span>
                  <span [style.color]="parts.hourMatch ? '#FBF732' : 'inherit'">{{ parts.hour }}</span>
                  <span [style.color]="parts.minuteMatch ? '#FBF732' : 'inherit'">:{{ parts.minute }}</span>
                </ng-container>
              </span>
            </div>
          </div>
          <div class="pane-actions-bar">
            <div class="selection" *ngIf="selectedRemote.length">
              Selected: {{ selectedRemote.length === 1 ? selectedRemote[0].name : (selectedRemote.length + ' items') }}
            </div>
            <div class="action-inputs">
              <input [(ngModel)]="remoteActionName" placeholder="Name / new name" />
              <input [(ngModel)]="remoteActionPerms" placeholder="Perms (e.g. 755)" />
            </div>
            <div class="action-buttons">
              <button (click)="remoteRename()" [disabled]="selectedRemote.length !== 1">{{ t('重命名', 'Rename') }}</button>
              <button (click)="refreshRemote()" [disabled]="!connected">{{ t('刷新', 'Refresh') }}</button>
              <button (click)="remoteDelete()" [disabled]="!selectedRemote.length">{{ t('删除', 'Delete') }}</button>
              <button (click)="remoteNewFolder()" [disabled]="!connected">{{ t('新建文件夹', 'New Folder') }}</button>
              <button (click)="remoteEditPermissions()" [disabled]="selectedRemote.length !== 1">{{ t('修改权限', 'Edit Permissions') }}</button>
              <button (click)="remoteShowSize()" [disabled]="selectedRemote.length !== 1 || !selectedRemote[0].isDirectory">{{ t('查看大小', 'Show Size') }}</button>
              <button (click)="remoteDownload()" [disabled]="!selectedRemote.length">{{ t('下载', 'Download') }}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="sftp-transfers" *ngIf="transfers.length">
        <div class="transfer" *ngFor="let t of transfers">
          <div class="transfer-main">
            <div class="transfer-title">
              <span class="direction">{{ t.direction === 'upload' ? 'Upload' : 'Download' }}</span>
              <span class="name">{{ t.name }}</span>
            </div>
            <div class="transfer-path">
              <span class="label">Remote:</span>
              <span class="value">{{ t.remotePath }}</span>
            </div>
            <div class="transfer-path">
              <span class="label">Local:</span>
              <span class="value">{{ t.localPath }}</span>
            </div>
            <div class="bar">
              <div class="fill" [style.width.%]="getTransferProgress(t.transfer)"></div>
            </div>
          </div>
          <div class="transfer-stats">
            <div class="percent">{{ getTransferProgress(t.transfer) | number:'1.0-0' }}%</div>
            <div class="speed">{{ formatSpeed(t.transfer.getSpeed()) }}</div>
            <button class="btn-cancel" (click)="cancelTransfer(t)" [disabled]="t.transfer.isComplete() || t.transfer.isCancelled()">Cancel</button>
          </div>
        </div>
      </div>

      <div class="delete-overlay" *ngIf="deleteConfirmVisible">
        <div class="delete-dialog">
          <div class="delete-text">{{ deleteConfirmText }}</div>
          <div class="delete-buttons">
            <button class="danger" (click)="confirmDelete()">Delete</button>
            <button (click)="cancelDelete()">Cancel</button>
          </div>
        </div>
      </div>

      <div class="delete-overlay" *ngIf="replaceConfirmVisible">
        <div class="delete-dialog">
          <div class="delete-text">{{ replaceConfirmText }}</div>
          <div class="delete-buttons">
            <button class="danger" (click)="confirmReplace()">Replace</button>
            <button (click)="cancelReplace()">Cancel</button>
          </div>
        </div>
      </div>

      <div class="delete-overlay" *ngIf="inputDialogVisible">
        <div class="delete-dialog" (click)="$event.stopPropagation()">
          <div class="delete-text">{{ inputDialogTitle }}</div>
          <ng-container *ngIf="inputDialogMode === 'local-favorite-rename' || inputDialogMode === 'remote-favorite-rename'">
            <div style="margin-bottom: 4px; font-size: 12px; color: #aaa; text-align: left;">{{ t('名称', 'Name') }}:</div>
            <input
              class="dialog-input"
              style="margin-bottom: 12px; width: 100%;"
              [(ngModel)]="inputDialogValue"
              [placeholder]="t('名称', 'Name')"
            />
            <div style="margin-bottom: 4px; font-size: 12px; color: #aaa; text-align: left;">{{ t('路径', 'Path') }}:</div>
            <input
              class="dialog-input"
              style="width: 100%;"
              [(ngModel)]="inputDialogPathValue"
              [placeholder]="t('路径', 'Path')"
              (keyup.enter)="confirmInputDialog()"
            />
          </ng-container>

          <ng-container *ngIf="inputDialogMode !== 'local-favorite-rename' && inputDialogMode !== 'remote-favorite-rename'">
            <input
              class="dialog-input"
              [(ngModel)]="inputDialogValue"
              [placeholder]="inputDialogPlaceholder"
              (keyup.enter)="confirmInputDialog()"
            />
          </ng-container>

          <div class="delete-buttons">
            <button class="danger" (click)="confirmInputDialog()" [disabled]="!inputDialogValue.trim()">OK</button>
            <button class="danger" *ngIf="inputDialogMode === 'local-favorite-rename' || inputDialogMode === 'remote-favorite-rename'" (click)="deleteFavoriteFromDialog()" style="background-color: #dc3545; border-color: #dc3545; margin-left: 5px; margin-right: 5px;">Delete</button>
            <button (click)="cancelInputDialog()">Cancel</button>
          </div>


        </div>
      </div>

      <div class="delete-overlay" *ngIf="favDeleteConfirmVisible">
        <div class="delete-dialog">
          <div class="delete-text">{{ favDeleteConfirmText }}</div>
          <div class="delete-buttons">
            <button class="danger" (click)="confirmFavDelete()">Delete</button>
            <button (click)="cancelFavDelete()">Cancel</button>
          </div>
        </div>
      </div>

      <div
        class="local-menu"

        *ngIf="localMenuVisible"
        [style.left.px]="localMenuX"
        [style.top.px]="localMenuY"
        (click)="$event.stopPropagation()"
      >
        <div class="local-menu-item" *ngFor="let item of localMenuItems" (click)="onLocalMenuItemClick(item)">
          {{ item.label }}
        </div>
      </div>
    </div>
  `,
        styles: [`
    .sftp-root { display: flex; flex-direction: column; height: 100%; padding: 10px; gap: 10px; position: relative; }
    button { padding: 6px 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.06); color: inherit; cursor: pointer; }
    button:disabled { opacity: 0.5; cursor: default; }
    .top-profiles { display: flex; justify-content: space-between; align-items: center; padding: 4px 8px 8px; gap: 12px; font-size: 11px; opacity: 0.9; }
    .top-profiles .current .label,
    .top-profiles .recent .label { text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7; margin-right: 4px; }
    .top-profiles .value { font-weight: 600; }
    .top-profiles .profile-chip { padding: 2px 8px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.04); color: inherit; cursor: pointer; font-size: 11px; }
    .top-profiles .profile-chip:hover { background: rgba(255,255,255,0.12); }
    .sftp-body { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; flex: 1; min-height: 0; }
    .pane { display: flex; flex-direction: column; border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; overflow: hidden; min-height: 0; }
    .pane-title { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 10px; padding: 8px 10px; background: rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.08); }
    .pane-label { font-weight: 600; display: flex; align-items: baseline; gap: 6px; }
    .pane-sub { font-weight: 400; font-size: 11px; opacity: 0.75; }
    .pane-path { opacity: 0.8; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .pane-path input { width: 100%; padding: 4px 6px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.18); background: rgba(0,0,0,0.3); color: inherit; font-family: inherit; font-size: 12px; }
    .pane-actions { display: flex; gap: 8px; align-items: center; }
    .pane-actions .path-preset,
    .pane-actions .path-favorite { max-width: 150px; padding: 3px 6px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.22); background: rgba(20,20,20,0.95); color: inherit; font-size: 11px; }
    .pane-actions .path-preset option { background: #151515; color: #f5f5f5; }
    .pane-actions .path-favorite option { background: #151515; color: #f5f5f5; }
    .pane-actions .fav-toggle { padding: 3px 8px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.25); background: rgba(255,255,255,0.05); font-size: 12px; line-height: 1; cursor: pointer; }
    .pane-actions .fav-toggle.active { background: rgba(255,215,0,0.2); border-color: rgba(255,215,0,0.6); color: #ffd700; }

    .pane-filters { display: flex; align-items: center; gap: 8px; padding: 4px 8px; border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(0,0,0,0.12); }
    .pane-filters input { flex: 1; padding: 4px 6px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.18); background: rgba(0,0,0,0.3); color: inherit; font-size: 12px; }
    .show-hidden-toggle { display: flex; align-items: center; gap: 4px; font-size: 11px; opacity: 0.8; white-space: nowrap; }
    .show-hidden-toggle input[type="checkbox"] { margin: 0; }
    .breadcrumbs { display: flex; flex-wrap: wrap; gap: 4px; font-size: 11px; opacity: 0.9; align-items: center; }
    .crumb-button { padding: 2px 6px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.04); color: inherit; cursor: pointer; font-size: 11px; }
    .crumb-button:hover { background: rgba(255,255,255,0.10); }
    .crumb-separator { opacity: 0.6; }
    .pane-list { flex: 1; overflow: auto; padding: 4px; }
    .entry { display: grid; grid-template-columns: 24px minmax(0, 1.5fr) 80px 140px; gap: 8px; padding: 6px 8px; border-radius: 8px; user-select: none; align-items: center; }
    .entry:hover { background: rgba(255,255,255,0.06); }
    .entry.drop-target { outline: 1px dashed rgba(255,255,255,0.35); background: rgba(80, 160, 255, 0.10); }
    .entry.dim { opacity: 0.7; }
    .icon { text-align: center; opacity: 0.85; }
    .name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .size { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; text-align: right; opacity: 0.8; }
    .date { font-size: 11px; opacity: 0.75; text-align: right; white-space: nowrap; }
    .entry.header { font-weight: 600; opacity: 0.9; background: rgba(255,255,255,0.02); }
    .sortable { cursor: pointer; }
    .entry.selected { background: rgba(80,160,255,0.18); }
    .pane-actions-bar { display: flex; flex-direction: column; gap: 4px; padding: 6px 8px; border-top: 1px solid rgba(255,255,255,0.06); background: rgba(0,0,0,0.18); }
    .pane-actions-bar .selection { font-size: 11px; opacity: 0.85; }
    .pane-actions-bar .action-inputs { display: flex; gap: 6px; }
    .pane-actions-bar .action-inputs input { flex: 1; padding: 3px 6px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.18); background: rgba(0,0,0,0.3); color: inherit; font-size: 11px; }
    .pane-actions-bar .action-buttons { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }
    .sftp-transfers { margin-top: 8px; display: flex; flex-direction: column; gap: 6px; max-height: 120px; overflow-y: auto; }
    .transfer { display: grid; grid-template-columns: 1fr auto; gap: 8px; padding: 6px 8px; border-radius: 8px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); font-size: 11px; }
    .transfer-title { display: flex; gap: 6px; align-items: baseline; margin-bottom: 2px; }
    .transfer-title .direction { text-transform: uppercase; letter-spacing: 0.04em; opacity: 0.7; font-weight: 600; font-size: 10px; }
    .transfer-title .name { font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .transfer-path { display: flex; gap: 4px; opacity: 0.75; }
    .transfer-path .label { min-width: 48px; }
    .transfer-path .value { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
    .bar { position: relative; height: 4px; border-radius: 999px; background: rgba(255,255,255,0.07); margin-top: 4px; overflow: hidden; }
    .bar .fill { position: absolute; left: 0; top: 0; bottom: 0; border-radius: inherit; background: linear-gradient(90deg, #4dabff, #78ffce); transition: width 0.15s linear; }
    .transfer-stats { display: flex; flex-direction: column; justify-content: center; align-items: flex-end; gap: 4px; opacity: 0.8; }
    .transfer-stats .percent { font-weight: 600; }
    .transfer-stats .speed { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
    .btn-cancel { padding: 2px 6px; font-size: 10px; border-radius: 999px; }
    .delete-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.55); display: flex; align-items: center; justify-content: center; z-index: 20; }
    .delete-dialog { min-width: 260px; max-width: 360px; padding: 14px 16px; border-radius: 10px; background: rgba(20,20,20,0.96); border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 18px 45px rgba(0,0,0,0.75); display: flex; flex-direction: column; gap: 10px; }
    .delete-text { font-size: 13px; }
    .dialog-input { width: 100%; padding: 8px 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.18); background: rgba(0,0,0,0.3); color: inherit; font-size: 13px; }
    .delete-buttons { display: flex; justify-content: flex-end; gap: 8px; }
    .delete-buttons .danger { background: rgba(255,80,80,0.85); border-color: rgba(255,120,120,0.85); }
    .local-menu { position: absolute; min-width: 180px; max-width: 260px; max-height: 260px; overflow-y: auto; padding: 4px 0; border-radius: 10px; background: rgba(18,18,22,0.98); border: 1px solid rgba(255,255,255,0.16); box-shadow: 0 18px 45px rgba(0,0,0,0.8); z-index: 30; backdrop-filter: blur(12px); }
    .local-menu-item { padding: 6px 12px; font-size: 12px; cursor: pointer; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
    .local-menu-item:hover { background: linear-gradient(90deg, rgba(120,200,255,0.24), rgba(120,255,206,0.15)); }
    .remote-pane .entry { grid-template-columns: 24px minmax(0, 1.5fr) 80px 60px 140px; }
    .remote-pane .perms { font-size: 11px; opacity: 0.75; text-align: right; white-space: nowrap; }
  `],
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector,
        _sftp_service__WEBPACK_IMPORTED_MODULE_9__.SftpConnectionService,
        tabby_core__WEBPACK_IMPORTED_MODULE_6__.ProfilesService,
        tabby_core__WEBPACK_IMPORTED_MODULE_6__.AppService])
], SftpManagerTabComponent);



/***/ },

/***/ "./src/sftp/sftp-ui.service.ts"
/*!*************************************!*\
  !*** ./src/sftp/sftp-ui.service.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SftpUiService: () => (/* binding */ SftpUiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sftp_manager_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sftp-manager-tab.component */ "./src/sftp/sftp-manager-tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SftpUiService = class SftpUiService {
    constructor(app, hotkeys, log, zone, notifications) {
        this.app = app;
        this.hotkeys = hotkeys;
        this.log = log;
        this.zone = zone;
        this.notifications = notifications;
        this.logger = this.log.create('sftp-ui');
        this.hotkeys.hotkey$.subscribe(h => {
            if (h === 'open-sftp-ui') {
                this.open();
            }
        });
        this.logger.info('loaded');
    }
    open() {
        var _a, _b;
        const active = this.app.activeTab;
        const focused = active instanceof tabby_core__WEBPACK_IMPORTED_MODULE_1__.SplitTabComponent ? ((_b = (_a = active.getFocusedTab) === null || _a === void 0 ? void 0 : _a.call(active)) !== null && _b !== void 0 ? _b : null) : active;
        this.openForSourceTab(focused);
    }
    openForSourceTab(sourceTab, explicitRemotePath) {
        var _a, _b, _c, _d;
        const sshSession = (_a = sourceTab === null || sourceTab === void 0 ? void 0 : sourceTab.sshSession) !== null && _a !== void 0 ? _a : null;
        const profile = (_b = sourceTab === null || sourceTab === void 0 ? void 0 : sourceTab.profile) !== null && _b !== void 0 ? _b : null;
        let remoteCwd = explicitRemotePath || '/';
        if (!explicitRemotePath && sourceTab) {
            remoteCwd = sourceTab.cwd
                || ((_c = sourceTab.session) === null || _c === void 0 ? void 0 : _c.cwd)
                || sourceTab.path
                || ((_d = sourceTab.session) === null || _d === void 0 ? void 0 : _d.path)
                || '/';
        }
        this.zone.run(() => {
            var _a;
            try {
                if (!sshSession) {
                    this.notifications.error('SFTP-UI', 'No SSH session on current tab');
                    return;
                }
                const baseTitle = (sourceTab === null || sourceTab === void 0 ? void 0 : sourceTab.customTitle) ||
                    (sourceTab === null || sourceTab === void 0 ? void 0 : sourceTab.title) ||
                    (profile === null || profile === void 0 ? void 0 : profile.name) ||
                    ((_a = profile === null || profile === void 0 ? void 0 : profile.options) === null || _a === void 0 ? void 0 : _a.host) ||
                    'SFTP';
                const tab = this.app.openNewTab({
                    type: _sftp_manager_tab_component__WEBPACK_IMPORTED_MODULE_2__.SftpManagerTabComponent,
                    inputs: {
                        sshSession,
                        profile,
                        remotePath: remoteCwd,
                    },
                });
                tab.setTitle(`${baseTitle} + SFTP`);
                this.notifications.notice('SFTP-UI opened');
            }
            catch (e) {
                this.notifications.error('SFTP-UI failed to open', String(e));
                this.logger.error('openForSourceTab failed', e);
            }
        });
    }
};
SftpUiService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)(),
    __metadata("design:paramtypes", [tabby_core__WEBPACK_IMPORTED_MODULE_1__.AppService,
        tabby_core__WEBPACK_IMPORTED_MODULE_1__.HotkeysService,
        tabby_core__WEBPACK_IMPORTED_MODULE_1__.LogService,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone,
        tabby_core__WEBPACK_IMPORTED_MODULE_1__.NotificationsService])
], SftpUiService);



/***/ },

/***/ "./src/sftp/sftp.service.ts"
/*!**********************************!*\
  !*** ./src/sftp/sftp.service.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SftpConnectionService: () => (/* binding */ SftpConnectionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let SftpConnectionService = class SftpConnectionService {
    openFromSSHSession(sshSession) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sshSession.openSFTP();
        });
    }
};
SftpConnectionService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({ providedIn: 'root' })
], SftpConnectionService);



/***/ },

/***/ "./src/terminalDecorator.ts"
/*!**********************************!*\
  !*** ./src/terminalDecorator.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickScriptsDecorator: () => (/* binding */ QuickScriptsDecorator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n */ "./src/i18n.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "@ng-bootstrap/ng-bootstrap");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tabby_terminal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tabby-terminal */ "tabby-terminal");
/* harmony import */ var tabby_terminal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tabby_terminal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scriptEditModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scriptEditModal */ "./src/scriptEditModal.ts");
/* harmony import */ var _sftp_sftp_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sftp/sftp-ui.service */ "./src/sftp/sftp-ui.service.ts");
/* harmony import */ var _quickScriptsBar_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quickScriptsBar.scss */ "./src/quickScriptsBar.scss");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








let QuickScriptsDecorator = class QuickScriptsDecorator extends tabby_terminal__WEBPACK_IMPORTED_MODULE_4__.TerminalDecorator {
    constructor(config, injector, sftpUi) {
        super();
        this.config = config;
        this.injector = injector;
        this.sftpUi = sftpUi;
    }
    attach(tab) {
        // 等待 tab 的 DOM 元素就绪后再注入按钮栏
        setTimeout(() => this.injectBar(tab), 200);
    }
    detach(_tab) {
        // 清理工作由 DOM 移除时自动完成
    }
    /**
     * 在终端 tab 的 DOM 中注入脚本按钮栏
     */
    injectBar(tab) {
        var _a, _b;
        const tabElement = ((_a = tab.element) === null || _a === void 0 ? void 0 : _a.nativeElement)
            || ((_b = tab.content) === null || _b === void 0 ? void 0 : _b.nativeElement)
            || document.querySelector('.tab-content .active');
        if (!tabElement) {
            return;
        }
        // 查找终端内容容器（尝试多种可能的 DOM 结构）
        const terminalContainer = tabElement.querySelector('.content')
            || tabElement.querySelector('.terminal-container')
            || tabElement.querySelector('.xterm')
            || tabElement.firstElementChild;
        if (!terminalContainer) {
            return;
        }
        // 创建按钮栏容器
        const bar = document.createElement('div');
        bar.className = 'quick-scripts-bar';
        // 在终端内容前插入按钮栏
        terminalContainer.parentElement.insertBefore(bar, terminalContainer);
        // 渲染按钮
        this.renderButtons(bar, tab);
        // 监听配置变化，刷新按钮
        const sub = this.config.changed$.subscribe(() => {
            this.renderButtons(bar, tab);
        });
        // tab 销毁时清理
        tab.destroyed$.subscribe(() => {
            sub.unsubscribe();
            bar.remove();
        });
    }
    /**
     * 获取当前终端标签页的站点 Profile ID
     */
    getProfileId(tab) {
        var _a, _b;
        return ((_a = tab.profile) === null || _a === void 0 ? void 0 : _a.id)
            || ((_b = tab.profile) === null || _b === void 0 ? void 0 : _b.name)
            || tab.customTitle
            || tab.title
            || 'global';
    }
    /**
     * 获取当前站点的专属脚本列表（带旧数据向前兼容）
     */
    getScriptsForProfile(tab) {
        var _a, _b;
        const profileId = this.getProfileId(tab);
        const profileScripts = ((_a = this.config.store.quickScriptsPlugin) === null || _a === void 0 ? void 0 : _a.profileScripts) || {};
        if (profileScripts[profileId]) {
            return profileScripts[profileId];
        }
        // 兼容：若 profile 没有配置过，但老全局 scripts 有配置，则继承老数据
        const legacy = ((_b = this.config.store.quickScriptsPlugin) === null || _b === void 0 ? void 0 : _b.scripts) || [];
        if (legacy.length > 0) {
            return legacy;
        }
        return [];
    }
    /**
     * 渲染按钮栏内容
     */
    renderButtons(bar, tab) {
        bar.innerHTML = '';
        const scripts = this.getScriptsForProfile(tab);
        // 渲染每个脚本按钮
        for (const script of scripts) {
            const btn = document.createElement('button');
            btn.className = 'script-btn';
            btn.textContent = script.name;
            btn.title = (0,_i18n__WEBPACK_IMPORTED_MODULE_1__.t)('点击执行', 'Click to run') + `: ${script.commands.join(' → ')}`;
            if (script.color) {
                btn.style.backgroundColor = script.color;
                btn.style.color = '#fff';
                btn.style.borderColor = 'rgba(0, 0, 0, 0.2)';
            }
            // 左键点击 → 执行脚本
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.executeScript(tab, script, btn);
            });
            // 右键点击 → 编辑脚本
            btn.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.editScript(tab, script);
            });
            bar.appendChild(btn);
        }
        // 新建按钮 (+)
        const addBtn = document.createElement('button');
        addBtn.className = 'script-btn-add';
        addBtn.textContent = '+';
        addBtn.title = (0,_i18n__WEBPACK_IMPORTED_MODULE_1__.t)('新建脚本', 'New Script');
        addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.addScript(tab);
        });
        bar.appendChild(addBtn);
        // SFTP 按钮
        const sftpBtn = document.createElement('button');
        sftpBtn.className = 'script-btn sftp-btn';
        sftpBtn.style.backgroundColor = '#f1c40f'; // 黄色背景
        sftpBtn.style.color = '#000'; // 黑色文字，保证可读性
        sftpBtn.style.marginLeft = 'auto'; // 推到最右侧
        sftpBtn.style.display = 'inline-flex';
        sftpBtn.style.alignItems = 'center';
        sftpBtn.style.fontWeight = 'bold';
        sftpBtn.style.borderColor = 'rgba(0, 0, 0, 0.2)';
        sftpBtn.title = (0,_i18n__WEBPACK_IMPORTED_MODULE_1__.t)('打开 SFTP 文件传输', 'Open SFTP File Transfer');
        // 文件夹图标
        const icon = document.createElement('i');
        icon.className = 'fas fa-folder me-1';
        sftpBtn.appendChild(icon);
        // 文字
        const text = document.createTextNode(' sftp');
        sftpBtn.appendChild(text);
        sftpBtn.addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g;
            e.preventDefault();
            e.stopPropagation();
            const session = tab.session
                || ((_b = (_a = tab).getActiveSession) === null || _b === void 0 ? void 0 : _b.call(_a))
                || ((_e = (_d = (_c = tab).getActivePane) === null || _d === void 0 ? void 0 : _d.call(_c)) === null || _e === void 0 ? void 0 : _e.session)
                || ((_f = tab.activePane) === null || _f === void 0 ? void 0 : _f.session);
            if (!session || typeof ((_g = session.output$) === null || _g === void 0 ? void 0 : _g.subscribe) !== 'function') {
                this.sftpUi.openForSourceTab(tab);
                return;
            }
            let capturedPath = '';
            let outputBuffer = '';
            const sub = session.output$.subscribe((data) => {
                outputBuffer += data;
            });
            if (typeof tab.sendInput === 'function') {
                tab.sendInput('pwd\n');
            }
            else {
                session.write('pwd\r');
            }
            yield new Promise(resolve => setTimeout(resolve, 400));
            sub.unsubscribe();
            const lines = outputBuffer.split(/[\r\n]+/);
            for (let i = lines.length - 1; i >= 0; i--) {
                const line = lines[i].trim();
                if (line.startsWith('/') && !line.includes(' ') && line.length > 1) {
                    if (line === 'pwd') {
                        continue;
                    }
                    capturedPath = line;
                    break;
                }
            }
            this.sftpUi.openForSourceTab(tab, capturedPath);
        }));
        bar.appendChild(sftpBtn);
    }
    /**
     * 执行脚本：按顺序逐条发送命令
     * 策略：发送命令后监听 output$，检测到提示符再发下一条，超时兜底
     */
    executeScript(tab, script, btn) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __awaiter(this, void 0, void 0, function* () {
            if (btn.classList.contains('running')) {
                return; // 防止重复点击
            }
            // 尝试多渠道捕获当前活跃的会话
            const session = tab.session
                || ((_b = (_a = tab).getActiveSession) === null || _b === void 0 ? void 0 : _b.call(_a))
                || ((_e = (_d = (_c = tab).getActivePane) === null || _d === void 0 ? void 0 : _d.call(_c)) === null || _e === void 0 ? void 0 : _e.session)
                || ((_f = tab.activePane) === null || _f === void 0 ? void 0 : _f.session);
            const hasSendInput = typeof tab.sendInput === 'function';
            // 既无有效 session 也无法广播输入，则静默退出
            if (!session && !hasSendInput) {
                return;
            }
            btn.classList.add('running');
            const promptPattern = new RegExp(((_g = this.config.store.quickScriptsPlugin) === null || _g === void 0 ? void 0 : _g.promptPattern) || '(\\$|#|>|%)\\s*$');
            const timeout = ((_h = this.config.store.quickScriptsPlugin) === null || _h === void 0 ? void 0 : _h.commandTimeout) || 30000;
            const minDelay = ((_j = this.config.store.quickScriptsPlugin) === null || _j === void 0 ? void 0 : _j.minDelay) || 500;
            try {
                for (const command of script.commands) {
                    yield this.sendAndWait(tab, session, command, promptPattern, timeout, minDelay);
                }
            }
            finally {
                btn.classList.remove('running');
            }
        });
    }
    /**
     * 发送一条命令并等待执行完毕
     * @param tab 终端标签页
     * @param session 终端会话
     * @param command 要执行的命令
     * @param promptPattern 命令提示符正则
     * @param timeout 超时时间（毫秒）
     * @param minDelay 最小延时（毫秒）
     */
    sendAndWait(tab, session, command, promptPattern, timeout, minDelay) {
        return new Promise((resolve) => {
            let outputBuffer = '';
            let sub = null;
            let timer = null;
            let resolved = false;
            const cleanup = () => {
                if (resolved) {
                    return;
                }
                resolved = true;
                if (sub) {
                    sub.unsubscribe();
                }
                if (timer) {
                    clearTimeout(timer);
                }
                resolve();
            };
            // 监听终端输出，检测指令提示符
            if (session) {
                sub = session.output$.subscribe((data) => {
                    outputBuffer += data;
                    if (promptPattern.test(outputBuffer)) {
                        setTimeout(cleanup, minDelay);
                    }
                });
            }
            else {
                // 没有捕获到 session 走超时盲发
                setTimeout(cleanup, minDelay + 1000);
            }
            // 超时兜底
            timer = setTimeout(cleanup, timeout);
            // 优先使用 Tabby 广播输入，避免回车符号不适配的问题
            if (typeof tab.sendInput === 'function') {
                tab.sendInput(command + '\n');
            }
            else if (session) {
                session.write(command + '\r');
            }
        });
    }
    /**
     * 新建脚本
     */
    addScript(tab) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const ngbModal = this.injector.get(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal);
            const modal = ngbModal.open(_scriptEditModal__WEBPACK_IMPORTED_MODULE_5__.ScriptEditModalComponent);
            modal.componentInstance.isNew = true;
            modal.componentInstance.scriptName = '';
            modal.componentInstance.commandsText = '';
            // 默认生成随机颜色
            modal.componentInstance.scriptColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            try {
                const result = yield modal.result;
                if ((result === null || result === void 0 ? void 0 : result.action) === 'save' && result.name) {
                    const profileId = this.getProfileId(tab);
                    const profileScripts = Object.assign({}, (((_a = this.config.store.quickScriptsPlugin) === null || _a === void 0 ? void 0 : _a.profileScripts) || {}));
                    const scripts = [...(profileScripts[profileId] || this.getScriptsForProfile(tab))];
                    scripts.push({
                        name: result.name,
                        commands: result.commands,
                        color: result.color,
                    });
                    profileScripts[profileId] = scripts;
                    this.config.store.quickScriptsPlugin.profileScripts = profileScripts;
                    this.config.save();
                }
            }
            catch (_b) {
                // 用户取消，忽略
            }
        });
    }
    /**
     * 编辑已有脚本
     */
    editScript(tab, script) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const ngbModal = this.injector.get(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal);
            const modal = ngbModal.open(_scriptEditModal__WEBPACK_IMPORTED_MODULE_5__.ScriptEditModalComponent);
            modal.componentInstance.isNew = false;
            modal.componentInstance.scriptName = script.name;
            modal.componentInstance.commandsText = script.commands.join('\n');
            modal.componentInstance.scriptColor = script.color || ('#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
            try {
                const result = yield modal.result;
                const profileId = this.getProfileId(tab);
                const profileScripts = Object.assign({}, (((_a = this.config.store.quickScriptsPlugin) === null || _a === void 0 ? void 0 : _a.profileScripts) || {}));
                const scripts = [...(profileScripts[profileId] || this.getScriptsForProfile(tab))];
                const idx = scripts.findIndex(s => s.name === script.name);
                if ((result === null || result === void 0 ? void 0 : result.action) === 'save' && result.name) {
                    // 更新脚本
                    if (idx >= 0) {
                        scripts[idx] = {
                            name: result.name,
                            commands: result.commands,
                            color: result.color,
                        };
                    }
                    profileScripts[profileId] = scripts;
                    this.config.store.quickScriptsPlugin.profileScripts = profileScripts;
                    this.config.save();
                }
                else if ((result === null || result === void 0 ? void 0 : result.action) === 'delete') {
                    // 删除脚本
                    if (idx >= 0) {
                        scripts.splice(idx, 1);
                    }
                    profileScripts[profileId] = scripts;
                    this.config.store.quickScriptsPlugin.profileScripts = profileScripts;
                    this.config.save();
                }
            }
            catch (_b) {
                // 用户取消，忽略
            }
        });
    }
};
QuickScriptsDecorator = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)(),
    __metadata("design:paramtypes", [tabby_core__WEBPACK_IMPORTED_MODULE_3__.ConfigService,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector,
        _sftp_sftp_ui_service__WEBPACK_IMPORTED_MODULE_6__.SftpUiService])
], QuickScriptsDecorator);



/***/ },

/***/ "crypto"
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
(module) {

module.exports = require("crypto");

/***/ },

/***/ "fs/promises"
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
(module) {

module.exports = require("fs/promises");

/***/ },

/***/ "os"
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
(module) {

module.exports = require("os");

/***/ },

/***/ "path"
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
(module) {

module.exports = require("path");

/***/ },

/***/ "@angular/common"
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common__;

/***/ },

/***/ "@angular/core"
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ },

/***/ "@angular/forms"
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_forms__;

/***/ },

/***/ "@ng-bootstrap/ng-bootstrap"
/*!*********************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap" ***!
  \*********************************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__ng_bootstrap_ng_bootstrap__;

/***/ },

/***/ "fs"
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ },

/***/ "tabby-core"
/*!*****************************!*\
  !*** external "tabby-core" ***!
  \*****************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_tabby_core__;

/***/ },

/***/ "tabby-terminal"
/*!*********************************!*\
  !*** external "tabby-terminal" ***!
  \*********************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_tabby_terminal__;

/***/ }

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tabby_terminal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tabby-terminal */ "tabby-terminal");
/* harmony import */ var tabby_terminal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tabby_terminal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _configProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configProvider */ "./src/configProvider.ts");
/* harmony import */ var _terminalDecorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terminalDecorator */ "./src/terminalDecorator.ts");
/* harmony import */ var _scriptEditModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scriptEditModal */ "./src/scriptEditModal.ts");
/* harmony import */ var _sftp_sftp_manager_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sftp/sftp-manager-tab.component */ "./src/sftp/sftp-manager-tab.component.ts");
/* harmony import */ var _sftp_sftp_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sftp/sftp-ui.service */ "./src/sftp/sftp-ui.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let QuickScriptsModule = class QuickScriptsModule {
};
QuickScriptsModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
            (tabby_core__WEBPACK_IMPORTED_MODULE_3___default()),
        ],
        providers: [
            { provide: tabby_core__WEBPACK_IMPORTED_MODULE_3__.ConfigProvider, useClass: _configProvider__WEBPACK_IMPORTED_MODULE_5__.QuickScriptsConfigProvider, multi: true },
            { provide: tabby_terminal__WEBPACK_IMPORTED_MODULE_4__.TerminalDecorator, useClass: _terminalDecorator__WEBPACK_IMPORTED_MODULE_6__.QuickScriptsDecorator, multi: true },
            _sftp_sftp_ui_service__WEBPACK_IMPORTED_MODULE_9__.SftpUiService,
        ],
        entryComponents: [
            _scriptEditModal__WEBPACK_IMPORTED_MODULE_7__.ScriptEditModalComponent,
            _sftp_sftp_manager_tab_component__WEBPACK_IMPORTED_MODULE_8__.SftpManagerTabComponent,
        ],
        declarations: [
            _scriptEditModal__WEBPACK_IMPORTED_MODULE_7__.ScriptEditModalComponent,
            _sftp_sftp_manager_tab_component__WEBPACK_IMPORTED_MODULE_8__.SftpManagerTabComponent,
        ],
    })
], QuickScriptsModule);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickScriptsModule);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map