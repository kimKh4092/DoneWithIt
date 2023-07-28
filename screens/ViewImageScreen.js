

import { Image, StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';

function ViewImageScreen() {

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.buttons}>
                <View style={{
                    backgroundColor: '#fc5c65',
                    height: 50,
                    width: 50,
                    left: 20,

                }}></View>
                <View style={{
                    backgroundColor: '#4ECDC4',
                    height: 50,
                    width: 50,
                    right: 20,
                }}></View>

            </View>

            <Image
                resizeMode='contain'
                style={{
                    width: '100%',
                    height: '70%',
                    bottom: 80

                }}
                source={require('../assets/chair.jpg')} />

        </SafeAreaView>

    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "black",
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: StatusBar.currentHeight
    }

});