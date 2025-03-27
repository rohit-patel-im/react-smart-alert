"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Alert = function Alert() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.alert || {};
    }),
    message = _useSelector.message,
    type = _useSelector.type,
    visible = _useSelector.visible;
  if (!visible) return null;
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: [styles.alert, styles[type]]
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.text
  }, message));
};
var styles = _reactNative.StyleSheet.create({
  alert: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    padding: 15,
    borderRadius: 10,
    zIndex: 9999
  },
  text: {
    color: '#fff',
    fontWeight: 'bold'
  },
  info: {
    backgroundColor: '#2196f3'
  },
  success: {
    backgroundColor: '#4caf50'
  },
  warning: {
    backgroundColor: '#ff9800'
  },
  error: {
    backgroundColor: '#f44336'
  }
});
var _default = exports["default"] = Alert;