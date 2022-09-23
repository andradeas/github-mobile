import { BorderlessButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.background};
`
export const Header = styled.View`
  width: 100%;
  padding: 20px;
`
export const GoBackButton = styled(BorderlessButton)`
`

export const LogoContainer = styled.View`
  margin-top: 80px;
  margin-bottom: 80px;
`