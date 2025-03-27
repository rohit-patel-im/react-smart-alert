import React from 'react';
import '../styles.css';
import { useSelector } from 'react-redux';

const Alert = ({ className = '' }) => {
  const state = useSelector((state) => state.alert || {});
  const { message, type, visible } = state;

  if (!visible) return null;

  return (
    <div className={`alert alert-${type} ${className}`}>
      {message}
    </div>
  );
};

export default Alert;
