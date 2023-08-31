import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from "react-native";

import {
    MaterialCommunityIcons
} from '@expo/vector-icons'
import PickerItem from "./PickerItem";

export default function AppPicker({ icon, items, onSelectItem, selectedItem, placeholder }) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons
                        style={styles.icon}
                        name={icon}
                        size={25}
                        color='grey'
                    />}
                    <Text
                        style={selectedItem ? styles.text : styles.placeholder}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </Text>

                    <MaterialCommunityIcons
                        name='chevron-down'
                        size={25}
                        color='grey'
                    />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible}
                animationType="slide">
                <Button
                    title="close"
                    onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) => <PickerItem
                        label={item.label}
                        onPress={() => {
                            setModalVisible(false);
                            onSelectItem(item)
                        }} />} />
            </Modal>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f4f4',
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        margin: 10
    },
    icon: {
        marginRight: 10,
    },
    placeholder: {
        flex: 1,
        color: 'grey',
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    },
    text: {
        flex: 1,
        color: '#0c0c0c',
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
})