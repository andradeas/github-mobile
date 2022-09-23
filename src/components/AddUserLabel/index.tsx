import { ReactNode } from 'react';
import {Container, Title, SubTitle} from './styles';

interface Props {
  children?: ReactNode;
}

export function AddUserLabel({children}:Props){
  return(
    <Container>
      <Title>Buscar usuário</Title>
      <SubTitle>{children}</SubTitle>
    </Container>
  )
}