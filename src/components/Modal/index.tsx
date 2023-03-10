import { Modal as ModalComponent } from 'react-native';
import { Button } from '../Button';
import { Container, Body, Title, SuggestContainer, SuggestList, Separator, SuggestTitle, SelectedList } from './styles';
import tags from '../../assets/tags';
import { Tag } from '../Tag';
import { SearchRepository } from '../SearchRepository';
import { useEffect, useState } from 'react';
import { TagDTO } from '../../dtos/TagDTO';

type Props = {
  onPress: () => void;
  isVisible: boolean;
}

export function Modal({onPress, isVisible}: Props){
  const [tag, setTag] = useState<TagDTO[]>([])
  const [selectedTag, setSelectedTag] = useState<TagDTO[]>([])

  useEffect(() => {
    setTag(tags);
  }, []);

  const RemoveTag = (id: string) => {
    const eliminated = tag.find(item => item.id === id)
    setTag(tag.filter(item => item.id !== id))
    setSelectedTag((state) => ([...state, eliminated]));
  }

  return(
    <ModalComponent visible={isVisible}>
      <Container>
        <Body>
          <Title>Adicionar tags</Title>
          <SearchRepository />
          <SelectedList 
            data={selectedTag}
            keyExtractor={item => item.id}
            renderItem={({item}) => (<Tag name={item.name}/>)}
            horizontal
          />
          <SuggestContainer>
            <SuggestList 
              data={tag}
              keyExtractor={item => item.id}
              renderItem={({item}) => (<Tag name={item.name} onPress={() => RemoveTag(item.id)}/>)}
              numColumns={3}
              ItemSeparatorComponent={Separator}
              ListHeaderComponent={<SuggestTitle >Sugestões</SuggestTitle>}
              ListHeaderComponentStyle={{marginBottom: 10}}
              style={{margin: 10}}
              />
          </SuggestContainer>
          <Button large title='Salvar' onPress={onPress} color/>
          <Button large title='Cancelar' onPress={onPress} color={false}/>
        </Body>
      </Container>
    </ModalComponent>

  )
}