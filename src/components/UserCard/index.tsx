import { Container, Profile, Name, UserInfo, NameContainer, Username, OthersInfo, DetailsContainer, CompanyName, LocationName, StarName, TrashContainer } from "./styles";
import { MaterialIcons , FontAwesome5, Ionicons, Foundation } from '@expo/vector-icons';
import { Avatar } from "../Avatar";

export type UserProps = {
  id: string;
  image: string;
  name: string;
  username: string;
  company: string;
  location:string;
  stars: string;
}

type Props = {
  onPress: () => void;
  data: UserProps;
}

export function UserCard({onPress, data}: Props){
  return(
    <Container>
      <Profile>
        <Avatar urlImage={data.image} large/>
        <UserInfo>
          <NameContainer onPress={onPress}>
            <Name>{data.name}</Name>
            <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
          </NameContainer>
          <Username>{data.username}</Username>
        </UserInfo>
        <TrashContainer>
          <FontAwesome5 name="trash" size={12} color="black" />
        </TrashContainer>
        
      </Profile>
      <OthersInfo>
        <DetailsContainer>
          <MaterialIcons name="business" size={16} color="#E5E5E5" />
          <CompanyName>{data.company}</CompanyName>
        </DetailsContainer>

        <DetailsContainer>
          <Ionicons name="location-sharp" size={16} color="#E5E5E5" />
          <LocationName>{data.location}</LocationName>
        </DetailsContainer>

        <DetailsContainer>
          <Foundation name="star" size={16} color="#E5E5E5" />
          <StarName>{data.stars}</StarName>
        </DetailsContainer>

      </OthersInfo>
    </Container>
  )
}