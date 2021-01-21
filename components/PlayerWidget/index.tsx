import React from 'react';
import { Text, Image, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

const song = {
    id: '1',
    imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
    title: 'High on You',
    artist: 'Helen'
}

const PlayerWidget = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: song.imageUri }} />
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <MaterialCommunityIcons name="monitor-speaker" size={20} color={"white"} />
                    <FontAwesome name="play" size={20} color={"white"} />
                </View>
            </View>
        </View>
    )
}

export default PlayerWidget;