import { Input, Container} from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';

type Props = TextInputProps;

export function SearchUser({...rest}: Props){
  return(
    <Container>
      <MaterialIcons name="account-circle" size={24} color="#E5E5E5" />
      <Input {...rest} autoCapitalize="none"/>
    </Container>
    
  )
}