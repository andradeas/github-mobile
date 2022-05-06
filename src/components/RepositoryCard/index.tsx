import { Container, TitleContainer, Title, Description, TagsContainer, DetailsContainer, TechnologyInfo, TechnologyName, StarInfo, StarName, PeopleInfo, PeopleName, TimeInfo, TimeName, StarContainer } from "./styles";
import { FontAwesome, MaterialIcons  } from '@expo/vector-icons';
import { Tag } from "../Tag";

export function RepositoryCard(){
  return(
    <Container>
      <TitleContainer>
        <Title>
          project-name-java
        </Title>
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
      <DetailsContainer>
        <TechnologyInfo>
          <MaterialIcons name="language" size={16} color="#E5E5E5" />
          <TechnologyName>
            React Native
          </TechnologyName>
        </TechnologyInfo>
        <StarInfo>
          <FontAwesome name="star" size={16} color="#E5E5E5" />
          <StarName>2</StarName>
        </StarInfo>
        <PeopleInfo>
          <MaterialIcons name="supervisor-account" size={16} color="#E5E5E5" />
          <PeopleName>5</PeopleName>
        </PeopleInfo>
        <TimeInfo>
          <MaterialIcons name="access-time" size={16} color="#E5E5E5" />
          <TimeName>2 days ago</TimeName>
        </TimeInfo>
      </DetailsContainer>

    </Container>
  )
}