import styled from "styled-components/native";

export const Container =  styled.View`
  text-align: left;
  width: 295px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.title};
  font-size: 22px;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.FONTS.title};
`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.text};
  font-size: 16px;
  margin-bottom: 32px;
  font-family: ${({ theme }) => theme.FONTS.text};
`