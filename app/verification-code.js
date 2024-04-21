import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {useState} from 'react';
import { useFonts } from 'expo-font';
import {styles} from './styles/style';


const  VerificationCode= ()=>{
    const [fontsLoaded] = useFonts({
        'Comfortaa-Bold': require('../assets/fonts/Comfortaa-Bold.ttf'),
        'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
        'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
        'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
      });
      if (!fontsLoaded) {
        return null;
      }
return(
    <View style={styles.container}>
        
        <TouchableOpacity style={[styles.button, styles.blkButton, {marginVertical: 30}]}>
                <Text style={[styles.btntext, { color: '#fff', fontFamily: 'Inter-Medium'}]}>Reset Password</Text>
            </TouchableOpacity>

            <View>
                    <Text style={[styles.pbutton, {fontFamily: 'Inter-ExtraBold'}]}>ALREADY HAVE AN ACCOUNT?</Text>
                <TouchableOpacity style={[styles.button, styles.whtButton]}>
                    <Text style={[styles.btntext, {color: '#000', fontFamily: 'Inter-Medium'}]}>Login</Text>
                </TouchableOpacity>
            </View>
    </View>
)
}
export default VerificationCode;