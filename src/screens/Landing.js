import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ButtonMedium from '../components/ButtonMedium';

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Source of Intelligence</Text>
      <Image source={require('../../assets/hero.png')} style={styles.logo} />
      <View style={styles.btnGroup}>
        <ButtonMedium
          text="Register"
          onPress={() => navigation.navigate('Register')}
        />
        <ButtonMedium
          text="Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      {/* <StatusBar style="light" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161616',
    width: '100%',
  },
  textHeader: {
    fontSize: 24,
    fontStyle: 'italic',
    color: '#fff',
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  btnGroup: {
    flexDirection: 'row',
    marginTop: 15,
  },
});
