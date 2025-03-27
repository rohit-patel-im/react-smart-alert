import { useAlertRedux } from '../redux/useAlertRedux';
import { useAlertContext } from '../context/AlertContext';
import { useInternalAlert } from '../internal/useInternalAlert';

let mode = 'auto'; // 'redux' | 'context' | 'internal' | 'auto'

export const setAlertMode = (newMode) => {
  mode = newMode;
};

export const useAlert = () => {
  if (mode === 'redux') return useAlertRedux();
  if (mode === 'context') return useAlertContext();
  if (mode === 'internal') return useInternalAlert();

  // Auto-detect (fallback logic)
  try {
    return useAlertRedux();
  } catch {
    try {
      return useAlertContext();
    } catch {
      return useInternalAlert();
    }
  }
};
