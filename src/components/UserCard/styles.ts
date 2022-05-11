import styled from "styled-components/native";

export const Container = styled.View`
  height: 160px;
  border-radius: 8px;
  background-color: white;
  justify-content: center;
`
export const Profile = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  margin-bottom: 16px;
`
export const UserInfo = styled.View`
`
export const NameContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
`
export const Name = styled.Text`
  font-size: 16px;
  font-family: Mulish_700Bold;
  padding-right: 8px;
`
export const UserName = styled.Text`
  font-size: 14px;
  font-family: Mulish_400Regular;
`
export const TrashContainer = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #E8E8E8;
  justify-content: center;
  align-items: center;
`
export const OthersInfo = styled.View`
  padding: 0px 24px;
  flex-direction: row;
  justify-content: space-between;
`
export const DetailsContainer = styled.View`
  flex-direction: row;
`
export const CompanyName = styled.Text`
  font-size: 12px;
  color: #7E7E7E;
  margin-left: 4px;
  font-family: Mulish_400Regular;
`
export const LocationName = styled.Text`
  font-size: 12px;
  color: #7E7E7E;
  margin-left: 4px;
  font-family: Mulish_400Regular;
`
export const StarName = styled.Text`
  font-size: 12px;
  color: #7E7E7E;
  margin-left: 4px;
  font-family: Mulish_400Regular;
`