import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Test() {
  return (
    <ScrollView>
      <Text>Ini Text</Text>
      <View>
        <Text>Text lain</Text>
        <Image source={{ uri:'https:reactnative.dev/docs/assets/p_cat2.png', }} style={{ width: 200, height:200 }}/>
      </View>
      <TextInput style={{ height:40, borderColor: 'gray', borderWidth: 1 }} defaultValue="Input text disini"/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
