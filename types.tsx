export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  "Your Library": undefined;
};

export type HomeScreenParamList = {
  HomeScreen: undefined;
  AlbumScreen: undefined;
};

export type SearchScreenParamList = {
  SearchScreen: undefined;
};

export type YourLibraryScreenParamList = {
  YourLibraryScreen: undefined;
};

export type Album = {
  id: string;
  name: string;
  artist: string;
  description: string;
  imageUri: string;
  artistImageUri: string;
  artistsHeadline: string;
}

export type Song = {
  id: string;
  imageUri: string;
  title: string;
  artist: string;
  explicit: boolean;
  downloaded: boolean;
  nowPlaying: boolean;
}