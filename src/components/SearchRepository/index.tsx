import { Input, InputContainer } from "./styles";
import { EvilIcons } from '@expo/vector-icons'; 
import { TextInputProps } from "react-native";

type Props = TextInputProps;

export function SearchRepository({...rest}: Props){
  return(
    <InputContainer>
      <EvilIcons name="search" size={24} color="#7E7E7E" />
      <Input placeholder="Buscar um repositório..." {...rest} autoCapitalize='none'/>
    </InputContainer>
  )
}