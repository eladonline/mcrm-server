webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/req.js":
/*!*******************************!*\
  !*** ./src/components/req.js ***!
  \*******************************/
/*! exports provided: Post, Req */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Req", function() { return Req; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_4__);






var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_4___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var urlByEnv = publicRuntimeConfig.url || '';
var Post = function Post() {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Post);

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "post", function (_ref) {
    var url = _ref.url,
        body = _ref.body;
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(urlByEnv, "/").concat(url), {
      data: body
    });
  });
};
var Req =
/*#__PURE__*/
function () {
  function Req() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Req);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Req, [{
    key: "post",
    value: function post(_ref2) {
      var url = _ref2.url,
          body = _ref2.body;
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(urlByEnv, "/").concat(url), {
        data: body
      });
    }
  }, {
    key: "get",
    value: function get(_ref3) {
      var url = _ref3.url;
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(urlByEnv, "/").concat(url));
    }
  }, {
    key: "delete",
    value: function _delete(url) {
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete("".concat(urlByEnv, "/").concat(url));
    }
  }, {
    key: "put",
    value: function put(_ref4) {
      var url = _ref4.url,
          body = _ref4.body;
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("".concat(urlByEnv, "/").concat(url), {
        data: body
      });
    }
  }]);

  return Req;
}();

/***/ })

})
//# sourceMappingURL=index.js.e413a1cc7f97b256bac1.hot-update.js.map