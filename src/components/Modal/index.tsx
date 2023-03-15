import { Modal as ModalComponent } from 'react-native';
import { Button } from '../Button';
import { Container, Body, Title, SuggestContainer, SuggestList, Separator, SuggestTitle, SelectedList } from './styles';
import tags from '../../assets/tags';
import { Tag } from '../Tag';
import { SearchRepository } from '../SearchRepository';
import { useEffect, useState } from 'react';
import { TagDTO } from '../../dtos/TagDTO';

type Props = {
  onSave: () => void;
  onCancel: () => void;
  isVisible: boolean;
}

export function Modal({onSave, onCancel, isVisible}: Props){
  const [tag, setTag] = useState<TagDTO[]>([])
  const [selectedTag, setSelectedTag] = useState<TagDTO[]>([])

  useEffect(() => {
    setTag(tags);
  }, []);

  const AddTag = (id: string) => {
    const eliminated = tag.find(item => item.id === id)
    setTag(tag.filter(item => item.id !== id))
    setSelectedTag((state) => ([...state, eliminated]));
  }

  function RemoveTag(id: string){
    const eliminated = selectedTag.find(item => item.id === id)
    setSelectedTag(selectedTag.filter(item => item.id !== id))
    return setTag((state) => ([...state, eliminated]));
  }

  return(
    <ModalComponent visible={isVisible}>
      <Container>
        <Body>
          <Title>Adicionar tags</Title>
          <SearchRepository />
          {selectedTag.length > 0  && (
            <SelectedList 
              data={selectedTag}
              keyExtractor={item => item.id}
              renderItem={({item}) => (<Tag name={item.name} onPress={() => RemoveTag(item.id)}/>)}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{flexGrow: 0}}
            />
            )
          }
          <SuggestContainer>
            <SuggestList 
              data={tag}
              keyExtractor={item => item.id}
              renderItem={({item}) => (<Tag name={item.name} onPress={() => AddTag(item.id)} action/>)}
              numColumns={3}
              ItemSeparatorComponent={Separator}
              ListHeaderComponent={<SuggestTitle >Sugestões</SuggestTitle>}
              ListHeaderComponentStyle={{marginBottom: 10}}
              style={{margin: 10}}
              />
          </SuggestContainer>
          <Button large title='Salvar' onPress={onSave} color/>
          <Button large title='Cancelar' onPress={onCancel} color={false}/>
        </Body>
      </Container>
    </ModalComponent>

  )
}