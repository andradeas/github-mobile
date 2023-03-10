import styled from "styled-components/native";

export const InputContainer = styled.View`
  width: 287px;
  flex-direction: row;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.10);
  border-radius: 4px;
  align-items: center;
  padding-left: 10px;
`
export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.text};
  padding-left: 10px;
`