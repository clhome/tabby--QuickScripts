(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("tabby-core"), require("tabby-terminal"), require("@ng-bootstrap/ng-bootstrap"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/forms", "tabby-core", "tabby-terminal", "@ng-bootstrap/ng-bootstrap"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("tabby-core"), require("tabby-terminal"), require("@ng-bootstrap/ng-bootstrap")) : factory(root["@angular/core"], root["@angular/common"], root["@angular/forms"], root["tabby-core"], root["tabby-terminal"], root["@ng-bootstrap/ng-bootstrap"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, (__WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_common__, __WEBPACK_EXTERNAL_MODULE__angular_forms__, __WEBPACK_EXTERNAL_MODULE_tabby_core__, __WEBPACK_EXTERNAL_MODULE_tabby_terminal__, __WEBPACK_EXTERNAL_MODULE__ng_bootstrap_ng_bootstrap__) => {
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* 快捷脚本按钮栏样式 */\n.quick-scripts-bar {\n  display: flex;\n  align-items: center;\n  padding: 2px 8px;\n  background: rgba(0, 0, 0, 0.15);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  gap: 4px;\n  flex-shrink: 0;\n  overflow-x: auto;\n  min-height: 30px;\n  /* 脚本按钮通用样式 */\n}\n.quick-scripts-bar .script-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 10px;\n  font-size: 12px;\n  line-height: 1.4;\n  color: #ccc;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 3px;\n  cursor: pointer;\n  white-space: nowrap;\n  user-select: none;\n  transition: all 0.15s ease;\n}\n.quick-scripts-bar .script-btn:hover {\n  color: #fff;\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.25);\n}\n.quick-scripts-bar .script-btn:active {\n  background: rgba(255, 255, 255, 0.2);\n}\n.quick-scripts-bar .script-btn {\n  /* 正在执行中的按钮状态 */\n}\n.quick-scripts-bar .script-btn.running {\n  color: #4fc3f7;\n  border-color: #4fc3f7;\n  background: rgba(79, 195, 247, 0.12);\n  cursor: not-allowed;\n  animation: pulse 1.5s infinite;\n}\n.quick-scripts-bar {\n  /* 新建按钮 - 固定为红色 */\n}\n.quick-scripts-bar .script-btn-add {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 22px;\n  padding: 0;\n  font-size: 16px;\n  font-weight: bold;\n  color: #fff;\n  background: #e74c3c;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  flex-shrink: 0;\n}\n.quick-scripts-bar .script-btn-add:hover {\n  background: #c0392b;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n\n/* 执行中的脉冲动画 */\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}", "",{"version":3,"sources":["webpack://./src/quickScriptsBar.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB,cAAA;AACA;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,+BAAA;EACA,kDAAA;EACA,QAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EAEA,aAAA;AACJ;AAAI;EACI,oBAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,qCAAA;EACA,2CAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,iBAAA;EACA,0BAAA;AAER;AAAQ;EACI,WAAA;EACA,qCAAA;EACA,uCAAA;AAEZ;AACQ;EACI,oCAAA;AACZ;AAvBI;EAyBI,eAAA;AACR;AAAQ;EACI,cAAA;EACA,qBAAA;EACA,oCAAA;EACA,mBAAA;EACA,8BAAA;AAEZ;AA7CA;EA+CI,iBAAA;AACJ;AAAI;EACI,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,eAAA;EACA,iBAAA;EACA,WAAA;EACA,mBAAA;EACA,oCAAA;EACA,kBAAA;EACA,eAAA;EACA,0BAAA;EACA,cAAA;AAER;AAAQ;EACI,mBAAA;EACA,gCAAA;AAEZ;;AAGA,aAAA;AACA;EACI;IAAW,UAAA;EACb;EAAE;IAAM,YAAA;EAGR;AACF","sourcesContent":["/* 快捷脚本按钮栏样式 */\n.quick-scripts-bar {\n    display: flex;\n    align-items: center;\n    padding: 2px 8px;\n    background: rgba(0, 0, 0, 0.15);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n    gap: 4px;\n    flex-shrink: 0;\n    overflow-x: auto;\n    min-height: 30px;\n\n    /* 脚本按钮通用样式 */\n    .script-btn {\n        display: inline-flex;\n        align-items: center;\n        padding: 2px 10px;\n        font-size: 12px;\n        line-height: 1.4;\n        color: #ccc;\n        background: rgba(255, 255, 255, 0.08);\n        border: 1px solid rgba(255, 255, 255, 0.12);\n        border-radius: 3px;\n        cursor: pointer;\n        white-space: nowrap;\n        user-select: none;\n        transition: all 0.15s ease;\n\n        &:hover {\n            color: #fff;\n            background: rgba(255, 255, 255, 0.15);\n            border-color: rgba(255, 255, 255, 0.25);\n        }\n\n        &:active {\n            background: rgba(255, 255, 255, 0.2);\n        }\n\n        /* 正在执行中的按钮状态 */\n        &.running {\n            color: #4fc3f7;\n            border-color: #4fc3f7;\n            background: rgba(79, 195, 247, 0.12);\n            cursor: not-allowed;\n            animation: pulse 1.5s infinite;\n        }\n    }\n\n    /* 新建按钮 - 固定为红色 */\n    .script-btn-add {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 24px;\n        height: 22px;\n        padding: 0;\n        font-size: 16px;\n        font-weight: bold;\n        color: #fff;\n        background: #e74c3c;\n        border: 1px solid rgba(0, 0, 0, 0.1);\n        border-radius: 3px;\n        cursor: pointer;\n        transition: all 0.15s ease;\n        flex-shrink: 0;\n\n        &:hover {\n            background: #c0392b;\n            border-color: rgba(0, 0, 0, 0.2);\n        }\n    }\n}\n\n/* 执行中的脉冲动画 */\n@keyframes pulse {\n    0%, 100% { opacity: 1; }\n    50% { opacity: 0.6; }\n}\n"],"sourceRoot":""}]);
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
                /** 脚本列表 */
                scripts: [],
                /** 命令提示符正则（用于判断上一条命令执行完毕） */
                promptPattern: '(\\$|#|>|%)\\s*$',
                /** 超时时间（毫秒），超过此时间强制执行下一条命令 */
                commandTimeout: 30000,
                /** 发送命令前的最小延时（毫秒） */
                minDelay: 500,
            },
        };
    }
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "@ng-bootstrap/ng-bootstrap");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tabby-core */ "tabby-core");
/* harmony import */ var tabby_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tabby_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tabby_terminal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tabby-terminal */ "tabby-terminal");
/* harmony import */ var tabby_terminal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tabby_terminal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scriptEditModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scriptEditModal */ "./src/scriptEditModal.ts");
/* harmony import */ var _quickScriptsBar_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quickScriptsBar.scss */ "./src/quickScriptsBar.scss");
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






