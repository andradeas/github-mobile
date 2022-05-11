import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";

export const RepositoryContainer = styled.View`
  flex: 1;
  background-color: #F7F7F7;
  padding: 8px 16px;
`
export const RepositoryList = styled(FlatList as new (props: FlatListProps<string>) => FlatList<string>)`
  
`
export const Separator = styled.View`
  margin-bottom: 8px;
`