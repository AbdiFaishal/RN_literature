import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './../screens/Home';
import Profile from './../screens/Profile';
import Header from './../components/Header';

const Stack = createStackNavigator();

const Main = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

export default Main;
