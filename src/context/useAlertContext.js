import { useContext } from 'react';
import { AlertContext } from './AlertContext';

export const useAlertContext = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error(
      '[react-smart-alert] useAlertContext must be used within <AlertProvider>'
    );
  }

  return context.triggerAlert;
};
