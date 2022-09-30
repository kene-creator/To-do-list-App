/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/add.js":
/*!***********************!*\
  !*** ./src/js/add.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToLocale": () => (/* binding */ addToLocale)
/* harmony export */ });
var addToLocale = function addToLocale(item) {
  localStorage.setItem('List', JSON.stringify(item));
};

/***/ }),

/***/ "./src/js/store.js":
/*!*************************!*\
  !*** ./src/js/store.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getList": () => (/* binding */ getList)
/* harmony export */ });
var getList = function getList() {
  var books;

  if (localStorage.getItem('List') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('List'));
  }

  return books;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #f6f6f6;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.heading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.task_body {\n  display: flex;\n  flex-direction: column;\n  margin: 40px auto;\n  background-color: #fff;\n  width: 500px;\n  height: 100%;\n  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;\n}\n\n.task_head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #eee;\n  padding: 10px 10px;\n}\n\n.task_heading {\n  font-size: 15px;\n  font-weight: 500;\n  color: #5b5959;\n}\n\n.task_input {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 15px 10px;\n  border-bottom: 1px solid #eee;\n  color: #5b5959;\n}\n\n.input {\n  border: none;\n  width: 150%;\n  font-size: 24px;\n  font-style: italic;\n}\n\n.input:focus {\n  outline: none;\n}\n\n.icon {\n  width: 15px;\n  height: 15px;\n  fill: #5b5959;\n}\n\n.icon-2 {\n  width: 20px;\n  height: 20px;\n  fill: #15baf6;\n  margin-right: 15px;\n}\n\n.task_items {\n  width: 100%;\n}\n\n.task_list {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  padding: 0 10px;\n  margin: 0;\n  border-bottom: 1px solid #eee;\n  color: #5b5959;\n}\n\n.task_item {\n  font-weight: 500;\n  padding: 10px 15px;\n  margin-left: -10px;\n  border-bottom: 1px solid #eee;\n  width: 104%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.check {\n  margin-right: 20px;\n  width: 20px;\n  height: 25px;\n}\n\n.item_name {\n  display: flex;\n  align-items: center;\n}\n\n.btn {\n  font-size: 18px;\n  padding: 15px;\n  background-color: #eee;\n  border: none;\n  cursor: pointer;\n}\n\n.strike {\n  text-decoration: line-through;\n  transition: text-decoration 0.5s ease-in-out;\n  -webkit-transition: text-decoration 0.5s ease-in-out;\n  -moz-transition: text-decoration 0.5s ease-in-out;\n  -ms-transition: text-decoration 0.5s ease-in-out;\n  -o-transition: text-decoration 0.5s ease-in-out;\n}\n\n.hidden {\n  display: none;\n}\n\n.yellow-1 {\n  background-color: rgba(237, 223, 70, 0.6823529412);\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n}\n\n.refresh {\n  position: relative;\n}\n\n.info {\n  position: absolute;\n  top: 120px;\n  right: 386px;\n  width: 15px;\n  height: 15px;\n  background-color: rgba(255, 0, 0, 0.836);\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n}\n\n.list_num {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-top: 1px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 10px;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAA;AACF;;AAEA;EACE,yBAAA;EACA,qCAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,sBAAA;EACA,YAAA;EACA,YAAA;EACA,+CAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,6BAAA;EACA,kBAAA;AACF;;AAEA;EACE,eAAA;EACA,gBAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;EACA,kBAAA;EACA,6BAAA;EACA,cAAA;AACF;;AAEA;EACE,YAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,aAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EACA,SAAA;EACA,6BAAA;EACA,cAAA;AACF;;AAEA;EACE,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,6BAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AACF;;AAEA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;AACF;;AAEA;EACE,eAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,eAAA;AACF;;AAEA;EACE,6BAAA;EACA,4CAAA;EACA,oDAAA;EACA,iDAAA;EACA,gDAAA;EACA,+CAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE,kDAAA;EACA,gCAAA;EACA,wCAAA;EACA,qCAAA;EACA,oCAAA;EACA,mCAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,wCAAA;EACA,kBAAA;EACA,0BAAA;EACA,uBAAA;EACA,sBAAA;EACA,qBAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;EACA,gBAAA;EACA,eAAA;AACF","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f6f6f6;\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.task_body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 40px auto;\r\n  background-color: #fff;\r\n  width: 500px;\r\n  height: 100%;\r\n  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;\r\n}\r\n\r\n.task_head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #eee;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.task_heading {\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n  color: #5b5959;\r\n}\r\n\r\n.task_input {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 15px 10px;\r\n  border-bottom: 1px solid #eee;\r\n  color: #5b5959;\r\n}\r\n\r\n.input {\r\n  border: none;\r\n  width: 150%;\r\n  font-size: 24px;\r\n  font-style: italic;\r\n}\r\n\r\n.input:focus {\r\n  outline: none;\r\n}\r\n\r\n.icon {\r\n  width: 15px;\r\n  height: 15px;\r\n  fill: #5b5959;\r\n}\r\n\r\n.icon-2 {\r\n  width: 20px;\r\n  height: 20px;\r\n  fill: #15baf6;\r\n  margin-right: 15px;\r\n}\r\n\r\n.task_items {\r\n  width: 100%;\r\n}\r\n\r\n.task_list {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0 10px;\r\n  margin: 0;\r\n  border-bottom: 1px solid #eee;\r\n  color: #5b5959;\r\n}\r\n\r\n.task_item {\r\n  font-weight: 500;\r\n  padding: 10px 15px;\r\n  margin-left: -10px;\r\n  border-bottom: 1px solid #eee;\r\n  width: 104%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.check {\r\n  margin-right: 20px;\r\n  width: 20px;\r\n  height: 25px;\r\n}\r\n\r\n.item_name {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.btn {\r\n  font-size: 18px;\r\n  padding: 15px;\r\n  background-color: #eee;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.strike {\r\n  text-decoration: line-through;\r\n  transition: text-decoration 0.5s ease-in-out;\r\n  -webkit-transition: text-decoration 0.5s ease-in-out;\r\n  -moz-transition: text-decoration 0.5s ease-in-out;\r\n  -ms-transition: text-decoration 0.5s ease-in-out;\r\n  -o-transition: text-decoration 0.5s ease-in-out;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.yellow-1 {\r\n  background-color: #eddf46ae;\r\n  transition: all 0.5s ease-in-out;\r\n  -webkit-transition: all 0.5s ease-in-out;\r\n  -moz-transition: all 0.5s ease-in-out;\r\n  -ms-transition: all 0.5s ease-in-out;\r\n  -o-transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.refresh {\r\n  position: relative;\r\n}\r\n\r\n.info {\r\n  position: absolute;\r\n  top: 120px;\r\n  right: 386px;\r\n  width: 15px;\r\n  height: 15px;\r\n  background-color: rgba(255, 0, 0, 0.836);\r\n  border-radius: 50%;\r\n  -webkit-border-radius: 50%;\r\n  -moz-border-radius: 50%;\r\n  -ms-border-radius: 50%;\r\n  -o-border-radius: 50%;\r\n}\r\n\r\n.list_num {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  margin-top: 1px;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  font-size: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./img/icon.svg":
