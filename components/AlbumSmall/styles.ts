import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 5,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#212121',
    },
    text: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        alignSelf: 'center',
        flex: 0.9,
        padding: 8,
    },
    image: {
        height: 55,
        width: 55,
    }
})

export default styles;