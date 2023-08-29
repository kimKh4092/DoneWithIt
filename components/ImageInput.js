import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';


function ImageInput({ imageUri }) {

    return (

        <View style={styles.container}>

            {imageUri && <Image
                style={styles.icon}
                source={{ uri: imageUri }} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: '#f8f4f4',
        justifyContent: 'center',
        alignItems: 'center'
    },


});

export default ImageInput;