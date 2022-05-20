import { Container, LogoContainer } from "./styles";
import {Logo} from '../../components/Logo';
import { Button } from "../../components/Button";
import { AddUserLabel } from "../../components/AddUserLabel";
import { PolicyTerms } from "../../components/PolicyTerms";
import { SearchUser } from "../../components/SearchUser";
import { useNavigation } from "@react-navigation/native";


export function Home(){
  const navigation = useNavigation();

  function handleRegisterUser(){
    navigation.navigate('users')
  }

  return(
      <Container>
        <LogoContainer>
          <Logo large/>
        </LogoContainer>
        <AddUserLabel />
        <SearchUser />
        <Button title="Cadastrar" large onPress={handleRegisterUser}/>
        <PolicyTerms />
      </Container>
  )
}