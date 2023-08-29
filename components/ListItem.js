import React from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {
    MaterialCommunityIcons
} from '@expo/vector-icons'
function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
    return (
        <Swipeable
            renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor='#f8f4f4'
                onPress={onPress}>

                <View style={styles.container}>
                    <Image style={styles.image} source={image} />
                    <View style={styles.titles}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subTitle}>{subTitle}</Text>
                    </View>
                    <MaterialCommunityIcons name='chevron-right'
                        size={20}
                        style={{ alignSelf: "center" }}
                    />
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

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },

    titles: {
        flex: 1,
    },
    subTitle: {
        color: 'grey',
    },
    title: {
        fontWeight: "bold",
    },
});

export default ListItem;
