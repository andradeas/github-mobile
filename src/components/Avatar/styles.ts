import styled from "styled-components/native";

type Props = {
  imageWidth: boolean;
  imageHeight: boolean;
  imageBorderRarius: boolean;
}

export const ImageProfile = styled.Image<Props>`
  width: ${props => props.imageWidth ? "64px" : "32px"};
  height: ${props => props.imageHeight ? "64px" : "32px"};
  border-radius: ${props => props.imageBorderRarius ? "32px" : "16px"};
`