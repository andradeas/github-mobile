import styled from "styled-components/native";

type Props = {
  buttonWidth: boolean,
  buttonHeight: boolean
}

export const Container = styled.TouchableOpacity<Props>`
  width: ${props => props.buttonWidth ? "295px" : "154px"};
  height: ${props => props.buttonHeight ? "40px" : "32px"};
  background-color: black;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.button};
  font-family: ${({ theme }) => theme.FONTS.text};
`