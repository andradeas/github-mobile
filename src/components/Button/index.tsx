import { Container, Text } from "./styles";
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  title: string,
  large: boolean,
  onPress: () => void;
}
// type Props = TouchableOpacityProps & {
//   title: string,
//   large: boolean,
//   onPress: () => void;
// }

export function Button({title, large, onPress, ...rest}: Props){

  return(
      <Container buttonWidth={large} buttonHeight={large} onPress={onPress} {...rest}>
        <Text>{title}</Text>
      </Container>
  )
}