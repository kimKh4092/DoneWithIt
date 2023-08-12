import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
    return (
        <ImageBackground
            blurRadius={7}
            source={require('../assets/background.jpg')}
            style={styles.container}
        >
            <View style={styles.title}>
                <Image
                    source={require('../assets/logo-red.png')}
                    style={styles.logo} />
                <Text style={styles.titleText}>
                    sell what you dont need
                </Text>
            </View>

            <View style={styles.buttons}>
                <AppButton
                    color='#fc5c65'
                    onPress={() => console.log("tapped")}>LOGIN</AppButton>
                <AppButton
                    color='#4ECDC4'>REGISTER</AppButton>

            </View>
        </ImageBackground >

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
        justifyContent: 'flex-start',
        marginTop: 80
    },
    logo: {
        width: 100,
        height: 100,

    },
    titleText: {
        fontSize: 20,
        margin: 10,
        fontWeight: "bold"

    },
    buttons: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginBottom: 20
    },

});