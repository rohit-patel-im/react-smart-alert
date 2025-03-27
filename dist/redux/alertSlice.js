"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showAlert = exports.hideAlert = exports["default"] = void 0;
var _toolkit = require("@reduxjs/toolkit");
var initialState = {
  message: '',
  type: 'info',
  visible: false
};
var alertSlice = (0, _toolkit.createSlice)({
  name: 'alert',
  initialState: initialState,
  reducers: {
    showAlert: function showAlert(state, action) {
      state.message = action.payload.message;
      state.type = action.payload.type || 'info';
      state.visible = true;
    },
    hideAlert: function hideAlert(state) {
      state.visible = false;
    }
  }
});
var _alertSlice$actions = alertSlice.actions,
  showAlert = exports.showAlert = _alertSlice$actions.showAlert,
  hideAlert = exports.hideAlert = _alertSlice$actions.hideAlert;
var _default = exports["default"] = alertSlice.reducer;