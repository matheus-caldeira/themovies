import React, { useEffect, useState } from 'react'

import DetailTv from '../../../components/DetailTv'
import DetailMovie from '../../../components/DetailMovie'

import { useTheme } from '../../../context/theme'

import Movies from '../../../services/Movies'
import Tvs from '../../../services/Tvs'

import { Container, ActivityIndicator } from './styles'

function DetailScreen({ route: { params }, navigation: { goBack }}) {
  const { theme } = useTheme();
  const [data, setData] = useState(null);
  const { id, type } = params;

  useEffect(() => {
    const load = async _ => {
      let getData = type === 'movie' ? Movies.getDetails : Tvs.getDetails;

      const data = await getData(id);

      setData(data);
    }
    setData(null);
    load();
  }, [id, type])

  if (!data)
    return (
      <Container>
        <ActivityIndicator size="large" color={theme.primary} />
      </Container>
    )

  return type === 'movie'
    ? <DetailMovie movie={data} goBack ={goBack} />
    : <DetailTv tv={data} goBack={goBack} />
}

export default DetailScreen;