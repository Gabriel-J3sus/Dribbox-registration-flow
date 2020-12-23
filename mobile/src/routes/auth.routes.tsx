import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, }}>
      <Screen 
        name='Landing'
        children={() => <Landing title='Dirbbox'/>}
      />

      <Screen
        name="Login"
        children={() => <Login title='Faça login' />}
      />

      <Screen 
        name="SignUp"
        children={() => <SignUp title='Cadastrar' />}
      />
    </Navigator>
  );
}