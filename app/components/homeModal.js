import React, {useState}  from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const smodal = StyleSheet.create({

})

export default  HomeModal= ()=>{
    const [isModalVisible, setIsModalVisible] = useState("false");
return(
    <View>
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
)
}