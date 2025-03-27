"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAlertContext = void 0;
var _react = require("react");
var _AlertContext = require("./AlertContext");
var useAlertContext = exports.useAlertContext = function useAlertContext() {
  var context = (0, _react.useContext)(_AlertContext.AlertContext);
  if (!context) {
    throw new Error('[react-smart-alert] useAlertContext must be used within <AlertProvider>');
  }
  return context.triggerAlert;
};