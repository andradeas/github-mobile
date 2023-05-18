import { useEffect, useState } from "react";
import { Linking } from 'react-native';
import { RepositoryContainer, RepositoryList, Separator, SearchContainer, FilterButton } from "./styles"
import { UserHeader } from "../../components/UserHeader";
import { SearchRepository } from "../../components/SearchRepository";
import { RepositoryCard } from "../../components/RepositoryCard";
import { Load } from "../../components/Load";
import { useRoute } from "@react-navigation/native";
import { Alert } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Modal } from "../../components/Modal";
import { Ionicons } from '@expo/vector-icons'; 

interface Props {
  id: UserDTO['id'];
}

export function User(){
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<TagDTO[]>([]);
  const [selectedRepoId, setSelectedRepoId] = useState(0);
  const [userAvatar, setUserAvatar] = useState('');
  const dataKey =  '@githubmobile:users';
  const { getItem, setItem } = useAsyncStorage(dataKey);
  const [data, setData] = useState<RepositoryDTO[]>([]);
  const route = useRoute();
  const { id } = route.params as Props;
  const [modalVisible, setModalVisible] = useState(false);

  const filteredRepos = search.length > 0 ? data.filter(repo => repo.name.includes(search)) : data;

  console.log('tags', data.tags);

  function handleCancelModal(){
    setModalVisible(false);
  }

  function handleOpenModal(id: number){
    setModalVisible(true);
    setSelectedRepoId(id);
  }

  function handleSaveModal(){
    const newData = data.map(repo => {
      if(repo.id === selectedRepoId){
        return {
          ...repo,
          tags: selectedTag,
        }
      }else {
        return {
          ...repo,
          tags: [],
        }
      }
    })

    setData(newData);
    setModalVisible(false);
    console.log('oi');
  }

  const openRepository = (url: string) => {
    Linking.openURL(url);
  }

  async function fetchRepositories(){
    try {
    const response = await getItem();

    const currentUsers = JSON.parse(response!);

    const userData =  currentUsers.find((item: UserDTO) => item.id === id)

    setData(userData.repos_url);
    setUserAvatar(userData.avatar_url);
    
    setLoading(false);
      
    } catch (error) {
      console.log(error);
      Alert.alert('Usuário não encontrado') 
    }
  }

  function handleChangeTags(tags: TagDTO[]){
    setSelectedTag(tags);
  }

  useEffect(() => {
    fetchRepositories();
  }, []);

  return(
    <>
      <UserHeader avatarUrl={userAvatar}/>
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
            renderItem={({item}) => (<RepositoryCard data={item} onFilter={handleOpenModal} onPress={openRepository}/>)}
            ItemSeparatorComponent={Separator}
            contentContainerStyle={{paddingBottom: 30}}
            showsVerticalScrollIndicator={false}
          />
        }  
      </RepositoryContainer>
      <Modal onCancel={handleCancelModal} onSave={handleSaveModal} isVisible={modalVisible} tags={selectedTag} onChangeTag={handleChangeTags}/>
    </>
  )
}