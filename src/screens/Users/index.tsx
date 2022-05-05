import { Container, Header, Separator, UserList, UserListContainer } from "./styles";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { UserCard } from "../../components/UserCard";

export function Users(){
  return(
    <Container>
      <Header>
        <Logo large={false}/>
        <Button title="Adicionar novo" large={false}/>
      </Header>
     
        <UserList 
          data={['1', '2', '3', '4']}
          keyExtractor={ item => item}
          renderItem={() => <UserCard />}
          ItemSeparatorComponent={Separator}
        />
     
    </Container>
  )
}