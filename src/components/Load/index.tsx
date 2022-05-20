import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

export function Load() {
  const theme = useTheme();

  return (
   <ActivityIndicator 
   color={theme.COLORS.title}
   size= 'large'
   style={{ flex: 1 }} 
   />
  );
}