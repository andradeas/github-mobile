import { TextPrimary, TextSecundary, TextContainer, PrivacyLink, PolicyLink } from "./styles";

import { Linking } from 'react-native';

export function PolicyTerms(){
  const baseURL = 'https://reactnative.dev';
  
  return(
    <TextContainer>
      <TextPrimary>Termos de </TextPrimary>
      <PolicyLink
        onPress={() => { 
          Linking.openURL(baseURL); 
        }}>
        política
      </PolicyLink>
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