import React, { useState } from "react";
import { FlatList, View, SafeAreaView, Platform, StyleSheet, StatusBar } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDelete from "../components/ListItemDelete";


const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]

export default function MessagesScreen() {

    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        //delete message from messages
        //call the server 
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
    }

    return (
        <SafeAreaView style={styles.screen}>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("selected")}
                        renderRightActions={() => <ListItemDelete
                            onPress={() => handleDelete(item)} />} />}
                ItemSeparatorComponent={() => <View
                    style={styles.seperate}>
                </View>}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 1,
                            title: 'T1',
                            description: 'D1',
                            image: require('../assets/mosh.jpg')
                        },
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/mosh.jpg')
                        },
                        {
                            id: 3,
                            title: 'T3',
                            description: 'D3',
                            image: require('../assets/mosh.jpg')
                        }

                    ])
                }}
            >

            </FlatList>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    screen: {

        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0

    },
    seperate: {
        width: "100%",
        height: 1,
        backgroundColor: '#f8f4f4'
    }
})