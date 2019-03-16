import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import { HomeScreen, CategoriesScreen } from './app/screens/Index';

const bottomTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Categories: CategoriesScreen
});

export default  createAppContainer(bottomTabNavigator);