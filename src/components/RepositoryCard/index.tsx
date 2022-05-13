import { Container, TitleContainer, NameContainer, Name, Description, TagsContainer, OtherInfo, DetailsContainer, TechnologyName, StarName, PeopleName, TimeName, StarContainer } from "./styles";
import { FontAwesome, MaterialIcons  } from '@expo/vector-icons';
import { Tag } from "../Tag";

export type TagProps = {
  id: string;
  name: string;
}

export type RepositoryProps = {
  id: string;
  name: string;
  description: string;
  tags: TagProps;
  technology: string;
  stars: string;
  people: string;
  time: string;
}

export type Props = {
  data: RepositoryProps;
}

export function RepositoryCard({data}: Props){
  return(
    <Container>
      <TitleContainer>
        <NameContainer>
          <Name>
            {data.name}
          </Name>
          <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
        </NameContainer>
        <StarContainer>
          <FontAwesome name="star" size={16} color="#FFC700" />
        </StarContainer>
      </TitleContainer>
      <Description>
         {data.description}
      </Description>
      <TagsContainer>
        <Tag />
      </TagsContainer>
      <OtherInfo>
        <DetailsContainer>
          <MaterialIcons name="language" size={16} color="#E5E5E5" />
          <TechnologyName>
           {data.technology}
          </TechnologyName>
        </DetailsContainer>
        <DetailsContainer>
          <FontAwesome name="star" size={16} color="#E5E5E5" />
          <StarName>{data.stars}</StarName>
        </DetailsContainer>
        <DetailsContainer>
          <MaterialIcons name="supervisor-account" size={16} color="#E5E5E5" />
          <PeopleName>{data.people}</PeopleName>
        </DetailsContainer>
        <DetailsContainer>
          <MaterialIcons name="access-time" size={16} color="#E5E5E5" />
          <TimeName>{data.time}</TimeName>
        </DetailsContainer>
      </OtherInfo>

    </Container>
  )
}