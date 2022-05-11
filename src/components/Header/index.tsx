import { Container, GoBackButton } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "../Avatar";

export function Header(){
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    <Container>
      <GoBackButton onPress={handleGoBack}>
        <AntDesign name="arrowleft" size={32} color="black" />
      </GoBackButton>
      <Avatar urlImage="https://github.com/andradeas.png" large={false}/>
    </Container>
  )
}