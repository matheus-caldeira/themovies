import React from "react";

import BaseForTabs from '../../../components/BaseForTabs'
import Favorites from "../../../services/Favorites";

function MoviesScreen() {
  return (
    <BaseForTabs getDataApi={Favorites.getFavoritesMovies} is_movie />
  )
}

export default MoviesScreen;