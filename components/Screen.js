import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

function Screen({ style, children }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 20,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});

export default Screen;