import { TextPrimary, TextSecundary, TextContainer, PrivacyLink, PoliticalLink } from "./styles";

import { Linking } from 'react-native';

export function Footer(){
  const baseURL = 'https://reactnative.dev';
  
  return(
    <TextContainer>
      <TextPrimary>Termos de </TextPrimary>
      <PoliticalLink
        onPress={() => { 
          Linking.openURL(baseURL); 
        }}>
        política
      </PoliticalLink>
      <TextSecundary> e </TextSecundary>
      <PrivacyLink
        onPress={() => { 
          Linking.openURL(baseURL); 
        }}>
        privacidade
      </PrivacyLink>
    </TextContainer>
    
  )
}