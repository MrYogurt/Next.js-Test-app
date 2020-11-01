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

  function newData(brand) {
    console.log(brand);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // let newData = props.brand.map((item) => {
    //     return { checked: false, name: item, id: item };
    // });
    // setOpNames(newData);
    newData(props.brand);
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
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 47,
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
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "outerCheckbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 14
    }
  }, __jsx("form", {
    className: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 30
    }
  }, __jsx("div", {
    className: "vyhyh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 30
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 34
    }
  }), opNames.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "innerBox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
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
        lineNumber: 61,
        columnNumber: 42
      }
    }));
  })), __jsx("div", {
    className: "asdass",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 42
    }
  }, opNames.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "innerNamebox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 38
      }
    }, __jsx("label", {
      htmlFor: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 82
      }
    }, item.name));
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 34
    }
  }))), __jsx("div", {
    className: "delOpButtons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "primary",
    onClick: submitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 47
    }
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 114
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
      lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxPcGVyYXRvci50c3giXSwibmFtZXMiOlsiRGVsT3BlcmF0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYnJhbmQiLCJtYXAiLCJpdGVtIiwiY2hlY2tlZCIsIm5hbWUiLCJpZCIsIm9wTmFtZXMiLCJzZXRPcE5hbWVzIiwibmV3RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJjaGFuZ2VIYW5kbGVyIiwiY2hhbmdlSWQiLCJuZXdTdGF0ZSIsInNsaWNlIiwib3BJbmRleCIsImZpbmRJbmRleCIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyIiwiZm9yU2VuZCIsIkRlbGV0ZUJyYW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT08sSUFBTUEsV0FBdUMsR0FBRyxTQUExQ0EsV0FBMEMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQzVCQyxzREFBUSxDQUFVLEtBQVYsQ0FEb0I7QUFBQSxNQUN2REMsU0FEdUQ7QUFBQSxNQUM1Q0MsWUFENEM7O0FBQUEsbUJBRWhDRixzREFBUSxDQUNsQ0QsS0FBSyxDQUFDSSxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RCLFdBQU87QUFBRUMsYUFBTyxFQUFFLEtBQVg7QUFBa0JDLFVBQUksRUFBRUYsSUFBeEI7QUFBOEJHLFFBQUUsRUFBRUg7QUFBbEMsS0FBUDtBQUNILEdBRkQsQ0FEa0MsQ0FGd0I7QUFBQSxNQUV2REksT0FGdUQ7QUFBQSxNQUU5Q0MsVUFGOEM7O0FBUTlELFdBQVNDLE9BQVQsQ0FBa0JSLEtBQWxCLEVBQXlCO0FBQ3JCUyxXQUFPLENBQUNDLEdBQVIsQ0FBWVYsS0FBWjtBQUNIOztBQUVEVyx5REFBUyxDQUFDLFlBQU07QUFDWjtBQUNBO0FBQ0E7QUFD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cGFnZXMvX2FwcC40ZWExM2UwODMyYWUwZTc4OTRjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmludGVyZmFjZSBEZWxPcGVyYXRvclByb3BzIHtcclxuICAgIERlbGV0ZUJyYW5kKGZvclNlbmQ6IHN0cmluZ1tdKTogdm9pZDtcclxuICAgIGJyYW5kOiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbE9wZXJhdG9yOlJlYWN0LkZDIDxEZWxPcGVyYXRvclByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcE5hbWVzLCBzZXRPcE5hbWVzXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgIHByb3BzLmJyYW5kLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBjaGVja2VkOiBmYWxzZSwgbmFtZTogaXRlbSwgaWQ6IGl0ZW0gfTtcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBuZXdEYXRhIChicmFuZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJyYW5kKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIGxldCBuZXdEYXRhID0gcHJvcHMuYnJhbmQubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB7IGNoZWNrZWQ6IGZhbHNlLCBuYW1lOiBpdGVtLCBpZDogaXRlbSB9O1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIHNldE9wTmFtZXMobmV3RGF0YSk7XHJcbiAgICAgICAgbmV3RGF0YShwcm9wcy5icmFuZCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUhhbmRsZXIgKGNoYW5nZUlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgbmV3U3RhdGUgPSBvcE5hbWVzLnNsaWNlKCk7XHJcbiAgICAgICAgbGV0IG9wSW5kZXggPSBuZXdTdGF0ZS5maW5kSW5kZXgoKHsgaWQgfSkgPT4gaWQgPT09IGNoYW5nZUlkKTtcclxuICAgICAgICBuZXdTdGF0ZVtvcEluZGV4XS5jaGVja2VkID0gIW5ld1N0YXRlW29wSW5kZXhdLmNoZWNrZWQ7XHJcbiAgICAgICAgc2V0T3BOYW1lcyhuZXdTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIgKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50LCBNb3VzZUV2ZW50Pikge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gb3BOYW1lcy5maWx0ZXIoKHsgY2hlY2tlZCB9KSA9PiAhY2hlY2tlZCk7XHJcbiAgICAgICAgc2V0T3BOYW1lcyhuZXdTdGF0ZSk7XHJcbiAgICAgICAgbGV0IGZvclNlbmQgPSBvcE5hbWVzLmZpbHRlcigoeyBjaGVja2VkIH0pID0+IGNoZWNrZWQpLm1hcCgoaXRlbSk9Pml0ZW0ubmFtZSk7XHJcbiAgICAgICAgcHJvcHMuRGVsZXRlQnJhbmQoZm9yU2VuZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzc05hbWU9XCJkZWxPcFwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCghc2hvd01vZGFsKX0+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWxPcE1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGNsb3NlVGltZW91dE1TPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBpc09wZW49e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnRMYWJlbD1cIm9uUmVxdWVzdENsb3NlIEV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHNldFNob3dNb2RhbCghc2hvd01vZGFsKX1cclxuICAgICAgICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJPdmVybGF5XCJcclxuICAgICAgICAgICAgPjxkaXYgY2xhc3NOYW1lPVwib3V0ZXJDaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndnloeWgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BOYW1lcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJpbm5lckJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBjaGFuZ2VIYW5kbGVyKGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXRlbS5jaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC9kaXY+KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FzZGFzcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcE5hbWVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cImlubmVyTmFtZWJveFwiPjxsYWJlbCBodG1sRm9yPXtpdGVtLmlkfT57aXRlbS5uYW1lfTwvbGFiZWw+PC9kaXY+KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWxPcEJ1dHRvbnNcIj48QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17c3VibWl0SGFuZGxlcn0+0KPQtNCw0LvQuNGC0Yw8L0J1dHRvbj4gPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpfT7Ql9Cw0LrRgNGL0YLRjDwvQnV0dG9uPjwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9