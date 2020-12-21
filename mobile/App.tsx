import React from 'react';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import Initial from './src';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light, 
    Roboto_400Regular, 
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <AppLoading/>
      </View>
    );
  }

  return (
    <Initial />
  );
}