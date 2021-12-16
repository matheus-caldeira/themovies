import React, { useEffect, useRef, useState } from "react";
import { FlatList } from 'react-native';

import Tv from '../Tv'
import Movie from '../Movie'

import { Container } from "./styles";

function ListMedias({ nextPage, data, is_movie = false }) {
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => is_movie ? <Movie movie={item} /> : <Tv tv={item} />}
        numColumns={2}
        onEndReached={nextPage}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginVertical: 10,
        }}
      />
    </Container>
  )
}

export default ListMedias;