import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Stack, router } from 'expo-router';
import { useFonts } from 'expo-font';


const  Profile= ()=>{
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
    <>
        <Stack.Screen
            options={{
                headerTitle: 'Profile',
                headerShown: true,
            }}
        />
        <ScrollView>

        </ScrollView>
    </>
)
}
export default Profile;