let QuickScriptsDecorator = class QuickScriptsDecorator extends tabby_terminal__WEBPACK_IMPORTED_MODULE_3__.TerminalDecorator {
    constructor(config, injector) {
        super();
        this.config = config;
        this.injector = injector;
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
     * 渲染按钮栏内容
     */
    renderButtons(bar, tab) {
        var _a;
        bar.innerHTML = '';
        const scripts = ((_a = this.config.store.quickScriptsPlugin) === null || _a === void 0 ? void 0 : _a.scripts) || [];
        // 渲染每个脚本按钮
        for (const script of scripts) {
            const btn = document.createElement('button');
            btn.className = 'script-btn';
            btn.textContent = script.name;
            btn.title = `点击执行: ${script.commands.join(' → ')}`;
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
                this.editScript(script);
            });
            bar.appendChild(btn);
        }
        // 新建按钮 (+)
        const addBtn = document.createElement('button');
        addBtn.className = 'script-btn-add';
        addBtn.textContent = '+';
        addBtn.title = '新建脚本';
        addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.addScript();
        });
        bar.appendChild(addBtn);
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
    addScript() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const ngbModal = this.injector.get(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal);
            const modal = ngbModal.open(_scriptEditModal__WEBPACK_IMPORTED_MODULE_4__.ScriptEditModalComponent);
            modal.componentInstance.isNew = true;
            modal.componentInstance.scriptName = '';
            modal.componentInstance.commandsText = '';
            // 默认生成随机颜色
            modal.componentInstance.scriptColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            try {
                const result = yield modal.result;
                if ((result === null || result === void 0 ? void 0 : result.action) === 'save' && result.name) {
                    const scripts = [
                        ...(((_a = this.config.store.quickScriptsPlugin) === null || _a === void 0 ? void 0 : _a.scripts) || []),
                    ];
                    scripts.push({
                        name: result.name,
                        commands: result.commands,
                        color: result.color,
                    });
                    this.config.store.quickScriptsPlugin.scripts = scripts;
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
    editScript(script) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const ngbModal = this.injector.get(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal);
            const modal = ngbModal.open(_scriptEditModal__WEBPACK_IMPORTED_MODULE_4__.ScriptEditModalComponent);
            modal.componentInstance.isNew = false;
            modal.componentInstance.scriptName = script.name;
            modal.componentInstance.commandsText = script.commands.join('\n');
            modal.componentInstance.scriptColor = script.color || ('#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
            try {
                const result = yield modal.result;
                const scripts = [
                    ...(((_a = this.config.store.quickScriptsPlugin) === null || _a === void 0 ? void 0 : _a.scripts) || []),
                ];
                const idx = scripts.indexOf(script);
                if ((result === null || result === void 0 ? void 0 : result.action) === 'save' && result.name) {
                    // 更新脚本
                    if (idx >= 0) {
                        scripts[idx] = {
                            name: result.name,
                            commands: result.commands,
                            color: result.color,
                        };
                    }
                    this.config.store.quickScriptsPlugin.scripts = scripts;
                    this.config.save();
                }
                else if ((result === null || result === void 0 ? void 0 : result.action) === 'delete') {
                    // 删除脚本
                    if (idx >= 0) {
                        scripts.splice(idx, 1);
                    }
                    this.config.store.quickScriptsPlugin.scripts = scripts;
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
    __metadata("design:paramtypes", [tabby_core__WEBPACK_IMPORTED_MODULE_2__.ConfigService,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector])
], QuickScriptsDecorator);



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
        ],
        entryComponents: [
            _scriptEditModal__WEBPACK_IMPORTED_MODULE_7__.ScriptEditModalComponent,
        ],
        declarations: [
            _scriptEditModal__WEBPACK_IMPORTED_MODULE_7__.ScriptEditModalComponent,
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