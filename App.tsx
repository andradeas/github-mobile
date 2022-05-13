import {useFonts, Mulish_400Regular, Mulish_700Bold } from '@expo-google-fonts/mulish';
import AppLoading from 'expo-app-loading';
import { StatusBar, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

import { AuthContext } from './src/hooks/auth';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/global/styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App(){
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.COLORS.background,
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
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle={'dark-content'} backgroundColor="transparent" />
        <AuthContext.Provider value={{
          name: "André",
          username: "@andradeas"
        }} >
          <NavigationContainer theme={MyTheme}>
            <AppRoutes />  
          </NavigationContainer>
        </AuthContext.Provider>
      </SafeAreaView>
    </ThemeProvider>
  );
}

