import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"

import {
    MaterialCommunityIcons
} from '@expo/vector-icons'

export default function ListItemDelete({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View
                style={styles.container}>
                <MaterialCommunityIcons
                    name="trash-can"
                    size={30}
                    color='white' />
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff5252',
        width: 70,
        justifyContent: "center",
        alignItems: 'center'
    }
}) 