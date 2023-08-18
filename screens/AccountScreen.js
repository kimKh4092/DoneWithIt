import React from "react";

import { FlatList, View, SafeAreaView, Platform, StyleSheet, StatusBar, Text } from "react-native";
import ListItem from "../components/ListItem";
import {
    MaterialCommunityIcons
} from '@expo/vector-icons'

import AccountOption from '../components/AccountOptions'
const options = [
    {
        id: 1,
        title: 'My Listings',
        icon: 'format-list-bulleted',
        color: '#fc5c65'
    },
    {
        id: 2,
        title: 'My Messages',
        icon: 'email',
        color: '#4ECDC4'
    }
]

export default function MyAccountScreen() {
    return (
        <SafeAreaView style={styles.screen}>

            <ListItem
                title='Mosh Hamedani'
                subTitle='programmingwithmosh@gmail.com'
                image={require('../assets/mosh.jpg')} />

            {/* <AccountOption
                title='My Listings'
                icon='format-list-bulleted'
                color='#fc5c65' /> */}

            <FlatList
                style={{
                    marginTop: 30
                }}
                data={options}
                keyExtractor={option => option.id.toString()}
                renderItem={({ item }) =>
                    <AccountOption
                        title={item.title}
                        icon={item.icon}
                        color={item.color}
                        onPress={() => console.log("selected")}
                    />}
                ItemSeparatorComponent={() => <View
                    style={styles.seperate}>
                </View>} />


            <View style={{
                marginTop: 50
            }}>
                <AccountOption
                    title='Log Out'
                    icon='logout'
                    color='#ffe66d'
                    onPress={() => console.log("selected")}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {

        backgroundColor: '#f8f4f4',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0

    },
    seperate: {
        width: "100%",
        height: 1,
        backgroundColor: '#f8f4f4'
    }
})