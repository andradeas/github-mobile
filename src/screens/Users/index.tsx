import { Container, HeaderContainer, Separator, UserList } from "./styles";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { UserCard } from "../../components/UserCard";
import { useNavigation } from "@react-navigation/native";

export function Users(){
  const navigation = useNavigation();

  const users = [
    {
      id: '1',
      name: 'John Doe Santos',
      image: 'https://github.com/andradeas.png',
      userName: '@johndoesantos',
      company: 'GO.K Digital',
      location: 'São Paulo, Brasil',
      stars: '2',
    }
  ]

  function handleUser(){
    navigation.navigate('user');
  }

  function handleNewUser(){
    navigation.navigate('home');
  }

  return(
    <>
      <HeaderContainer>
          <Logo large={false}/>
          <Button title="Adicionar novo" large={false} onPress={handleNewUser}/>
        </HeaderContainer>
      <Container>
        <UserList 
          data={users}
          keyExtractor={ item => item.id}
          renderItem={({ item }) => (
            <UserCard data={item} onPress={handleUser}/>
          )}
          ItemSeparatorComponent={Separator}
        />
      </Container>
    </>
  )
}