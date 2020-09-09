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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./toy-react.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RENDER_TO_DOM = Symbol("render to dom");

var ElementWrapper = /*#__PURE__*/function () {
  function ElementWrapper(type) {
    _classCallCheck(this, ElementWrapper);

    /**
     * 创建的实体dom 放到一个属性上
     */
    this.root = document.createElement(type); // console.log(this.root)
    // <div>abc</div>
    // <div>123</div>
    // <h1>my component</h1>
    // <div class="wrapper"><h1>my component</h1><div>abc</div><div>123</div></div>
  }

  _createClass(ElementWrapper, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      /**
       * 处理事件
       * reg 匹配 所有字符 所有空白和所有非空白，可以匹配所有字符 */
      if (name.match(/^on([\s\S]+)$/)) {
        this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, function (c) {
          return c.toLowerCase();
        }), value);
      } else {
        this.root.setAttribute(name, value);
      }
    }
  }, {
    key: "appendChild",
    value: function appendChild(component) {
      var range = document.createRange();
      /*append child 是 append 进去的一定是在最后的*/

      range.setStart(this.root, this.root.childNodes.length);
      range.setEnd(this.root, this.root.childNodes.length); // console.log(component)

      component[RENDER_TO_DOM](range); // this.root.appendChild(component.root)
    }
  }, {
    key: RENDER_TO_DOM,
    value: function value(range) {
      /**删掉内容 */
      range.deleteContents();
      /**插入内容 */

      range.insertNode(this.root);
    }
  }]);

  return ElementWrapper;
}();

var TextWrapper = /*#__PURE__*/function () {
  /**
   * 文本节点没有attr属性不必 setattr
   */
  function TextWrapper(content) {
    _classCallCheck(this, TextWrapper);

    this.root = document.createTextNode(content);
  }

  _createClass(TextWrapper, [{
    key: RENDER_TO_DOM,
    value: function value(range) {
      /**删掉内容 */
      range.deleteContents();
      /**插入内容 */

      range.insertNode(this.root);
    }
  }]);

  return TextWrapper;
}();

var Component = /*#__PURE__*/function () {
  function Component() {
    _classCallCheck(this, Component);

    this.props = Object.create(null);
    /* element h2,element h3 */

    this.children = [];
    this._root = null;
    this._range = null;
  }

  _createClass(Component, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      /**
       * props 就是 传递过来的 element
       */
      this.props[name] = value;
    }
  }, {
    key: "appendChild",
    value: function appendChild(component) {
      this.children.push(component);
    }
    /**range api */

  }, {
    key: RENDER_TO_DOM,
    value: function value(range) {
      this._range = range;
      /**递归调用 */

      this.render()[RENDER_TO_DOM](range);
    }
    /**重新绘制 */

  }, {
    key: "rerender",
    value: function rerender() {
      /**全删掉 */
      this._range.deleteContents();
      /**渲染 */


      this[RENDER_TO_DOM](this._range);
    }
  }, {
    key: "setState",
    value: function setState(newState) {
      if (this.state === null || _typeof(this.state) !== "object") {
        this.state = newState;
        this.rerender();
        return;
      }
      /**递归调用 遍历所有属性 深拷贝 */


      var merge = function merge(oldState, newState) {
        for (var p in newState) {
          /**如果是空 那么 直接赋值上去 */
          if (oldState[p] === null || _typeof(oldState[p]) !== "object") {
            oldState[p] = newState[p];
          } else {
            merge(oldState[p], newState[p]);
          }
        }
      };

      merge(this.state, newState);
      this.rerender();
    } // get root() {
    //   /* 如果没有 root */
    //   if (!this._root) {
    //     /**
    //      * Mycomponent.render 
    //      * 如果 是 compoent 那么就会发生递归，直到变为 elementwrapper 或者 textwrapper
    //      */
    //     this._root = this.render().root;
    //   }
    //   return this._root;
    // }

  }]);

  return Component;
}();
/**
 *
 * var a = createElement("div", {
    id: "a",
    "class": "c"
  }, createElement("div", null), createElement("div", null)); 
  @type :any _ element (h2,div)||Mycomponent
  @attributes :any _  null,obj{class,id...}
  @children :Array _ [ElementWrapper,textWrapper(123,皮卡丘,my component)]
 */

function createElement(type, attributes) {
  // console.log(type, attributes, children)
  var e;
  /* 如果是字符串，那么就当作 标签去处理 */

  if (typeof type === 'string') {
    e = new ElementWrapper(type);
  } else {
    e = new type();
  } // console.log(e);

  /**
   * @obj {}
   */


  for (var p in attributes) {
    e.setAttribute(p, attributes[p]);
  }
  /**
   * 递归处理节点
   */


  var insertChildren = function insertChildren(children) {
    var _iterator = _createForOfIteratorHelper(children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;

        // console.log(child)
        if (typeof child === 'string' || typeof child === 'number') {
          // if (typeof child === 'string') {
          child = new TextWrapper(child);
        }

        if (child === null) {
          continue;
        }

        if (_typeof(child) === "object" && child instanceof Array) {
          insertChildren(child);
        } else {
          e.appendChild(child);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  insertChildren(children);
  return e;
}
function toy_react_render(component, parentElement) {
  // parentElement.appendChild(component.root)
  var range = document.createRange();
  /* 清到最后 0-last */

  range.setStart(parentElement, 0);
  /* childNodes 是因为可能是文本或者ele 节点  */

  range.setEnd(parentElement, parentElement.childNodes.length);
  /* 星空 */

  range.deleteContents();
  /* 渲染 */

  component[RENDER_TO_DOM](range);
}
// CONCATENATED MODULE: ./main.js
function main_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { main_typeof = function _typeof(obj) { return typeof obj; }; } else { main_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return main_typeof(obj); }

function main_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function main_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function main_createClass(Constructor, protoProps, staticProps) { if (protoProps) main_defineProperties(Constructor.prototype, protoProps); if (staticProps) main_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (main_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/* 如果没有一个行为，那么应该有一个默认行为 所以需要继承 */

var main_Mycomponent = /*#__PURE__*/function (_Component) {
  _inherits(Mycomponent, _Component);

  var _super = _createSuper(Mycomponent);

  function Mycomponent() {
    var _this;

    main_classCallCheck(this, Mycomponent);

    _this = _super.call(this);
    _this.state = {
      a: 'aaaa',
      b: 123,
      c: 321
    };
    return _this;
  }

  main_createClass(Mycomponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return createElement("section", {
        "class": "wrapper"
      }, createElement("h1", null, "my component"), createElement("button", {
        onclick: function onclick() {
          _this2.setState({
            c: _this2.state.c + 1
          });
        }
      }, "BUTTON ADDHANDLE"), createElement("button", {
        onclick: function onclick() {
          _this2.setState({
            b: _this2.state.b + 1
          });
        }
      }, "BUTTON ADDHANDLE"), createElement("h5", null, "a:-----", this.state.a), createElement("h5", null, "b:-----", this.state.b), createElement("h5", null, "c:-----", this.state.c), this.children);
    }
  }]);

  return Mycomponent;
}(Component);

toy_react_render(createElement(main_Mycomponent, {
  id: "a",
  "class": "c"
}, createElement("h2", null, "\u76AE\u5361\u4E18"), createElement("h3", null, "123")), document.body);

/***/ })
/******/ ]);