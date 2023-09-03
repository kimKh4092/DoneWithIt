import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function AppCard({ title, subTitle, image, onPress }) {
    return <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={{ uri: image }} />

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>${subTitle}</Text>
        </View>
    </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        width: 320,
        height: 270,
        marginTop: 40,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10
    },
    subTitle: {
        color: '#4ECDC4',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10
    },
    image: {
        alignSelf: 'center',
        width: 320,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        height: 200,
        marginTop: -30,
    }
})