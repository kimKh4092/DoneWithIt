import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

function Screen(props) {
    return (
        <SafeAreaView style={styles.screen}>{props.children}</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 20,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});

export default Screen;