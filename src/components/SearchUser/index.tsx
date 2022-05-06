import {Input, InputContainer} from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export function SearchUser(){
  return(
    <InputContainer>
      <MaterialIcons name="account-circle" size={24} color="#E5E5E5" />
      <Input placeholder="@username" />
    </InputContainer>
    
  )
}