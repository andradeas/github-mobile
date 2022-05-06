import { Container, FilterButton, Input } from "./styles";
import { Ionicons } from '@expo/vector-icons'; 

export function SearchRepository(){
  return(
    <Container>
      <Input placeholder="Buscar um repositório..."/>
      <FilterButton>
        <Ionicons name="filter-outline" size={24} color="#7E7E7E" />
      </FilterButton>
    </Container>
  )
}