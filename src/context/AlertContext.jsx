import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ message: '', type: 'info', visible: false });

  const triggerAlert = (message, type = 'info', duration = 3000) => {
    setAlert({ message, type, visible: true });
    setTimeout(() => setAlert((prev) => ({ ...prev, visible: false })), duration);
  };

  return (
    <AlertContext.Provider value={{ alert, triggerAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
