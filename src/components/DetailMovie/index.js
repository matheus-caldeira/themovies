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

function DetailMovie({ movie }) {
  const { theme } = useTheme();
  const [favorite, setFavorite] = useState(movie.account_states.favorite);

  const handleFavorite = useCallback(async () => {
    try {
      await Favorite.updateFavorite(movie.id, 'movie', !favorite)
      setFavorite(!favorite);
    } catch {
      Alert.alert(
        'Erro ao atualizar',
        'Um erro inesperado ocorreu, tente novamente',
      )
    }
  }, [favorite, movie.id])

  const handleMoreInfo = useCallback(() => {
    Linking.openURL(`https://www.themoviedb.org/movie/${movie.id}`);
  }, [movie.id])

  const dateStart = useMemo(() => {
    const date = new Date(movie.release_date);

    return date.getFullYear();
  }, [movie.release_date])

  const genres = useMemo(() => {
    return movie.genres.map(genre => genre.name).join(', ')
  }, [movie.genres])

  const rating = useMemo(() => {
    return `${(movie.vote_average * 10)}%`
  }, [movie.vote_average])

  return (
    <Container>
      <ScrollView>
        <Image
          source={{ uri: getImageUrl(movie.poster_path)}}
          PlaceholderContent={<Icon name="film" type='font-awesome' />}
        />
        <Title h3>
          {movie.title}
          <TitleDate> ({dateStart})</TitleDate>
        </Title>
        <Genres>{genres} - {rating}</Genres>
        <Divider orientation="horizontal" />

        <OverviewTitle h4>Sinopse</OverviewTitle>
        <OverviewText>{movie.overview}</OverviewText>
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

export default DetailMovie;