import { Container, Header, Separator, UserList } from "./styles";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { UserCard } from "../../components/UserCard";

export function Users(){
  return(
    <>
      <Header>
          <Logo large={false}/>
          <Button title="Adicionar novo" large={false}/>
        </Header>
      <Container>
        <UserList 
          data={['1', '2', '3', '4', '5', '6']}
          keyExtractor={ item => item}
          renderItem={() => <UserCard />}
          ItemSeparatorComponent={Separator}
        />
      </Container>
    </>
  )
}