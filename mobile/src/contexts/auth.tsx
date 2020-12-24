import React, { createContext, useState } from 'react';
import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  signIn(): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [errorStatusTitle, setErrorStatusTitle] = useState('Erro');
  const [errorStatus, setErrorStatus] = useState('none');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signIn() {
    //if password and email fields are empty
    if (password !== '' && email !== '') {
      
      const data = { email, password };

      try {
        //searching inside the backend
        const response = await api.post('users/login', data);
        console.log(response.data);//.token
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
            // handleNavigateToDashboard();
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

    return (
      <AuthContext.Provider value={{ signed: false, signIn}}>
        {children}
      </AuthContext.Provider>
    );
}

export default AuthContext;