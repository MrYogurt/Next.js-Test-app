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
      setOpNames = _useState2[1]; // function newData (brand) {
  //     console.log(brand);
  //     setOpNames(brand.map((item) => {
  //         return {checked: false, name: item, id: item};
  //     }));
  // }


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var brand = props.brand;

    function newData() {
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
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 53,
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
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "outerCheckbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 14
    }
  }, __jsx("form", {
    className: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 30
    }
  }, __jsx("div", {
    className: "vyhyh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 30
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 34
    }
  }), opNames.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "innerBox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
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
        lineNumber: 67,
        columnNumber: 42
      }
    }));
  })), __jsx("div", {
    className: "asdass",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 42
    }
  }, opNames.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "innerNamebox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 38
      }
    }, __jsx("label", {
      htmlFor: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 82
      }
    }, item.name));
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 34
    }
  }))), __jsx("div", {
    className: "delOpButtons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "primary",
    onClick: submitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 47
    }
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 114
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxPcGVyYXRvci50c3giXSwibmFtZXMiOlsiRGVsT3BlcmF0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYnJhbmQiLCJtYXAiLCJpdGVtIiwiY2hlY2tlZCIsIm5hbWUiLCJpZCIsIm9wTmFtZXMiLCJzZXRPcE5hbWVzIiwidXNlRWZmZWN0IiwibmV3RGF0YSIsImNoYW5nZUhhbmRsZXIiLCJjaGFuZ2VJZCIsIm5ld1N0YXRlIiwic2xpY2UiLCJvcEluZGV4IiwiZmluZEluZGV4Iiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXIiLCJmb3JTZW5kIiwiRGVsZXRlQnJhbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxXQUF1QyxHQUFHLFNBQTFDQSxXQUEwQyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDNUJDLHNEQUFRLENBQVUsS0FBVixDQURvQjtBQUFBLE1BQ3ZEQyxTQUR1RDtBQUFBLE1BQzVDQyxZQUQ0Qzs7QUFBQSxtQkFFaENGLHNEQUFRLENBQ2xDRCxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQVU7QUFDdEIsV0FBTztBQUFFQyxhQUFPLEVBQUUsS0FBWDtBQUFrQkMsVUFBSSxFQUFFRixJQUF4QjtBQUE4QkcsUUFBRSxFQUFFSDtBQUFsQyxLQUFQO0FBQ0gsR0FGRCxDQURrQyxDQUZ3QjtBQUFBLE1BRXZESSxPQUZ1RDtBQUFBLE1BRTlDQyxVQUY4QyxrQkFROUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBRVIsUUFBSVIsS0FBSyxHQUFHSixLQUFLLENBQUNJLEtBQWxCOztBQUNBLGFBQVNTLE9BQVQsR0FBb0I7QUFDaEJGLGdCQUFVLENB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QUFNakIsWUFBWSxDQUFDLENBQUNELFNBQUYsQ0FBbEI7QUFBQSxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQURKLENBNUJKLENBRkosQ0FESjtBQXNDSCxDQS9FTTs7R0FBTUgsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYTlhMjc2MjE4NTEzOTQ1MjUyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmludGVyZmFjZSBEZWxPcGVyYXRvclByb3BzIHtcclxuICAgIERlbGV0ZUJyYW5kKGZvclNlbmQ6IHN0cmluZ1tdKTogdm9pZDtcclxuICAgIGJyYW5kOiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbE9wZXJhdG9yOlJlYWN0LkZDIDxEZWxPcGVyYXRvclByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcE5hbWVzLCBzZXRPcE5hbWVzXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgIHByb3BzLmJyYW5kLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBjaGVja2VkOiBmYWxzZSwgbmFtZTogaXRlbSwgaWQ6IGl0ZW0gfTtcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBmdW5jdGlvbiBuZXdEYXRhIChicmFuZCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGJyYW5kKTtcclxuICAgIC8vICAgICBzZXRPcE5hbWVzKGJyYW5kLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4ge2NoZWNrZWQ6IGZhbHNlLCBuYW1lOiBpdGVtLCBpZDogaXRlbX07XHJcbiAgICAvLyAgICAgfSkpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgYnJhbmQgPSBwcm9wcy5icmFuZDtcclxuICAgICAgICAgICAgZnVuY3Rpb24gbmV3RGF0YSAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRPcE5hbWVzKGJyYW5kLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Y2hlY2tlZDogZmFsc2UsIG5hbWU6IGl0ZW0sIGlkOiBpdGVtfTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdEYXRhKCk7XHJcbiAgICB9LCBbcHJvcHMuYnJhbmRdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VIYW5kbGVyIChjaGFuZ2VJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gb3BOYW1lcy5zbGljZSgpO1xyXG4gICAgICAgIGxldCBvcEluZGV4ID0gbmV3U3RhdGUuZmluZEluZGV4KCh7IGlkIH0pID0+IGlkID09PSBjaGFuZ2VJZCk7XHJcbiAgICAgICAgbmV3U3RhdGVbb3BJbmRleF0uY2hlY2tlZCA9ICFuZXdTdGF0ZVtvcEluZGV4XS5jaGVja2VkO1xyXG4gICAgICAgIHNldE9wTmFtZXMobmV3U3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IG9wTmFtZXMuZmlsdGVyKCh7IGNoZWNrZWQgfSkgPT4gIWNoZWNrZWQpO1xyXG4gICAgICAgIHNldE9wTmFtZXMobmV3U3RhdGUpO1xyXG4gICAgICAgIGxldCBmb3JTZW5kID0gb3BOYW1lcy5maWx0ZXIoKHsgY2hlY2tlZCB9KSA9PiBjaGVja2VkKS5tYXAoKGl0ZW0pPT5pdGVtLm5hbWUpO1xyXG4gICAgICAgIHByb3BzLkRlbGV0ZUJyYW5kKGZvclNlbmQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiZGVsT3BcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCl9Pjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVsT3BNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBjbG9zZVRpbWVvdXRNUz17NTAwfVxyXG4gICAgICAgICAgICAgICAgaXNPcGVuPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50TGFiZWw9XCJvblJlcXVlc3RDbG9zZSBFeGFtcGxlXCJcclxuICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCl9XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lPVwiT3ZlcmxheVwiXHJcbiAgICAgICAgICAgID48ZGl2IGNsYXNzTmFtZT1cIm91dGVyQ2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Z5aHloJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wTmFtZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiaW5uZXJCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gY2hhbmdlSGFuZGxlcihpdGVtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2l0ZW0uY2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvZGl2PikpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhc2Rhc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BOYW1lcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJpbm5lck5hbWVib3hcIj48bGFiZWwgaHRtbEZvcj17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L2xhYmVsPjwvZGl2PikpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsT3BCdXR0b25zXCI+PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e3N1Ym1pdEhhbmRsZXJ9PtCj0LTQsNC70LjRgtGMPC9CdXR0b24+IDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCghc2hvd01vZGFsKX0+0JfQsNC60YDRi9GC0Yw8L0J1dHRvbj48L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==