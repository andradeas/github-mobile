import styled from "styled-components/native";

type Props = {
  buttonWidth: boolean,
  buttonHeight: boolean
}

export const Container  = styled.TouchableOpacity<Props> `
  width: ${props => props.buttonWidth ? "295px" : "154px"};
  height: ${props => props.buttonHeight ? "40px" : "32px"};
  background-color: black;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 181px;
`

export const Text = styled.Text`
  font-size: 16px;
  color: white;
`