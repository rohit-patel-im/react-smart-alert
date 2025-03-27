import React, { useState, useContext, createContext } from 'react';

const InternalAlertContext = createContext();

export const InternalAlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ message: '', type: 'info', visible: false });

  const triggerAlert = (message, type = 'info', duration = 3000) => {
    setAlert({ message, type, visible: true });
    setTimeout(() => setAlert((prev) => ({ ...prev, visible: false })), duration);
  };

  return (
    <InternalAlertContext.Provider value={{ alert, triggerAlert }}>
      {children}
    </InternalAlertContext.Provider>
  );
};

export const useInternalAlert = () => useContext(InternalAlertContext);
