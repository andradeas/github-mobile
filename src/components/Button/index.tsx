import { GestureHandlerRootView} from "react-native-gesture-handler";
import { Container, Text } from "./styles";

type Props = {
  title: string,
  large: boolean,
  onPress: () => void;
}

export function Button({title, large, onPress}: Props){

  return(
    <GestureHandlerRootView>
      <Container buttonWidth={large} buttonHeight={large} onPress={onPress}>
        <Text>{title}</Text>
      </Container>
    </GestureHandlerRootView>
  )
}