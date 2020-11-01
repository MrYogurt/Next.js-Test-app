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
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
      lineNumber: 54,
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
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "outerCheckbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 14
    }
  }, __jsx("form", {
    className: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 30
    }
  }, __jsx("div", {
    className: "vyhyh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 30
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 34
    }
  }), opNames.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "innerBox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
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
        lineNumber: 68,
        columnNumber: 42
      }
    }));
  })), __jsx("div", {
    className: "asdass",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 42
    }
  }, opNames.map(function (item) {
    return __jsx("div", {
      key: item.id,
      className: "innerNamebox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 38
      }
    }, __jsx("label", {
      htmlFor: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 82
      }
    }, item.name));
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 34
    }
  }))), __jsx("div", {
    className: "delOpButtons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "primary",
    onClick: submitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 47
    }
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 114
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxPcGVyYXRvci50c3giXSwibmFtZXMiOlsiRGVsT3BlcmF0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYnJhbmQiLCJtYXAiLCJpdGVtIiwiY2hlY2tlZCIsIm5hbWUiLCJpZCIsIm9wTmFtZXMiLCJzZXRPcE5hbWVzIiwidXNlRWZmZWN0IiwibmV3RGF0YSIsImNoYW5nZUhhbmRsZXIiLCJjaGFuZ2VJZCIsIm5ld1N0YXRlIiwic2xpY2UiLCJvcEluZGV4IiwiZmluZEluZGV4Iiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXIiLCJmb3JTZW5kIiwiRGVsZXRlQnJhbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxXQUF1QyxHQUFHLFNBQTFDQSxXQUEwQyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDNUJDLHNEQUFRLENBQVUsS0FBVixDQURvQjtBQUFBLE1BQ3ZEQyxTQUR1RDtBQUFBLE1BQzVDQyxZQUQ0Qzs7QUFBQSxtQkFFaENGLHNEQUFRLENBQ2xDRCxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQVU7QUFDdEIsV0FBTztBQUFFQyxhQUFPLEVBQUUsS0FBWDtBQUFrQkMsVUFBSSxFQUFFRixJQUF4QjtBQUE4QkcsUUFBRSxFQUFFSDtBQUFsQyxLQUFQO0FBQ0gsR0FGRCxDQURrQyxDQUZ3QjtBQUFBLE1BRXZESSxPQUZ1RDtBQUFBLE1BRTlDQyxVQUY4QyxrQkFROUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBR1IsYUFBU0MsT0FBVCxHQUFvQjtBQUNoQixVQUFJVCxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ksS0FBbEI7QUFDQU8sZ0JBQVUsQ0FB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QU1qQixZQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFsQjtBQUFBLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBREosQ0E1QkosQ0FGSixDQURKO0FBc0NILENBaEZNOztHQUFNSCxXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTE2MzJkNTNkNWRkMjE3YjExMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcblxyXG5pbnRlcmZhY2UgRGVsT3BlcmF0b3JQcm9wcyB7XHJcbiAgICBEZWxldGVCcmFuZChmb3JTZW5kOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbiAgICBicmFuZDogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxPcGVyYXRvcjpSZWFjdC5GQyA8RGVsT3BlcmF0b3JQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BOYW1lcywgc2V0T3BOYW1lc10gPSB1c2VTdGF0ZShcclxuICAgICAgICBwcm9wcy5icmFuZC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgY2hlY2tlZDogZmFsc2UsIG5hbWU6IGl0ZW0sIGlkOiBpdGVtIH07XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gbmV3RGF0YSAoYnJhbmQpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhicmFuZCk7XHJcbiAgICAvLyAgICAgc2V0T3BOYW1lcyhicmFuZC5tYXAoKGl0ZW0pID0+IHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHtjaGVja2VkOiBmYWxzZSwgbmFtZTogaXRlbSwgaWQ6IGl0ZW19O1xyXG4gICAgLy8gICAgIH0pKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG5ld0RhdGEgKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJyYW5kID0gcHJvcHMuYnJhbmQ7XHJcbiAgICAgICAgICAgICAgICBzZXRPcE5hbWVzKGJyYW5kLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Y2hlY2tlZDogZmFsc2UsIG5hbWU6IGl0ZW0sIGlkOiBpdGVtfTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdEYXRhKCk7XHJcbiAgICB9LCBbcHJvcHMuYnJhbmRdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VIYW5kbGVyIChjaGFuZ2VJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gb3BOYW1lcy5zbGljZSgpO1xyXG4gICAgICAgIGxldCBvcEluZGV4ID0gbmV3U3RhdGUuZmluZEluZGV4KCh7IGlkIH0pID0+IGlkID09PSBjaGFuZ2VJZCk7XHJcbiAgICAgICAgbmV3U3RhdGVbb3BJbmRleF0uY2hlY2tlZCA9ICFuZXdTdGF0ZVtvcEluZGV4XS5jaGVja2VkO1xyXG4gICAgICAgIHNldE9wTmFtZXMobmV3U3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IG9wTmFtZXMuZmlsdGVyKCh7IGNoZWNrZWQgfSkgPT4gIWNoZWNrZWQpO1xyXG4gICAgICAgIHNldE9wTmFtZXMobmV3U3RhdGUpO1xyXG4gICAgICAgIGxldCBmb3JTZW5kID0gb3BOYW1lcy5maWx0ZXIoKHsgY2hlY2tlZCB9KSA9PiBjaGVja2VkKS5tYXAoKGl0ZW0pPT5pdGVtLm5hbWUpO1xyXG4gICAgICAgIHByb3BzLkRlbGV0ZUJyYW5kKGZvclNlbmQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiZGVsT3BcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCl9Pjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVsT3BNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBjbG9zZVRpbWVvdXRNUz17NTAwfVxyXG4gICAgICAgICAgICAgICAgaXNPcGVuPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50TGFiZWw9XCJvblJlcXVlc3RDbG9zZSBFeGFtcGxlXCJcclxuICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCl9XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lPVwiT3ZlcmxheVwiXHJcbiAgICAgICAgICAgID48ZGl2IGNsYXNzTmFtZT1cIm91dGVyQ2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Z5aHloJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wTmFtZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiaW5uZXJCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gY2hhbmdlSGFuZGxlcihpdGVtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2l0ZW0uY2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvZGl2PikpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhc2Rhc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BOYW1lcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJpbm5lck5hbWVib3hcIj48bGFiZWwgaHRtbEZvcj17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L2xhYmVsPjwvZGl2PikpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsT3BCdXR0b25zXCI+PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e3N1Ym1pdEhhbmRsZXJ9PtCj0LTQsNC70LjRgtGMPC9CdXR0b24+IDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCghc2hvd01vZGFsKX0+0JfQsNC60YDRi9GC0Yw8L0J1dHRvbj48L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==