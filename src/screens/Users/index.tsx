import { Container, Header } from "./styles";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";

export function Users(){
  return(
    <Container>
      <Header>
        <Logo large={false}/>
        <Button title="Adicionar novo" large={false}/>
      </Header>
    </Container>
  )
}