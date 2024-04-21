import React from "react";
import { Text, View, StyleSheet, TextInput, Image, Pressable, TouchableOpacity } from "react-native";
import Checkbox from 'expo-checkbox';
import { useFonts } from 'expo-font';
import {useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {styles} from './styles/style';
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import styledText from "./styles/styledTexts";


const Login = ()=>{
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setChecked] = useState(false);
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
                <Text style={[styles.text, styles.inter]}>Sign in to your account.</Text>
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
                <Text style={[styles.inputText, {fontFamily: 'Inter-ExtraBold', marginTop: 32}]}>PASSWORD</Text>
                <View style={styles.emailContainer}>
                <TextInput 
                style={{height: 54,
                        paddingHorizontal: 20,
                        borderColor: '#ECECEC',
                        borderWidth: 1,
                        borderRadius: 6,}}
                placeholder="password"
                placeholderTextColor={'#CACACA'}
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)}
                secureTextEntry={true}
                />
                <Pressable style={{position: "absolute",
                                    top: '38%',
                                    bottom: '50%',
                                    right: 20,
                                    }}>
                    <Image source={require('../assets/icons/eye.png')}/>
                </Pressable>
                </View>
            </View>
            <View style={[styles.row, {marginTop: 26}]}>
                <View style={styles.checkboxContainer}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#232325' : undefined}
                    />
                    <Text style={styles.checkboxText}>REMEMBER ME</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Link href={'/reset-password'} asChild>
                    <Pressable>
                        <Text style={{fontFamily: 'Inter-ExtraBold', fontSize: 12}}>FORGOT PASSWORD</Text>
                    </Pressable>
                </Link>
                </View>
            </View>

            <TouchableOpacity style={[styles.button, styles.blkButton, {marginVertical: 30}]}>
                <Text style={[styles.btntext, { color: '#fff', fontFamily: 'Inter-Medium'}]}>Login</Text>
            </TouchableOpacity>

            <View>
                    <Text style={[styles.pbutton, {fontFamily: 'Inter-ExtraBold'}]}>DON'T HAVE AN ACCOUNT?</Text>
                <TouchableOpacity style={[styles.button, styles.whtButton]}>
                    <Text style={[styles.btntext, {color: '#000', fontFamily: 'Inter-Medium'}]}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Login;