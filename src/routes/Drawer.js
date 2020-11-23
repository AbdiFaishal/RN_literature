import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Main from './Main';
import Profile from './../screens/Profile';
import Home from './../screens/Home';
import MyCollection from './../screens/MyCollection';
import AddLiterature from './../screens/AddLiterature';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="MyCollection" component={MyCollection} />
      <Drawer.Screen name="AddLiterature" component={AddLiterature} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
