import React from 'react';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

import getImageUrl from '../../utils/getImageUrl';

import {
  Container,
  Image,
  Content,
  TextBold,
} from './styles'

function Movies({ movie }) {
  const { navigate } = useNavigation();

  const handle = () => {
    navigate('Detail', { id: movie.id, type: 'movie' })
  }

  return (
    <Container onPress={handle}>
      <Image
        source={{ uri: getImageUrl(movie.poster_path)}}
        PlaceholderContent={<Icon name="film" type='font-awesome' />}
      />
      <Content>
        <TextBold>{movie.title}</TextBold>
      </Content>
    </Container>
  )
};

export default Movies;