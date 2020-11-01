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
      setOpNames = _useState2[1];

  function newData() {
    var brand = props.brand;
    setOpNames(brand.map(function (item) {
      return {
        checked: false,
        name: item,
        id: item
      };
    }));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    newData();
  }, [props.brand]);

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
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 46,
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
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "outerCheckbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 14
    }
  }, __jsx("form", {
    className: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 30
    }
  }, __jsx("div", {
    className: "vyhyh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 30
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 34
    }
  }), opNames.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "innerBox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
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
        lineNumber: 60,
        columnNumber: 42
      }
    }));
  })), __jsx("div", {
    className: "asdass",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 42
    }
  }, opNames.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "innerNamebox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 38
      }
    }, __jsx("label", {
      htmlFor: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 82
      }
    }, item.name));
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 34
    }
  }))), __jsx("div", {
    className: "delOpButtons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "primary",
    onClick: submitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 47
    }
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 114
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 76,
      columnNumber: 21
    }
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))));
};

_s(DelOperator, "DMkVHxwG9KmlqH+KwwgUJ02NiZY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxPcGVyYXRvci50c3giXSwibmFtZXMiOlsiRGVsT3BlcmF0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYnJhbmQiLCJtYXAiLCJpdGVtIiwiY2hlY2tlZCIsIm5hbWUiLCJpZCIsIm9wTmFtZXMiLCJzZXRPcE5hbWVzIiwibmV3RGF0YSIsInVzZUVmZmVjdCIsImNoYW5nZUhhbmRsZXIiLCJjaGFuZ2VJZCIsIm5ld1N0YXRlIiwic2xpY2UiLCJvcEluZGV4IiwiZmluZEluZGV4Iiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXIiLCJmb3JTZW5kIiwiRGVsZXRlQnJhbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxXQUF1QyxHQUFHLFNBQTFDQSxXQUEwQyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDNUJDLHNEQUFRLENBQVUsS0FBVixDQURvQjtBQUFBLE1BQ3ZEQyxTQUR1RDtBQUFBLE1BQzVDQyxZQUQ0Qzs7QUFBQSxtQkFFaENGLHNEQUFRLENBQ2xDRCxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQVU7QUFDdEIsV0FBTztBQUFFQyxhQUFPLEVBQUUsS0FBWDtBQUFrQkMsVUFBSSxFQUFFRixJQUF4QjtBQUE4QkcsUUFBRSxFQUFFSDtBQUFsQyxLQUFQO0FBQ0gsR0FGRCxDQURrQyxDQUZ3QjtBQUFBLE1BRXZESSxPQUZ1RDtBQUFBLE1BRTlDQyxVQUY4Qzs7QUFROUQsV0FBU0MsT0FBVCxHQUFvQjtBQUNoQixRQUFJUixLQUFLLEdBQUdKLEtBQUssQ0FBQ0ksS0FBbEI7QUFDQU8sY0FBVSxDQUFDUCxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDM0IsYUFBTztBQUFD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QUEsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFESixDQTVCSixDQUZKLENBREo7QUFzQ0gsQ0F4RU07O0dBQU1ILFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmY2N2ZjMGE5YmMyOTliMmJiNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcblxyXG5pbnRlcmZhY2UgRGVsT3BlcmF0b3JQcm9wcyB7XHJcbiAgICBEZWxldGVCcmFuZChmb3JTZW5kOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbiAgICBicmFuZDogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxPcGVyYXRvcjpSZWFjdC5GQyA8RGVsT3BlcmF0b3JQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BOYW1lcywgc2V0T3BOYW1lc10gPSB1c2VTdGF0ZShcclxuICAgICAgICBwcm9wcy5icmFuZC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgY2hlY2tlZDogZmFsc2UsIG5hbWU6IGl0ZW0sIGlkOiBpdGVtIH07XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gbmV3RGF0YSAoKSB7XHJcbiAgICAgICAgbGV0IGJyYW5kID0gcHJvcHMuYnJhbmQ7XHJcbiAgICAgICAgc2V0T3BOYW1lcyhicmFuZC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtjaGVja2VkOiBmYWxzZSwgbmFtZTogaXRlbSwgaWQ6IGl0ZW19O1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBuZXdEYXRhKCk7XHJcbiAgICB9LCBbcHJvcHMuYnJhbmRdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VIYW5kbGVyIChjaGFuZ2VJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gb3BOYW1lcy5zbGljZSgpO1xyXG4gICAgICAgIGxldCBvcEluZGV4ID0gbmV3U3RhdGUuZmluZEluZGV4KCh7IGlkIH0pID0+IGlkID09PSBjaGFuZ2VJZCk7XHJcbiAgICAgICAgbmV3U3RhdGVbb3BJbmRleF0uY2hlY2tlZCA9ICFuZXdTdGF0ZVtvcEluZGV4XS5jaGVja2VkO1xyXG4gICAgICAgIHNldE9wTmFtZXMobmV3U3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IG9wTmFtZXMuZmlsdGVyKCh7IGNoZWNrZWQgfSkgPT4gIWNoZWNrZWQpO1xyXG4gICAgICAgIHNldE9wTmFtZXMobmV3U3RhdGUpO1xyXG4gICAgICAgIGxldCBmb3JTZW5kID0gb3BOYW1lcy5maWx0ZXIoKHsgY2hlY2tlZCB9KSA9PiBjaGVja2VkKS5tYXAoKGl0ZW0pPT5pdGVtLm5hbWUpO1xyXG4gICAgICAgIHByb3BzLkRlbGV0ZUJyYW5kKGZvclNlbmQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiZGVsT3BcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCl9Pjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVsT3BNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBjbG9zZVRpbWVvdXRNUz17NTAwfVxyXG4gICAgICAgICAgICAgICAgaXNPcGVuPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50TGFiZWw9XCJvblJlcXVlc3RDbG9zZSBFeGFtcGxlXCJcclxuICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCl9XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lPVwiT3ZlcmxheVwiXHJcbiAgICAgICAgICAgID48ZGl2IGNsYXNzTmFtZT1cIm91dGVyQ2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Z5aHloJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wTmFtZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiaW5uZXJCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gY2hhbmdlSGFuZGxlcihpdGVtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2l0ZW0uY2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvZGl2PikpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhc2Rhc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BOYW1lcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJpbm5lck5hbWVib3hcIj48bGFiZWwgaHRtbEZvcj17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L2xhYmVsPjwvZGl2PikpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsT3BCdXR0b25zXCI+PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e3N1Ym1pdEhhbmRsZXJ9PtCj0LTQsNC70LjRgtGMPC9CdXR0b24+IDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCghc2hvd01vZGFsKX0+0JfQsNC60YDRi9GC0Yw8L0J1dHRvbj48L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==