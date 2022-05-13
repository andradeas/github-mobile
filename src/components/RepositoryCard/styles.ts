import styled from "styled-components/native";

export const Container = styled.View`
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
export const NameContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`
export const Name = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.title};
  padding-right: 8px;
`
export const StarContainer = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #FFC70029;
  justify-content: center;
  align-items: center;
`
export const Description = styled.Text`
  font-size: 14px;
  font-family: Mulish_400Regular;
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
  font-family: Mulish_400Regular;
  color: #7E7E7E;
`
export const StarName = styled.Text`
  font-size: 12px;
  color: #7E7E7E;
  margin-left: 4px;
  font-family: Mulish_400Regular;
`
export const PeopleName = styled.Text`
  font-size: 12px;
  color: #7E7E7E;
  margin-left: 4px;
  font-family: Mulish_400Regular;
`
export const TimeName = styled.Text`
  font-size: 12px;
  color: #7E7E7E;
  margin-left: 4px;
  font-family: Mulish_400Regular;
`