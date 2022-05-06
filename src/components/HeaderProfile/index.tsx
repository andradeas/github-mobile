import { Container, Profile } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import profile from '../../assets/pic-profile.png';

export function HeaderProfile(){
  return(
    <Container>
      <AntDesign name="arrowleft" size={32} color="black" />
      <Profile source={profile}/>
    </Container>
  )
}