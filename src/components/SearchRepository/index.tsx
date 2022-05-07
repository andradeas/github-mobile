import { Container, FilterButton, Input, InputContainer } from "./styles";
import { Ionicons, EvilIcons } from '@expo/vector-icons'; 

export function SearchRepository(){
  return(
    <Container>
      <InputContainer>
        <EvilIcons name="search" size={24} color="#7E7E7E" />
        <Input placeholder="Buscar um repositório..."/>
      </InputContainer>
      <FilterButton>
        <Ionicons name="filter-outline" size={24} color="#7E7E7E" />
      </FilterButton>
    </Container>
  )
}