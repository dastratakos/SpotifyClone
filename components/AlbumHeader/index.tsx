import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { Album } from '../../types'

export type AlbumHeaderProps = {
    album: Album;
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    const { album } = props;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: album.imageUri }} />
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.artistContainer}>
                <Image style={styles.artistImage} source={{ uri: album.artistImageUri }} />
                <Text style={styles.artist}>By {album.artist}</Text>
            </View>
            <View style={styles.subContainer}>
                <View>
                    <Text style={styles.description}>{album.description}</Text>
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity onPress={() => console.warn('Like button pressed')}>
                            <AntDesign name="hearto" size={28} color={"#b3b3b3"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.warn('Download button pressed')}>
                            <MaterialCommunityIcons name="download-circle-outline" size={30} color={"#b3b3b3"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.warn('Details button pressed')}>
                            <MaterialCommunityIcons name="dots-horizontal" size={30} color={"#b3b3b3"} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => console.warn('Play button pressed')}>
                    <View style={styles.playButton}>
                        <View style={styles.playButtonBackground}>
                            <AntDesign name="play" size={40} color={"#1db954"} />
                        </View>
                    </View>
                    <View style={styles.shuffleButton}>
                        <Entypo name="shuffle" size={11} color={"#1db954"} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AlbumHeader;