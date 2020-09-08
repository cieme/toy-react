/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
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
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toy_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react */ \"./toy-react.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n/* 如果没有一个行为，那么应该有一个默认行为 所以需要继承 */\n\nvar Mycomponent = /*#__PURE__*/function (_Component) {\n  _inherits(Mycomponent, _Component);\n\n  var _super = _createSuper(Mycomponent);\n\n  function Mycomponent() {\n    var _this;\n\n    _classCallCheck(this, Mycomponent);\n\n    _this = _super.call(this);\n    _this.state = {\n      a: 'aaaa',\n      b: 123\n    };\n    return _this;\n  }\n\n  _createClass(Mycomponent, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"section\", {\n        \"class\": \"wrapper\"\n      }, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h1\", null, \"my component\"), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n        onclick: function onclick() {\n          _this2.state.b += 1;\n\n          _this2.rerender();\n        }\n      }, \"BUTTON ADDHANDLE\"), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h5\", null, this.state.b), this.children);\n    }\n  }]);\n\n  return Mycomponent;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nObject(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Mycomponent, {\n  id: \"a\",\n  \"class\": \"c\"\n}, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h2\", null, \"\\u76AE\\u5361\\u4E18\"), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h3\", null, \"123\")), document.body);\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./toy-react.js":
/*!**********************!*\
  !*** ./toy-react.js ***!
  \**********************/
/*! exports provided: Component, createElement, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar RENDER_TO_DOM = Symbol(\"render to dom\");\n\nvar ElementWrapper = /*#__PURE__*/function () {\n  function ElementWrapper(type) {\n    _classCallCheck(this, ElementWrapper);\n\n    /**\r\n     * 创建的实体dom 放到一个属性上\r\n     */\n    this.root = document.createElement(type); // console.log(this.root)\n    // <div>abc</div>\n    // <div>123</div>\n    // <h1>my component</h1>\n    // <div class=\"wrapper\"><h1>my component</h1><div>abc</div><div>123</div></div>\n  }\n\n  _createClass(ElementWrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      /**\r\n       * 处理事件\r\n       * reg 匹配 所有字符 所有空白和所有非空白，可以匹配所有字符 */\n      if (name.match(/^on([\\s\\S]+)$/)) {\n        this.root.addEventListener(RegExp.$1.replace(/^[\\s\\S]/, function (c) {\n          return c.toLowerCase();\n        }), value);\n      } else {\n        this.root.setAttribute(name, value);\n      }\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(component) {\n      var range = document.createRange();\n      /*append child 是 append 进去的一定是在最后的*/\n\n      range.setStart(this.root, this.root.childNodes.length);\n      range.setEnd(this.root, this.root.childNodes.length); // console.log(component)\n\n      component[RENDER_TO_DOM](range); // this.root.appendChild(component.root)\n    }\n  }, {\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      /**删掉内容 */\n      range.deleteContents();\n      /**插入内容 */\n\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return ElementWrapper;\n}();\n\nvar TextWrapper = /*#__PURE__*/function () {\n  /**\r\n   * 文本节点没有attr属性不必 setattr\r\n   */\n  function TextWrapper(content) {\n    _classCallCheck(this, TextWrapper);\n\n    this.root = document.createTextNode(content);\n  }\n\n  _createClass(TextWrapper, [{\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      /**删掉内容 */\n      range.deleteContents();\n      /**插入内容 */\n\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return TextWrapper;\n}();\n\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    this.props = Object.create(null);\n    /* element h2,element h3 */\n\n    this.children = [];\n    this._root = null;\n    this._range = null;\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      /**\r\n       * props 就是 传递过来的 element\r\n       */\n      this.props[name] = value;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(component) {\n      this.children.push(component);\n    }\n    /**range api */\n\n  }, {\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      this._range = range;\n      /**递归调用 */\n\n      this.render()[RENDER_TO_DOM](range);\n    }\n    /**重新绘制 */\n\n  }, {\n    key: \"rerender\",\n    value: function rerender() {\n      /**全删掉 */\n      this._range.deleteContents();\n      /**渲染 */\n\n\n      this[RENDER_TO_DOM](this._range);\n    } // get root() {\n    //   /* 如果没有 root */\n    //   if (!this._root) {\n    //     /**\n    //      * Mycomponent.render \n    //      * 如果 是 compoent 那么就会发生递归，直到变为 elementwrapper 或者 textwrapper\n    //      */\n    //     this._root = this.render().root;\n    //   }\n    //   return this._root;\n    // }\n\n  }]);\n\n  return Component;\n}();\n/**\r\n *\r\n * var a = createElement(\"div\", {\r\n    id: \"a\",\r\n    \"class\": \"c\"\r\n  }, createElement(\"div\", null), createElement(\"div\", null)); \r\n  @type :any _ element (h2,div)||Mycomponent\r\n  @attributes :any _  null,obj{class,id...}\r\n  @children :Array _ [ElementWrapper,textWrapper(123,皮卡丘,my component)]\r\n */\n\nfunction createElement(type, attributes) {\n  // console.log(type, attributes, children)\n  var e;\n  /* 如果是字符串，那么就当作 标签去处理 */\n\n  if (typeof type === 'string') {\n    e = new ElementWrapper(type);\n  } else {\n    e = new type();\n  } // console.log(e);\n\n  /**\r\n   * @obj {}\r\n   */\n\n\n  for (var p in attributes) {\n    e.setAttribute(p, attributes[p]);\n  }\n  /**\r\n   * 递归处理节点\r\n   */\n\n\n  var insertChildren = function insertChildren(children) {\n    var _iterator = _createForOfIteratorHelper(children),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var child = _step.value;\n\n        // console.log(child)\n        if (typeof child === 'string' || typeof child === 'number') {\n          // if (typeof child === 'string') {\n          child = new TextWrapper(child);\n        }\n\n        if (child === null) {\n          continue;\n        }\n\n        if (_typeof(child) === \"object\" && child instanceof Array) {\n          insertChildren(child);\n        } else {\n          e.appendChild(child);\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  insertChildren(children);\n  return e;\n}\nfunction render(component, parentElement) {\n  // parentElement.appendChild(component.root)\n  var range = document.createRange();\n  /* 清到最后 0-last */\n\n  range.setStart(parentElement, 0);\n  /* childNodes 是因为可能是文本或者ele 节点  */\n\n  range.setEnd(parentElement, parentElement.childNodes.length);\n  /* 星空 */\n\n  range.deleteContents();\n  /* 渲染 */\n\n  component[RENDER_TO_DOM](range);\n}\n\n//# sourceURL=webpack:///./toy-react.js?");

/***/ })

/******/ });