import React from "react";

import { FlatList, View, SafeAreaView, Platform, StyleSheet, StatusBar, Text } from "react-native";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AccountOption from '../components/AccountOption'

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

export default function AccountScreen() {
    return (
        <View style={styles.container}>
            <GestureHandlerRootView >
                <Screen>
                    <ListItem
                        title='Mosh Hamedani'
                        subTitle='programmingwithmosh@gmail.com'
                        image={require('../assets/mosh.jpg')}
                        onPress={() => console.log("selected")} />


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
                </Screen>
            </GestureHandlerRootView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f4f4',
        flex: 1,
    },
    seperate: {
        width: "100%",
        height: 1,
        backgroundColor: '#f8f4f4'
    }
})