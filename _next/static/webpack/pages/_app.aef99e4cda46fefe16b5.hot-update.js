webpackHotUpdate_N_E("pages/_app",{

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
      setOpNames = _useState2[1]; // function newData (brand) {
  //     console.log(brand);
  //     setOpNames(brand.map((item) => {
  //         return {checked: false, name: item, id: item};
  //     }));
  // }


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 52,
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
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "outerCheckbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 14
    }
  }, __jsx("form", {
    className: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 30
    }
  }, __jsx("div", {
    className: "vyhyh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 30
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 34
    }
  }), opNames.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "innerBox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
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
        lineNumber: 66,
        columnNumber: 42
      }
    }));
  })), __jsx("div", {
    className: "asdass",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 42
    }
  }, opNames.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "innerNamebox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 38
      }
    }, __jsx("label", {
      htmlFor: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 82
      }
    }, item.name));
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 34
    }
  }))), __jsx("div", {
    className: "delOpButtons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "primary",
    onClick: submitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 47
    }
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 114
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxPcGVyYXRvci50c3giXSwibmFtZXMiOlsiRGVsT3BlcmF0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYnJhbmQiLCJtYXAiLCJpdGVtIiwiY2hlY2tlZCIsIm5hbWUiLCJpZCIsIm9wTmFtZXMiLCJzZXRPcE5hbWVzIiwidXNlRWZmZWN0IiwibmV3RGF0YSIsImNoYW5nZUhhbmRsZXIiLCJjaGFuZ2VJZCIsIm5ld1N0YXRlIiwic2xpY2UiLCJvcEluZGV4IiwiZmluZEluZGV4Iiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXIiLCJmb3JTZW5kIiwiRGVsZXRlQnJhbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxXQUF1QyxHQUFHLFNBQTFDQSxXQUEwQyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDNUJDLHNEQUFRLENBQVUsS0FBVixDQURvQjtBQUFBLE1BQ3ZEQyxTQUR1RDtBQUFBLE1BQzVDQyxZQUQ0Qzs7QUFBQSxtQkFFaENGLHNEQUFRLENBQ2xDRCxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQVU7QUFDdEIsV0FBTztBQUFFQyxhQUFPLEVBQUUsS0FBWDtBQUFrQkMsVUFBSSxFQUFFRixJQUF4QjtBQUE4QkcsUUFBRSxFQUFFSDtBQUFsQyxLQUFQO0FBQ0gsR0FGRCxDQURrQyxDQUZ3QjtBQUFBLE1BRXZESSxPQUZ1RDtBQUFBLE1BRTlDQyxVQUY4QyxrQkFROUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1IsYUFBU0MsT0FBVCxHQUFvQjtBQUNoQixVQUFJVCxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ksS0FBbEI7QUFDQU8sZ0JBQVUsQ0FB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QU1qQixZQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFsQjtBQUFBLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBREosQ0E1QkosQ0FGSixDQURKO0FBc0NILENBOUVNOztHQUFNSCxXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYWVmOTllNGNkYTQ2ZmVmZTE2YjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcblxyXG5pbnRlcmZhY2UgRGVsT3BlcmF0b3JQcm9wcyB7XHJcbiAgICBEZWxldGVCcmFuZChmb3JTZW5kOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbiAgICBicmFuZDogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxPcGVyYXRvcjpSZWFjdC5GQyA8RGVsT3BlcmF0b3JQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BOYW1lcywgc2V0T3BOYW1lc10gPSB1c2VTdGF0ZShcclxuICAgICAgICBwcm9wcy5icmFuZC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgY2hlY2tlZDogZmFsc2UsIG5hbWU6IGl0ZW0sIGlkOiBpdGVtIH07XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gbmV3RGF0YSAoYnJhbmQpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhicmFuZCk7XHJcbiAgICAvLyAgICAgc2V0T3BOYW1lcyhicmFuZC5tYXAoKGl0ZW0pID0+IHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHtjaGVja2VkOiBmYWxzZSwgbmFtZTogaXRlbSwgaWQ6IGl0ZW19O1xyXG4gICAgLy8gICAgIH0pKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBuZXdEYXRhICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBicmFuZCA9IHByb3BzLmJyYW5kO1xyXG4gICAgICAgICAgICAgICAgc2V0T3BOYW1lcyhicmFuZC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2NoZWNrZWQ6IGZhbHNlLCBuYW1lOiBpdGVtLCBpZDogaXRlbX07XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3RGF0YSgpO1xyXG4gICAgfSwgW3Byb3BzLmJyYW5kXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlSGFuZGxlciAoY2hhbmdlSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IG9wTmFtZXMuc2xpY2UoKTtcclxuICAgICAgICBsZXQgb3BJbmRleCA9IG5ld1N0YXRlLmZpbmRJbmRleCgoeyBpZCB9KSA9PiBpZCA9PT0gY2hhbmdlSWQpO1xyXG4gICAgICAgIG5ld1N0YXRlW29wSW5kZXhdLmNoZWNrZWQgPSAhbmV3U3RhdGVbb3BJbmRleF0uY2hlY2tlZDtcclxuICAgICAgICBzZXRPcE5hbWVzKG5ld1N0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0SGFuZGxlciAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQsIE1vdXNlRXZlbnQ+KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbmV3U3RhdGUgPSBvcE5hbWVzLmZpbHRlcigoeyBjaGVja2VkIH0pID0+ICFjaGVja2VkKTtcclxuICAgICAgICBzZXRPcE5hbWVzKG5ld1N0YXRlKTtcclxuICAgICAgICBsZXQgZm9yU2VuZCA9IG9wTmFtZXMuZmlsdGVyKCh7IGNoZWNrZWQgfSkgPT4gY2hlY2tlZCkubWFwKChpdGVtKT0+aXRlbS5uYW1lKTtcclxuICAgICAgICBwcm9wcy5EZWxldGVCcmFuZChmb3JTZW5kKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImRlbE9wXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpfT48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbE9wTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgY2xvc2VUaW1lb3V0TVM9ezUwMH1cclxuICAgICAgICAgICAgICAgIGlzT3Blbj17c2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgY29udGVudExhYmVsPVwib25SZXF1ZXN0Q2xvc2UgRXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4gc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpfVxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cIk92ZXJsYXlcIlxyXG4gICAgICAgICAgICA+PGRpdiBjbGFzc05hbWU9XCJvdXRlckNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2eWh5aCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcE5hbWVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cImlubmVyQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGNoYW5nZUhhbmRsZXIoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpdGVtLmNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L2Rpdj4pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXNkYXNzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wTmFtZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiaW5uZXJOYW1lYm94XCI+PGxhYmVsIGh0bWxGb3I9e2l0ZW0uaWR9PntpdGVtLm5hbWV9PC9sYWJlbD48L2Rpdj4pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbE9wQnV0dG9uc1wiPjxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtzdWJtaXRIYW5kbGVyfT7Qo9C00LDQu9C40YLRjDwvQnV0dG9uPiA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCl9PtCX0LDQutGA0YvRgtGMPC9CdXR0b24+PC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=