import React from "react";
import { ScrollView, StatusBar, Text, View, StyleSheet, Image } from "react-native";

// import { StatusBar, Text, TextInput, View, StyleSheet } from "react-native";

export default function TextBox() {
    let posts = []

    for (let i=1; i<=50; i++) {
        posts.push({
            title: `Title ${i}`,
            description: `ini adalah deskripsi dari textbox ${i}`
        })
    }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                {
                    posts.map((post,idx) => (
                        <View style={styles.box} key={idx}>
                            <Text style={styles.title}>{post.title}</Text>
                            <Text>{post.description}</Text>
                            <Image source={{ uri:'https:reactnative.dev/docs/assets/p_cat2.png', }} style={{ width:50, height:50 }}/>
                        </View>
                    ))
                }
            </ScrollView>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
    },
    scroll:{
        backgroundColor:'#C2B8a3',
        padding:10
    },
    box:{
        backgroundColor:'#fef7dc',
        marginBottom:10,
        padding:10,
        borderRadius:10
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    }
});
