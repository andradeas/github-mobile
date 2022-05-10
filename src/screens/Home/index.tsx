import { Container, Header } from "./styles";
import {Logo} from '../../components/Logo';
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Footer } from "../../components/Footer";
import { SearchUser } from "../../components/SearchUser";
import { useNavigation } from "@react-navigation/native";
import { StackProps } from "../../routes/app.routes";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export function Home(){
  
  const navigation = useNavigation<NativeStackNavigationProp<StackProps>>();

  function handleRegisterUser(){
    navigation.navigate('Users')
  }

  return(
      <Container>
        <Header>
          <Logo large/>
        </Header>
        <Text />
        <SearchUser />
        <Button title="Cadastrar" large onPress={handleRegisterUser}/>
        <Footer />
      </Container>
  )
}