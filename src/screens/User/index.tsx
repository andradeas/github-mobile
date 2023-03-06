import { useEffect, useState } from "react";
import { RepositoryContainer, RepositoryList, Separator } from "./styles"
import { UserHeader } from "../../components/UserHeader";
import { SearchRepository } from "../../components/SearchRepository";
import { RepositoryCard } from "../../components/RepositoryCard";
import { Load } from "../../components/Load";
import { useRoute } from "@react-navigation/native";
import { UserDTO } from "../../dtos/UserDTO";
import { Alert } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { RepositoryDTO } from "../../dtos/RepositoryDTO";
import { Modal } from "../../components/Modal";

interface Props {
  user: UserDTO;
}

export function User(){
  const [loading, setLoading] = useState(false);
  const dataKey =  '@githubmobile:users';
  const { getItem } = useAsyncStorage(dataKey);
  const [data, setData] = useState<RepositoryDTO[]>([]);
  const route = useRoute();
  const { user } = route.params as Props;
  const [modalVisible, setModalVisible] = useState(false);

  function handleCancelModal(){
    setModalVisible(false);
  }

  function handleOpenModal(){
    setModalVisible(true);
  }
  
  useEffect(() => {
    async function fetchRepositories(){
      try {
      const response = await getItem();

      const currentUsers = JSON.parse(response!);

      const userData =  currentUsers.find((item: UserDTO) => item.id === user.id)

      setData(userData.repos_url);
      
      setLoading(false);
        
      } catch (error) {
        console.log(error);
        Alert.alert('Usuário não encontrado') 
      }
    }

    fetchRepositories();
  }, [])

  return(
    <>
      <UserHeader avatarUrl={user.avatar_url}/>
      <RepositoryContainer>
        <SearchRepository />
        { loading ? <Load />
          :
          <RepositoryList 
          data={data}
          keyExtractor={ item => item.id}
          renderItem={({item}) => (<RepositoryCard data={item} onFilter={handleOpenModal}/>)}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={{paddingBottom: 30}}
          showsVerticalScrollIndicator={false}
          />
        }  
      </RepositoryContainer>
      <Modal onPress={handleCancelModal} isVisible={modalVisible}/>
    </>
  )
}