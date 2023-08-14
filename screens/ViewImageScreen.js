import { Image, StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';
import {
    MaterialCommunityIcons
} from '@expo/vector-icons'


function ViewImageScreen() {

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.buttons}>
                <MaterialCommunityIcons name='close'
                    color='white'
                    size={35}
                    style={{
                        margin: 20
                    }} />
                <MaterialCommunityIcons name='trash-can-outline'
                    color='white'
                    size={35}
                    style={{
                        margin: 20
                    }} />
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