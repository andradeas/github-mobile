import { Avatar, Container, Profile, Name, UserInfo, NameContainer, UserName, OthersInfo, DetailsContainer, CompanyName, LocationName, StarName, TrashContainer } from "./styles";
import { MaterialIcons , FontAwesome5, Ionicons, Foundation } from '@expo/vector-icons';
import userImage from '../../assets/pic-profile.png';

type Props = {
  onPress: () => void;
}

export function UserCard({onPress}: Props){
  return(
    <Container>
      <Profile>
        <Avatar source={userImage} />
        <UserInfo>
          <NameContainer onPress={onPress}>
            <Name>John Doe Santos</Name>
            <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
          </NameContainer>
          <UserName>@johndoesantos</UserName>
        </UserInfo>
        <TrashContainer>
          <FontAwesome5 name="trash" size={12} color="black" />
        </TrashContainer>
        
      </Profile>
      <OthersInfo>
        <DetailsContainer>
          <MaterialIcons name="business" size={16} color="#E5E5E5" />
          <CompanyName>GO.K Digital</CompanyName>
        </DetailsContainer>

        <DetailsContainer>
          <Ionicons name="location-sharp" size={16} color="#E5E5E5" />
          <LocationName>São Paulo</LocationName>
        </DetailsContainer>

        <DetailsContainer>
          <Foundation name="star" size={16} color="#E5E5E5" />
          <StarName>2</StarName>
        </DetailsContainer>

      </OthersInfo>
    </Container>
  )
}