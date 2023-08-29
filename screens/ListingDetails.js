import { View, Text, StyleSheet, Image } from 'react-native'
import ListItem from '../components/ListItem'

export default function ListingDetails() {
    return (
        <View style={styles.card}>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={require('../assets/jacket.jpg')} />

            <Text style={styles.title}>Red jacket for sale</Text>
            <Text style={styles.price}>$100</Text>

            <View style={styles.seller}>
                <ListItem
                    image={require("../assets/mosh.jpg")}
                    title="Mosh Hamedani"
                    subTitle="5 Listings"
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f8f4f4',
        flex: 0.45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#fff',
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
    seller: {
        flexDirection: 'row',
        margin: 20
    },
})