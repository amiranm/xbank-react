import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import images from "./constants/images";

export default function Rootlayout (){
    const [fontsLoaded] = useFonts({
        'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
      });
      if(!fontsLoaded){
        return null;
      }
    return (

    <Stack
        screenOptions={{
            contentStyle: {
                backgroundColor: '#fff',
            },
           headerShown: false,
           headerTitleStyle: {
            color: '#232325',
            fontSize: 20,
            fontFamily: 'Inter-Medium'
           },
           headerStyle:{
            backgroundColor: '#fff'
           },
           headerTitleAlign: 'center',
           headerShadowVisible: false,
           headerBackImageSource: images.back,
           headerBackTitleStyle: {
            fontSize: 34
           },
           animation: 'slide_from_right'
        }}
    />
)
}