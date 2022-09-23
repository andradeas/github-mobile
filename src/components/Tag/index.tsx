import { Container, TagName } from "./styles";

type Props = {
  name: string
}
export function Tag({name}: Props){
  return(
    <Container>
      <TagName>
        {name}
      </TagName>
    </Container>
  )
}