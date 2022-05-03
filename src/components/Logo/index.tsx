import logo from '../../assets/logo.png';
import  { GithubLogo } from './styles';

type Props = {
  large: boolean
}

export function Logo({ large }: Props){
  return(
     <GithubLogo source={logo} logoWidth={large} logoHeight={large}/>
  )
}