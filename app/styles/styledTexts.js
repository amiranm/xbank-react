import React from 'react';
import { StyleSheet, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';

const  styledText= ({title, style})=>{
    let [fontsLoaded] = useFonts({
        Comfortaa_700Bold,
      });
    
      if (!fontsLoaded) {
        return null;
      }
    return <Text style={[styles.text, style]}>{title}</Text>
};
const tstyle = StyleSheet.create({
    text:{
        fontFamily: 'Comfortaa-Bold',
        fontSize: 40,
        marginBottom: 8,
    },
})
export default styledText;