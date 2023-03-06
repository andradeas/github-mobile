import { Modal as ModalComponent } from 'react-native';
import { Button } from '../Button';
import { SearchUser } from '../SearchUser';
import { Container, Body, Title, SuggestContainer, SuggestList } from './styles';
import tags from '../../assets/tags';
import { Tag } from '../Tag';

type Props = {
  onPress: () => void;
  isVisible: boolean;
}

export function Modal({onPress, isVisible}: Props){
  return(
    <ModalComponent visible={isVisible}>
      <Container>
        <Body>
          <Title>Adicionar tags</Title>
          <SearchUser />
          <SuggestContainer>
            <SuggestList 
                data={tags}
                keyExtractor={item => item.id}
                renderItem={({item}) => (<Tag name={item.name}/>)}
              />
          </SuggestContainer>
          <Button large title='Salvar' onPress={onPress} color/>
          <Button large title='Cancelar' onPress={onPress} color={false}/>
        </Body>
      </Container>
    </ModalComponent>

  )
}