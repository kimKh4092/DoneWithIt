import React, { useEffect, useState } from "react";
import AppCard from "../components/AppCard";
import Screen from "../components/Screen";
import { View, FlatList, StyleSheet, Button, Text, ActivityIndicator } from "react-native";

import listingApi from '../api/listings'
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";

export default function MainScreen({ navigation }) {

    const [listings, setlistings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadListings();
    }, [])

    const loadListings = async () => {
        setError(false);
        setLoading(true);
        const response = await listingApi.getListings();
        setLoading(false);

        if (!response.ok) {
            setError(true);
            return
        }
        setError(false);
        setlistings(response.data);
    }
    return (
        <View style={
            styles.container
        }>
            <Screen>
                {error && <>
                    <Text>Couldn't retrieve the listings</Text>
                    <AppButton
                        style={{
                            borderRadius: 20
                        }}
                        color='#fc5c65'
                        onPress={loadListings} >Retry</AppButton></>}

                {/* <ActivityIndicator animating={true} size={'large'} /> */}

                <AppActivityIndicator
                    visible={loading} />


                <FlatList
                    data={listings}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) =>
                        <AppCard
                            title={item.title}
                            subTitle={item.price}
                            image={item.images[0].url}
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