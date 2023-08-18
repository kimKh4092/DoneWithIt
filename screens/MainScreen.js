import React from "react";
import AppCard from "../components/AppCard";
import { View, FlatList, StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";

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

export default function MainScreen() {

    return (
        <SafeAreaView style={styles.screen}>
            <View style={{
                backgroundColor: '#f8f4f4',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <FlatList
                    data={listings}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) =>
                        <AppCard
                            title={item.title}
                            subTitle={item.subTitle}
                            image={item.image} />} />

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#f8f4f4',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0

    }
})