import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import {styles} from './styles/style';
import { useFonts } from 'expo-font';
import {useState} from 'react';
import { useRouter } from 'expo-router';

const  ResetPassword= ()=>{
    const router = useRouter();
    const [text, setText] = useState('');
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
                <Text style={[styles.text, styles.inter]}>Reset Password</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={[styles.inputText, {fontFamily: 'Inter-ExtraBold'}]}>EMAIL</Text>
                <View style={styles.emailContainer}>
                <TextInput 
                style={{height: 54,
                        paddingHorizontal: 20,
                        borderColor: '#ECECEC',
                        borderWidth: 1,
                        borderRadius: 6,}}
                placeholder="email address"
                placeholderTextColor={'#CACACA'}
                value={text}
                onChangeText={(newText) => setText(newText)}
                />
                <Image style={{position: "absolute",
                                top: '38%',
                                bottom: '50%',
                                right: 20,
                                }}
                        source={require('../assets/icons/envelope.png')}/>
                </View>
            </View>
            <TouchableOpacity style={[styles.button, styles.blkButton, {marginVertical: 30}]}>
                <Text style={[styles.btntext, { color: '#fff', fontFamily: 'Inter-Medium'}]}>Reset Password</Text>
            </TouchableOpacity>

            <View>
                    <Text style={[styles.pbutton, {fontFamily: 'Inter-ExtraBold'}]}>ALREADY HAVE AN ACCOUNT?</Text>
                <TouchableOpacity style={[styles.button, styles.whtButton]}
                onPress={()=> router.push('login')}>
                    <Text style={[styles.btntext, {color: '#000', fontFamily: 'Inter-Medium'}]}>Login</Text>
                </TouchableOpacity>
            </View>
    </View>
)
}
export default ResetPassword;