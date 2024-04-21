import React from 'react';
import {styles} from './styles/style';
import { useFonts } from 'expo-font';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const  VerificationSuccess= ()=>{
    const router = useRouter();
    const [fontsLoaded] = useFonts({
        'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
        'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
      });
return(
    <View style={styles.container}>
        <View style={styles.success}>
            <Image width={130} source={require('../assets/images/success.png')}/>
        </View>
        <View style={styles.successtext}>
            <Text style={[styles.successtext, {fontFamily: 'Inter-SemiBold'}]}>Successfully reset</Text>
            <Text style={[styles.successtext, {fontFamily: 'Inter-SemiBold'}]}>your password!</Text>
        </View>

        <TouchableOpacity style={[styles.button, styles.blkButton, {marginVertical: 50}]} onPress={()=> router.push('login')}>
            <Text style={[styles.btntext, { color: '#fff', fontFamily: 'Inter-Medium'}]}>Login</Text>
        </TouchableOpacity>
    </View>
)
}
export default VerificationSuccess;