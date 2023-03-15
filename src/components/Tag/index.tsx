import { Container, TagName, AddContainer, RemoveContainer } from "./styles";
import { AntDesign } from '@expo/vector-icons';

type Props = {
  name: string;
  action?: boolean;
  onPress: () => void;
}
export function Tag({name, action, onPress}: Props){
  return(
    <Container>
      <TagName>
        {name}
      </TagName>
      {
        action ? (
          <AddContainer onPress={onPress}>
            <AntDesign name="plus" size={10} color="black" />
          </AddContainer>
        )
        :
        (
          <RemoveContainer onPress={onPress}>
            <AntDesign name="close" size={10} color="white" />
          </RemoveContainer>
        )
      }
    </Container>
  )
}