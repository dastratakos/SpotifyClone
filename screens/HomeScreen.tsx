import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import AlbumCategory from '../components/AlbumCategory';
import AlbumCategoryHeader from '../components/AlbumCategoryHeader';
import albumCategories from '../data/albumCategories';
import headerAlbums from '../data/headerAlbums';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory
            title={item.title}
            size={item.size}
            borderRadius={item.borderRadius}
            albums={item.albums}
          />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <AlbumCategoryHeader
            title={headerAlbums.title}
            albums={headerAlbums.albums}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 53
  }
});
