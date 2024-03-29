import { Container, TitleContainer, NameContainer, Name, Description, TagsContainer, OtherInfo, DetailsContainer, TechnologyName, StarName, PeopleName, TimeName, StarContainer, TagList, EditContainer } from "./styles";
import { FontAwesome, MaterialIcons  } from '@expo/vector-icons';
import { Tag } from "../Tag";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RepositoryDTO } from "../../dtos/RepositoryDTO";
import { formatDistanceToNow } from 'date-fns'
import { useState } from "react";

export type Props = {
  data: RepositoryDTO;
  onPress: (url: string) => void;
  onFilter: (id: number) => void;
}

export function RepositoryCard({data, onFilter, onPress}: Props){
  const braLocale = require('date-fns/locale/pt-BR');
  const [dataTags, setDataTags] = useState<TagDTO[]>(data.tags);

  const date = formatDistanceToNow(
    new Date(data.updated_at), {locale: braLocale}
  )

  function handlePress(){
    onFilter(data.id)
  }

  function handlePressRepo(){
   onPress(data.html_url);
  }
  

  return(
    <GestureHandlerRootView>
      <Container onPress={handlePressRepo}>
        <TitleContainer>
          <NameContainer>
            <Name>
              {data.name}
            </Name>
            <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
          </NameContainer>
          <StarContainer>
            <FontAwesome name="star" size={16} color="#FFC700" />
          </StarContainer>
        </TitleContainer>
        <Description numberOfLines={2}>
          {data.description?.length > 0 ? data.description : 'Sem descrição'}
        </Description>
        <TagsContainer>
          <TagList 
            data={dataTags}
            keyExtractor={ item => item.id}
            renderItem={({item}) => (<Tag name={item.name}/>)}
            showsHorizontalScrollIndicator={false}
            horizontal
            />
            <EditContainer onPress={handlePress}>
              <FontAwesome name="pencil" size={14} color="#FFFFFF" />
            </EditContainer>
        </TagsContainer>
        <OtherInfo>
          <DetailsContainer>
            <MaterialIcons name="language" size={16} color="#E5E5E5" />
            <TechnologyName>
            {data.language}
            </TechnologyName>
          </DetailsContainer>
          <DetailsContainer>
            <FontAwesome name="star" size={16} color="#E5E5E5" />
            <StarName>{data.stargazers_count}</StarName>
          </DetailsContainer>
          <DetailsContainer>
            <MaterialIcons name="supervisor-account" size={16} color="#E5E5E5" />
            <PeopleName>{data.watchers}</PeopleName>
          </DetailsContainer>
          <DetailsContainer>
            <MaterialIcons name="access-time" size={16} color="#E5E5E5" />
            <TimeName>{date}</TimeName>
          </DetailsContainer>
        </OtherInfo>
      </Container>
    </GestureHandlerRootView>
  )
}