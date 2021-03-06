webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/menu/Menu.js":
/*!*************************************!*\
  !*** ./src/components/menu/Menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _componentByKey__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentByKey */ "./src/components/menu/componentByKey.js");










var _jsxFileName = "C:\\Users\\elad\\Desktop\\mcrm\\front\\src\\components\\menu\\Menu.js";


var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_9___default.a.SubMenu;
var MenuItemGroup = antd_lib_menu__WEBPACK_IMPORTED_MODULE_9___default.a.ItemGroup;

var Sider =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Sider, _React$Component);

  function Sider() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Sider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Sider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleClick", function (e) {
      var _e$keyPath = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(e.keyPath, 2),
          key = _e$keyPath[0],
          section = _e$keyPath[1];

      if (section === 'A_R_E') {
        _this.props.handleMenuClick(Object(_componentByKey__WEBPACK_IMPORTED_MODULE_11__["cbk_A_R_E"])(key));
      } else if (section === 'search') {
        _this.props.handleMenuClick(Object(_componentByKey__WEBPACK_IMPORTED_MODULE_11__["cbk_search"])(key));
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Sider, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onClick: this.handleClick,
        defaultSelectedKeys: ['add'],
        defaultOpenKeys: ['A_R_E'],
        mode: "inline",
        theme: "dark",
        inlineIndent: "25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(SubMenu, {
        key: "A_R_E",
        title: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a, {
          type: "mail",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, "Add / Remove / Edit")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(MenuItemGroup, {
        key: "g1",
        title: "Group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
        key: "add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Add"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
        key: "remove",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Remove"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
        key: "edit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Edit"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(SubMenu, {
        key: "search",
        title: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a, {
          type: "appstore",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, "Search")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
        key: "all",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "All")));
    }
  }]);

  return Sider;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Sider);

/***/ })

})
//# sourceMappingURL=index.js.1093b130b321b942d006.hot-update.js.map