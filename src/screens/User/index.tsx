import { useEffect, useState } from "react";
import { Linking } from 'react-native';
import { RepositoryContainer, RepositoryList, Separator, SearchContainer, FilterButton } from "./styles"
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
import { Ionicons } from '@expo/vector-icons'; 

interface Props {
  user: UserDTO;
}

export function User(){
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const dataKey =  '@githubmobile:users';
  const { getItem } = useAsyncStorage(dataKey);
  const [data, setData] = useState<RepositoryDTO[]>([]);
  const route = useRoute();
  const { user } = route.params as Props;
  const [modalVisible, setModalVisible] = useState(false);

  const filteredRepos = search.length > 0 ? data.filter(repo => repo.name.includes(search)) : data;

  function handleCancelModal(){
    setModalVisible(false);
  }

  function handleOpenModal(){
    setModalVisible(true);
  }

  const openRepository = (url: string) => {
    Linking.openURL(url); 
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
        <SearchContainer>
          <SearchRepository onChangeText={setSearch} value={search}/>
          <FilterButton>
            <Ionicons name="filter-outline" size={24} color="#7E7E7E" />
          </FilterButton>
        </SearchContainer>
        { loading ? <Load />
          :
          <RepositoryList 
            data={filteredRepos}
            keyExtractor={ item => item.id.toString()}
            renderItem={({item}) => (<RepositoryCard data={item} onFilter={handleOpenModal} onPress={() => openRepository(item.html_url)}/>)}
            ItemSeparatorComponent={Separator}
            contentContainerStyle={{paddingBottom: 30}}
            showsVerticalScrollIndicator={false}
          />
        }  
      </RepositoryContainer>
      <Modal onCancel={handleCancelModal} isVisible={modalVisible}/>
    </>
  )
}