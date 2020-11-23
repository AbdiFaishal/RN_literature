import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const ButtonMedium = ({ text, onPress, btnColor }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#af2e1c',
    width: 150,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    // textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ButtonMedium;
