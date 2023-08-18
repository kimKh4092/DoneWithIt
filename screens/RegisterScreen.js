import React, { useState } from "react";
import {
    StyleSheet, Image, Platform, StatusBar,
    SafeAreaView
} from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

export default function RegisterScreen() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState()


    return (
        <SafeAreaView style={styles.screen}>
            <Image
                style={styles.image}
                source={require('../assets/logo-red.png')} />


            <AppTextInput
                placeholder='name'
                autoCapitalize='none'
                icon='account'
                autoCorrect={false}
                onChangeText={text => setName(text)} />

            <AppTextInput
                placeholder='email'
                autoCapitalize='none'
                icon='email'
                autoCorrect={false}
                keyboardType='email-address'
                textContentTypte='emailAddress'
                onChangeText={text => setEmail(text)} />

            <AppTextInput
                placeholder='password'
                autoCapitalize='none'
                icon='lock'
                autoCorrect={false}
                secureTextEntry={true}
                textContentTypte='password'
                onChangeText={password => setPassword(password)} />

            <AppButton
                style={{
                    borderRadius: 20
                }}
                color='#fc5c65'
                onPress={() => console.log(email, password, name)}>Register</AppButton>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    image: {

        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    },
})