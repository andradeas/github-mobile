import { Container, LogoContainer } from "./styles";
import {Logo} from '../../components/Logo';
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Footer } from "../../components/Footer";
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
        <Text />
        <SearchUser />
        <Button title="Cadastrar" large onPress={handleRegisterUser}/>
        <Footer />
      </Container>
  )
}