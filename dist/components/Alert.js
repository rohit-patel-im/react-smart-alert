"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("../styles.css");
var _reactRedux = require("react-redux");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Alert = function Alert(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state.alert || {};
  });
  var message = state.message,
    type = state.type,
    visible = state.visible;
  if (!visible) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "alert alert-".concat(type, " ").concat(className)
  }, message);
};
var _default = exports["default"] = Alert;