import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { Album } from '../../types'
import AlbumComponentSmall from '../AlbumSmall';

export type AlbumCategoryHeaderProps = {
    title: string,
    albums: [Album]
}

const AlbumCategoryHeader = (props: AlbumCategoryHeaderProps) => (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.subContainer}>
            <FlatList
                data={props.albums}
                renderItem={({ item }) => (<AlbumComponentSmall album={item} />)}
                keyExtractor={( item ) => item.id}
                numColumns={2}
            />
        </View>
    </View>
)

export default AlbumCategoryHeader;