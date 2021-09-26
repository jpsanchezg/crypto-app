import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Portfolio from './Portfolio';
import Market from './Market';
import Search from './Search';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
    </Tab.Navigator>
  );
};

export default TabNavigator;