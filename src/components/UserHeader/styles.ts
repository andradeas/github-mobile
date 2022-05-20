import { BorderlessButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({theme}) => theme.COLORS.background};
`
export const GoBackButton = styled(BorderlessButton)`
`