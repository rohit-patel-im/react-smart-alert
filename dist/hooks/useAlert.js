"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAlert = exports.setAlertMode = void 0;
var _useAlertRedux = require("../redux/useAlertRedux");
var _AlertContext = require("../context/AlertContext");
var _useInternalAlert = require("../internal/useInternalAlert");
var mode = 'auto'; // 'redux' | 'context' | 'internal' | 'auto'

var setAlertMode = exports.setAlertMode = function setAlertMode(newMode) {
  mode = newMode;
};
var useAlert = exports.useAlert = function useAlert() {
  if (mode === 'redux') return (0, _useAlertRedux.useAlertRedux)();
  if (mode === 'context') return (0, _AlertContext.useAlertContext)();
  if (mode === 'internal') return (0, _useInternalAlert.useInternalAlert)();

  // Auto-detect (fallback logic)
  try {
    return (0, _useAlertRedux.useAlertRedux)();
  } catch (_unused) {
    try {
      return (0, _AlertContext.useAlertContext)();
    } catch (_unused2) {
      return (0, _useInternalAlert.useInternalAlert)();
    }
  }
};