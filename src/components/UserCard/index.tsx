import { Container, Profile, Name, UserInfo, NameContainer, Username, OthersInfo, DetailsContainer, CompanyName, LocationName, StarName, TrashContainer } from "./styles";
import { MaterialIcons , FontAwesome5, Ionicons, Foundation } from '@expo/vector-icons';
import { Avatar } from "../Avatar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { UserDTO } from '../../dtos/UserDTO';

type Props = {
  onPress: () => void;
  onDelete: () => void;
  data: UserDTO;
}

export function UserCard({onPress, data, onDelete}: Props){
  return(
    <GestureHandlerRootView>
      <Container onPress={onPress}>
        <Profile>
          <Avatar urlImage={data.avatar_url} large/>
          <UserInfo>
            <NameContainer>
              <Name>{data.name}</Name>
              <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
            </NameContainer>
            <Username>@{data.login}</Username>
          </UserInfo>
          <TrashContainer onPress={onDelete}>
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
            <StarName>{data.followers}</StarName>
          </DetailsContainer>
        </OthersInfo>
      </Container>
    </GestureHandlerRootView>
  )
}