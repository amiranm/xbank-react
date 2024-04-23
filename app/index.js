import React, { useEffect, useRef, useState } from 'react';
import { Link, Stack } from 'expo-router';
import { Text, View, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, Image, Pressable, Modal, FlatList, ScrollView, Button, Animated } from 'react-native';
import {styles} from './styles/style';
import { useFonts } from 'expo-font';
import images from './constants/images';
import HomeModal from './components/homeModal';
import { router } from 'expo-router';

const s = StyleSheet.create({
  card:{
    position: 'relative',
    padding: 30,
    marginVertical: 30,
  },
  imagebg:{
    resizeMode: 'cover',
    maxHeight: 190,
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 0,
    marginHorizontal: 'auto',
    borderRadius: 11
  },
  cardtext:{
    color: '#fff',
    fontFamily: 'AlbertSans-Bold',
    fontSize: 14
  },
  cardnum:{
    fontFamily: 'AlbertSans-SemiBold',
    fontSize: 36,
    color: '#fff'
  },
  cardbtn:{
    backgroundColor: '#373737',
    borderRadius: 11,
    width: 'fit-content',
    alignSelf: 'flex-end',
    padding: 14
  },
  homebtn:{
    backgroundColor: '#F1F1F1',
    borderRadius: 16,
    padding: 22,
    marginHorizontal: 6,
  },
  hometxt:{
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    marginTop: 10,
    color: '#232325'
  },
  separator:{
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
  },
  row2:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  acttxt:{
    fontFamily: 'Inter-Bold',
    fontSize: 13,
    color: '#3B3B3B',
  },
  acticon:{
    borderRadius: 12,
    alignSelf: 'center'
  },
  acticonimg:{
    borderRadius: 12
  },
  lacttext:{
    color: '#303030',
    fontSize: 15,
    fontFamily: 'Inter-SemiBold'
  },
  lactmod:{
    color: '#888888',
    fontSize: 13,
    fontFamily: 'Inter-Regular'
  },
  lactamt:{
    fontSize: 14,
    fontFamily: 'Inter-Bold'
  },
});

