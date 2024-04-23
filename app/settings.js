import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Switch } from 'react-native';
import { router, Stack } from 'expo-router';
import images from './constants/images';
import { styles } from './styles/style';
import { useFonts } from 'expo-font';

const setting = StyleSheet.create({
    sbtn: {
        padding: 11,
        borderBottomWidth: 1,
        borderColor: '#E9EAEF',
    }
})


const Settings = ()=>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
    <View style={{paddingHorizontal: 20}}>
        {/* settings list  */}
        <ScrollView style={{marginTop: 30}}>
            <TouchableOpacity style={setting.sbtn}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 20, marginLeft: 5, alignSelf: 'center'}}>
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
            <TouchableOpacity style={[styles.flex ,setting.sbtn]}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 18, alignSelf: 'center'}}>
                            <Image source={images.settings.acthistory} />
                        </View>
                        <View style={[styles.row, {alignItems: 'center', flex: 2}]}>
                            <View>
                                <Text style={styles.normaltext}>Activity History</Text>
                            </View>
                            <View>
                                <Image source={images.settings.arrow}/>
                            </View>
                        </View>
                    </View>
            </TouchableOpacity>
            <View style={[styles.flex ,setting.sbtn]}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 14, alignSelf: 'center'}}>
                            <Image source={images.settings.activateprofile} />
                        </View>
                        <View style={[styles.row, {alignItems: 'center', flex: 2}]}>
                            <View>
                                <Text style={styles.normaltext}>Activate Face ID</Text>
                            </View>
                            <View>
                                <Switch
                                    style={{}}
                                    trackColor={{false: '#767577', true: '#333333'}}
                                    thumbColor={'#fff'}
                                    ios_backgroundColor="#333333"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>
                    </View>
            </View>
            <TouchableOpacity style={[styles.flex ,setting.sbtn]}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 20, marginLeft: 5, alignSelf: 'center'}}>
                            <Image source={images.settings.notif} />
                        </View>
                        <View style={[styles.row, {alignItems: 'center', flex: 2}]}>
                            <View>
                                <Text style={styles.normaltext}>Account Profile</Text>
                            </View>
                            <View>
                                <Image source={images.settings.arrow}/>
                            </View>
                        </View>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.flex ,setting.sbtn]}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 18, alignSelf: 'center'}}>
                            <Image source={images.settings.acthistory} />
                        </View>
                        <View style={[styles.row, {alignItems: 'center', flex: 2}]}>
                            <View>
                                <Text style={styles.normaltext}>Privacy Policy</Text>
                            </View>
                            <View>
                                <Image source={images.settings.arrow}/>
                            </View>
                        </View>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.flex ,setting.sbtn]}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 18, alignSelf: 'center'}}>
                            <Image source={images.settings.acthistory} />
                        </View>
                        <View style={[styles.row, {alignItems: 'center', flex: 2}]}>
                            <View>
                                <Text style={styles.normaltext}>Terms & Conditions</Text>
                            </View>
                            <View>
                                <Image source={images.settings.arrow}/>
                            </View>
                        </View>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.flex ,setting.sbtn]}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 18, alignSelf: 'center'}}>
                            <Image source={images.settings.help} />
                        </View>
                        <View style={[styles.row, {alignItems: 'center', flex: 2}]}>
                            <View>
                                <Text style={styles.normaltext}>Help</Text>
                            </View>
                            <View>
                                <Image source={images.settings.arrow}/>
                            </View>
                        </View>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.flex ,setting.sbtn]}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 18, alignSelf: 'center'}}>
                            <Image source={images.settings.logout} />
                        </View>
                        <View style={[styles.row, {alignItems: 'center', flex: 2}]}>
                            <View>
                                <Text style={styles.normaltext}>Logout</Text>
                            </View>
                            <View>
                                <Image source={images.settings.arrow}/>
                            </View>
                        </View>
                    </View>
            </TouchableOpacity>
        </ScrollView>
    </View>
    </>
)
}
export default Settings;