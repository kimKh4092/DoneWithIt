import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList, Text } from 'react-native';
import ImageInput from './ImageInput';

import {
    MaterialCommunityIcons
} from '@expo/vector-icons'

function ImageInputList({ imageUris, selectImage }) {

    return (
        <View style={styles.container}>

            <View style={styles.icon}>
                <MaterialCommunityIcons
                    name='camera'
                    color='grey'
                    size={40}
                    onPress={selectImage}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    icon: {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: '#f8f4f4',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ImageInputList;