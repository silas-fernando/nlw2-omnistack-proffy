import React from "react";
import { StatusBar } from "react-native";
import { AppLoading } from "expo"; // Mostra uma imagem para o usuário que indica que o app esta carregando.

import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from "@expo-google-fonts/archivo";

import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import AppStack from "./src/routes/AppStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    // Enquanto as fontes não forem carregadas mostra o AppLoading.
    return <AppLoading />;
  } else {
    return (
      //<></> = Fragment. É como se fosse uma div, mas ela não é passada para o html, é uma tag sem conteúdo html.
      <>
        <AppStack />
        <StatusBar barStyle="light-content" />
      </>
    );
  }
}
