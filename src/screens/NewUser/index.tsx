import { Container, LogoContainer, Header, GoBackButton } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import {Logo} from '../../components/Logo';
import { Button } from "../../components/Button";
import { AddUserLabel } from "../../components/AddUserLabel";
import { PolicyTerms } from "../../components/PolicyTerms";
import { SearchUser } from "../../components/SearchUser";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { api } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserDTO } from "../../dtos/UserDTO";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export function NewUser(){
  const [userName, setUserName] = useState('');
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  async function saveUser(newUser: any){
    try {

      const newRepo = await api.get(`/users/${userName}/repos`);

      const userData = await AsyncStorage.getItem('@githubmobile:users');

      const userCurrentData = userData ? JSON.parse(userData) : [];

      newUser.repos_url = newRepo.data;

      const userDataFormatted = [
        ...userCurrentData,
        newUser
      ];

      //pode ser assim também 
      //userDataFormatted.push(newUser)

      const verifyUser =  userCurrentData.filter((item: UserDTO) => item.id === newUser.id)

      if (verifyUser.length === 0)
      {
        await AsyncStorage.setItem('@githubmobile:users', JSON.stringify(userDataFormatted));
        navigation.navigate('users');
      }
      else
        Alert.alert("Usuário já cadastrado");
      
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível salvar");
    }
  
  }

  async function handleRegisterUser(){
    if (userName.trim() === ''){
      return Alert.alert('Informe um usuário') 
    }

    try {
      const response = await api.get(`/users/${userName}`);
      
      await saveUser(response.data);
      
      setUserName("")
      
    } catch (error) {
      console.log(error);
      Alert.alert('Usuário não encontrado') 
    }
  }

  return(
      <Container>
        <Header>
          <GoBackButton onPress={handleGoBack}>
            <AntDesign name="arrowleft" size={32} color="black" />
          </GoBackButton>
        </Header>
        <LogoContainer>
          <Logo large/>
        </LogoContainer>
        <AddUserLabel children='Adicione seus novos usuários do Github'/>
        <SearchUser placeholder="@username" onChangeText={setUserName} value={userName}/>
        <Button title="Cadastrar" large onPress={handleRegisterUser} />
        <PolicyTerms />    
      </Container>
  )
}