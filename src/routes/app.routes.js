import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../components/DrawerContent';
import ProfileScreen from '../screen/App/ProfileScreen';
import DetailScreen from '../screen/App/DetailScreen';

import Favorites from './favorites.routes';
import Movies from './movies.routes';
import Tvs from './tvs.routes';

import { useTheme } from '../context/theme';

const Drawer = createDrawerNavigator();

function Routes() {
  const { theme } = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerTintColor: theme.color,
        headerStyle: {
          backgroundColor: theme.background,
        },
      }}
    >
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Perfil"
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: "Favoritos"
        }}
      />
      <Drawer.Screen
        name="Movies"
        component={Movies}
        options={{
          title: "Filmes"
        }}
      />
      <Drawer.Screen
        name="Tvs"
        component={Tvs}
        options={{
          title: "Séries"
        }}
      />
      <Drawer.Screen
        name="Detail"
        component={DetailScreen}
        initialParams={{ id: 1, type: 'tv'}}
        options={{
          title: "Detalhes"
        }}
      />
    </Drawer.Navigator>
  );
}

export default Routes;