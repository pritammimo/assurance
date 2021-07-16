import React from 'react';
import {View, Text, Image, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
export default function TabNavigationComponent(props) {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaProvider>
      <Tab.Navigator />
    </SafeAreaProvider>
  );
}
