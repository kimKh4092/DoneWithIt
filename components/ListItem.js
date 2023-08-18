import React from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
    return (

        <Swipeable
            renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor='#f8f4f4'
                onPress={onPress}>
                <View style={styles.container}>
                    <Image style={styles.image} source={image} />
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subTitle}>{subTitle}</Text>
                    </View>
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
    subTitle: {
        color: 'grey',
    },
    title: {
        fontWeight: "500",
    },
});

export default ListItem;
