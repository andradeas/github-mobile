import {useFonts, Mulish_400Regular, Mulish_700Bold } from '@expo-google-fonts/mulish';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';

import { Home } from './src/screens/Home';
import { Users } from './src/screens/Users';
import { User } from './src/screens/User';


export default function App() { 
  const [fontsLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="transparent" />
      <Users />
    </>
    
  );
}

