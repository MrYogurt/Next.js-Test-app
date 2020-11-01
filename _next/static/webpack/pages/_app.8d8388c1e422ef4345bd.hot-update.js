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
    setOpNames(brand.map(function (item) {
      return {
        checked: false,
        name: item,
        id: item
      };
    }));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function newData(brand) {
      console.log(brand);
      setOpNames(brand.map(function (item) {
        return {
          checked: false,
          name: item,
          id: item
        };
      }));
    } // newData(props.brand);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxPcGVyYXRvci50c3giXSwibmFtZXMiOlsiRGVsT3BlcmF0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYnJhbmQiLCJtYXAiLCJpdGVtIiwiY2hlY2tlZCIsIm5hbWUiLCJpZCIsIm9wTmFtZXMiLCJzZXRPcE5hbWVzIiwibmV3RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJjaGFuZ2VIYW5kbGVyIiwiY2hhbmdlSWQiLCJuZXdTdGF0ZSIsInNsaWNlIiwib3BJbmRleCIsImZpbmRJbmRleCIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyIiwiZm9yU2VuZCIsIkRlbGV0ZUJyYW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT08sSUFBTUEsV0FBdUMsR0FBRyxTQUExQ0EsV0FBMEMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQzVCQyxzREFBUSxDQUFVLEtBQVYsQ0FEb0I7QUFBQSxNQUN2REMsU0FEdUQ7QUFBQSxNQUM1Q0MsWUFENEM7O0FBQUEsbUJBRWhDRixzREFBUSxDQUNsQ0QsS0FBSyxDQUFDSSxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RCLFdBQU87QUFBRUMsYUFBTyxFQUFFLEtBQVg7QUFBa0JDLFVBQUksRUFBRUYsSUFBeEI7QUFBOEJHLFFBQUUsRUFBRUg7QUFBbEMsS0FBUDtBQUNILEdBRkQsQ0FEa0MsQ0FGd0I7QUFBQSxNQUV2REksT0FGdUQ7QUFBQSxNQUU5Q0MsVUFGOEM7O0FBUTlELFdBQVNDLE9BQVQsQ0FBa0JSLEtBQWxCLEVBQXlCO0FBQ3JCUyxXQUFPLENBQUNDLEdBQVIsQ0FBWVYsS0FBWjtBQUNBTyxjQUFVLENBQUNQLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLElB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFBOUIsT0FBaUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFqRyxFQUF1RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXZHLEVBQ0ksTUFBQyw4REFBRDtBQUFRLFdBQU8sRUFBQyxRQUFoQjtBQUF5QixXQUFPLEVBQUU7QUFBQSxhQUFNbkIsWUFBWSxDQUFDLENBQUNELFNBQUYsQ0FBbEI7QUFBQSxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQURKLENBNUJKLENBRkosQ0FESjtBQXNDSCxDQTlFTTs7R0FBTUgsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhkODM4OGMxZTQyMmVmNDM0NWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5cclxuaW50ZXJmYWNlIERlbE9wZXJhdG9yUHJvcHMge1xyXG4gICAgRGVsZXRlQnJhbmQoZm9yU2VuZDogc3RyaW5nW10pOiB2b2lkO1xyXG4gICAgYnJhbmQ6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVsT3BlcmF0b3I6UmVhY3QuRkMgPERlbE9wZXJhdG9yUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW29wTmFtZXMsIHNldE9wTmFtZXNdID0gdXNlU3RhdGUoXHJcbiAgICAgICAgcHJvcHMuYnJhbmQubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGNoZWNrZWQ6IGZhbHNlLCBuYW1lOiBpdGVtLCBpZDogaXRlbSB9O1xyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIG5ld0RhdGEgKGJyYW5kKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYnJhbmQpO1xyXG4gICAgICAgIHNldE9wTmFtZXMoYnJhbmQubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Y2hlY2tlZDogZmFsc2UsIG5hbWU6IGl0ZW0sIGlkOiBpdGVtfTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiBuZXdEYXRhIChicmFuZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhicmFuZCk7XHJcbiAgICAgICAgICAgIHNldE9wTmFtZXMoYnJhbmQubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge2NoZWNrZWQ6IGZhbHNlLCBuYW1lOiBpdGVtLCBpZDogaXRlbX07XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbmV3RGF0YShwcm9wcy5icmFuZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VIYW5kbGVyIChjaGFuZ2VJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gb3BOYW1lcy5zbGljZSgpO1xyXG4gICAgICAgIGxldCBvcEluZGV4ID0gbmV3U3RhdGUuZmluZEluZGV4KCh7IGlkIH0pID0+IGlkID09PSBjaGFuZ2VJZCk7XHJcbiAgICAgICAgbmV3U3RhdGVbb3BJbmRleF0uY2hlY2tlZCA9ICFuZXdTdGF0ZVtvcEluZGV4XS5jaGVja2VkO1xyXG4gICAgICAgIHNldE9wTmFtZXMobmV3U3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IG9wTmFtZXMuZmlsdGVyKCh7IGNoZWNrZWQgfSkgPT4gIWNoZWNrZWQpO1xyXG4gICAgICAgIHNldE9wTmFtZXMobmV3U3RhdGUpO1xyXG4gICAgICAgIGxldCBmb3JTZW5kID0gb3BOYW1lcy5maWx0ZXIoKHsgY2hlY2tlZCB9KSA9PiBjaGVja2VkKS5tYXAoKGl0ZW0pPT5pdGVtLm5hbWUpO1xyXG4gICAgICAgIHByb3BzLkRlbGV0ZUJyYW5kKGZvclNlbmQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiZGVsT3BcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCl9Pjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVsT3BNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBjbG9zZVRpbWVvdXRNUz17NTAwfVxyXG4gICAgICAgICAgICAgICAgaXNPcGVuPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50TGFiZWw9XCJvblJlcXVlc3RDbG9zZSBFeGFtcGxlXCJcclxuICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCl9XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lPVwiT3ZlcmxheVwiXHJcbiAgICAgICAgICAgID48ZGl2IGNsYXNzTmFtZT1cIm91dGVyQ2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Z5aHloJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wTmFtZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiaW5uZXJCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gY2hhbmdlSGFuZGxlcihpdGVtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2l0ZW0uY2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvZGl2PikpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhc2Rhc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BOYW1lcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJpbm5lck5hbWVib3hcIj48bGFiZWwgaHRtbEZvcj17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L2xhYmVsPjwvZGl2PikpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsT3BCdXR0b25zXCI+PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e3N1Ym1pdEhhbmRsZXJ9PtCj0LTQsNC70LjRgtGMPC9CdXR0b24+IDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCghc2hvd01vZGFsKX0+0JfQsNC60YDRi9GC0Yw8L0J1dHRvbj48L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==