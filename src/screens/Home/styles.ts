import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.background};
`

export const ContentContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
`

export const SearchContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  max-height: 300px;
`