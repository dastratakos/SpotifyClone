import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 7,
        marginHorizontal: 15,
        height: 50,
    },
    leftContainer: {
        flexDirection: 'row',
        width: '90%',
    },
    descriptionContainer: {
        justifyContent: 'center',
    },
    subDescriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 16,
    },
    artist: {
        color: '#b3b3b3',
        fontSize: 12,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 15,
    },
    button: {
        justifyContent: 'center',
    },
    smallIcon: {
        marginRight: 2,
    }
})

export default styles;