import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { router, Stack } from 'expo-router';
import Header from './components/header';
import images from './constants/images';
import { styles } from './styles/style';
import { useFonts } from 'expo-font';


const Settings = ()=>{
    const [fontsLoaded] = useFonts({
        'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
      });
      if(!fontsLoaded){
        return null;
      }
return(
    <>
    <Stack.Screen options={{
        headerTitle: 'Settings',
        headerShown: true
    }}
    />
    <View style={styles.container}>
        {/* settings list  */}
        <TouchableOpacity style={{flex: 3}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginRight: 20, alignSelf: 'center'}}>
                        <Image source={images.settings.notif} />
                    </View>
                    <View style={[styles.row, {alignItems: 'center', flex: 2}]}>
                        <View>
                            <Text style={styles.normaltext}>Notifications</Text>
                        </View>
                        <View>
                            <Image source={images.settings.arrow}/>
                        </View>
                    </View>
                </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 3}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginRight: 20, alignSelf: 'center'}}>
                        <Image source={images.settings.notif} />
                    </View>
                    <View style={[styles.row, {alignItems: 'center', flex: 2}]}>
                        <View>
                            <Text style={styles.normaltext}>Notifications</Text>
                        </View>
                        <View>
                            <Image source={images.settings.arrow}/>
                        </View>
                    </View>
                </View>
        </TouchableOpacity>
    </View>
    </>
)
}
export default Settings;