import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container =  styled.View`
  text-align: left;
  width: 295px;
`

export const Title = styled.Text`
  color: black;
  font-size: 22px;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.FONTS.title};
`

export const SubTitle = styled.Text`
  color: #7E7E7E;
  font-size: 16px;
  margin-bottom: 32px;
  font-family: ${({ theme }) => theme.FONTS.text};
`