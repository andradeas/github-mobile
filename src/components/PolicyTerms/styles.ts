import styled from "styled-components/native";

export const TextContainer = styled.View`
  flex-direction: row;
  margin-top: 181px;
`
export const TextPrimary = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.text};
  font-family: ${({ theme }) => theme.FONTS.text};
`
export const TextSecundary = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.text};
  font-family: ${({ theme }) => theme.FONTS.text};
`
export const PolicyLink = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.text};
  text-decoration: underline;
  font-family: ${({ theme }) => theme.FONTS.text};
`
export const PrivacyLink = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.text};
  text-decoration: underline;
  font-family: ${({ theme }) => theme.FONTS.text};
`