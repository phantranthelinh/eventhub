import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeScreen} from '../screens';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
