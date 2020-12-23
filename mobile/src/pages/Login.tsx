import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import InputComponent from '../Components/Input';
import ButtonComponent from '../Components/Button';
import Error from '../Components/Error';
import LinkButton from '../Components/LinkButton';

import { IPagesProps } from '../Interface';
import api from '../services/api';

import { Container, Wrapper, Title, FormContainer, ButtonContainer } from '../styles/Pages/login';


export default function Login({ title }: IPagesProps) {
  const navigation = useNavigation();

  const [errorStatusTitle, setErrorStatusTitle] = useState('Erro');
  const [errorStatus, setErrorStatus] = useState('none');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function onSubmit() {
    //if password and email fields are empty
    if (password !== '' && email !== '') {
      
      const data = { email, password };

      try {
        //searching inside the backend
        const response = await api.post('users/login', data);
        
        const { error } = response.data;

        switch (error) {
          //if email is wrong
          case 'Wrong email':
            setErrorStatus('flex');
            setErrorStatusTitle('Email incorreto.');
          break;

          //if password is wrong
          case 'Wrong password':
            setErrorStatus('flex');
            setErrorStatusTitle('Senha incorreta.');
          break;
      
          default:
            setErrorStatus('none')
            handleNavigateToDashboard();
        }

      } catch(err) {
        setErrorStatus('flex');
        setErrorStatusTitle('Erro ao logar.')
      }

    } else {

      setErrorStatus('flex');
      setErrorStatusTitle('Preencha todos os campos');
    }
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