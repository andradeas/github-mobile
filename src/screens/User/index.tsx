import { RepositoryContainer, RepositoryList, Separator } from "./styles"
import { Header } from "../../components/Header";
import { SearchRepository } from "../../components/SearchRepository";
import { RepositoryCard } from "../../components/RepositoryCard";

export function User(){
 
  return(
    <>
      <Header/>
      <RepositoryContainer>
        <SearchRepository />
        <RepositoryList 
          data={['1', '2', '3', '4']}
          keyExtractor={ item => item}
          renderItem={() => <RepositoryCard />}
          ItemSeparatorComponent={Separator}
        />
      </RepositoryContainer>
    </>
  )
}