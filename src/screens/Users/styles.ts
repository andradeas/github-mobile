import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { UserProps } from "../../components/UserCard";

export const HeaderContainer = styled.View`
  background-color: ${({theme}) => theme.COLORS.background};
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
`
export const Container = styled.View`
  flex: 1;
  padding: 8px 16px;
  background-color: #F7F7F7;
`
export const UserList = styled(FlatList as new (props: FlatListProps<UserProps>) => FlatList<UserProps>)`
  
`
export const Separator = styled.View`
  margin-bottom: 8px;
`