import { Container, Header } from "./styles";
import {Logo} from '../../components/Logo';
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Footer } from "../../components/Footer";
import { SearchUser } from "../../components/SearchUser";

export function Home(){
  return(
      <Container>
        <Header>
          <Logo large/>
        </Header>
        <Text />
        <SearchUser />
        <Button title="Cadastrar" large/>
        <Footer />
      </Container>
  )
}