import React from 'react';
import LottieView from 'lottie-react-native'
import { View, StyleSheet } from 'react-native';


function AppActivityIndicator({ visible = true }) {
    if (!visible) return null;

    return (<View style={styles.container}>
        <LottieView
            autoSize
            autoPlay
            loop
            source={require('../assets/animations/loader.json')}

        />
    </View>
    );
}

const styles = StyleSheet.create({

})

export default AppActivityIndicator;