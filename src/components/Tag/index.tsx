import { Container, TagName, AddContainer } from "./styles";
import { AntDesign } from '@expo/vector-icons';

type Props = {
  name: string;
  onPress: () => void;
}
export function Tag({name, onPress}: Props){
  return(
    <Container>
      <TagName>
        {name}
      </TagName>
      <AddContainer onPress={onPress}>
        <AntDesign name="plus" size={10} color="black" />
      </AddContainer>
    </Container>
  )
}