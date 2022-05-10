import { Container, Header, Separator, UserList } from "./styles";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { UserCard } from "../../components/UserCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackProps } from "../../routes/app.routes";

export function Users(){
  const navigation = useNavigation<NativeStackNavigationProp<StackProps>>();

  function handleUser(){
    navigation.navigate('User')
  }

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
          renderItem={() => <UserCard onPress={handleUser}/>}
          ItemSeparatorComponent={Separator}
        />
      </Container>
    </>
  )
}