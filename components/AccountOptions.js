import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {
    MaterialCommunityIcons
} from '@expo/vector-icons'


export default function AccountOption({ title, icon, onPress, color }) {
    return (
        <Swipeable
        >
            <TouchableHighlight
                underlayColor='#f8f4f4'
                onPress={onPress}>

                <View style={styles.container}>
                    <View style={[styles.icon, { backgroundColor: color }]}>
                        <MaterialCommunityIcons name={icon}
                            size={20}
                            color='white'
                        />
                    </View>

                    <Text style={styles.title}>{title}</Text>

                </View>
            </TouchableHighlight>
        </Swipeable>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20,
        backgroundColor: 'white',
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        marginHorizontal: 10
    },
    icon: {

        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"

    }
});

