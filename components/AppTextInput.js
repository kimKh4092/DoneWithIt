import React from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import {
    MaterialCommunityIcons
} from '@expo/vector-icons'

export default function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons
                style={styles.icon}
                name={icon}
                size={25}
                color='grey'
            />}
            <TextInput
                {...otherProps}
                style={styles.text} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f4f4',
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        margin: 10,
        marginVertical: 15,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        color: '#0c0c0c',
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
})