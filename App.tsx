import {useFonts, Mulish_400Regular, Mulish_700Bold } from '@expo-google-fonts/mulish';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

export default function App(){
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(255, 255, 255)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

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
      <NavigationContainer theme={MyTheme}>
        <AppRoutes />
      </NavigationContainer>
    </>
  );
}

