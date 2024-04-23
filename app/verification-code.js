import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, SafeAreaView, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import {styles} from './styles/style';
import { router } from 'expo-router';

type OTPInputProps = {
    length: number, 
    value: Array<string>,
    disabled: Boolean,
    onChange(value: Array<string>): void
}
const  VerificationCode= ()=>{
    const [number, setInputValue] = React.useState('');
    const handleChange = (text) => {
        const numericValue = text.replace(/[^0-9]/g, "");
        setInputValue(numericValue);
    }
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
            <View style={styles.titleContainer}>
                <Text style={styles.title}>XBank</Text>
                <Text style={[styles.text, styles.inter]}>Verification Code</Text>
            </View>

        <View
            style={[styles.row, {
                alignItems: 'center',
                columnGap: 6,
                marginTop: 153
            }]}>
            <TextInput
            style={[styles.input, {
                width: '100%',
                height: 54,
                textAlign: 'center',
                fontSize: 30,
                fontFamily: 'Inter-Medium'
            }]} 
                placeholder='0'
                maxLength={1}
                placeholderTextColor={'#CACACA'}
                keyboardType= 'number-pad'
                value={number}
                onChangeText={handleChange}
            />
            <TextInput
            style={[styles.input, {
                width: '100%',
                height: 54,
                textAlign: 'center',
                fontSize: 30,
                fontFamily: 'Inter-Medium'
            }]} 
                placeholder='0'
                maxLength={1}
                placeholderTextColor={'#CACACA'}
                keyboardType= 'number-pad'
                value={number}
                onChangeText={handleChange}
            />
            <TextInput
            style={[styles.input, {
                width: '100%',
                height: 54,
                textAlign: 'center',
                fontSize: 30,
                fontFamily: 'Inter-Medium'
            }]} 
                placeholder='0'
                maxLength={1}
                placeholderTextColor={'#CACACA'}
                keyboardType= 'number-pad'
                value={number}
                onChangeText={handleChange}
            />
            <TextInput
            style={[styles.input, {
                width: '100%',
                height: 54,
                textAlign: 'center',
                fontSize: 30,
                fontFamily: 'Inter-Medium'
            }]} 
                placeholder='0'
                maxLength={1}
                placeholderTextColor={'#CACACA'}
                keyboardType= 'number-pad'
                value={number}
                onChangeText={handleChange}
            />
            <TextInput
            style={[styles.input, {
                width: '100%',
                height: 54,
                textAlign: 'center',
                fontSize: 30,
                fontFamily: 'Inter-Medium'
            }]} 
                placeholder='0'
                maxLength={1}
                placeholderTextColor={'#CACACA'}
                keyboardType= 'number-pad'
                value={number}
                onChangeText={handleChange}
            />
            <TextInput
            style={[styles.input, {
                width: '100%',
                height: 54,
                textAlign: 'center',
                fontSize: 30,
                fontFamily: 'Inter-Medium'
            }]} 
                placeholder='0'
                maxLength={1}
                placeholderTextColor={'#CACACA'}
                keyboardType= 'number-pad'
                value={number}
                onChangeText={handleChange}
            />
        </View>
        
        <TouchableOpacity style={[styles.button, styles.blkButton, {marginVertical: 30}]}>
                <Text style={[styles.btntext, { color: '#fff', fontFamily: 'Inter-Medium'}]}>Reset Password</Text>
            </TouchableOpacity>

            <View style={{}}>
                    <Text style={[styles.pbutton, {fontFamily: 'Inter-ExtraBold'}]}>ALREADY HAVE AN ACCOUNT?</Text>
                <TouchableOpacity onPress={()=> router.push('login')} style={[styles.button, styles.whtButton]}>
                    <Text style={[styles.btntext, {color: '#000', fontFamily: 'Inter-Medium'}]}>Login</Text>
                </TouchableOpacity>
            </View>
    </View>
)
}
export default VerificationCode;