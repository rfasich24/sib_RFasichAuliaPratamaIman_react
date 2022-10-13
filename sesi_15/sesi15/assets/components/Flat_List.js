import React from "react";
import { ScrollView, StatusBar, Text, View, StyleSheet, Image, FlatList } from "react-native";

// import { StatusBar, Text, TextInput, View, StyleSheet } from "react-native";

export default function Flat_List() {
    let posts = []

    for (let i=1; i<=50; i++) {
        posts.push({
            title: `Title ${i}`
        })
    }
    return (
        <View style={styles.container}>
            <FlatList data={posts} renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
    },
    item:{
        padding:10,
        fontSize:20,
        height:50
    }
});
