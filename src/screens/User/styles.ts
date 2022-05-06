import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";

export const Container = styled.View`
  flex: 1;
`
export const RepositoryContainer = styled.View`
  
`
export const RepositoryList = styled(FlatList as new (props: FlatListProps<string>) => FlatList<string>)`
  background-color: #F7F7F7;
`

export const Separator = styled.View`
  margin-bottom: 8px;
`