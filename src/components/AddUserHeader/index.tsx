import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { useNavigation } from "@react-navigation/native";

export function AddUserHeader() {
  const navigation = useNavigation();

  function handleNewUser(){
    navigation.navigate('newUser');
  }

  return (
    <Container>
      <Logo large={false}/>
      <Button title="Adicionar novo" large={false} onPress={handleNewUser} color/>
    </Container>
  );
}