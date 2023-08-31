import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import ImageInputList from "../components/ImageInputList";

function ImageFormPicker() {

    const [imageUris, setUri] = useState([]);

    const selectImage = async () => {
        const uris = [...imageUris];
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.canceled) {
                uris.push(
                    result.assets[0].uri,
                );
                console.log(uris)
                setUri(uris);
            }

        } catch (error) {
            console.log('error', error)
        }
    }

    const removeImage = (uri) => {
        Alert.alert('Delete', 'Remove this image?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Canceled'),
                },
                {
                    text: 'OK', onPress: () => {
                        const uris = [...imageUris];
                        const newUris = uris.filter((imageUri) => imageUri !== uri);
                        setUri(newUris);
                    }
                },
            ])
    }

    return (
        <View style={styles.container}>
            <ImageInputList
                imageUris={imageUris}
                selectImage={selectImage}
                removeImage={removeImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    }
});

export default ImageFormPicker;