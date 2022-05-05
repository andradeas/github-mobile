import pic from '../../assets/pic-profile.png';
import { Avatar, Container, Profile, Name, UserInfo, UserName, OthersInfo, CompanyInfo, CompanyName, LocationInfo, LocationName, StarInfo, StarName } from "./styles";
import { MaterialIcons , FontAwesome5, Ionicons, Foundation } from '@expo/vector-icons';

export function UserCard(){
  return(
    <Container>
      <Profile>
        <Avatar source={pic} />
        <UserInfo>
          <Name>
            John Doe Santos 
            {/* <MaterialIcons name="arrow-forward-ios" size={13} color="black" /> */}
          </Name>
          <UserName>@johndoesantos</UserName>
        </UserInfo>
        <FontAwesome5 name="trash" size={16} color="black" />
      </Profile>
      <OthersInfo>
        <CompanyInfo>
          <MaterialIcons name="business" size={16} color="#E5E5E5" />
          <CompanyName>GO.K Digital</CompanyName>
        </CompanyInfo>

        <LocationInfo>
          <Ionicons name="location-sharp" size={16} color="#E5E5E5" />
          <LocationName>São Paulo</LocationName>
        </LocationInfo>

        <StarInfo>
          <Foundation name="star" size={16} color="#E5E5E5" />
          <StarName>2</StarName>
        </StarInfo>

      </OthersInfo>
    </Container>
  )
}