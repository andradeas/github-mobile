import { Modal as ModalComponent } from 'react-native';
import { Button } from '../Button';
import { SearchUser } from '../SearchUser';
import { Container, Body, Title, SuggestContainer } from './styles';

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
          <SuggestContainer />
          <Button large title='Salvar' onPress={onPress} color/>
          <Button large title='Cancelar' onPress={onPress} color={false}/>
        </Body>
      </Container>
    </ModalComponent>

  )
}