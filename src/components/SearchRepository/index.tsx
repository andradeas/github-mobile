import { Container, FilterButton, Input, InputContainer } from "./styles";
import { Ionicons, EvilIcons } from '@expo/vector-icons'; 
import { TextInputProps } from "react-native";

type Props = TextInputProps;

export function SearchRepository({...rest}: Props){
  return(
    <Container>
      <InputContainer>
        <EvilIcons name="search" size={24} color="#7E7E7E" />
        <Input placeholder="Buscar um repositório..." {...rest} autoCapitalize='none'/>
      </InputContainer>
      <FilterButton>
        <Ionicons name="filter-outline" size={24} color="#7E7E7E" />
      </FilterButton>
    </Container>
  )
}