import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

import { useTheme } from '../context/theme';

import MoviesScreen from '../screen/App/Favorites/MoviesScreen';
import TvsScreen from '../screen/App/Favorites/TvsScreen';

const Tab = createBottomTabNavigator();

const infos = {
  Movies: {
    title: 'Filmes',
    icon: 'film'
  },
  Tvs: {
    title: 'Séries',
    icon: 'tv'
  }
}


function Favorites() {
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
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="Tvs" component={TvsScreen} />
    </Tab.Navigator>
  )
}

export default Favorites;
