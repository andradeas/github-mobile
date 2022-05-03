import {useFonts, Mulish_400Regular, Mulish_700Bold } from '@expo-google-fonts/mulish';
import AppLoading from 'expo-app-loading';

import { Home } from './src/screens/Home';
import { Users } from './src/screens/Users';


export default function App() { 
  const [fontsLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <Home />
  );
}

