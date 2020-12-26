import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../contexts/auth';
import { IPagesProps } from '../Interface';

import InputComponent from '../Components/Input';
import ButtonComponent from '../Components/Button';
import Error from '../Components/Error';
import LinkButton from '../Components/LinkButton';

import { Container, Wrapper, Title, FormContainer, ButtonContainer } from '../styles/Pages/login';

export default function Login({ title }: IPagesProps) {
  const navigation = useNavigation();

  const { signIn } = useAuth();

  const [errorStatusTitle, setErrorStatusTitle] = useState('Erro');
  const [errorStatus, setErrorStatus] = useState('none');

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');


  async function onSubmit() {
    // if password and email fields are empty
    if (userPassword !== '' && userEmail !== '') {
      
      try {
        // searching inside the backend
        const response = await signIn(userEmail, userPassword);
        
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
            setErrorStatus('none');
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

  function handleNavigateToSignUp() {
    navigation.navigate('SignUp');
  }

  return (
      <Container>
        <Wrapper>
          <Title> {title} </Title>

          <FormContainer>
            <InputComponent placeholder='E-mail' secureTextEntry={false} value={userEmail} onChangeText={event => setUserEmail(event)}/>
            <InputComponent placeholder='Senha' secureTextEntry={true} value={userPassword} onChangeText={event => setUserPassword(event)}/>

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