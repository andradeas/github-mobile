import { FlatList, FlatListProps, TextInput } from "react-native";
import styled from "styled-components/native";
import { TagProp } from "../RepositoryCard/styles";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.72);
`
export const Body = styled.View`
  justify-content: space-around;
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 25px 30px;
  min-height: 450px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.title};
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONTS.title};
`

export const SuggestContainer = styled.View`
  width: 288px;
  height: 167px;
  background-color: #FFFFFF;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
`

export const SelectedList = styled(FlatList as new (prop: FlatListProps<TagProp>) => FlatList<TagProp>)`
`

export const SuggestList = styled(FlatList as new (props: FlatListProps<TagProp>) => FlatList<TagProp>)`
`

export const Separator = styled.View`
  margin-bottom: 8px;
`
export const SuggestTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.text};
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.text};
`