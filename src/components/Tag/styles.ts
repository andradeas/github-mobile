import styled from "styled-components/native";

export const Container = styled.View`
  width: 96px;
  height: 21px;
  border-radius: 100px;
  background-color: #00000014;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`
export const TagName = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONTS.text};
` 