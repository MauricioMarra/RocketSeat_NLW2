import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './src/routes/AppStack';

// Aguarda o carregamento, por exemplo das fontes, mantendo a splash screen até terminar o carregamento.
import {AppLoading} from 'expo'; 

// A forma de se utilizar as fontes do google difere do projeto ReactJS. Usar:
// expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins
import {Archivo_400Regular, Archivo_700Bold, useFonts} from '@expo-google-fonts/archivo'
import {Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins'

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular, 
    Archivo_700Bold, 
    Poppins_400Regular, 
    Poppins_600SemiBold
  });

  if (!fontsLoaded){
    return <AppLoading />
  }
  else{
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}

