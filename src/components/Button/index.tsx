import { ActivityIndicator } from 'react-native';
import { Container, Text } from "./styles";
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  title: string,
  large: boolean,
  color: boolean,
  loading?: boolean,
  onPress: () => void;
}
// type Props = TouchableOpacityProps & {
//   title: string,
//   large: boolean,
//   onPress: () => void;
// }

export function Button({title, large, onPress, color, loading, ...rest}: Props){

  return(
      <Container buttonWidth={large} buttonHeight={large} onPress={onPress} color={color} {...rest}>
        { loading ? <ActivityIndicator size="small" color="white"/> : <Text color={color}>{title}</Text>}
      </Container>
  )
}