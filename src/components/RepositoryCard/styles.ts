import { FlatList, FlatListProps } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  height: 183px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 26px 20px;
  justify-content: space-around;
`
export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const NameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Name = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.title};
  color: ${({ theme }) => theme.COLORS.title};
  padding-right: 8px;
`
export const StarContainer = styled(BorderlessButton)`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #FFC70029;
  justify-content: center;
  align-items: center;
`
export const Description = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.text};
  color: ${({ theme }) => theme.COLORS.title};
`
export const TagsContainer = styled.View`
  flex-direction: row;
`
export const OtherInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const DetailsContainer = styled.View`
  flex-direction: row;
`
export const TechnologyName = styled.Text`
  font-size: 12px;
  margin-left: 4px;
  font-family: ${({ theme }) => theme.FONTS.text};
  color: ${({ theme }) => theme.COLORS.text};
`
export const StarName = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.text};
  margin-left: 4px;
  font-family: ${({ theme }) => theme.FONTS.text};
`
export const PeopleName = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.text};
  margin-left: 4px;
  font-family: ${({ theme }) => theme.FONTS.text};
`
export const TimeName = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.text};
  margin-left: 4px;
  font-family: ${({ theme }) => theme.FONTS.text};
`
export const TagList = styled(FlatList as new (props: FlatListProps<TagDTO>) => FlatList<TagDTO>)`
  
`
export const EditContainer = styled(BorderlessButton)`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #0017FF;
  justify-content: center;
  align-items: center;
`