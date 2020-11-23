import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Auth from './src/routes/Auth';
import Splash from './src/screens/Splash';
import Main from './src/routes/Main';
import { StatusBar } from 'expo-status-bar';
import MainDrawerNavigator from './src/routes/Drawer';
import { UserContext } from './src/context/userContext';

const Stack = createStackNavigator();

const Root = () => {
  const { state } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {state.isLogin ? (
            // <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Main" component={MainDrawerNavigator} />
          ) : (
            <Stack.Screen name="Auth" component={Auth} />
          )}
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
});

export default Root;
