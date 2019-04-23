import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';

import SimpleScanner from './simpleScanner';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: SimpleScanner
  }
});

export default createAppContainer(AppNavigator);
