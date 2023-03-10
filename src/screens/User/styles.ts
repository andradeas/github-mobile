import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { RepositoryDTO } from "../../dtos/RepositoryDTO";

export const RepositoryContainer = styled.View`
  flex: 1;
  background-color: #F7F7F7;
  padding: 8px 16px;
`
export const RepositoryList = styled(FlatList as new (props: FlatListProps<RepositoryDTO>) => FlatList<RepositoryDTO>)`
  
`
export const Separator = styled.View`
  margin-bottom: 8px;
`

export const SearchContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 8px;
`

export const FilterButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.background};
`