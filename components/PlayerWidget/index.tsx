import React from 'react';
import { Text, Image, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

const song = {
    id: "1",
    imageUri: "https://i.scdn.co/image/ab67616d0000b2739478c87599550dd73bfa7e02",
    title: "Hollywood's Bleeding",
    artist: "Post Malone"
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