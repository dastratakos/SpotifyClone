import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
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
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default AlbumHeader;