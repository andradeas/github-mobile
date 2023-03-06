import { BorderlessButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.background};
`
export const Header = styled.View`
  width: 100%;
  padding: 0 20px;
`
export const GoBackButton = styled(BorderlessButton)`
`

export const ContentContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  max-height: 450px;
`

export const SearchContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  max-height: 300px;
`