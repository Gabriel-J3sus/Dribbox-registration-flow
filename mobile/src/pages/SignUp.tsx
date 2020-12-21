import React from 'react';
import { useNavigation } from '@react-navigation/native';

import PagesProps from '../Interface/PagesProps';

import InputComponent from '../Components/Input';
import ButtonComponent from '../Components/Button';
import LinkButton from '../Components/LinkButton';

import { Container, Wrapper, Title, FormContainer, ButtonContainer } from '../styles/Pages/signup';

export default function SignUp({ title }: PagesProps) {
  const navigation = useNavigation();

  function handleNavigateToLogin() {
    navigation.navigate('Login');
  }

  return (
      <Container>
        <Wrapper>
          <Title> {title} </Title>

          <FormContainer>
            <InputComponent placeholder='E-mail' />
            <InputComponent placeholder='Senha' />
            <InputComponent placeholder='Confirmar senha' />

            <ButtonContainer>
              <ButtonComponent title='Sign in' handleNavigate={() => {}}/>
            </ButtonContainer>
          </FormContainer>

        </Wrapper>
        
        <LinkButton title='Go to sign in' handleNavigate={handleNavigateToLogin} />
      </Container>
  );
}