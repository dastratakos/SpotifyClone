import {
  Entypo,
  EvilIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AlbumScreen from '../screens/AlbumScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import YourLibraryScreen from '../screens/YourLibraryScreen';
import {
  BottomTabParamList,
  HomeScreenParamList,
  SearchScreenParamList,
  YourLibraryScreenParamList
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, style: { backgroundColor: "#212121" } }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name="home"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
            )
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons
              name="search"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
            )
        }}
      />
      <BottomTab.Screen
        name="Your Library"
        component={YourLibraryScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bookshelf"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
            )
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeScreenStack = createStackNavigator<HomeScreenParamList>();

function HomeScreenNavigator() {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />

      <HomeScreenStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: 'Album' }}
      />
    </HomeScreenStack.Navigator>
  );
}

const SearchScreenStack = createStackNavigator<SearchScreenParamList>();

function SearchScreenNavigator() {
  return (
    <SearchScreenStack.Navigator>
      <SearchScreenStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: 'Search' }}
      />
    </SearchScreenStack.Navigator>
  );
}

const YourLibraryScreenStack = createStackNavigator<YourLibraryScreenParamList>();

function YourLibraryScreenNavigator() {
  return (
    <YourLibraryScreenStack.Navigator>
      <YourLibraryScreenStack.Screen
        name="YourLibraryScreen"
        component={YourLibraryScreen}
        options={{ headerTitle: 'Your Library' }}
      />
    </YourLibraryScreenStack.Navigator>
  );
}