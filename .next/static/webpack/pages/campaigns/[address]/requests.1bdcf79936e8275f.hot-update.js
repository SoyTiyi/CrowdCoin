"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[address]/requests",{

/***/ "./pages/campaigns/[address]/requests/index.js":
/*!*****************************************************!*\
  !*** ./pages/campaigns/[address]/requests/index.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_santimar_Documents_BlockChain_campaign_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_santimar_Documents_BlockChain_campaign_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_santimar_Documents_BlockChain_campaign_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar index1 = function(param) {\n    var address = param.address, campaing = param.campaing;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\santimar\\\\Documents\\\\BlockChain\\\\campaign\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                primary: true,\n                onClick: function() {\n                    return router.push(\"/campaigns/\".concat(address, \"/requests/new/\"));\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\santimar\\\\Documents\\\\BlockChain\\\\campaign\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Add Request\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h3\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\santimar\\\\Documents\\\\BlockChain\\\\campaign\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Request List\"\n            })\n        ]\n    }));\n};\n_s(index1, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\nindex1.getInitialProps = _asyncToGenerator(C_Users_santimar_Documents_BlockChain_campaign_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(props) {\n    var campaign, requestCount, approversCount, requests;\n    return C_Users_santimar_Documents_BlockChain_campaign_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(props.query.address);\n                _ctx.next = 3;\n                return campaign.methods.getRequestCount().call();\n            case 3:\n                requestCount = _ctx.sent;\n                _ctx.next = 6;\n                return campaign.methods.getApproversCount().call();\n            case 6:\n                approversCount = _ctx.sent;\n                _ctx.next = 9;\n                return Promise.all(Array(parseInt(requestCount)).fill().map(function(element, index) {\n                    return campaing.methods.requests(index).call();\n                }));\n            case 9:\n                requests = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    address: props.query.address,\n                    requestCount: requestCount,\n                    approversCount: approversCount,\n                    requests: requests,\n                    campaign: campaign\n                });\n            case 11:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (index1);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDQTtBQUNSO0FBQ0g7QUFDYTtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxHQUFLLENBQUNRLE1BQUssR0FBRyxRQUFRLFFBQWlCLENBQUM7UUFBeEJDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBQzdCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTixzREFBUztJQUV4QixNQUFNLHVFQUNERiwwREFBTTs7Ozs7Ozs7aUZBQ0ZDLHFEQUFNO2dCQUFDUSxPQUFPO2dCQUFDQyxPQUFPLEVBQUUsUUFBUTtvQkFBRkYsTUFBTSxDQUFOQSxNQUFNLENBQUNHLElBQUksQ0FBRSxDQUFXLGFBQVUsTUFBYyxDQUF0QkwsT0FBTyxFQUFDLENBQWM7Ozs7Ozs7OzBCQUFJLENBQVc7O2lGQUM3Rk0sQ0FBRTs7Ozs7OzswQkFBQyxDQUFZOzs7O0FBSTVCLENBQUM7R0FWS1AsTUFBSzs7UUFDUUgsa0RBQVM7OztBQVc1QkcsTUFBSyxDQUFDUSxlQUFlLDhLQUFHLFFBQVEsU0FBREMsS0FBSyxFQUFLLENBQUM7UUFDaENDLFFBQVEsRUFDUkMsWUFBWSxFQUNaQyxjQUFjLEVBQ2RDLFFBQVE7Ozs7Z0JBSFJILFFBQVEsR0FBR1osOERBQVEsQ0FBQ1csS0FBSyxDQUFDSyxLQUFLLENBQUNiLE9BQU87O3VCQUNsQlMsUUFBUSxDQUFDSyxPQUFPLENBQUNDLGVBQWUsR0FBR0MsSUFBSTs7Z0JBQTVETixZQUFZOzt1QkFDV0QsUUFBUSxDQUFDSyxPQUFPLENBQUNHLGlCQUFpQixHQUFHRCxJQUFJOztnQkFBaEVMLGNBQWM7O3VCQUNHTyxPQUFPLENBQUNDLEdBQUcsQ0FDOUJDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDWCxZQUFZLEdBQ3RCWSxJQUFJLEdBQ0pDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBRXpCLEtBQUssRUFBSyxDQUFDO29CQUN0QixNQUFNLENBQUNFLFFBQVEsQ0FBQ2EsT0FBTyxDQUFDRixRQUFRLENBQUNiLEtBQUssRUFBRWlCLElBQUk7Z0JBQ2hELENBQUM7O2dCQUxISixRQUFROzZDQU9QLENBQUM7b0JBQ0paLE9BQU8sRUFBRVEsS0FBSyxDQUFDSyxLQUFLLENBQUNiLE9BQU87b0JBQzVCVSxZQUFZLEVBQUVBLFlBQVk7b0JBQzFCQyxjQUFjLEVBQUVBLGNBQWM7b0JBQzlCQyxRQUFRLEVBQUVBLFFBQVE7b0JBQ2xCSCxRQUFRLEVBQUVBLFFBQVE7Z0JBQ3RCLENBQUM7Ozs7OztBQUNMLENBQUM7QUFFRCwrREFBZVYsTUFBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL2luZGV4LmpzPzI5Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nXHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uLy4uLy4uL2V0aGVyZXVtL3dlYjMnXHJcblxyXG5jb25zdCBpbmRleCA9ICh7YWRkcmVzcywgY2FtcGFpbmd9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9jYW1wYWlnbnMvJHthZGRyZXNzfS9yZXF1ZXN0cy9uZXcvYCl9PkFkZCBSZXF1ZXN0PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxoMz5SZXF1ZXN0IExpc3Q8L2gzPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuaW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpXHJcbiAgICBjb25zdCByZXF1ZXN0Q291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFJlcXVlc3RDb3VudCgpLmNhbGwoKVxyXG4gICAgY29uc3QgYXBwcm92ZXJzQ291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldEFwcHJvdmVyc0NvdW50KCkuY2FsbCgpXHJcbiAgICBjb25zdCByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgIEFycmF5KHBhcnNlSW50KHJlcXVlc3RDb3VudCkpXHJcbiAgICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgICAgLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYW1wYWluZy5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKClcclxuICAgICAgICAgICAgfSlcclxuICAgIClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcclxuICAgICAgICByZXF1ZXN0Q291bnQ6IHJlcXVlc3RDb3VudCxcclxuICAgICAgICBhcHByb3ZlcnNDb3VudDogYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgICAgcmVxdWVzdHM6IHJlcXVlc3RzLFxyXG4gICAgICAgIGNhbXBhaWduOiBjYW1wYWlnblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiQnV0dG9uIiwidXNlUm91dGVyIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiaW5kZXgiLCJhZGRyZXNzIiwiY2FtcGFpbmciLCJyb3V0ZXIiLCJwcmltYXJ5Iiwib25DbGljayIsInB1c2giLCJoMyIsImdldEluaXRpYWxQcm9wcyIsInByb3BzIiwiY2FtcGFpZ24iLCJyZXF1ZXN0Q291bnQiLCJhcHByb3ZlcnNDb3VudCIsInJlcXVlc3RzIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0UmVxdWVzdENvdW50IiwiY2FsbCIsImdldEFwcHJvdmVyc0NvdW50IiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwibWFwIiwiZWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/[address]/requests/index.js\n");

/***/ })

});