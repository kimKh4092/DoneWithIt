import { View, Text, StyleSheet, Image } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function ListingDetails({ publisher }) {
    return (
        <View style={styles.container}>
            <GestureHandlerRootView>

                <View style={styles.card}>
                    <Image
                        resizeMode='contain'
                        style={styles.image}
                        source={require('../assets/jacket.jpg')} />

                    <Text style={styles.title}>Red jacket for sale</Text>
                    <Text style={styles.price}>$100</Text>

                    <View style={styles.publisher}>
                        <Image style={styles.profile} source={require('../assets/mosh.jpg')} />
                        <View >
                            <Text style={styles.name}>Mosh Hamedani</Text>
                            <Text style={styles.subTitle}>5 Listings</Text>
                        </View>
                    </View>
                </View>

            </GestureHandlerRootView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    card: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 20,
        marginBottom: 5
    },
    price: {
        color: '#4ECDC4',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 20,
        marginTop: 5,
    },
    image: {
        alignSelf: 'center',
        width: '100%',
        height: 250,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    publisher: {
        flexDirection: "row",
        padding: 20,
        backgroundColor: 'white',
    },
    profile: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    subTitle: {
        color: 'grey',
    },
    name: {
        fontWeight: "bold",
    },

})