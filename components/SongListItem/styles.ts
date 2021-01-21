import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 7,
        marginLeft: 15,
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 15,
    },
    title: {
        color: 'white',
        fontSize: 18,
    },
    artist: {
        color: 'lightgray',
    },
    image: {
        width: 50,
        height: 50,
    }
})

export default styles;