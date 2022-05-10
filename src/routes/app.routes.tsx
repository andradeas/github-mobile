import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../screens/Home";
import { User } from "../screens/User";
import { Users } from "../screens/Users";

export type StackProps = {
  Home: any;
  Users: any;
  User: any;
} 

const Stack = createNativeStackNavigator<StackProps>();

export function AppRoutes(){
  return(
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  )
}