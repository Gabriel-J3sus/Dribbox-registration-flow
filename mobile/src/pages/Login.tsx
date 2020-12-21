import React from 'react';
import { useNavigation } from '@react-navigation/native';

import InputComponent from '../Components/Input';
import ButtonComponent from '../Components/Button';
import LinkButton from '../Components/LinkButton';

import { IPagesProps } from '../Interface';

import { Container, Wrapper, Title, FormContainer, ButtonContainer } from '../styles/Pages/login';


export default function Login({ title }: IPagesProps) {
  const navigation = useNavigation();

  function handleNavigateToDashboard() {
    navigation.navigate('Dashboard');
  }

  function handleNavigateToSignUp() {
    navigation.navigate('SignUp');
  }

  return (
      <Container>
        <Wrapper>
          <Title> {title} </Title>

          <FormContainer>
            <InputComponent placeholder='E-mail' />
            <InputComponent placeholder='Senha' />

            <ButtonContainer>
              <ButtonComponent title='Sign in' handleNavigate={handleNavigateToDashboard}/>
            </ButtonContainer>
          </FormContainer> 
        </Wrapper>

        <LinkButton title='Create Account' handleNavigate={handleNavigateToSignUp} />
      </Container>
  );
}