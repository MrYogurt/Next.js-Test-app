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
    var refreshData = props.brand.map(function (item) {
      return {
        checked: false,
        name: item,
        id: item
      };
    });
    return refreshData;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // let newData = props.brand.map((item) => {
    //     return { checked: false, name: item, id: item };
    // });
    setOpNames(refreshData);
  });

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
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "outerCheckbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 14
    }
  }, __jsx("form", {
    className: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 30
    }
  }, __jsx("div", {
    className: "vyhyh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 30
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 34
    }
  }), opNames.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "innerBox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
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
        lineNumber: 63,
        columnNumber: 42
      }
    }));
  })), __jsx("div", {
    className: "asdass",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 42
    }
  }, opNames.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "innerNamebox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 38
      }
    }, __jsx("label", {
      htmlFor: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 82
      }
    }, item.name));
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 34
    }
  }))), __jsx("div", {
    className: "delOpButtons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "primary",
    onClick: submitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 47
    }
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 114
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 79,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxPcGVyYXRvci50c3giXSwibmFtZXMiOlsiRGVsT3BlcmF0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYnJhbmQiLCJtYXAiLCJpdGVtIiwiY2hlY2tlZCIsIm5hbWUiLCJpZCIsIm9wTmFtZXMiLCJzZXRPcE5hbWVzIiwibmV3RGF0YSIsInJlZnJlc2hEYXRhIiwidXNlRWZmZWN0IiwiY2hhbmdlSGFuZGxlciIsImNoYW5nZUlkIiwibmV3U3RhdGUiLCJzbGljZSIsIm9wSW5kZXgiLCJmaW5kSW5kZXgiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZpbHRlciIsImZvclNlbmQiLCJEZWxldGVCcmFuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9PLElBQU1BLFdBQXVDLEdBQUcsU0FBMUNBLFdBQTBDLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUM1QkMsc0RBQVEsQ0FBVSxLQUFWLENBRG9CO0FBQUEsTUFDdkRDLFNBRHVEO0FBQUEsTUFDNUNDLFlBRDRDOztBQUFBLG1CQUVoQ0Ysc0RBQVEsQ0FDbENELEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUN0QixXQUFPO0FBQUVDLGFBQU8sRUFBRSxLQUFYO0FBQWtCQyxVQUFJLEVBQUVGLElBQXhCO0FBQThCRyxRQUFFLEVBQUVIO0FBQWxDLEtBQVA7QUFDSCxHQUZELENBRGtDLENBRndCO0FBQUEsTUFFdkRJLE9BRnVEO0FBQUEsTUFFOUNDLFVBRjhDOztBQVE5RCxXQUFTQyxPQUFULEdBQW9CO0FBQ2hCLFFBQUlDLFdBQVcsR0FBR2IsS0FBSyxDQUFDSSxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hDLGFBQU87QUFBRUMsZUFBTyxF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QjtBQUFBLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBREosQ0E1QkosQ0FGSixDQURKO0FBc0NILENBM0VNOztHQUFNSCxXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg2YTE3NmE2MDFkNGE0ZmU0OWYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5cclxuaW50ZXJmYWNlIERlbE9wZXJhdG9yUHJvcHMge1xyXG4gICAgRGVsZXRlQnJhbmQoZm9yU2VuZDogc3RyaW5nW10pOiB2b2lkO1xyXG4gICAgYnJhbmQ6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVsT3BlcmF0b3I6UmVhY3QuRkMgPERlbE9wZXJhdG9yUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW29wTmFtZXMsIHNldE9wTmFtZXNdID0gdXNlU3RhdGUoXHJcbiAgICAgICAgcHJvcHMuYnJhbmQubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGNoZWNrZWQ6IGZhbHNlLCBuYW1lOiBpdGVtLCBpZDogaXRlbSB9O1xyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIG5ld0RhdGEgKCkge1xyXG4gICAgICAgIGxldCByZWZyZXNoRGF0YSA9IHByb3BzLmJyYW5kLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBjaGVja2VkOiBmYWxzZSwgbmFtZTogaXRlbSwgaWQ6IGl0ZW0gfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVmcmVzaERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBsZXQgbmV3RGF0YSA9IHByb3BzLmJyYW5kLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4geyBjaGVja2VkOiBmYWxzZSwgbmFtZTogaXRlbSwgaWQ6IGl0ZW0gfTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBzZXRPcE5hbWVzKHJlZnJlc2hEYXRhKTtcclxuICAgIH0pXHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlSGFuZGxlciAoY2hhbmdlSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IG9wTmFtZXMuc2xpY2UoKTtcclxuICAgICAgICBsZXQgb3BJbmRleCA9IG5ld1N0YXRlLmZpbmRJbmRleCgoeyBpZCB9KSA9PiBpZCA9PT0gY2hhbmdlSWQpO1xyXG4gICAgICAgIG5ld1N0YXRlW29wSW5kZXhdLmNoZWNrZWQgPSAhbmV3U3RhdGVbb3BJbmRleF0uY2hlY2tlZDtcclxuICAgICAgICBzZXRPcE5hbWVzKG5ld1N0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0SGFuZGxlciAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQsIE1vdXNlRXZlbnQ+KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbmV3U3RhdGUgPSBvcE5hbWVzLmZpbHRlcigoeyBjaGVja2VkIH0pID0+ICFjaGVja2VkKTtcclxuICAgICAgICBzZXRPcE5hbWVzKG5ld1N0YXRlKTtcclxuICAgICAgICBsZXQgZm9yU2VuZCA9IG9wTmFtZXMuZmlsdGVyKCh7IGNoZWNrZWQgfSkgPT4gY2hlY2tlZCkubWFwKChpdGVtKT0+aXRlbS5uYW1lKTtcclxuICAgICAgICBwcm9wcy5EZWxldGVCcmFuZChmb3JTZW5kKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImRlbE9wXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpfT48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbE9wTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgY2xvc2VUaW1lb3V0TVM9ezUwMH1cclxuICAgICAgICAgICAgICAgIGlzT3Blbj17c2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgY29udGVudExhYmVsPVwib25SZXF1ZXN0Q2xvc2UgRXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4gc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpfVxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cIk92ZXJsYXlcIlxyXG4gICAgICAgICAgICA+PGRpdiBjbGFzc05hbWU9XCJvdXRlckNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2eWh5aCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcE5hbWVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cImlubmVyQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGNoYW5nZUhhbmRsZXIoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpdGVtLmNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L2Rpdj4pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXNkYXNzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wTmFtZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiaW5uZXJOYW1lYm94XCI+PGxhYmVsIGh0bWxGb3I9e2l0ZW0uaWR9PntpdGVtLm5hbWV9PC9sYWJlbD48L2Rpdj4pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbE9wQnV0dG9uc1wiPjxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtzdWJtaXRIYW5kbGVyfT7Qo9C00LDQu9C40YLRjDwvQnV0dG9uPiA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCl9PtCX0LDQutGA0YvRgtGMPC9CdXR0b24+PC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=