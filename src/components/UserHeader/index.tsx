import { Container, GoBackButton } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "../Avatar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export function UserHeader(){
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    <Container>
      <GestureHandlerRootView>
        <GoBackButton onPress={handleGoBack}>
          <AntDesign name="arrowleft" size={32} color="black" />
        </GoBackButton>
      </GestureHandlerRootView>
      <Avatar urlImage="https://github.com/andradeas.png" large={false}/>
    </Container>
  )
}