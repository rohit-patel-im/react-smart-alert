import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

const Alert = () => {
  const { message, type, visible } = useSelector((state) => state.alert || {});

  if (!visible) return null;

  return (
    <View style={[styles.alert, styles[type]]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alert: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    padding: 15,
    borderRadius: 10,
    zIndex: 9999,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  info: { backgroundColor: '#2196f3' },
  success: { backgroundColor: '#4caf50' },
  warning: { backgroundColor: '#ff9800' },
  error: { backgroundColor: '#f44336' },
});

export default Alert;
