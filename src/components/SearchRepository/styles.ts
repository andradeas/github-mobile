import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 8px;
`
export const InputContainer = styled.View`
  width: 287px;
  flex-direction: row;
  background-color: white;
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
export const FilterButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.background};
`