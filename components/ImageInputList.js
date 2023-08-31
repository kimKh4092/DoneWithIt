import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInput from './ImageInput';
import Screen from './Screen';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
    MaterialCommunityIcons
} from '@expo/vector-icons'

function ImageInputList({ imageUris, selectImage, removeImage }) {

    return (
        <GestureHandlerRootView >
            <Screen>
                <View style={styles.container}>

                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='camera'
                            color='grey'
                            size={45}
                            onPress={selectImage}
                        />
                    </View>

                    {imageUris.map((uri) => (
                        <View key={uri} >
                            <ImageInput
                                imageUri={uri}
                                removeImage={() => removeImage(uri)}

                            />
                        </View>
                    ))}

                </View>
            </Screen>
        </GestureHandlerRootView>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: -30,
        marginVertical: 10
    },
    icon: {
        marginHorizontal: 1,
        width: 90,
        height: 90,
        borderRadius: 10,
        backgroundColor: '#f8f4f4',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ImageInputList;