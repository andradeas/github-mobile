import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.background};
`

export const LogoContainer = styled.View`
  margin-top: 60px;
  margin-bottom: 80px;
`