import { Container, SearchContainer, ContentContainer } from "./styles";
import {Logo} from '../../components/Logo';
import { Button } from "../../components/Button";
import { AddUserLabel } from "../../components/AddUserLabel";
import { PolicyTerms } from "../../components/PolicyTerms";
import { SearchUser } from "../../components/SearchUser";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { api } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserDTO } from "../../dtos/UserDTO";

export function Home(){
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

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
    setIsLoading(!isLoading);
   
    if (userName.trim() === ''){
      return Alert.alert('Informe um usuário') 
    }

    try {
      const response = await api.get(`/users/${userName}`);
      
      await saveUser(response.data);
      
      setUserName("");      
      
    } catch (error) {
      console.log(error);
      Alert.alert('Usuário não encontrado') 
    }

    setIsLoading(!isLoading);
  }

  useEffect(() => {

    async function loadUsers(){
      const users = await AsyncStorage.getItem('@githubmobile:users');
      const currentUsers = users ? JSON.parse(users) : [];

      if (currentUsers.length > 0) {
        navigation.navigate('users');
      }

      console.log('quant', currentUsers.length)
    }

    // async function loadUsers(){
    //   await AsyncStorage.removeItem('@githubmobile:users');
    // }

    loadUsers();
  }, []);

  return(
      <Container>
        <ContentContainer>
          <Logo large/>
          <SearchContainer>
            <AddUserLabel >
              Crie sua conta através do seu usuário do GitHub
            </AddUserLabel>  
            <SearchUser placeholder="@username" onChangeText={setUserName} value={userName}/>
            <Button title="Cadastrar" large onPress={handleRegisterUser} color loading={isLoading}/>
          </SearchContainer>
          </ContentContainer>
        <PolicyTerms />    
      </Container>
  )
}