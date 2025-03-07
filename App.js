import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from "./HomeScreen";
import Email from "./Email";
import Profile from "./Profile";
import { UserList } from "./UserList";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavigasiDrawer /> 
    </NavigationContainer>
  );
};

const NavigasiDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Email" component={Email} />
      <Drawer.Screen name="Profile" component={UserList} />
    </Drawer.Navigator>
  );
};
