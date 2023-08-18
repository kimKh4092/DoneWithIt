import React, { useState } from "react";
import {
    StyleSheet, Image, Platform, StatusBar,
    SafeAreaView
} from "react-native"
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";
import AppButton from "../components/AppButton";

const categories = [
    {
        label: 'Furniture',
        value: 1
    },
    {
        label: 'Clothing',
        value: 2
    },
    {
        label: 'Camera',
        value: 3
    }
]

export default function ListingEditeScreen() {
    const [category, setCategory] = useState();
    return (
        <SafeAreaView style={styles.screen}>
            <AppTextInput
                placeholder='title'
                autoCapitalize='none'
                autoCorrect={false}
            />
            <AppTextInput
                placeholder='price'
                autoCapitalize='none'
                autoCorrect={false}
            />

            <AppPicker
                selectedItem={category}
                onSelectItem={item => setCategory(item)}
                items={categories}
                placeholder='category' />

            <AppTextInput
                placeholder='description'
                autoCapitalize='none'
                autoCorrect={false}
            />

            <AppButton
                style={{
                    borderRadius: 20
                }}
                color='#fc5c65'
                onPress={() => console.log()}>Post</AppButton>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 20,
        padding: 10,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})