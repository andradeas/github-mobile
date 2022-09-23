import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../screens/Home";
import { User } from "../screens/User";
import { Users } from "../screens/Users";
import { NewUser } from '../screens/NewUser';

const Stack = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Stack.Navigator initialRouteName="home" screenOptions={{headerShown: false}} >
      <Stack.Screen name="home" component={Home}/>
      <Stack.Screen name="users" component={Users}/>
      <Stack.Screen name="user" component={User}/>
      <Stack.Screen name="newUser" component={NewUser}/>
    </Stack.Navigator>
  )
}