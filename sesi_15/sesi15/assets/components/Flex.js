import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Flex() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
      <StatusBar style="auto"/>
    </View>
    // <ScrollView>
    //   <Text>Ini Text</Text>
    //   <View>
    //     <Text>Text lain</Text>
    //     <Image source={{ uri:'https:reactnative.dev/docs/assets/p_cat2.png', }} style={{ width: 200, height:200 }}/>
    //   </View>
    //   <TextInput style={{ height:40, borderColor: 'gray', borderWidth: 1 }} defaultValue="Input text disini"/>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop:25
  },
  box1: {
    flex:1,
    backgroundColor:'red'
},
  box2: {
    flex:2,
    backgroundColor:'yellow'
},
  box3: {
    flex:3,
    backgroundColor:'green'
},
});
