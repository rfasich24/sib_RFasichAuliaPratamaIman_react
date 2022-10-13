import React, { useState } from "react";
import { StatusBar, Text, TextInput, View, StyleSheet } from "react-native";

export default function TextState() {
    const [input, setInput] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Masukkan Text"
                onChangeText={text => setInput(text)}
                defaultValue={input}
            />
            <Text style={{ padding: 10, fontSize: 25 }}>
                Text Input : {input}
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
    },
    textInput: {
        height: 40,
    },
});
