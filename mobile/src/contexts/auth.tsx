import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  email: string | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<any>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  //get items storaged
  useEffect(() => {
    async function loadStoragedData() {
      const storagedEmail = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedEmail && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

        setEmail(storagedEmail);
        setLoading(false);
      }
    }

    loadStoragedData();
  }, [])

  async function signIn(email: string, password: string) {
    const data = { email, password };
    
    const response = await api.post('users/login', data);
    
    setEmail(response.data);

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    
    //storaging
    await AsyncStorage.setItem('@RNAuth:user', response.data.email);
    await AsyncStorage.setItem('@RNAuth:token', response.data.token);

    return response;
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setEmail(null);
    })
  }

 

    return (
      <AuthContext.Provider value={{ signed: !!email, email, loading, signIn, signOut }}>
        {children}
      </AuthContext.Provider>
    );
}

//my hook
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}