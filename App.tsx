import {useFonts, Mulish_400Regular, Mulish_700Bold } from '@expo-google-fonts/mulish';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import { AppRoutes } from './src/routes/app.routes';
import { AuthProvider } from './src/hooks/auth';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/global/styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'

export default function App(){
  
  const [fontsLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_700Bold
  })


  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaView style={{ flex:1 }}>
          <StatusBar barStyle={'dark-content'} backgroundColor="transparent" />
          <AuthProvider>
            <AppRoutes/>
          </AuthProvider>
        </SafeAreaView>
        </NavigationContainer>
    </ThemeProvider>
  );
}

