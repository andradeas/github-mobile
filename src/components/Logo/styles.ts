import styled from "styled-components/native";

type Props = {
  logoWidth: boolean,
  logoHeight: boolean
}
export const GithubLogo = styled.Image<Props>`
  width: ${props => props.logoWidth ? "197.85px" : "98.92x"};
  height: ${props => props.logoHeight ? "80px" : "40px"};
  margin-top: 60px;
  margin-bottom: 80px;
`