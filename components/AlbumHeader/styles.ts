import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    image: {
        alignSelf: 'center',
        width: 300,
        height: 300,
        margin: 15,
    },
    name: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    artistContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    artistImage: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    artist: {
        color: 'lightgray',
        margin: 5,
        fontSize: 15,
    },
    description: {
        color: 'lightgray',
        fontSize: 15,
    },
    iconsContainer: {
        marginVertical: 10,
        width: '55%',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    playButton: {
        backgroundColor: '#1db954',
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    playButtonBackground: {
        backgroundColor: 'white',
        width: 39,
        height: 39,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shuffleButton: {
        position: 'relative',
        top: -17,
        right: -30,
        backgroundColor: 'white',
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default styles;