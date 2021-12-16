import React, { useCallback, useState, useMemo } from 'react';
import { Icon, Divider, Button } from 'react-native-elements'
import { Alert } from 'react-native';
import * as Linking from 'expo-linking'

import { useTheme } from '../../context/theme';
import Favorite from '../../services/Favorites'
import getImageUrl from '../../utils/getImageUrl'

import {
  Container,
  ScrollView,
  Image,
  Title,
  TitleDate,
  Genres,
  OverviewTitle,
  OverviewText,
  ButtonFixed
} from './styles'

function DetailTv({ tv }) {
  const { theme } = useTheme();
  const [favorite, setFavorite] = useState(tv.account_states.favorite);

  const handleFavorite = useCallback(async () => {
    try {
      await Favorite.updateFavorite(tv.id, 'tv', !favorite)
      setFavorite(!favorite);
    } catch {
      Alert.alert(
        'Erro ao atualizar',
        'Um erro inesperado ocorreu, tente novamente',
      )
    }
  }, [favorite, tv.id])

  const handleMoreInfo = useCallback(() => {
    Linking.openURL(`https://www.themoviedb.org/tv/${tv.id}`);
  }, [tv.id])

  const dateStart = useMemo(() => {
    const date = new Date(tv.first_air_date);

    return date.getFullYear();
  }, [tv.first_air_date])

  const genres = useMemo(() => {
    return tv.genres.map(genre => genre.name).join(', ')
  }, [tv.genres])

  const rating = useMemo(() => {
    return `${(tv.vote_average * 10)}%`
  }, [tv.vote_average])

  return (
    <Container>
      <ScrollView>
        <Image
          source={{ uri: getImageUrl(tv.poster_path)}}
          PlaceholderContent={<Icon name="film" type='font-awesome' />}
        />
        <Title h3>
          {tv.name}
          <TitleDate> ({dateStart})</TitleDate>
        </Title>
        <Genres>{genres} - {rating}</Genres>
        <Divider orientation="horizontal" />

        <OverviewTitle h4>Sinopse</OverviewTitle>
        <OverviewText>{tv.overview}</OverviewText>
        <Button
          title="Ver mais informações"
          type="outline"
          buttonStyle={{
            backgroundColor: theme.background
          }}
          onPress={handleMoreInfo}
        />
      </ScrollView>
      <ButtonFixed onPress={handleFavorite}>
        <Icon
          name={favorite ? 'heart-off' : 'heart'}
          type="material-community"
          color={theme.secondary}
        />
      </ButtonFixed>
    </Container>
  );
};

export default DetailTv;