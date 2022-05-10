import {useFonts, Mulish_400Regular, Mulish_700Bold } from '@expo-google-fonts/mulish';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

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
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </>
  );
}

