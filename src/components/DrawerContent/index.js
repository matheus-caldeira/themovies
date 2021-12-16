import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Icon, Divider, Avatar, Button } from 'react-native-elements';

import { useAuth } from '../../context/auth'
import { useTheme } from '../../context/theme'

import getImageUrl from '../../utils/getImageUrl';

import {
  Container,
  ContainerAvatar,
  ContainerTextName,
  Text,
  ContainerItems
} from './styles';

function DrawerContent(props) {
  const { user, singOut} = useAuth();
  const { theme } = useTheme();

  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <ContainerAvatar>
          <Avatar
            rounded
            size="medium"
            title={user.username[0]}
            source={{ uri: getImageUrl(user.avatar_url) }}
          />
          <ContainerTextName>
            <Text h4>{user.name}</Text>
            <Text>@{user.username}</Text>
          </ContainerTextName>
        </ContainerAvatar>
        <ContainerItems>
          <DrawerItem 
            label="Perfil"
            onPress={() => {props.navigation.navigate('Profile')}}
            icon={({color, size}) => (
              <Icon 
                name="user"
                type='feather'
                color={color}
                size={size}
              />
            )}
            inactiveTintColor={theme.color}
          />
          <DrawerItem 
            label="Favoritos"
            onPress={() => {props.navigation.navigate('Favorites')}}
            icon={({color, size}) => (
              <Icon 
                name="heart"
                type='feather'
                color={color}
                size={size}
              />
            )}
            inactiveTintColor={theme.color}
          />
          <DrawerItem 
            label="Filmes"
            onPress={() => {props.navigation.navigate('Movies')}}
            icon={({color, size}) => (
              <Icon 
                name="film"
                type='font-awesome'
                color={color}
                size={size}
              />
            )}
            inactiveTintColor={theme.color}
          />
          <DrawerItem 
            label="Séries"
            onPress={() => {props.navigation.navigate('Tvs')}}
            icon={({color, size}) => (
              <Icon 
                name="tv"
                type='font-awesome'
                color={color}
                size={size}
              />
            )}
            inactiveTintColor={theme.color}
          />
        </ContainerItems>
      </DrawerContentScrollView>
      <Divider orientation="horizontal" />
      <Button
        icon={
          <Icon
            name="log-out"
            type='feather'
            size={15}
            color={theme.color}
          />
        }
        type="outline"
        title="Sair"
        onPress={singOut}
        buttonStyle={{
          borderColor: theme.color,
          color: theme.color
        }}
        titleStyle={{
          color: theme.color,
          marginLeft: 15,
        }}
      />
    </Container>
  );
}

export default DrawerContent;