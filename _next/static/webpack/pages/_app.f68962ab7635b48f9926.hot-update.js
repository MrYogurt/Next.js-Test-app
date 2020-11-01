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
      setOpNames = _useState2[1];

  function newData() {
    var refreshData = props.brand.map(function (item) {
      return {
        checked: false,
        name: item,
        id: item
      };
    }); // return refreshData;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // let newData = props.brand.map((item) => {
    //     return { checked: false, name: item, id: item };
    // });
    setOpNames(newData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxPcGVyYXRvci50c3giXSwibmFtZXMiOlsiRGVsT3BlcmF0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYnJhbmQiLCJtYXAiLCJpdGVtIiwiY2hlY2tlZCIsIm5hbWUiLCJpZCIsIm9wTmFtZXMiLCJzZXRPcE5hbWVzIiwibmV3RGF0YSIsInJlZnJlc2hEYXRhIiwidXNlRWZmZWN0IiwiY2hhbmdlSGFuZGxlciIsImNoYW5nZUlkIiwibmV3U3RhdGUiLCJzbGljZSIsIm9wSW5kZXgiLCJmaW5kSW5kZXgiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZpbHRlciIsImZvclNlbmQiLCJEZWxldGVCcmFuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9PLElBQU1BLFdBQXVDLEdBQUcsU0FBMUNBLFdBQTBDLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUM1QkMsc0RBQVEsQ0FBVSxLQUFWLENBRG9CO0FBQUEsTUFDdkRDLFNBRHVEO0FBQUEsTUFDNUNDLFlBRDRDOztBQUFBLG1CQUVoQ0Ysc0RBQVEsQ0FDbENELEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUN0QixXQUFPO0FBQUVDLGFBQU8sRUFBRSxLQUFYO0FBQWtCQyxVQUFJLEVBQUVGLElBQXhCO0FBQThCRyxRQUFFLEVBQUVIO0FBQWxDLEtBQVA7QUFDSCxHQUZELENBRGtDLENBRndCO0FBQUEsTUFFdkRJLE9BRnVEO0FBQUEsTUFFOUNDLFVBRjhDOztBQVE5RCxXQUFTQyxPQUFULEdBQW9CO0FBQ2hCLFFBQUlDLFdBQVcsR0FBR2IsS0FBSyxDQUFDSSxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hDLGFBQU87QUFBRUMsZUFBTyxF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QUEsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFESixDQTVCSixDQUZKLENBREo7QUFzQ0gsQ0EzRU07O0dBQU1ILFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mNjg5NjJhYjc2MzViNDhmOTkyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmludGVyZmFjZSBEZWxPcGVyYXRvclByb3BzIHtcclxuICAgIERlbGV0ZUJyYW5kKGZvclNlbmQ6IHN0cmluZ1tdKTogdm9pZDtcclxuICAgIGJyYW5kOiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbE9wZXJhdG9yOlJlYWN0LkZDIDxEZWxPcGVyYXRvclByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcE5hbWVzLCBzZXRPcE5hbWVzXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgIHByb3BzLmJyYW5kLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBjaGVja2VkOiBmYWxzZSwgbmFtZTogaXRlbSwgaWQ6IGl0ZW0gfTtcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBuZXdEYXRhICgpIHtcclxuICAgICAgICBsZXQgcmVmcmVzaERhdGEgPSBwcm9wcy5icmFuZC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgY2hlY2tlZDogZmFsc2UsIG5hbWU6IGl0ZW0sIGlkOiBpdGVtIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHJlZnJlc2hEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gbGV0IG5ld0RhdGEgPSBwcm9wcy5icmFuZC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHsgY2hlY2tlZDogZmFsc2UsIG5hbWU6IGl0ZW0sIGlkOiBpdGVtIH07XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgc2V0T3BOYW1lcyhuZXdEYXRhKTtcclxuICAgIH0pXHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlSGFuZGxlciAoY2hhbmdlSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IG9wTmFtZXMuc2xpY2UoKTtcclxuICAgICAgICBsZXQgb3BJbmRleCA9IG5ld1N0YXRlLmZpbmRJbmRleCgoeyBpZCB9KSA9PiBpZCA9PT0gY2hhbmdlSWQpO1xyXG4gICAgICAgIG5ld1N0YXRlW29wSW5kZXhdLmNoZWNrZWQgPSAhbmV3U3RhdGVbb3BJbmRleF0uY2hlY2tlZDtcclxuICAgICAgICBzZXRPcE5hbWVzKG5ld1N0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0SGFuZGxlciAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQsIE1vdXNlRXZlbnQ+KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbmV3U3RhdGUgPSBvcE5hbWVzLmZpbHRlcigoeyBjaGVja2VkIH0pID0+ICFjaGVja2VkKTtcclxuICAgICAgICBzZXRPcE5hbWVzKG5ld1N0YXRlKTtcclxuICAgICAgICBsZXQgZm9yU2VuZCA9IG9wTmFtZXMuZmlsdGVyKCh7IGNoZWNrZWQgfSkgPT4gY2hlY2tlZCkubWFwKChpdGVtKT0+aXRlbS5uYW1lKTtcclxuICAgICAgICBwcm9wcy5EZWxldGVCcmFuZChmb3JTZW5kKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImRlbE9wXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpfT48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbE9wTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgY2xvc2VUaW1lb3V0TVM9ezUwMH1cclxuICAgICAgICAgICAgICAgIGlzT3Blbj17c2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgY29udGVudExhYmVsPVwib25SZXF1ZXN0Q2xvc2UgRXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4gc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpfVxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cIk92ZXJsYXlcIlxyXG4gICAgICAgICAgICA+PGRpdiBjbGFzc05hbWU9XCJvdXRlckNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2eWh5aCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcE5hbWVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cImlubmVyQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGNoYW5nZUhhbmRsZXIoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpdGVtLmNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L2Rpdj4pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXNkYXNzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wTmFtZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiaW5uZXJOYW1lYm94XCI+PGxhYmVsIGh0bWxGb3I9e2l0ZW0uaWR9PntpdGVtLm5hbWV9PC9sYWJlbD48L2Rpdj4pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbE9wQnV0dG9uc1wiPjxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtzdWJtaXRIYW5kbGVyfT7Qo9C00LDQu9C40YLRjDwvQnV0dG9uPiA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCl9PtCX0LDQutGA0YvRgtGMPC9CdXR0b24+PC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=