import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { RepositoryProps } from "../../components/RepositoryCard";

export const RepositoryContainer = styled.View`
  flex: 1;
  background-color: #F7F7F7;
  padding: 8px 16px;
`
export const RepositoryList = styled(FlatList as new (props: FlatListProps<RepositoryProps>) => FlatList<RepositoryProps>)`
  
`
export const Separator = styled.View`
  margin-bottom: 8px;
`