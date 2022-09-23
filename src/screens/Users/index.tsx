import { useState, useCallback } from "react";
import { UsersContainer, Separator, UserList } from "./styles";
import { UserCard } from "../../components/UserCard";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AddUserHeader } from "../../components/AddUserHeader";
import { Load } from "../../components/Load";
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { UserDTO } from "../../dtos/UserDTO";

interface NavigationProps{
  navigate:(
    screen: string,
    userObject?:{
      user: UserDTO
    }
  ) => void
}

export function Users(){
  const navigation = useNavigation<NavigationProps>();
  const dataKey =  '@githubmobile:users';
  const [data, setData] = useState<UserDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const { getItem, setItem } = useAsyncStorage(dataKey);
  

  function handleUser(user: UserDTO){
    navigation.navigate('user', {user});
  }

  async function handleDelete(id: string) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    const data =  previousData.filter((item: UserDTO) => item.id !== parseInt(id))

    setItem(JSON.stringify(data));
    setData(data);

    if (previousData.length === 1) {
      navigation.navigate('home');
    }
  }

  async function fetchUser(){
    try {
     const response = await AsyncStorage.getItem(dataKey);
    
     setData(JSON.parse(response!));
    

     setLoading(false);
  
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   fetchUser();
  // }, [])

  useFocusEffect(useCallback(() => {
    fetchUser();
  }, []));

  return(
    <>
      <AddUserHeader />
      <UsersContainer>
      {
        loading ? <Load /> :
          <UserList
            data={data}
            keyExtractor={ item => item.id.toString()}
            renderItem={({ item }) => (
              <UserCard data={item} onPress={() => handleUser(item)} onDelete={() => handleDelete(item.id.toString())}/>
            )}
            ItemSeparatorComponent={Separator}
            contentContainerStyle={{paddingBottom: 30}}
            showsVerticalScrollIndicator={false}
          />
      }
      </UsersContainer>
    </>
  )
}