/*!**********************!*\
  !*** ./img/icon.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon.svg";

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _img_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/icon.svg */ "./img/icon.svg");
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add */ "./src/js/add.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/js/store.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var form = document.querySelector('.form');
var input = document.querySelector('.input');
var container = document.querySelector('.task_list');
var list = [];

for (var i = 0; i < list.length; i++) {
  list[i].index = i;
}

var generateMarkup = function generateMarkup(list, i) {
  return "\n  <li class=\"task_item\" id=\"".concat(i, "\" draggable=\"true\">\n  <div class=\"item_name\">\n    <input type=\"checkbox\" class=\"check\" id='item-").concat(i, "' />\n    <label class=\"task_name\">").concat(list.name, "</label>\n  </div>\n\n  <svg class=\"icon dot\">\n    <use href=\"").concat(_img_icon_svg__WEBPACK_IMPORTED_MODULE_1__, "#icon-dots-horizontal-triple\"></use>\n  </svg>\n</li>");
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  var listName = input.value;
  if (listName === null || listName === '') return;
  var obj = {
    name: listName,
    completed: false,
    index: list.length
  };
  input.value = null;
  list.push(obj);
  document.querySelector('.list_num').textContent = list.length;
  _add__WEBPACK_IMPORTED_MODULE_2__.addToLocale(list);
  var render = list.map(generateMarkup).join('');
  container.innerHTML = render;
});
window.addEventListener('load', function (e) {
  var locale = _store__WEBPACK_IMPORTED_MODULE_3__.getList();
  list.push.apply(list, _toConsumableArray(locale));
  var renderLocale = list.map(generateMarkup).join('');
  document.querySelector('.list_num').textContent = locale.length;
  container.innerHTML = renderLocale;
  document.addEventListener('click', function (e) {
    var clicked = e.target.closest('.task_item');
    var listContaniner = clicked.firstElementChild;
    var class1 = clicked.firstElementChild.firstElementChild;
    var class2 = clicked.firstElementChild.lastElementChild;

    var markupCheck = function markupCheck() {
      return " <svg class=\"icon-2\">\n  <use href=\"".concat(_img_icon_svg__WEBPACK_IMPORTED_MODULE_1__, "#icon-check\"></use>\n  </svg>");
    };

    if (e.target.classList.contains('check')) {
      e.target.classList.toggle('hidden');
      class2.classList.toggle('strike');
      listContaniner.insertAdjacentHTML('afterbegin', markupCheck());
      clicked.classList.toggle('done');

      for (var _i = 0; _i < list.length; _i++) {
        if (list[_i].completed === false && clicked.id == _i) {
          list[_i].completed = true;
          localStorage.setItem('List', JSON.stringify(list));
        } else if (list[_i].completed === true && clicked.id == _i) {
          list[_i].completed = false;
          localStorage.setItem('List', JSON.stringify(list));
        }
      }
    }

    document.querySelector('.btn').addEventListener('click', function (e) {
      e.preventDefault();

      if (clicked.classList.contains('done')) {
        var listArr2 = _store__WEBPACK_IMPORTED_MODULE_3__.getList();
        clicked.remove();

        for (var _i2 = 0; _i2 < list.length; _i2++) {
          list[_i2].description = true;

          if (clicked.id == _i2) {
            listArr2.splice(_i2, 1);
            localStorage.setItem('List', JSON.stringify(listArr2));
          }
        }
      }
    });
    var class3 = clicked.firstElementChild.firstElementChild;
    class3.addEventListener('click', function (e) {
      class1.checked = false;
      class3.classList.toggle('hidden');
      class1.classList.toggle('hidden');
      class2.classList.toggle('strike');
    });
    var class4 = clicked.lastElementChild;
    class4.addEventListener('click', function () {
      clicked.classList.toggle('yellow-1');
      class4.innerHTML = "<use href=\"".concat(_img_icon_svg__WEBPACK_IMPORTED_MODULE_1__, "#icon-trash-2\"></use>");
      class4.addEventListener('click', function () {
        clicked.remove();
        var listArr = _store__WEBPACK_IMPORTED_MODULE_3__.getList();

        for (var _i3 = 0; _i3 < list.length; _i3++) {
          if (clicked.id == _i3) {
            listArr.splice(_i3, 1);
            localStorage.setItem('List', JSON.stringify(listArr));
          }
        }
      });
    });
  });
});
var dragEle = new Sortable(container, {
  animation: 350
});
dragEle();
})();

/******/ })()
;
//# sourceMappingURL=bundle1a619a7d6ee429458a12.js.map