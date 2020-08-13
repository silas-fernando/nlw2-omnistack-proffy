import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing';
import { AppLoading } from 'expo'; // Mostra uma imagem para o usuário que indica que o app esta carregando.

  import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) { // Enquanto as fontes não forem carregadas mostra o AppLoading.
    return <AppLoading />;
  } else {
    return (
      //<></> = Fragment. É como se fosse uma div, mas ela não é passada para o html, é uma tag sem conteúdo html.
      <> 
        <Landing />
        <StatusBar style="light" />
      </>
    );
  }
}