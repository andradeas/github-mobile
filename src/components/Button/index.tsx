import { Container, Text } from "./styles";

type Props = {
  title: string,
  large: boolean,
  onPress: () => void;
}

export function Button({title, large, onPress}: Props){

  return(
    <Container buttonWidth={large} buttonHeight={large} onPress={onPress}>
      <Text>{title}</Text>
    </Container>
  )
}