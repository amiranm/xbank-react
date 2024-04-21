import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {styles} from '../styles/style';
import { router } from 'expo-router';
import Stack from 'expo-router/stack';

export default Header = ()=>{
return(
    <View>
        <View style={styles.row}>
            <View>
                <TouchableOpacity onPress={()=> router.back()}>
                    <Image source={require('../../assets/icons/back.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <Text></Text>
            </View>
        </View>
    </View>
)
}