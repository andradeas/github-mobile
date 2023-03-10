import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
  height: 21px;
  border-radius: 100px;
  background-color: #00000014;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
  margin: 0px 5px;
  flex-direction: row;
`
export const TagName = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONTS.text};
  margin-right: 5px;
` 
export const AddContainer = styled(BorderlessButton)`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: white;
  justify-content: center;
  align-items: center;
`