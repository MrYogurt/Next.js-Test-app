webpackHotUpdate_N_E("pages/index",{

/***/ "./components/DelOperator.tsx":
/*!************************************!*\
  !*** ./components/DelOperator.tsx ***!
  \************************************/
/*! exports provided: DelOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelOperator", function() { return DelOperator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\mitri\\nextjs-app\\components\\DelOperator.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var DelOperator = function DelOperator(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showModal = _useState[0],
      setShowModal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.brand.map(function (item) {
    return {
      checked: false,
      name: item,
      id: item
    };
  })),
      opNames = _useState2[0],
      setOpNames = _useState2[1]; // useEffect(() => {
  //     setOpNames(props.brand.map((item) => {
  //         return { checked: false, name: item, id: item };
  //     }));
  // })


  function changeHandler(changeId) {
    var newState = opNames.slice();
    var opIndex = newState.findIndex(function (_ref) {
      var id = _ref.id;
      return id === changeId;
    });
    newState[opIndex].checked = !newState[opIndex].checked;
    setOpNames(newState);
  }

  ;

  function submitHandler(event) {
    event.preventDefault();
    var newState = opNames.filter(function (_ref2) {
      var checked = _ref2.checked;
      return !checked;
    });
    setOpNames(newState);
    var forSend = opNames.filter(function (_ref3) {
      var checked = _ref3.checked;
      return checked;
    }).map(function (item) {
      return item.name;
    });
    props.DeleteBrand(forSend);
  }

  ;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "delOp",
    onClick: function onClick() {
      return setShowModal(!showModal);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  })), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "delOpModal",
    closeTimeoutMS: 500,
    isOpen: showModal,
    contentLabel: "onRequestClose Example",
    onRequestClose: function onRequestClose() {
      return setShowModal(!showModal);
    },
    overlayClassName: "Overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "outerCheckbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 14
    }
  }, __jsx("form", {
    className: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 30
    }
  }, __jsx("div", {
    className: "vyhyh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 30
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 34
    }
  }), opNames.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "innerBox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 38
      }
    }, __jsx("input", {
      onChange: function onChange() {
        return changeHandler(item.id);
      },
      type: "checkbox",
      id: item.id,
      checked: item.checked,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 42
      }
    }));
  })), __jsx("div", {
    className: "asdass",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 42
    }
  }, opNames.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "innerNamebox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 38
      }
    }, __jsx("label", {
      htmlFor: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 82
      }
    }, item.name));
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 34
    }
  }))), __jsx("div", {
    className: "delOpButtons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "primary",
    onClick: submitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 47
    }
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 114
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 120
    }
  }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "danger",
    onClick: function onClick() {
      return setShowModal(!showModal);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))));
};

_s(DelOperator, "p0ItVVhylsAMk1DmCzlC3Zh13dY=");

_c = DelOperator;

var _c;

$RefreshReg$(_c, "DelOperator");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxPcGVyYXRvci50c3giXSwibmFtZXMiOlsiRGVsT3BlcmF0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYnJhbmQiLCJtYXAiLCJpdGVtIiwiY2hlY2tlZCIsIm5hbWUiLCJpZCIsIm9wTmFtZXMiLCJzZXRPcE5hbWVzIiwiY2hhbmdlSGFuZGxlciIsImNoYW5nZUlkIiwibmV3U3RhdGUiLCJzbGljZSIsIm9wSW5kZXgiLCJmaW5kSW5kZXgiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZpbHRlciIsImZvclNlbmQiLCJEZWxldGVCcmFuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9PLElBQU1BLFdBQXVDLEdBQUcsU0FBMUNBLFdBQTBDLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUM1QkMsc0RBQVEsQ0FBVSxLQUFWLENBRG9CO0FBQUEsTUFDdkRDLFNBRHVEO0FBQUEsTUFDNUNDLFlBRDRDOztBQUFBLG1CQUVoQ0Ysc0RBQVEsQ0FDbENELEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUN0QixXQUFPO0FBQUVDLGFBQU8sRUFBRSxLQUFYO0FBQWtCQyxVQUFJLEVBQUVGLElBQXhCO0FBQThCRyxRQUFFLEVBQUVIO0FBQWxDLEtBQVA7QUFDSCxHQUZELENBRGtDLENBRndCO0FBQUEsTUFFdkRJLE9BRnVEO0FBQUEsTUFFOUNDLFVBRjhDLGtCQVE5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxXQUFTQyxhQUFULENBQXdCQyxRQUF4QixFQUEwQztBQUN0QyxRQUFJQyxRQUFRLEdBQUdKLE9BQU8sQ0FBQ0ssS0FBUixFQUFmO0FBQ0EsUUFBSUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLFNBQVQsQ0FBbUI7QUFBQSxVQUFHUixFQUFILFFBQUdBLEVBQUg7QUFBQSxhQUFZQSxFQUFFLEtBQUtJLFFBQW5CO0FBQUEsS0FBbkIsQ0FBZDtBQUNBQyxZQUFRLENBQUNFLE9BQUQsQ0FBUixDQUFrQlQsT0FBbEIsR0FBNEIsQ0FBQ08sUUFBUSxDQUFDRSxPQUFELENBQVIsQ0FBa0JULE9BQS9DO0FBQ0FJLGNBQVUsQ0FBQ0csUUFBRCxDQUFWO0FBQ0g7O0FBQUE7O0FBRUQsV0FBU0ksYUFBVCxDQUF3QkMsS0FBeEIsRUFBMEU7QUFDdEVBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBLFFBQUlOLFFBQVEsR0FBR0osT0FBTyxDQUFDVyxNQUFSLENBQWU7QUFBQSxVQUFHZCxPQUFILFNBQUdBLE9BQUg7QUFBQSxhQUFpQixDQUFDQSxPQUFsQjtBQUFBLEtBQWYsQ0FBZjtBQUNBSSxjQUFVLENBQUNHLFFBQUQsQ0FBVjtBQUNBLFFBQUlRLE9BQU8sR0FBR1osT0FBTyxDQUFDVyxNQUFSLENBQWU7QUFBQSxVQUFHZCxPQUFILFNBQUdBLE9BQUg7QUFBQSxhQUFpQkEsT0FBakI7QUFBQSxLQUFmLEVBQXlDRixHQUF6QyxDQUE2QyxVQUFDQyxJQUFEO0FBQUEsYUFBUUEsSUFBSSxDQUFDRSxJQUFiO0FBQUEsS0FBN0MsQ0FBZDtBQUNBUixTQUFLLENBQUN1QixXQUFOLENBQWtCRCxPQUFsQjtBQUNIOztBQUFBO0FBRUQsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVk7QUFBTSxhQUFTLEVBQUMsT0FBaEI7QUFBd0IsV0FBTyxFQUFFO0FBQUEsYUFBTW5CLFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBQWxCO0FBQUEsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFaLENBREosRUFFSSxNQUFDLGtEQUFEO0FBQ0ksYUFBUyxFQUFDLFlBRGQ7QUFFSSxrQkFBYyxFQUFFLEdBRnBCO0FBR0ksVUFBTSxFQUFFQSxTQUhaO0FBSUksZ0JBQVksRUFBQyx3QkFKakI7QUFLSSxrQkFBYyxFQUFFO0FBQUEsYUFBTUMsWUFBWSxDQUFDLENBQUNELFNBQUYsQ0FBbEI7QUFBQSxLQUxwQjtBQU1JLG9CQUFnQixFQUFDLFNBTnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPQztBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDZ0I7QUFBTSxhQUFTLEVBQUMsR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVLUSxPQUFPLENBQUNMLEdBQVIsQ0FBWSxVQUFDQyxJQUFEO0FBQUEsV0FDVDtBQUFLLFNBQUcsRUFBRUEsSUFBSSxDQUFDRyxFQUFmO0FBQW1CLGVBQVMsRUFBQyxVQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFDRyxjQUFRLEVBQUU7QUFBQSxlQUFNRyxhQUFhLENBQUNOLElBQUksQ0FBQ0csRUFBTixDQUFuQjtBQUFBLE9BRGI7QUFFRyxVQUFJLEVBQUMsVUFGUjtBQUdHLFFBQUUsRUFBRUgsSUFBSSxDQUFDRyxFQUhaO0FBSUcsYUFBTyxFQUFFSCxJQUFJLENBQUNDLE9BSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURTO0FBQUEsR0FBWixDQUZMLENBREEsRUFZWTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUEcsT0FBTyxDQUFDTCxHQUFSLENBQVksVUFBQ0MsSUFBRDtBQUFBLFdBQ1Q7QUFBSyxTQUFHLEVBQUVBLElBQUksQ0FBQ0csRUFBZjtBQUFtQixlQUFTLEVBQUMsY0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE0QztBQUFPLGFBQU8sRUFBRUgsSUFBSSxDQUFDRyxFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBCSCxJQUFJLENBQUNFLElBQS9CLENBQTVDLENBRFM7QUFBQSxHQUFaLENBRE8sQ0FaWixFQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJKLENBRGhCLENBUEQsRUE0Qkk7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThCLE1BQUMsOERBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsV0FBTyxFQUFFVSxhQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQUE5QixPQUFpRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWpHLEVBQXVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBdkcsRUFDSSxNQUFDLDhEQUFEO0FBQVEsV0FBTyxFQUFDLFFBQWhCO0FBQXlCLFdBQU8sRUFBRTtBQUFBLGFBQU1mLFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBQWxCO0FBQUEsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFESixDQTVCSixDQUZKLENBREo7QUFzQ0gsQ0FuRU07O0dBQU1ILFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTlmMTlmOTNmODU5OGFhOWNhOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcblxyXG5pbnRlcmZhY2UgRGVsT3BlcmF0b3JQcm9wcyB7XHJcbiAgICBEZWxldGVCcmFuZChmb3JTZW5kOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbiAgICBicmFuZDogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxPcGVyYXRvcjpSZWFjdC5GQyA8RGVsT3BlcmF0b3JQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BOYW1lcywgc2V0T3BOYW1lc10gPSB1c2VTdGF0ZShcclxuICAgICAgICBwcm9wcy5icmFuZC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgY2hlY2tlZDogZmFsc2UsIG5hbWU6IGl0ZW0sIGlkOiBpdGVtIH07XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBzZXRPcE5hbWVzKHByb3BzLmJyYW5kLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4geyBjaGVja2VkOiBmYWxzZSwgbmFtZTogaXRlbSwgaWQ6IGl0ZW0gfTtcclxuICAgIC8vICAgICB9KSk7XHJcbiAgICAvLyB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUhhbmRsZXIgKGNoYW5nZUlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgbmV3U3RhdGUgPSBvcE5hbWVzLnNsaWNlKCk7XHJcbiAgICAgICAgbGV0IG9wSW5kZXggPSBuZXdTdGF0ZS5maW5kSW5kZXgoKHsgaWQgfSkgPT4gaWQgPT09IGNoYW5nZUlkKTtcclxuICAgICAgICBuZXdTdGF0ZVtvcEluZGV4XS5jaGVja2VkID0gIW5ld1N0YXRlW29wSW5kZXhdLmNoZWNrZWQ7XHJcbiAgICAgICAgc2V0T3BOYW1lcyhuZXdTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIgKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50LCBNb3VzZUV2ZW50Pikge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gb3BOYW1lcy5maWx0ZXIoKHsgY2hlY2tlZCB9KSA9PiAhY2hlY2tlZCk7XHJcbiAgICAgICAgc2V0T3BOYW1lcyhuZXdTdGF0ZSk7XHJcbiAgICAgICAgbGV0IGZvclNlbmQgPSBvcE5hbWVzLmZpbHRlcigoeyBjaGVja2VkIH0pID0+IGNoZWNrZWQpLm1hcCgoaXRlbSk9Pml0ZW0ubmFtZSk7XHJcbiAgICAgICAgcHJvcHMuRGVsZXRlQnJhbmQoZm9yU2VuZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzc05hbWU9XCJkZWxPcFwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCghc2hvd01vZGFsKX0+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWxPcE1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGNsb3NlVGltZW91dE1TPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBpc09wZW49e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnRMYWJlbD1cIm9uUmVxdWVzdENsb3NlIEV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHNldFNob3dNb2RhbCghc2hvd01vZGFsKX1cclxuICAgICAgICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJPdmVybGF5XCJcclxuICAgICAgICAgICAgPjxkaXYgY2xhc3NOYW1lPVwib3V0ZXJDaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndnloeWgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BOYW1lcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJpbm5lckJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBjaGFuZ2VIYW5kbGVyKGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXRlbS5jaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC9kaXY+KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FzZGFzcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcE5hbWVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cImlubmVyTmFtZWJveFwiPjxsYWJlbCBodG1sRm9yPXtpdGVtLmlkfT57aXRlbS5uYW1lfTwvbGFiZWw+PC9kaXY+KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWxPcEJ1dHRvbnNcIj48QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17c3VibWl0SGFuZGxlcn0+0KPQtNCw0LvQuNGC0Yw8L0J1dHRvbj4gPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpfT7Ql9Cw0LrRgNGL0YLRjDwvQnV0dG9uPjwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9