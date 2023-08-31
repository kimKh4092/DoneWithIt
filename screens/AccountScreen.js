import React from "react";

import { View, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AccountOption from '../components/AccountOption'

export default function AccountScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <GestureHandlerRootView >
                <Screen>
                    <ListItem
                        title='Mosh Hamedani'
                        subTitle='programmingwithmosh@gmail.com'
                        image={require('../assets/mosh.jpg')}
                        onPress={() => console.log("selected")} />

                    <View style={{
                        marginTop: 30
                    }}>
                        <AccountOption
                            title='My Listings'
                            icon='format-list-bulleted'
                            color='#fc5c65'

                        />
                        <View style={styles.seperate}></View>
                        <AccountOption
                            title='My Messages'
                            icon='email'
                            color='#4ECDC4'
                            onPress={() => navigation.navigate('Messages')}
                        />

                    </View>

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