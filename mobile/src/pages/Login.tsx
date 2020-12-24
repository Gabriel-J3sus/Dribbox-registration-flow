import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import InputComponent from '../Components/Input';
import ButtonComponent from '../Components/Button';
import Error from '../Components/Error';
import LinkButton from '../Components/LinkButton';

import api from '../services/api';
import AuthContext from '../contexts/auth';
import { IPagesProps } from '../Interface';

import { Container, Wrapper, Title, FormContainer, ButtonContainer } from '../styles/Pages/login';


export default function Login({ title }: IPagesProps) {
  const navigation = useNavigation();

  const { signed, signIn } = useContext(AuthContext);
  // console.log(signed);

  const [errorStatusTitle, setErrorStatusTitle] = useState('Erro');
  const [errorStatus, setErrorStatus] = useState('none');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function onSubmit() {
    console.log('logar');
  }

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
            <InputComponent placeholder='E-mail' secureTextEntry={false} value={email} onChangeText={event => setEmail(event)}/>
            <InputComponent placeholder='Senha' secureTextEntry={true} value={password} onChangeText={event => setPassword(event)}/>

            <ButtonContainer>
              <ButtonComponent title='Sign in' onSubmit={onSubmit} />
            </ButtonContainer>

            <Error errorStatusTitle={errorStatusTitle} style={errorStatus}/>
          </FormContainer> 
        </Wrapper>

        <LinkButton title='Create Account' handleNavigate={handleNavigateToSignUp} />
      </Container>
  );
}