import { TextInput } from "react-native";
import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.72);
`
export const Body = styled.View`
  justify-content: space-around;
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 25px;
  min-height: 415px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.title};
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONTS.title};
  `

export const Input = styled(TextInput)`
  flex: 1;
  height: 40px;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.text};
  padding-left: 10px;
`

export const SuggestContainer = styled.View`
  width: 288px;
  height: 167px;
  background: #FFFFFF;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
`