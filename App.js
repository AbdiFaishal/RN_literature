import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Root from './Root';
import Landing from './src/screens/Landing';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import { UserContextProvider } from './src/context/userContext';

// const Stack = createStackNavigator();

export default function App() {
  return (
    <UserContextProvider>
      <Root />
    </UserContextProvider>

    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Landing"
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Stack.Screen name="Landing" component={Landing} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Register" component={Register} />
    //   </Stack.Navigator>
    //   <StatusBar style="light" />
    // </NavigationContainer>
  );
}