const bankact = [
  {
    id: "0",
    image: images.activities.transacticon,
    name: "Bank Account",
    text: "Transfer to bank completed",
    amount: "- $ 34.00",
  },
  {
    id: "1",
    image: images.activities.usericon,
    name: "Jennifer Young",
    text: "Kids party",
    amount: "+ $ 154.00"
  },
  {
    id: "2",
    image: images.activities.transacticon,
    name: "Bank Account",
    text: "Transfer to bank completed",
    amount: "- $ 34.00",
  },
  {
    id: "3",
    image: images.activities.usericon,
    name: "Jennifer Young",
    text: "Kids party",
    amount: "+ $ 154.00"
  },
  {
    id: "4",
    image: images.activities.transacticon,
    name: "Bank Account",
    text: "Transfer to bank completed",
    amount: "- $ 34.00",
  },
  {
    id: "5",
    image: images.activities.usericon,
    name: "Jennifer Young",
    text: "Kids party",
    amount: "+ $ 154.00"
  },
];
export default function Page() {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const itemSeparator = () =>{
    return <View style={{height: 1, marginVertical: 8}} />;
  }
  const [isModalVisible, setIsModalVisible] = useState("false");
  const activities = bankact.map((item) => <Text>{item}</Text>)
  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../assets/fonts/Comfortaa-Bold.ttf'),
    'AlbertSans-Bold': require('../assets/fonts/AlbertSans-Bold.ttf'),
    'AlbertSans-SemiBold': require('../assets/fonts/AlbertSans-SemiBold.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
  });
  if(!fontsLoaded){
    return null;
  }
  return (
    <>
    {/* <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>       
        <View animHeaderValue={scrollOffsetY} />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </SafeAreaView>    */}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
    <Stack.Screen 
        options={{
          headerShown: true,
          headerTitle: 'XBank',
          headerTitleStyle: {
            fontFamily: 'Comfortaa-Bold',
            fontSize: 29
          },
          headerLeft: ()=>(
            <View style={{marginLeft: 20}}>
              <TouchableOpacity onPress={()=> router.push('profile')}>
                <Image source={require('../assets/icons/header-user.png')} />
              </TouchableOpacity>
            </View>
          ),

          headerRight: ()=>(
            <View style={{marginRight: 20}}>
              <TouchableOpacity onPress={()=> router.push('settings')}>
                <Image source={require('../assets/icons/settings.png')} />
              </TouchableOpacity>
            </View>
          ),

        }}
      />
        <View style={styles.container}>
          <View style={{}}>
            <ImageBackground source={require('../assets/images/card-bg.png')} style={s.card} imageStyle={s.imagebg}>
              <View style={{}}>
                  <TouchableOpacity style={s.cardbtn}>
                    <Image source={require('../assets/icons/cardbtn.png')}/>
                  </TouchableOpacity>
                  <Text style={s.cardtext}>MICHAEL COLLINS</Text>
                  <Text style={s.cardnum}>786349758</Text>
                  <View style={styles.row}>
                      <Text style={[s.cardnum, {fontSize: 10}]}>PLAYER CARD ID</Text>
                      <Text style={[s.cardnum, {fontSize: 10}]}>11 / 2025</Text>
                  </View>
              </View>
            </ImageBackground>
          </View>
        <View style={s.row2}>
          <View>
            <TouchableOpacity style={s.homebtn}>
              <Image source={require('../assets/icons/cashin.png')}/>
            </TouchableOpacity>
            <Text style={s.hometxt}>CASH IN</Text>
          </View>
          <View>
            <TouchableOpacity style={s.homebtn}>
              <Image source={require('../assets/icons/cashout.png')}/>
            </TouchableOpacity>
            <Text style={s.hometxt}>CASH OUT</Text>
          </View>
          <View>
            <TouchableOpacity style={[s.homebtn, {minHeight: 76}]}>
              <Image source={require('../assets/icons/scan.png')}/>
            </TouchableOpacity>
            <Text style={s.hometxt}>SCAN</Text>
          </View>
          <View>
            <TouchableOpacity style={[s.homebtn, {minHeight: 76, justifyContent: 'center'}]} onPress={()=> setIsModalVisible(true)}>
              <Image source={require('../assets/icons/more.png')}/>
            </TouchableOpacity>
            <Text style={s.hometxt}>MORE</Text>
          </View>
        </View>
        <View style={[s.separator, {marginVertical: 22}]}></View>
        <View style={[styles.row,{marginBottom: 20}]}>
            <Text style={s.acttxt}>LATEST ACTIVITIES</Text>
            <Pressable>
              <Text style={s.acttxt}>SEE ALL</Text>
            </Pressable>
        </View>
          <FlatList
            data={bankact}
            renderItem={({item, index})=> 
            <View style={[styles.flex]}>
              <View style={{flexDirection: 'row'}}>
                <View style={[s.acticon, {marginRight: 14}]}>
                  <Image style={s.acticon} source={item.image}/>
                </View>
                <View style={[s.separator, styles.row, {alignItems: 'center', paddingBottom: 6, flex: 2}]}>
                  <View>
                    <Text style={s.lacttext}>{item.name}</Text>
                    <Text style={s.lactmod}>{item.text}</Text>
                  </View>
                  <View>
                    <Text style={[s.lactamt, { color: index %2 === 0 ? '#F66165' : '#4F4F4F' }]}>{item.amount}</Text>
                  </View>
                </View>
              </View>
            </View>
            }
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={itemSeparator}
          />

          {/* <HomeModal/> */}
          {/* modal  */}
        <Modal visible={isModalVisible} onRequestClose={()=> setIsModalVisible(false)} animationType='slide' presentationStyle='formSheet' style={{alignSelf: 'flex-end'}}>
          <View style={[{height: 'auto', borderTopLeftRadius: 20, borderTopRightRadius: 20,}]}>
            <Text>Modal Content</Text>

            <TouchableOpacity onPress={()=> setIsModalVisible(false)}>
              <Text>close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        </View>
      </ScrollView>
    </>
  );
}