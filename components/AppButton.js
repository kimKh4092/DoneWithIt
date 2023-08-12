import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function AppButton({ children, onPress, color }) {
    return <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, { backgroundColor: color }]}>
            <Text style={styles.text}>
                {children}
            </Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 25,
        margin: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})