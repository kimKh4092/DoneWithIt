import React from "react";
import AppCard from "../components/AppCard";
import Screen from "../components/Screen";
import { View, FlatList, StyleSheet } from "react-native";

//for test
const listings = [{
    id: 1,
    title: 'Red jacket for sale!',
    subTitle: '$100',
    image: require('../assets/jacket.jpg')
},
{
    id: 2,
    title: 'Couch in great condition',
    subTitle: '$1000',
    image: require('../assets/couch.jpg')
}
]

export default function MainScreen({ navigation }) {

    return (
        <View style={
            styles.container
        }>
            <Screen>
                <FlatList
                    data={listings}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) =>
                        <AppCard
                            title={item.title}
                            subTitle={item.subTitle}
                            image={item.image}
                            onPress={() => {
                                navigation.navigate('ListingDetails', { item })
                            }} />} />
            </Screen>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f4f4',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})