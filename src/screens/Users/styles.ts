import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { UserDTO } from '../../dtos/UserDTO';

export const UsersContainer = styled.View`
  flex: 1;
  padding: 8px 16px;
  background-color: #F7F7F7;
`
export const UserList = styled(FlatList as new (props: FlatListProps<UserDTO>) => FlatList<UserDTO>)`
  
`
export const Separator = styled.View`
  margin-bottom: 8px;
`