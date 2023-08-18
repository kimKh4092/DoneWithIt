import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";


export default function PickerItem({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text
                style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 15,
        fontSize: 15
    }
})