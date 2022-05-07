import { Container, TitleContainer, NameContainer, Name, Description, TagsContainer, OtherInfo, DetailsContainer, TechnologyName, StarName, PeopleName, TimeName, StarContainer } from "./styles";
import { FontAwesome, MaterialIcons  } from '@expo/vector-icons';
import { Tag } from "../Tag";

export function RepositoryCard(){
  return(
    <Container>
      <TitleContainer>
        <NameContainer>
          <Name>
            project-name-java
          </Name>
          <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
        </NameContainer>
        <StarContainer>
          <FontAwesome name="star" size={16} color="#FFC700" />
        </StarContainer>
      </TitleContainer>
      <Description>
         Project application with component app with React Native.
      </Description>
      <TagsContainer>
        <Tag />
      </TagsContainer>
      <OtherInfo>
        <DetailsContainer>
          <MaterialIcons name="language" size={16} color="#E5E5E5" />
          <TechnologyName>
            React Native
          </TechnologyName>
        </DetailsContainer>
        <DetailsContainer>
          <FontAwesome name="star" size={16} color="#E5E5E5" />
          <StarName>2</StarName>
        </DetailsContainer>
        <DetailsContainer>
          <MaterialIcons name="supervisor-account" size={16} color="#E5E5E5" />
          <PeopleName>5</PeopleName>
        </DetailsContainer>
        <DetailsContainer>
          <MaterialIcons name="access-time" size={16} color="#E5E5E5" />
          <TimeName>2 days ago</TimeName>
        </DetailsContainer>
      </OtherInfo>

    </Container>
  )
}