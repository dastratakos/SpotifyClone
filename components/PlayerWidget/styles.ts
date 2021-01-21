import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 42,
        backgroundColor: '#131313',
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconsContainer : {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around',
    },
    nameContainer: {
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 14,
        marginBottom: 4,
    },
    artist: {
        color: 'lightgray',
        fontSize: 12,
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 15,
    }
})

export default styles;