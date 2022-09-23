import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import { ReactChild } from "react";

type Props = {
  buttonWidth: boolean,
  buttonHeight: boolean,
  children: React.ReactChild,
}

export const Container = styled(RectButton)<Props>`
  width: ${props => props.buttonWidth ? "295px" : "154px"};
  height: ${props => props.buttonHeight ? "40px" : "32px"};
  background-color: black;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.button};
  font-family: ${({ theme }) => theme.FONTS.text};
`