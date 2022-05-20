import { useState, useEffect } from "react";
import { UsersContainer, Separator, UserList } from "./styles";
import { UserCard } from "../../components/UserCard";
import { useNavigation } from "@react-navigation/native";
import { AddUserHeader } from "../../components/AddUserHeader";
import { Load } from "../../components/Load";
import { UserDTO } from '../../dtos/UserDTO';
import { api } from "../../services/api";

export function Users(){
  const navigation = useNavigation();
  const [user, setUser] = useState<UserDTO[]>([]);
  const [loading, setLoading] = useState(true);

  function handleUser(){
    navigation.navigate('user');
  }

  useEffect(() => {
    async function fetchUser(){
      try {
        const response = await api.get(`/users/${path}`);
        setUser([response.data])
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false);
      }
    }

    fetchUser();
  }, [])

  return(
    <>
      <AddUserHeader />
      <UsersContainer>
        { loading ? <Load /> :
          <UserList
            data={user}
            keyExtractor={ item => item.id}
            renderItem={({ item }) => (
              <UserCard data={item} onPress={handleUser}/>
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