import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';

import SimpleScanner from './simpleScanner';
import ValidateCode from './validateCode';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: SimpleScanner
  },
  Validate: {
    screen: ValidateCode
  }
});

export default createAppContainer(AppNavigator);
