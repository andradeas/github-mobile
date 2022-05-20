import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { theme } from '../global/styles/theme';
import { AppRoutes } from './app.routes';

export function Routes(){
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.COLORS.background,
    },
  };

  return(
    <NavigationContainer theme={MyTheme}>
     <AppRoutes />
    </NavigationContainer>
  )
}