import { Modal as ModalComponent } from 'react-native';
import { Button } from '../Button';
import { Container, Body, Title, SuggestContainer, SuggestList, Separator, SuggestTitle, SelectedList } from './styles';
import tags from '../../assets/tags';
import { Tag } from '../Tag';
import { SearchRepository } from '../SearchRepository';
import { useState } from 'react';

type Props = {
  onSave: () => void;
  onCancel: () => void;
  isVisible: boolean;
  tags: TagDTO[];
  onChangeTag: (tags: TagDTO[]) => void;
}

export function Modal({onSave, onCancel, isVisible, tags: selectedTags, onChangeTag: setSelectedTags}: Props){
  const [tag, setTag] = useState<TagDTO[]>(tags);

  const AddTag = (id: TagDTO["id"]) => {
    const eliminated = tag.find(item => item.id === id)
    setTag(tag.filter(item => item.id !== id))
    
    if(!selectedTags) return
    if(!eliminated) return

    setSelectedTags([...selectedTags, eliminated]);
  }

  function RemoveTag(id: TagDTO["id"]){
    const eliminated = selectedTags.find(item => item.id === id)
    setSelectedTags(selectedTags.filter(item => item.id !== id))

    if(!selectedTags) return
    if(!eliminated) return

    setTag((state) => ([...state, eliminated]));
  }

  return(
    <ModalComponent visible={isVisible}>
      <Container>
        <Body>
          <Title>Adicionar tags</Title>
          <SearchRepository />
          {selectedTags.length > 0  && (
            <SelectedList 
              data={selectedTags}
              keyExtractor={item => item.id.toString()}
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
              keyExtractor={item => item.id.toString()}
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