import { Container, Text } from "./styles";

type Props = {
  title: string,
  large: boolean
}

export function Button({title, large}: Props){

  return(
    <Container buttonWidth={large} buttonHeight={large}>
      <Text>{title}</Text>
    </Container>
  )
}