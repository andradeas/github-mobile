import { Container, Profile, GoBackButton } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import profile from '../../assets/pic-profile.png';

export function HeaderProfile(){
  return(
    <Container>
      <GoBackButton>
        <AntDesign name="arrowleft" size={32} color="black" />
      </GoBackButton>
      <Profile source={profile}/>
    </Container>
  )
}