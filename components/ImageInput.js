import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function ImageInput({ imageUri, removeImage }) {
    return (<TouchableOpacity onPress={removeImage}>
        <View style={styles.container}>

            {imageUri && <Image
                style={styles.icon}
                source={{ uri: imageUri }} />}
        </View>
    </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    icon: {
        marginHorizontal: 1,
        width: 90,
        height: 90,
        borderRadius: 10,
        backgroundColor: '#f8f4f4',
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default ImageInput;