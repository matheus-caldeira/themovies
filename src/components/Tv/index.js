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

function Tv({ tv }) {
  const { navigate } = useNavigation();

  const handle = () => {
    navigate('Detail', { id: tv.id, type: 'tv' })
  }

  return (
    <Container onPress={handle}>
      <Image
        source={{ uri: getImageUrl(tv.poster_path)}}
        PlaceholderContent={<Icon name="film" type='font-awesome' />}
      />
      <Content>
        <TextBold>{tv.name}</TextBold>
      </Content>
    </Container>
  )
};

export default Tv;