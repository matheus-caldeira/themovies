import React from "react";

import BaseForTabs from '../../../components/BaseForTabs'
import Movies from "../../../services/Movies";

function TopRatedScreen() {
  return (
    <BaseForTabs getDataApi={Movies.getTopRated} is_movie />
  )
}

export default TopRatedScreen;