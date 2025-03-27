const initialState = {
    message: '',
    type: 'info',
    visible: false,
  };
  
  export const SHOW_ALERT = 'SHOW_ALERT';
  export const HIDE_ALERT = 'HIDE_ALERT';
  
  export const showAlert = (message, type = 'info') => ({
    type: SHOW_ALERT,
    payload: { message, type },
  });
  
  export const hideAlert = () => ({ type: HIDE_ALERT });
  
  export const createAlertReducer = () => (state = initialState, action) => {
    switch (action.type) {
      case SHOW_ALERT:
        return {
          ...state,
          message: action.payload.message,
          type: action.payload.type,
          visible: true,
        };
      case HIDE_ALERT:
        return { ...state, visible: false };
      default:
        return state;
    }
  };
  