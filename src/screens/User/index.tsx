import { RepositoryContainer, RepositoryList, Separator } from "./styles"
import { Header } from "../../components/Header";
import { SearchRepository } from "../../components/SearchRepository";
import { RepositoryCard } from "../../components/RepositoryCard";

export function User(){
  const repositories = [
    {
      id: '1',
      name: 'project-name-java',
      description: 'Project application with component app with React Native.',
      tags: {
        id: '1',
        name: 'JavaScript',
      },
      technology: 'React Native',
      stars: '2',
      people: '5',
      time: '2 dias atrás',
    },
    {
      id: '2',
      name: 'project-name-java',
      description: 'Project application with component app with React Native.',
      tags: {
        id: '2',
        name: 'JavaScript',
      },
      technology: 'React Native',
      stars: '2',
      people: '5',
      time: '2 dias atrás',
    },
    {
      id: '3',
      name: 'project-name-java',
      description: 'Project application with component app with React Native.',
      tags: {
        id: '2',
        name: 'JavaScript',
      },
      technology: 'React Native',
      stars: '3',
      people: '5',
      time: '2 dias atrás',
    },
    {
      id: '4',
      name: 'project-name-java',
      description: 'Project application with component app with React Native.',
      tags: {
        id: '4',
        name: 'JavaScript',
      },
      technology: 'React Native',
      stars: '2',
      people: '5',
      time: '2 dias atrás',
    },
    {
      id: '5',
      name: 'project-name-java',
      description: 'Project application with component app with React Native.',
      tags: {
        id: '5',
        name: 'JavaScript',
      },
      technology: 'React Native',
      stars: '2',
      people: '5',
      time: '2 dias atrás',
    },
    {
      id: '6',
      name: 'project-name-java',
      description: 'Project application with component app with React Native.',
      tags: {
        id: '6',
        name: 'JavaScript',
      },
      technology: 'React Native',
      stars: '2',
      people: '5',
      time: '2 dias atrás',
    },
  ]

  return(
    <>
      <Header/>
      <RepositoryContainer>
        <SearchRepository />
        <RepositoryList 
          data={repositories}
          keyExtractor={ item => item.id}
          renderItem={({item}) => (<RepositoryCard data={item}/>)}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={{paddingBottom: 30}}
          showsVerticalScrollIndicator={false}
        />
      </RepositoryContainer>
    </>
  )
}