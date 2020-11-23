import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../screens/Landing';
import Register from '../screens/Register';
import Login from '../screens/Login';

const AuthStack = createStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Landing" component={Landing} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

export default Auth;
