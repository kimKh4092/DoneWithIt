import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";


function WelcomeScreen() {
    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.container} >

            <View style={styles.title}>
                <Image
                    source={require('../assets/logo-red.png')}
                    style={styles.logo} />
                <Text>
                    sell what you dont need
                </Text>
            </View>

            <View style={styles.buttons}>

                <View style={{
                    backgroundColor: '#fc5c65',
                    height: 70
                }}></View>

                <View
                    style={{
                        backgroundColor: '#4ECDC4',
                        height: 70
                    }}></View>

            </View>
        </ImageBackground>

    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    buttons: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },

});