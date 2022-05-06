import { Container, RepositoryContainer, RepositoryList, Separator } from "./styles"
import { HeaderProfile } from "../../components/HeaderProfile";
import { SearchRepository } from "../../components/SearchRepository";
import { RepositoryCard } from "../../components/RepositoryCard";

export function User(){
  return(
    <Container>
      <HeaderProfile />
      <RepositoryContainer>
        <SearchRepository />
        <RepositoryList 
          data={['1', '2', '3', '4']}
          keyExtractor={ item => item}
          renderItem={() => <RepositoryCard />}
          ItemSeparatorComponent={Separator}
        />
      </RepositoryContainer>
    </Container>
  )
}