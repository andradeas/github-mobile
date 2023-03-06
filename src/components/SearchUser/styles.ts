import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container =  styled.View`
  flex-direction: row;
  align-items: center;
  width: 295px;
  border-radius: 8px;
  border: 2px #E5E5E5;
  padding-left: 10px;
`
export const Input = styled(TextInput)`
  flex: 1;
  height: 40px;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.text};
  padding-left: 10px;
`