import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { IPagesProps } from '../Interface';
import api from '../services/api';

import InputComponent from '../Components/Input';
import ButtonComponent from '../Components/Button';
import Error from '../Components/Error';
import LinkButton from '../Components/LinkButton';

import { Container, Wrapper, Title, FormContainer, ButtonContainer } from '../styles/Pages/signup';

export default function SignUp({ title }: IPagesProps) {
  const navigation = useNavigation();

  const [errorStatusTitle, setErrorStatusTitle] = useState('Erro');
  const [errorStatus, setErrorStatus] = useState('none');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  async function onSubmit() {
    //if password and email fields are empty
    if (password !== '' && email !== '') {
      //if password is equal to the confirmation password
      if (password === confirmedPassword) {
        const data = { email, password };
      
        await api.post('users', data);
          
        setErrorStatus('none');
        handleNavigateToLogin();
      
      } else {

        setErrorStatus('flex');
        setErrorStatusTitle('Senhas incorretas');
      }

    } else {

      setErrorStatus('flex');
      setErrorStatusTitle('Preencha todos os campos');
    }
    
  }

  function handleNavigateToLogin() {
    navigation.navigate('Login');
  }

  return (
      <Container>
        <Wrapper>
          <Title> {title} </Title>

          <FormContainer>
            <InputComponent placeholder='E-mail' secureTextEntry={false} value={email} onChangeText={event  => setEmail(event)} />
            <InputComponent placeholder='Senha' secureTextEntry={true} value={password} onChangeText={event => setPassword(event)} />
            <InputComponent placeholder='Confirmar senha' secureTextEntry={true} value={confirmedPassword} onChangeText={event => setConfirmedPassword(event)} />

            <ButtonContainer>
              <ButtonComponent title='Sign up' onSubmit={onSubmit}/>
            </ButtonContainer>

            <Error errorStatusTitle={errorStatusTitle} style={errorStatus}/>
          </FormContainer>

        </Wrapper>
        
        <LinkButton title='Sign in' handleNavigate={handleNavigateToLogin} />
      </Container>
  );
}