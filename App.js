import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Homepage } from "./src/screens"

export default function App() {

  const [fontsLoaded, setFontLoad] = useState(false)

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        'Mont': require('./assets/fonts/Montserrat-SemiBold.ttf')
      }).then(() => {
        setFontLoad(true);
      })
    })();
  }, [])


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <Homepage />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
