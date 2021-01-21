import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Song } from '../../types';

import styles from './styles';

export type SongListItemProps = {
    song: Song
}

const SongListItem = (props: SongListItemProps) => {
    const { song } = props;
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                {song.imageUri === '' ? null :
                    <Image style={styles.image} source={{ uri: song.imageUri }} />
                }
                <View style={styles.descriptionContainer}>
                    <Text style={styles.title} numberOfLines={1}>{song.title}</Text>
                    <View style={styles.subDescriptionContainer}>
                        {!song.downloaded ? null :
                            <MaterialCommunityIcons style={styles.smallIcon} name="download-circle" size={15} color={"#1db954"} />
                        }
                        {!song.explicit ? null :
                            <MaterialIcons style={styles.smallIcon} name="explicit" size={15} color={"#b3b3b3"} />
                        }
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => console.warn('Info button pressed')}>
                <MaterialCommunityIcons name="dots-horizontal" size={30} color={"#b3b3b3"} />
            </TouchableOpacity>
        </View>
    )
}

export default SongListItem;