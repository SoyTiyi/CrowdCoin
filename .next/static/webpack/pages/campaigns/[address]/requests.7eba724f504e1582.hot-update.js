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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_santimar_Documents_BlockChain_campaign_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_santimar_Documents_BlockChain_campaign_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_santimar_Documents_BlockChain_campaign_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar index1 = function(param) {\n    var address = param.address, campaing = param.campaing;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), requests = ref[0], setRequests = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getRequests = _asyncToGenerator(C_Users_santimar_Documents_BlockChain_campaign_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts;\n            return C_Users_santimar_Documents_BlockChain_campaign_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].eth.getAccounts();\n                    case 2:\n                        accounts = _ctx.sent;\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        getRequests();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\santimar\\\\Documents\\\\BlockChain\\\\campaign\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n            lineNumber: 22,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                primary: true,\n                onClick: function() {\n                    return router.push(\"/campaigns/\".concat(address, \"/requests/new/\"));\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\santimar\\\\Documents\\\\BlockChain\\\\campaign\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Add Request\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h3\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\santimar\\\\Documents\\\\BlockChain\\\\campaign\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Request List\"\n            })\n        ]\n    }));\n};\n_s(index1, \"0CvbIMnmVVVZNv9aoeUk9mZKRjk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\nindex1.getInitialProps = _asyncToGenerator(C_Users_santimar_Documents_BlockChain_campaign_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(props) {\n    var campaign, requestCount, approversCount, requests;\n    return C_Users_santimar_Documents_BlockChain_campaign_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(props.query.address);\n                _ctx.next = 3;\n                return campaign.methods.getRequestCount().call();\n            case 3:\n                requestCount = _ctx.sent;\n                _ctx.next = 6;\n                return campaign.methods.getApproversCount().call();\n            case 6:\n                approversCount = _ctx.sent;\n                _ctx.next = 9;\n                return Promise.all(Array(parseInt(requestCount)).fill().map(function(element, index) {\n                    return campaing.methods.requests(index).call();\n                }));\n            case 9:\n                requests = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    address: props.query.address,\n                    requestCount: requestCount,\n                    approversCount: approversCount,\n                    requests: requests\n                });\n            case 11:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (index1);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDQTtBQUNSO0FBQ0g7QUFDYTtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxHQUFLLENBQUNRLE1BQUssR0FBRyxRQUFRLFFBQWlCLENBQUM7UUFBeEJDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBQzdCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTixzREFBUztJQUV4QixHQUFlLENBQWdCSCxHQUFVLEdBQVZBLCtDQUFRLElBQWpDVSxRQUFRLEdBQWlCVixHQUFVLEtBQXpCVyxXQUFXLEdBQUlYLEdBQVU7SUFFekNELGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYixHQUFLLENBQUNhLFdBQVcsOEtBQUcsUUFBUSxXQUFJLENBQUM7Z0JBQ3ZCQyxRQUFROzs7OzsrQkFBU1Isc0VBQW9COzt3QkFBckNRLFFBQVE7Ozs7OztRQUVsQixDQUFDO1FBQ0RELFdBQVc7SUFDZixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTSx1RUFDRFgsMERBQU07Ozs7Ozs7O2lGQUNGQyxxREFBTTtnQkFBQ2MsT0FBTztnQkFBQ0MsT0FBTyxFQUFFLFFBQVE7b0JBQUZSLE1BQU0sQ0FBTkEsTUFBTSxDQUFDUyxJQUFJLENBQUUsQ0FBVyxhQUFVLE1BQWMsQ0FBdEJYLE9BQU8sRUFBQyxDQUFjOzs7Ozs7OzswQkFBSSxDQUFXOztpRkFDN0ZZLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBWTs7OztBQUk1QixDQUFDO0dBcEJLYixNQUFLOztRQUNRSCxrREFBUzs7O0FBcUI1QkcsTUFBSyxDQUFDYyxlQUFlLDhLQUFHLFFBQVEsU0FBREMsS0FBSyxFQUFLLENBQUM7UUFDaENDLFFBQVEsRUFDUkMsWUFBWSxFQUNaQyxjQUFjLEVBQ2RkLFFBQVE7Ozs7Z0JBSFJZLFFBQVEsR0FBR2xCLDhEQUFRLENBQUNpQixLQUFLLENBQUNJLEtBQUssQ0FBQ2xCLE9BQU87O3VCQUNsQmUsUUFBUSxDQUFDSSxPQUFPLENBQUNDLGVBQWUsR0FBR0MsSUFBSTs7Z0JBQTVETCxZQUFZOzt1QkFDV0QsUUFBUSxDQUFDSSxPQUFPLENBQUNHLGlCQUFpQixHQUFHRCxJQUFJOztnQkFBaEVKLGNBQWM7O3VCQUNHTSxPQUFPLENBQUNDLEdBQUcsQ0FDOUJDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDVixZQUFZLEdBQ3RCVyxJQUFJLEdBQ0pDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBRTlCLEtBQUssRUFBSyxDQUFDO29CQUN0QixNQUFNLENBQUNFLFFBQVEsQ0FBQ2tCLE9BQU8sQ0FBQ2hCLFFBQVEsQ0FBQ0osS0FBSyxFQUFFc0IsSUFBSTtnQkFDaEQsQ0FBQzs7Z0JBTEhsQixRQUFROzZDQU9QLENBQUM7b0JBQ0pILE9BQU8sRUFBRWMsS0FBSyxDQUFDSSxLQUFLLENBQUNsQixPQUFPO29CQUM1QmdCLFlBQVksRUFBRUEsWUFBWTtvQkFDMUJDLGNBQWMsRUFBRUEsY0FBYztvQkFDOUJkLFFBQVEsRUFBRUEsUUFBUTtnQkFDdEIsQ0FBQzs7Ozs7O0FBQ0wsQ0FBQztBQUVELCtEQUFlSixNQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9bYWRkcmVzc10vcmVxdWVzdHMvaW5kZXguanM/MjljZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbidcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vLi4vLi4vZXRoZXJldW0vd2ViMydcclxuXHJcbmNvbnN0IGluZGV4ID0gKHthZGRyZXNzLCBjYW1wYWluZ30pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3RbcmVxdWVzdHMsIHNldFJlcXVlc3RzXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdldFJlcXVlc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldFJlcXVlc3RzKClcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL2NhbXBhaWducy8ke2FkZHJlc3N9L3JlcXVlc3RzL25ldy9gKX0+QWRkIFJlcXVlc3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgPGgzPlJlcXVlc3QgTGlzdDwvaDM+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5pbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcylcclxuICAgIGNvbnN0IHJlcXVlc3RDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdENvdW50KCkuY2FsbCgpXHJcbiAgICBjb25zdCBhcHByb3ZlcnNDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0QXBwcm92ZXJzQ291bnQoKS5jYWxsKClcclxuICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSlcclxuICAgICAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbXBhaW5nLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxyXG4gICAgICAgIHJlcXVlc3RDb3VudDogcmVxdWVzdENvdW50LFxyXG4gICAgICAgIGFwcHJvdmVyc0NvdW50OiBhcHByb3ZlcnNDb3VudCxcclxuICAgICAgICByZXF1ZXN0czogcmVxdWVzdHNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsIkJ1dHRvbiIsInVzZVJvdXRlciIsIkNhbXBhaWduIiwid2ViMyIsImluZGV4IiwiYWRkcmVzcyIsImNhbXBhaW5nIiwicm91dGVyIiwicmVxdWVzdHMiLCJzZXRSZXF1ZXN0cyIsImdldFJlcXVlc3RzIiwiYWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsInByaW1hcnkiLCJvbkNsaWNrIiwicHVzaCIsImgzIiwiZ2V0SW5pdGlhbFByb3BzIiwicHJvcHMiLCJjYW1wYWlnbiIsInJlcXVlc3RDb3VudCIsImFwcHJvdmVyc0NvdW50IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0UmVxdWVzdENvdW50IiwiY2FsbCIsImdldEFwcHJvdmVyc0NvdW50IiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwibWFwIiwiZWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/[address]/requests/index.js\n");

/***/ })

});