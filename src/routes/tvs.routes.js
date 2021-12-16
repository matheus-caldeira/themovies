import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

import { useTheme } from '../context/theme';

import NowPlayingScreen from '../screen/App/Tvs/NowPlayingScreen';
import PopularScreen from '../screen/App/Tvs/PopularScreen';
import TopRatedScreen from '../screen/App/Tvs/TopRatedScreen';

const Tab = createBottomTabNavigator();

const infos = {
  NowPlaying: {
    title: 'Estão no ar',
    icon: 'tv'
  },
  Popular: {
    title: 'Populares',
    icon: 'users'
  },
  TopRated: {
    title: 'Mais vontados',
    icon: 'star'
  }
}

function Movies() {
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const info = infos[route.name];
        return {
          headerShown: false,
          tabBarLabel: info.title,
          tabBarActiveTintColor: theme.secondary,
          tabBarInactiveTintColor: theme.color,
          tabBarStyle: {
            backgroundColor: theme.background
          },
          tabBarIcon: ({ focused }) => {
            return <Icon
            name={info.icon}
            type='font-awesome'
            color={ focused ? theme.secondary : theme.color }
            />
          }
        }
      }}
    >
      <Tab.Screen name="NowPlaying" component={NowPlayingScreen} />
      <Tab.Screen name="Popular" component={PopularScreen} />
      <Tab.Screen name="TopRated" component={TopRatedScreen} />
    </Tab.Navigator>
  )
}

export default Movies;
